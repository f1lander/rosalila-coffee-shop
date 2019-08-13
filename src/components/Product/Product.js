import React from 'react';
import './Product.css';

export default function Product({ onAddToCartClick, price, title, image }) {
  return (
    <div className="Product">
      <img src={image} className="Product-Image" alt="logo" />
      <h2 className="Product-title">{title}</h2>
      <div className="Product-price">${price}</div>
      <button className="Product-buy-button" onClick={onAddToCartClick}>
        Add to cart
      </button>
    </div>
  );
}
