import Link from "next/link";
import { collections } from "@/data/mock";
import styles from "./CollectionGrid.module.css";

export function CollectionGrid() {
  return (
    <section className="section">
      <div className="container">
        <h2 className={styles.heading}>Explore Collections</h2>
        <div className={styles.grid}>
          {collections.map((collection, index) => (
            <Link 
              href={`/collections/${collection.id}`} 
              key={collection.id} 
              className={`${styles.card} hover-zoom`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.imageWrapper}>
                <img src={collection.image} alt={collection.title} className={styles.image} />
              </div>
              <div className={styles.content}>
                <h3 className={styles.title}>{collection.title}</h3>
                <p className={styles.description}>{collection.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
