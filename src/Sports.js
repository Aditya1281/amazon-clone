import React, { useState, useEffect } from "react";
import "./CategoryPage.css";
import Product from "./Product";

function Sports() {

  const banners = [
    "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1600",
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1600",
    "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1600",
    "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1600"
  ];

  const [currentBanner, setCurrentBanner] = useState(0);

 useEffect(() => {
  const timer = setInterval(() => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  }, 3000);

  return () => clearInterval(timer);
}, [banners.length]);

  return (
    <div className="categoryPage">

      <img
        className="category_banner"
        src={banners[currentBanner]}
        alt="Sports Banner"
      />

      <div className="offer_strip">
        <span>🏏 Sports Sale</span>
        <span>⚽ Up To 60% Off</span>
        <span>🏋️ Fitness Essentials</span>
        <span>🚚 Free Delivery</span>
      </div>

      <div className="brand_section">
        <button className="brand_btn">Cricket</button>
        <button className="brand_btn">Football</button>
        <button className="brand_btn">Gym</button>
        <button className="brand_btn">Running</button>
        <button className="brand_btn">Cycling</button>
        <button className="brand_btn">Sports Deals</button>
      </div>

      <h2 className="category_heading">
        Sports & Fitness Collection
      </h2>

      <div className="category_row">

        <Product
          id="901"
          title="Cricket Bat"
          price={2499}
          rating={5}
          image="https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800"
        />

        <Product
          id="902"
          title="Football"
          price={999}
          rating={4}
          image="https://images.unsplash.com/photo-1556056504-5c7696c4c28d?w=800"
        />

        <Product
          id="903"
          title="Dumbbell Set"
          price={3499}
          rating={5}
          image="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800"
        />

        <Product
          id="904"
          title="Treadmill"
          price={25999}
          rating={5}
          image="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800"
        />

        <Product
          id="905"
          title="Badminton Racket"
          price={1499}
          rating={4}
          image="https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=800"
        />

        <Product
          id="906"
          title="Gym Gloves"
          price={499}
          rating={4}
          image="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800"
        />

        <Product
          id="907"
          title="Yoga Mat"
          price={799}
          rating={5}
          image="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800"
        />

        <Product
          id="908"
          title="Sports Shoes"
          price={3999}
          rating={5}
          image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800"
        />

        <Product
          id="909"
          title="Basketball"
          price={1299}
          rating={4}
          image="https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800"
        />

        <Product
          id="910"
          title="Cycling Helmet"
          price={1999}
          rating={4}
          image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800"
        />

        <Product
          id="911"
          title="Protein Shaker"
          price={399}
          rating={4}
          image="https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=800"
        />

        <Product
          id="912"
          title="Resistance Bands"
          price={699}
          rating={5}
          image="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800"
        />

      </div>

    </div>
  );
}

export default Sports;