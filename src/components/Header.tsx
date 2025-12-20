import { useState } from "react";
import { Search, User, ShoppingBag, ChevronDown, Menu, X } from "lucide-react";
import styles from "./Header.module.scss";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (item: string) => {
    setOpenDropdown(openDropdown === item ? null : item);
  };

  const navigationItems = [

    {
      label: "homes",
      hasDropdown: false,
      dropdownItems: []
    },
    {
      label: "pets",
      hasDropdown: false,
      dropdownItems: []
    },
    {
      label: "campuses",
      hasDropdown: false,
      dropdownItems: []
    },
    {
      label: "places",
      hasDropdown: false,
      dropdownItems: []
    },

    {
      label: "about",
      hasDropdown: false,
      dropdownItems: []
    },
  ];

  return (
    <header className={styles.header}>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={styles.topBarContent}>
          <button className={styles.iconButton} aria-label="Search">
            <Search className={styles.icon} />
          </button>

          <div className={styles.logo}>
            <span className={styles.logoScript}>el</span>
            <span className={styles.logoText}>EMILY LEX STUDIO</span>
          </div>

          <div className={styles.topBarRight}>
            <button className={styles.iconButton} aria-label="Account">
              <User className={styles.icon} />
            </button>
            <button className={styles.iconButton} aria-label="Shopping Cart">
              <ShoppingBag className={styles.icon} />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className={styles.nav}>
        <div className={styles.navContent}>
          <button
            className={styles.mobileMenuButton}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className={styles.icon} /> : <Menu className={styles.icon} />}
          </button>

          <ul className={`${styles.navList} ${mobileMenuOpen ? styles.navListOpen : ""}`}>
            {navigationItems.map((item, index) => (
              <li key={index} className={styles.navItem}>
                {item.hasDropdown ? (
                  <div
                    className={`${styles.dropdownContainer} ${
                      openDropdown === item.label ? styles.dropdownOpen : ""
                    }`}
                  >
                    <button
                      className={styles.navLink}
                      onClick={() => toggleDropdown(item.label)}
                      aria-expanded={openDropdown === item.label}
                    >
                      {item.label}
                      <ChevronDown
                        className={`${styles.dropdownIcon} ${
                          openDropdown === item.label ? styles.dropdownIconOpen : ""
                        }`}
                      />
                    </button>
                    <ul className={styles.dropdown}>
                      {item.dropdownItems?.map((dropdownItem, idx) => (
                        <li key={idx}>
                          <a
                            href="#"
                            className={styles.dropdownLink}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {dropdownItem}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <a
                    href="#"
                    className={styles.navLink}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

