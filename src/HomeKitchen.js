import React, { useState, useEffect } from "react";
import "./CategoryPage.css";
import Product from "./Product";

function HomeKitchen() {

  const banners = [
    "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1600",
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1600",
    "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1600",
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1600"
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
        alt="Home & Kitchen Banner"
      />

      <div className="offer_strip">
        <span>🏠 Home Sale Up To 60% Off</span>
        <span>🍳 Kitchen Essentials</span>
        <span>🛋️ Furniture Deals</span>
        <span>🚚 Free Delivery</span>
      </div>

      <div className="brand_section">
        <button className="brand_btn">Kitchen</button>
        <button className="brand_btn">Furniture</button>
        <button className="brand_btn">Decor</button>
        <button className="brand_btn">Appliances</button>
        <button className="brand_btn">Storage</button>
        <button className="brand_btn">Home Deals</button>
      </div>

      <h2 className="category_heading">
        Home & Kitchen Collection
      </h2>

      <div className="category_row">

        <Product
          id="1001"
          title="Non-Stick Cookware Set"
          price={3499}
          rating={5}
          image="https://images.unsplash.com/photo-1584990347449-a5d6d4f0f4b3?w=800"
        />

        <Product
          id="1002"
          title="Dining Table Set"
          price={15999}
          rating={4}
          image="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800"
        />

        <Product
          id="1003"
          title="Air Fryer"
          price={6999}
          rating={5}
          image="https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800"
        />

        <Product
          id="1004"
          title="Vacuum Cleaner"
          price={8999}
          rating={4}
          image="https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800"
        />

        <Product
          id="1005"
          title="Modern Sofa"
          price={25999}
          rating={5}
          image="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800"
        />

        <Product
          id="1006"
          title="LED Table Lamp"
          price={1499}
          rating={4}
          image="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800"
        />

        <Product
          id="1007"
          title="Wooden Wardrobe"
          price={18999}
          rating={5}
          image="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800"
        />

        <Product
          id="1008"
          title="Microwave Oven"
          price={9999}
          rating={4}
          image="https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=800"
        />

        <Product
          id="1009"
          title="Coffee Maker"
          price={3499}
          rating={4}
          image="https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=800"
        />

        <Product
          id="1010"
          title="Bookshelf"
          price={4999}
          rating={4}
          image="https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800"
        />

        <Product
          id="1011"
          title="Wall Clock"
          price={999}
          rating={4}
          image="https://images.unsplash.com/photo-1563865436874-9aef32095fad?w=800"
        />

        <Product
          id="1012"
          title="Kitchen Storage Rack"
          price={2499}
          rating={5}
          image="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800"
        />

      </div>

    </div>
  );
}

export default HomeKitchen;