import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <img className="checkout_add" src="" alt="" />
      {basket?.length === 0 ? (
        <div>
          <h2>Your shooping basket is empty</h2>
          <p>
            You have no items in your basket. To buy one click 'Add to basket'
          </p>
        </div>
      ) : (
        <div>
          <h2 className="checkout_title">Your shooping basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      )}
      {basket.length > 0 && (
        <div className="checkout_right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}
export default Checkout;
