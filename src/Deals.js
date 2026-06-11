import React from "react";
import "./Home.css";
import Product from "./Product";

function Deals() {

  return (
    <div className="home">

      <img
        className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2024/GW/Hero/Unrec/3000._CB555000000_.jpg"
        alt=""
      />

      <div className="home_row">

        <Product
          id="1101"
          title="Apple Watch Series 9"
          price={39999}
          rating={5}
          image="https://m.media-amazon.com/images/I/71XMTLtZD4L._SX679_.jpg"
        />

        <Product
          id="1102"
          title="Sony Bluetooth Speaker"
          price={4999}
          rating={4}
          image="https://m.media-amazon.com/images/I/71mQK0G2f-L._SX679_.jpg"
        />

      </div>

      <div className="home_row">

        <Product
          id="1103"
          title="Amazon Echo Dot"
          price={3499}
          rating={5}
          image="https://m.media-amazon.com/images/I/61MZf0ZLnVL._SX679_.jpg"
        />

        <Product
          id="1104"
          title="Fire TV Stick"
          price={2999}
          rating={4}
          image="https://m.media-amazon.com/images/I/51Da2Z+FTFL._SX679_.jpg"
        />

      </div>

    </div>
  );
}

export default Deals;