import Link from "next/link";
import { siteConfig } from "@/config/site";
import styles from "./Navbar.module.css";

export function Navbar() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          {siteConfig.name}
        </Link>
        <nav className={styles.navLinks}>
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href} className={styles.link}>
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
