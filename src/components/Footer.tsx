import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3 className={styles.title}>Emily Williams</h3>
            <p className={styles.text}>
              Watercolor artist creating unique original paintings that inspire and captivate.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink}>
                <Instagram className={styles.icon} />
              </a>
              <a href="#" className={styles.socialLink}>
                <Facebook className={styles.icon} />
              </a>
              <a href="#" className={styles.socialLink}>
                <Twitter className={styles.icon} />
              </a>
              <a href="#" className={styles.socialLink}>
                <Mail className={styles.icon} />
              </a>
            </div>
          </div>

          <div className={styles.section}>
            <h4 className={styles.subtitle}>Quick Links</h4>
            <ul className={styles.links}>
              <li>
                <a href="#about" className={styles.link}>About</a>
              </li>
              <li>
                <a href="#gallery" className={styles.link}>Gallery</a>
              </li>
              <li>
                <a href="#order" className={styles.link}>Commission</a>
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h4 className={styles.subtitle}>Newsletter</h4>
            <p className={styles.text}>
              Stay updated with new works and exhibitions.
            </p>
            <div className={styles.newsletter}>
              <input
                type="email"
                placeholder="Your email"
                className={styles.newsletterInput}
              />
              <button className={styles.newsletterButton}>
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>&copy; {new Date().getFullYear()} Emily Williams. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
