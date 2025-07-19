import React from "react"
import styles from "./ProductCard.module.css"

const ProductCard = ({ product }) => {
  const { thumbnail, title, price } = product

  // Fallback image (SVG or placeholder)
  const fallback = (
    <div
      className={styles.thumbnail}
      aria-label="No image available"
      style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "#f3f3f3" }}
    >
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect width="24" height="24" rx="4" fill="#e5e7eb" />
        <path d="M7 17l5-5 5 5" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="9" cy="9" r="2" fill="#9ca3af" />
      </svg>
    </div>
  )

  return (
    <article className={styles.card} tabIndex={0} aria-label={title}>
      {thumbnail ? (
        <img
          src={thumbnail}
          alt={title}
          className={styles.thumbnail}
          loading="lazy"
        />
      ) : fallback}
      <div className={styles.info}>
        <h2 className={styles.title}>{title}</h2>
        <span className={styles.price}>{price}</span>
      </div>
    </article>
  )
}

export default ProductCard 