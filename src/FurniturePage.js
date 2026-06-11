import React, { useState, useEffect } from "react";
import "./CategoryPage.css";
import Product from "./Product";

function FurniturePage() {

  const banners = [
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1600",
    "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=1600",
    "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=1600",
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
        alt="Furniture Banner"
      />

      <div className="offer_strip">
        <span>🛋️ Luxury Furniture</span>
        <span>🔥 Up To 60% Off</span>
        <span>🏠 Home Decor</span>
        <span>🚚 Free Delivery</span>
      </div>

      <div className="brand_section">
        <button className="brand_btn">Sofas</button>
        <button className="brand_btn">Beds</button>
        <button className="brand_btn">Tables</button>
        <button className="brand_btn">Chairs</button>
        <button className="brand_btn">Wardrobes</button>
        <button className="brand_btn">Offers</button>
      </div>

      <h2 className="category_heading">
        Premium Furniture Collection
      </h2>

      <div className="category_row">

        <Product
          id="f1"
          title="Luxury Sofa Set"
          price={29999}
          rating={5}
          image="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800"
        />

        <Product
          id="f2"
          title="King Size Bed"
          price={35999}
          rating={5}
          image="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800"
        />

        <Product
          id="f3"
          title="Dining Table"
          price={18999}
          rating={4}
          image="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=800"
        />

        <Product
          id="f4"
          title="Office Chair"
          price={7999}
          rating={4}
          image="https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=800"
        />

        <Product
          id="f5"
          title="TV Unit"
          price={9999}
          rating={4}
          image="https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=800"
        />

        <Product
          id="f6"
          title="Coffee Table"
          price={4999}
          rating={4}
          image="https://images.unsplash.com/photo-1499933374294-4584851497cc?w=800"
        />

        <Product
          id="f7"
          title="Wooden Wardrobe"
          price={24999}
          rating={5}
          image="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800"
        />

        <Product
          id="f8"
          title="Bookshelf"
          price={6999}
          rating={4}
          image="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800"
        />

        <Product
          id="f9"
          title="Study Table"
          price={5999}
          rating={4}
          image="https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800"
        />

        <Product
          id="f10"
          title="Recliner Chair"
          price={14999}
          rating={5}
          image="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800"
        />

        <Product
          id="f11"
          title="Shoe Rack"
          price={2999}
          rating={4}
          image="https://images.unsplash.com/photo-1494526585095-c41746248156?w=800"
        />

        <Product
          id="f12"
          title="Modern Cabinet"
          price={11999}
          rating={5}
          image="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800"
        />

      </div>

    </div>
  );
}

export default FurniturePage;