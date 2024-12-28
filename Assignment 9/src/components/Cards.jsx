import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div style={cardStyle}>
      <img src={product.image} alt={product.title} style={imageStyle} />
      <h2 style={{ fontSize: "1.2rem" }}>{product.title}</h2>
      <p style={{ color: "#555" }}>{product.description}</p>
      <p>
        <strong>Price:</strong> ${product.price}
      </p>
      <p>
        <strong>Rating:</strong> {product.rating.rate} ⭐ (
        {product.rating.count} reviews)
      </p>
    </div>
  );
};

const cardStyle = {
  border: "1px solid #ddd",
  borderRadius: "10px",
  padding: "15px",
  width: "250px",
  textAlign: "center",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

const imageStyle = {
  width: "100%",
  height: "150px",
  objectFit: "cover",
  borderRadius: "8px",
};

export default ProductCard;
