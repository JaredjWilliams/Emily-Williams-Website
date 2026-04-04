import { useState, useRef, useLayoutEffect, useCallback } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { scrollToAnchorId } from "../utils/scrollToAnchor";
import styles from "./Header.module.scss";

type ShopCategoryItem = { label: string; category: string };

const shopCategoryItems: ShopCategoryItem[] = [
  { label: "Homes", category: "home" },
  { label: "Pets", category: "pets" },
  { label: "Campuses", category: "campuses" },
];

const MOBILE_NAV_MAX = 768;

function setStickyCtaTopPx(headerEl: HTMLElement, navListEl: HTMLUListElement | null, mobileMenuOpen: boolean) {
  let bottom = headerEl.getBoundingClientRect().bottom;
  if (mobileMenuOpen && typeof window !== "undefined" && window.innerWidth <= MOBILE_NAV_MAX && navListEl) {
    const navRect = navListEl.getBoundingClientRect();
    if (navRect.height > 0) {
      bottom = Math.max(bottom, navRect.bottom);
    }
  }
  const gapPx = 8;
  document.documentElement.style.setProperty("--sticky-cta-top", `${Math.round(bottom + gapPx)}px`);
  window.dispatchEvent(new Event("site:sticky-layout"));
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const navListRef = useRef<HTMLUListElement>(null);

  const publishStickyOffset = useCallback(() => {
    const header = headerRef.current;
    if (!header) return;
    setStickyCtaTopPx(header, navListRef.current, mobileMenuOpen);
  }, [mobileMenuOpen]);

  useLayoutEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    publishStickyOffset();
    const onScrollOrResize = () => publishStickyOffset();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    const ro = new ResizeObserver(onScrollOrResize);
    ro.observe(header);
    const nav = navListRef.current;
    if (nav) ro.observe(nav);
    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      ro.disconnect();
    };
  }, [publishStickyOffset]);

  useLayoutEffect(() => {
    if (!mobileMenuOpen) return;
    let raf1 = 0;
    let raf2 = 0;
    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => publishStickyOffset());
    });
    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, [mobileMenuOpen, publishStickyOffset]);

  const closeMobile = () => setMobileMenuOpen(false);

  const scrollToId = (id: string) => {
    closeMobile();
    scrollToAnchorId(id, { behavior: "smooth", deferMs: 60 });
  };

  const goToGalleryCategory = (category: string) => {
    window.dispatchEvent(new CustomEvent("gallery:setCategory", { detail: { category } }));
    scrollToId("gallery");
    setOpenDropdown(null);
  };

  const toggleDropdown = (key: string) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  return (
    <header ref={headerRef} className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.topBarContent}>
          <button
            type="button"
            className={styles.logoButton}
            onClick={() => {
              closeMobile();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            aria-label="Emily Lex Studio — back to top"
          >
            <span className={styles.logo}>
              <span className={styles.logoScript}>el</span>
              <span className={styles.logoText}>EMILY LEX STUDIO</span>
            </span>
          </button>

          <button
            className={styles.mobileMenuButton}
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className={styles.icon} /> : <Menu className={styles.icon} />}
          </button>
        </div>
      </div>

      <nav className={styles.nav} aria-label="Primary">
        <div className={styles.navContent}>
          <ul
            ref={navListRef}
            className={`${styles.navList} ${mobileMenuOpen ? styles.navListOpen : ""}`}
          >
            <li className={styles.navItem}>
              <a
                href="#gallery"
                className={styles.navLink}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId("gallery");
                }}
              >
                Gallery
              </a>
            </li>

            <li className={styles.navItem}>
              <div
                className={`${styles.dropdownContainer} ${
                  openDropdown === "shop" ? styles.dropdownOpen : ""
                }`}
              >
                <button
                  type="button"
                  className={styles.navLink}
                  onClick={() => toggleDropdown("shop")}
                  aria-expanded={openDropdown === "shop"}
                  aria-haspopup="true"
                >
                  Shop
                  <ChevronDown
                    className={`${styles.dropdownIcon} ${
                      openDropdown === "shop" ? styles.dropdownIconOpen : ""
                    }`}
                  />
                </button>
                <ul className={styles.dropdown} role="menu">
                  {shopCategoryItems.map((item) => (
                    <li key={item.category} role="none">
                      <a
                        href="#gallery"
                        role="menuitem"
                        className={styles.dropdownLink}
                        onClick={(e) => {
                          e.preventDefault();
                          goToGalleryCategory(item.category);
                        }}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            <li className={styles.navItem}>
              <a
                href="#about"
                className={styles.navLink}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId("about");
                }}
              >
                About
              </a>
            </li>

            <li className={styles.navItem}>
              <a
                href="#how-it-works"
                className={styles.navLink}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId("how-it-works");
                }}
              >
                How it works
              </a>
            </li>

            <li className={styles.navItem}>
              <a
                href="#order"
                className={styles.navLink}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId("order");
                }}
              >
                Commission
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
