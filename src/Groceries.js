import React, { useState, useEffect } from "react";
import "./CategoryPage.css";
import Product from "./Product";

function Groceries() {

  const banners = [
    "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1600",
    "https://images.unsplash.com/photo-1579113800032-c38bd7635818?w=1600",
    "https://images.unsplash.com/photo-1543168256-418811576931?w=1600",
    "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=1600"
  ];

  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="categoryPage">

      <img
        className="category_banner"
        src={banners[currentBanner]}
        alt="Groceries Banner"
      />

      <div className="offer_strip">
        <span>🛒 Grocery Sale</span>
        <span>🥦 Fresh Products</span>
        <span>💰 Up To 50% Off</span>
        <span>🚚 Same Day Delivery</span>
      </div>

      <div className="brand_section">
        <button className="brand_btn">Fruits</button>
        <button className="brand_btn">Vegetables</button>
        <button className="brand_btn">Dairy</button>
        <button className="brand_btn">Snacks</button>
        <button className="brand_btn">Beverages</button>
        <button className="brand_btn">Daily Essentials</button>
      </div>

      <h2 className="category_heading">
        Daily Grocery Essentials
      </h2>

      <div className="category_row">

        <Product
          id="g1"
          title="Fresh Apples"
          price={199}
          rating={5}
          image="https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=800"
        />

        <Product
          id="g2"
          title="Organic Bananas"
          price={69}
          rating={4}
          image="https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=800"
        />

        <Product
          id="g3"
          title="Fresh Milk"
          price={65}
          rating={5}
          image="https://images.unsplash.com/photo-1550583724-b2692b85b150?w=800"
        />

        <Product
          id="g4"
          title="Brown Bread"
          price={45}
          rating={4}
          image="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800"
        />

        <Product
          id="g5"
          title="Egg Tray"
          price={120}
          rating={5}
          image="https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=800"
        />

        <Product
          id="g6"
          title="Potato Pack"
          price={49}
          rating={4}
          image="https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=800"
        />

        <Product
          id="g7"
          title="Tomatoes"
          price={39}
          rating={4}
          image="https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=800"
        />

        <Product
          id="g8"
          title="Rice 5Kg"
          price={349}
          rating={5}
          image="https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg?auto=compress&cs=tinysrgb&w=800"
        />

        <Product
          id="g9"
          title="Cooking Oil"
          price={179}
          rating={5}
          image="https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800"
        />

        <Product
          id="g10"
          title="Tea Pack"
          price={149}
          rating={4}
          image="https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?w=800"
        />

        <Product
          id="g11"
          title="Coffee Jar"
          price={299}
          rating={5}
          image="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800"
        />

        <Product
          id="g12"
          title="Mixed Dry Fruits"
          price={599}
          rating={5}
          image="https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=800"
        />

      </div>

    </div>
  );
}

export default Groceries;