import React from "react";
import { Link, useParams } from "react-router-dom";
import products from "../components/data/products";
import "./ProductListing.css"; // Import the CSS file

function ProductListing() {
  const { category } = useParams();
  const filteredProducts = category
    ? products.filter((product) => product.category === category)
    : products;

  return (
    <div className="product-listing">
      <h1>{category ? `${category} Products` : "All Products"}</h1>
      <div className="product-container">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <h4>{product.rating}</h4>
            <Link to={`/products/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListing;
