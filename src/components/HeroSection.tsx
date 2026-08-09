import styles from "./HeroSection.module.css";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <img 
          src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2000&auto=format&fit=crop" 
          alt="Fashion Hero" 
          className={styles.image}
        />
        <div className={styles.overlay}></div>
      </div>
      
      <div className={`container ${styles.content} fade-in-up`}>
        <h1 className={styles.title}>Redefining Elegance.</h1>
        <p className={styles.subtitle}>
          Discover the new Spring/Summer collection, crafted for the modern minimalist.
        </p>
        <Link href="/collections" className={styles.cta}>
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}
