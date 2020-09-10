import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://wallpapercave.com/wp/DiGsmzd.jpg"
        />

        <div>
          <h2 className="checkout__title">Your shopping basket </h2>
          {/* BasketItem */}
          {/* BasketItem */}
          {/* BasketItem */}
          {/* BasketItem */}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
        <h2>The subtotal will go here</h2>
      </div>
    </div>
  );
}

export default Checkout;
