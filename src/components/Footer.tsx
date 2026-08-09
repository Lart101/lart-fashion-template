import { siteConfig } from "@/config/site";
import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.brand}>
          <h2 className={styles.logo}>{siteConfig.name}</h2>
          <p className={styles.description}>{siteConfig.description}</p>
        </div>
        <div className={styles.links}>
          <a href={siteConfig.links.instagram} target="_blank" rel="noreferrer">Instagram</a>
          <a href={siteConfig.links.twitter} target="_blank" rel="noreferrer">Twitter</a>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; {year} {siteConfig.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
