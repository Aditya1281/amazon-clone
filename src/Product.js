import React, { useState } from "react";
import "./Product.css";

function Product({ id, title, image, price, rating }) {

  const [added, setAdded] = useState(false);

  const addToBasket = () => {
    setAdded(true);
  };

  const removeItem = () => {
    setAdded(false);
  };

  return (
    <div className="product">

      {/* IMAGE TOP */}

      <div className="product_imageContainer">
        <img
          className="product_image"
          src={image}
          alt={title}
        />
      </div>

      {/* INFO */}

      <div className="product_info">

        <p className="product_title">
          {title}
        </p>

        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span key={i}>⭐</span>
            ))}
        </div>

        <p className="product_price">
          ₹{price.toLocaleString()}
        </p>

        <p className="prime_text">
          FREE Prime Delivery
        </p>

      </div>

      {/* BUTTONS */}

      <button
        className="add_btn"
        onClick={addToBasket}
      >
        {added ? "Added ✅" : "Add to Basket"}
      </button>

      <button
        className="remove_btn"
        onClick={removeItem}
      >
        Remove
      </button>

    </div>
  );
}

export default Product;