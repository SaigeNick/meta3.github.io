import React from "react";
import { addToCart } from "../services/cartService";

const ProductCard = ({ product }) => {
  const handleAddToCart = async () => {
    await addToCart(product.id, 1);
  };

  return (
    <div className="card mb-4">
      <img
        src={`img/${product.image}`}
        className="card-img-top"
        alt={product.name}
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <div className="d-flex justify-content-between align-items-center">
          <button onClick={handleAddToCart} className="btn btn-primary">
            Add to Cart
          </button>
          <span className="fs-5">${product.price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
