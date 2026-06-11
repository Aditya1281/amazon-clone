import React from "react";
import "./SubTotal.css";

import { useStateValue } from "./StateProvider";

function SubTotal() {

  const [{ basket }] = useStateValue();

  const total = basket.reduce(
    (amount, item) => item.price + amount,
    0
  );

  return (
    <div className="subtotal">

      <p>
        Subtotal ({basket.length} items):
        <strong> ₹{total}</strong>
      </p>

      <small className="subtotal_gift">
        <input type="checkbox" />
        This order contains a gift
      </small>

      <button>
        Proceed to Checkout
      </button>

    </div>
  );
}

export default SubTotal;