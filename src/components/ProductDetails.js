import React from "react";
import { useParams } from "react-router-dom";
import products from "../components/data/products";
import styles from "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className={styles.productDetails}>
      <h1 className={styles.productName}>{product.name}</h1>
      <p className={styles.productDescription}>{product.description}</p>
      <p className={styles.productCategory}>Category: {product.category}</p>
      <p className={styles.productPrice}>Price: ₹{product.price}</p>
      <p
        className={`${styles.productStockStatus} ${
          product.inStock > 0 ? styles.stockStatus : styles.outOfStock
        }`}
      >
        {product.inStock > 0 ? "In Stock" : "Out of Stock"}
      </p>
      {product.inStock > 0 && product.inStock < 5 && (
        <p>Hurry, only {product.inStock} items left!</p>
      )}
      {product.imageUrl ? (
        <img
          src={product.imageUrl}
          alt={product.name}
          className={styles.productImage}
        />
      ) : (
        <img
          src="https://via.placeholder.com/150"
          alt="Placeholder"
          className={styles.productImage}
        />
      )}
      {product.onSale && <p className={styles.badge}>Discount Available!</p>}
      {product.price > 5000 && <p className={styles.badge}>Free Shipping</p>}
      {product.price < 1000 && (
        <span className={styles.badge}>Budget-Friendly</span>
      )}
      {product.price > 50000 && (
        <span className={`${styles.badge} ${styles.premiumBadge}`}>
          Premium Product
        </span>
      )}
    </div>
  );
}

export default ProductDetails;
