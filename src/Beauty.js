import React, { useState, useEffect } from "react";
import "./CategoryPage.css";
import Product from "./Product";

function Beauty() {

  const banners = [
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1600",
    "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1600",
    "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=1600",
    "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1600"
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
        alt="Beauty Banner"
      />

      <div className="offer_strip">
        <span>💄 Beauty Sale</span>
        <span>✨ Up To 70% Off</span>
        <span>🧴 Skin Care Deals</span>
        <span>🚚 Free Delivery</span>
      </div>

      <div className="brand_section">
        <button className="brand_btn">Makeup</button>
        <button className="brand_btn">Skincare</button>
        <button className="brand_btn">Perfumes</button>
        <button className="brand_btn">Hair Care</button>
        <button className="brand_btn">Luxury Beauty</button>
        <button className="brand_btn">Beauty Deals</button>
      </div>

      <h2 className="category_heading">
        Beauty & Personal Care
      </h2>

      <div className="category_row">

        <Product
          id="801"
          title="Luxury Perfume"
          price={2999}
          rating={5}
          image="https://images.unsplash.com/photo-1541643600914-78b084683601?w=800"
        />

        <Product
          id="802"
          title="Matte Lipstick"
          price={599}
          rating={4}
          image="https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800"
        />

        <Product
          id="803"
          title="Face Serum"
          price={899}
          rating={5}
          image="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800"
        />

        <Product
          id="804"
          title="Skin Care Kit"
          price={1499}
          rating={5}
          image="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800"
        />

        <Product
          id="805"
          title="Hair Dryer"
          price={1999}
          rating={4}
          image="https://images.unsplash.com/photo-1522338140262-f46f5913618a?w=800"
        />

        <Product
          id="806"
          title="Face Wash"
          price={349}
          rating={4}
          image="https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800"
        />

        <Product
          id="807"
          title="Nail Polish Set"
          price={499}
          rating={4}
          image="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800"
        />

        <Product
          id="808"
          title="Makeup Brush Kit"
          price={799}
          rating={5}
          image="https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=800"
        />

        <Product
          id="809"
          title="Moisturizer"
          price={699}
          rating={5}
          image="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800"
        />

        <Product
          id="810"
          title="Sunscreen SPF 50"
          price={499}
          rating={5}
          image="https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?w=800"
        />

        <Product
          id="811"
          title="Hair Straightener"
          price={2499}
          rating={4}
          image="https://images.unsplash.com/photo-1522338140262-f46f5913618a?w=800"
        />

        <Product
          id="812"
          title="Premium Makeup Kit"
          price={3499}
          rating={5}
          image="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800"
        />

      </div>

    </div>
  );
}

export default Beauty;