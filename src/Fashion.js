import React, { useState, useEffect } from "react";
import "./CategoryPage.css";
import Product from "./Product";

function Fashion() {

  const banners = [
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600",
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600",
    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1600",
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1600"
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
        alt="Fashion Banner"
      />

      <div className="offer_strip">
        <span>👕 Fashion Sale Up To 70% Off</span>
        <span>👟 Trending Styles</span>
        <span>👜 Premium Brands</span>
        <span>🚚 Free Delivery</span>
      </div>

      <div className="brand_section">
        <button className="brand_btn">Men</button>
        <button className="brand_btn">Women</button>
        <button className="brand_btn">Shoes</button>
        <button className="brand_btn">Watches</button>
        <button className="brand_btn">Bags</button>
        <button className="brand_btn">Fashion Deals</button>
      </div>

      <h2 className="category_heading">
        Trending Fashion Collection
      </h2>

      <div className="category_row">

        <Product
          id="101"
          title="Men's Denim Jacket"
          price={2499}
          rating={4}
          image="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800"
        />

        <Product
          id="102"
          title="Women's Kurti Set"
          price={1799}
          rating={5}
          image="https://images.unsplash.com/photo-1583391733981-84931f9f0c9b?w=800"
        />

        <Product
          id="103"
          title="Nike Running Shoes"
          price={4999}
          rating={5}
          image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800"
        />

        <Product
          id="104"
          title="Leather Handbag"
          price={2999}
          rating={4}
          image="https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800"
        />

        <Product
          id="105"
          title="Stylish Sunglasses"
          price={1499}
          rating={4}
          image="https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800"
        />

        <Product
          id="106"
          title="Casual T-Shirt"
          price={999}
          rating={4}
          image="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800"
        />

        <Product
          id="107"
          title="Formal Shirt"
          price={1499}
          rating={5}
          image="https://images.unsplash.com/photo-1603252109303-2751441dd157?w=800"
        />

        <Product
          id="108"
          title="Women's Saree"
          price={2499}
          rating={5}
          image="https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800"
        />

        <Product
          id="109"
          title="Luxury Watch"
          price={6999}
          rating={5}
          image="https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800"
        />

        <Product
          id="110"
          title="Sports Shoes"
          price={3999}
          rating={4}
          image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800"
        />

        <Product
          id="111"
          title="Women's Handbag"
          price={2199}
          rating={4}
          image="https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800"
        />

        <Product
          id="112"
          title="Premium Hoodie"
          price={1899}
          rating={5}
          image="https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800"
        />

      </div>

    </div>
  );
}

export default Fashion;