import React from "react";
import "./Checkout.css";

import { useStateValue } from "./StateProvider";

import CheckoutProduct from "./CheckoutProduct";
import SubTotal from "./SubTotal";

function Checkout() {

  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">

      <div className="checkout_left">

        <img
          className="checkout_ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/AmazonTV/BAU/FireTV/hero/3000x1200._CB793740088_.jpg"
          alt=""
        />

        <div>
          <h2 className="checkout_title">
            Your Shopping Basket
          </h2>

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

      </div>

      <SubTotal />

    </div>
  );
}

export default Checkout;