import React, { useState, useEffect } from "react";
import "./CategoryPage.css";
import Product from "./Product";

function Computers() {

  const banners = [
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1600",
    "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=1600",
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1600",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600"
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
        alt="Computers Banner"
      />

      <div className="offer_strip">
        <span>💻 Up To 60% Off</span>
        <span>⚡ Gaming PCs</span>
        <span>⌨️ Accessories Sale</span>
        <span>🚚 Free Delivery</span>
      </div>

      <div className="brand_section">
        <button className="brand_btn">Apple</button>
        <button className="brand_btn">Dell</button>
        <button className="brand_btn">HP</button>
        <button className="brand_btn">ASUS</button>
        <button className="brand_btn">Lenovo</button>
        <button className="brand_btn">Acer</button>
      </div>

      <h2 className="category_heading">
        Top Computer Deals
      </h2>

      <div className="category_row">

        <Product
          id="401"
          title="Apple MacBook Pro M3"
          price={189999}
          rating={5}
          image="https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=800"
        />

        <Product
          id="402"
          title="ASUS ROG Gaming Laptop"
          price={129999}
          rating={5}
          image="https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800"
        />

        <Product
          id="403"
          title="Dell 24 Inch Monitor"
          price={14999}
          rating={4}
          image="https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800"
        />

        <Product
          id="404"
          title="Mechanical RGB Keyboard"
          price={3499}
          rating={4}
          image="https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=800"
        />

        <Product
          id="405"
          title="Gaming Mouse"
          price={2499}
          rating={4}
          image="https://images.unsplash.com/photo-1527814050087-3793815479db?w=800"
        />

        <Product
          id="406"
          title="HP Pavilion Laptop"
          price={74999}
          rating={5}
          image="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800"
        />

        <Product
          id="407"
          title="Lenovo ThinkPad"
          price={85999}
          rating={5}
          image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800"
        />

        <Product
          id="408"
          title="Acer Predator"
          price={119999}
          rating={5}
          image="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=800"
        />

        <Product
          id="409"
          title="External SSD 1TB"
          price={6999}
          rating={4}
          image="https://images.unsplash.com/photo-1587302912306-cf1ed9c33146?w=800"
        />

        <Product
          id="410"
          title="USB-C Hub"
          price={1999}
          rating={4}
          image="https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800"
        />

        <Product
          id="411"
          title="Gaming Headset"
          price={3999}
          rating={4}
          image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800"
        />

        <Product
          id="412"
          title="Webcam HD"
          price={2999}
          rating={4}
          image="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800"
        />

      </div>

    </div>
  );
}

export default Computers;