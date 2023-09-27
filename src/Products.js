import React from "react";
import "./Products.css";
import { useStateValue } from "./StateProvider";

function Products({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket);
  const addToBasket = () => {
    //add item to basket
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };

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
      <button onClick={addToBasket}>Add</button>
    </div>
  );
}
export default Products;
