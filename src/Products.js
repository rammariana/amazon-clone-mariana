import React from "react";
import "./Products.css";

function Products({ id, title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((e) => (
              <p key={e}>*</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button>Add</button>
    </div>
  );
}
export default Products;
