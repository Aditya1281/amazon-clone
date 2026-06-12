import React, { useState, useEffect } from "react";
import "./CategoryPage.css";
import Product from "./Product";

function Vegetables() {

  const banners = [
    "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=1600",
    "https://images.unsplash.com/photo-1518843875459-f738682238a6?w=1600",
    "https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=1600",
    "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=1600"
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
        alt="Vegetables Banner"
      />

      <div className="offer_strip">
        <span>🥬 Farm Fresh</span>
        <span>🥕 Daily Harvest</span>
        <span>💰 Up To 40% Off</span>
        <span>🚚 Same Day Delivery</span>
      </div>

      <div className="brand_section">
        <button className="brand_btn">Leafy</button>
        <button className="brand_btn">Root Veggies</button>
        <button className="brand_btn">Organic</button>
        <button className="brand_btn">Fresh</button>
        <button className="brand_btn">Seasonal</button>
        <button className="brand_btn">Offers</button>
      </div>

      <h2 className="category_heading">
        Fresh Vegetables Collection
      </h2>

      <div className="category_row">

        <Product
          id="v1"
          title="Fresh Tomatoes"
          price={39}
          rating={5}
          image="https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&w=800"
        />

        <Product
          id="v2"
          title="Organic Potatoes"
          price={49}
          rating={4}
          image="https://images.pexels.com/photos/2286776/pexels-photo-2286776.jpeg?auto=compress&w=800"
        />

        <Product
          id="v3"
          title="Green Capsicum"
          price={69}
          rating={4}
          image="https://images.pexels.com/photos/5945843/pexels-photo-5945843.jpeg?auto=compress&w=800"
        />

        <Product
          id="v4"
          title="Fresh Carrots"
          price={59}
          rating={5}
          image="https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&w=800"
        />

        <Product
          id="v5"
          title="Cauliflower"
          price={45}
          rating={4}
          image="https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg?auto=compress&w=800"
        />

        <Product
          id="v6"
          title="Broccoli"
          price={99}
          rating={5}
          image="https://images.pexels.com/photos/47347/broccoli-vegetable-food-healthy-47347.jpeg?auto=compress&w=800"
        />

        <Product
          id="v7"
          title="Fresh Spinach"
          price={35}
          rating={4}
          image="https://images.pexels.com/photos/2255925/pexels-photo-2255925.jpeg?auto=compress&w=800"
        />

        <Product
          id="v8"
          title="Onion Pack"
          price={55}
          rating={5}
          image="https://images.pexels.com/photos/4197445/pexels-photo-4197445.jpeg?auto=compress&w=800"
        />

        <Product
          id="v9"
          title="Cucumber"
          price={29}
          rating={4}
          image="https://images.pexels.com/photos/2329440/pexels-photo-2329440.jpeg?auto=compress&w=800"
        />

        <Product
          id="v10"
          title="Fresh Cabbage"
          price={39}
          rating={4}
          image="https://images.pexels.com/photos/257259/pexels-photo-257259.jpeg?auto=compress&w=800"
        />

        <Product
          id="v11"
          title="Green Peas"
          price={89}
          rating={5}
          image="https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg?auto=compress&w=800"
        />

        <Product
          id="v12"
          title="Mixed Vegetable Pack"
          price={199}
          rating={5}
          image="https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&w=800"
        />

      </div>

    </div>
  );
}

export default Vegetables;