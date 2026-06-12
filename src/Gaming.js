import React, { useState, useEffect } from "react";
import "./CategoryPage.css";
import Product from "./Product";

function Gaming() {

  const banners = [
    "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1600",
    "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1600",
    "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=1600",
    "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=1600"
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
        alt="Gaming Banner"
      />

      <div className="offer_strip">
        <span>🎮 Gaming Sale</span>
        <span>🔥 Up To 70% Off</span>
        <span>⚡ Gaming Accessories</span>
        <span>🚚 Free Delivery</span>
      </div>

      <div className="brand_section">
        <button className="brand_btn">PlayStation</button>
        <button className="brand_btn">Xbox</button>
        <button className="brand_btn">Gaming PCs</button>
        <button className="brand_btn">Headsets</button>
        <button className="brand_btn">Controllers</button>
        <button className="brand_btn">Gaming Deals</button>
      </div>

      <h2 className="category_heading">
        Top Gaming Collection
      </h2>

      <div className="category_row">

        <Product
          id="701"
          title="PlayStation 5"
          price={54999}
          rating={5}
          image="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800"
        />

        <Product
          id="702"
          title="Xbox Series X"
          price={52999}
          rating={5}
          image="https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=800"
        />

        <Product
          id="703"
          title="Gaming Headset"
          price={3999}
          rating={4}
          image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800"
        />

        <Product
          id="704"
          title="RGB Gaming Keyboard"
          price={3499}
          rating={4}
          image="https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=800"
        />

        <Product
          id="705"
          title="Gaming Mouse"
          price={2499}
          rating={4}
          image="https://images.unsplash.com/photo-1527814050087-3793815479db?w=800"
        />

        <Product
          id="706"
          title="Gaming Monitor"
          price={18999}
          rating={5}
          image="https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800"
        />

        <Product
          id="707"
          title="Gaming Chair"
          price={14999}
          rating={5}
          image="https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=800"
        />

        <Product
          id="708"
          title="PlayStation Controller"
          price={5999}
          rating={5}
          image="https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=800"
        />

        <Product
          id="709"
          title="Gaming Laptop"
          price={119999}
          rating={5}
          image="https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800"
        />

        <Product
          id="710"
          title="VR Headset"
          price={29999}
          rating={5}
          image="https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=800"
        />

        <Product
          id="711"
          title="Gaming Desk"
          price={9999}
          rating={4}
          image="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800"
        />

        <Product
          id="712"
          title="Gaming Speakers"
          price={4999}
          rating={4}
          image="https://images.unsplash.com/photo-1589003077984-894e133dabab?w=800"
        />

      </div>

    </div>
  );
}

export default Gaming;