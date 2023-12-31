import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
import GradeIcon from "@material-ui/icons/Grade";

function CheckoutProduct({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    console.log(basket);
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} alt="" />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map((e) => (
              <p key={id} className="checkoutProduct_icon">
                <GradeIcon />
              </p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove</button>
      </div>
    </div>
  );
}
export default CheckoutProduct;
