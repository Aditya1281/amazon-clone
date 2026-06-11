import React, { useState, useEffect } from "react";
import "./CategoryPage.css";
import Product from "./Product";

function Appliances() {

  const banners = [
    "https://images.unsplash.com/photo-1586208958839-06c17cacdf08?w=1600",
    "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1600",
    "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=1600",
    "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1600"
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
        alt="Appliances Banner"
      />

      <div className="offer_strip">
        <span>🧊 Appliances Sale</span>
        <span>🔥 Up To 65% Off</span>
        <span>🏠 Smart Home Deals</span>
        <span>🚚 Free Delivery</span>
      </div>

      <div className="brand_section">
        <button className="brand_btn">Refrigerator</button>
        <button className="brand_btn">Washing Machine</button>
        <button className="brand_btn">Microwave</button>
        <button className="brand_btn">AC</button>
        <button className="brand_btn">Kitchen</button>
        <button className="brand_btn">Offers</button>
      </div>

      <h2 className="category_heading">
        Home Appliances Collection
      </h2>

      <div className="category_row">

        <Product
          id="a1"
          title="Double Door Refrigerator"
          price={34999}
          rating={5}
          image="https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800"
        />

        <Product
          id="a2"
          title="Front Load Washing Machine"
          price={28999}
          rating={5}
          image="https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=800"
        />

        <Product
          id="a3"
          title="Microwave Oven"
          price={11999}
          rating={4}
          image="https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=800"
        />

        <Product
          id="a4"
          title="Smart Air Conditioner"
          price={42999}
          rating={5}
          image="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800"
        />

        <Product
          id="a5"
          title="Air Purifier"
          price={8999}
          rating={4}
          image="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800"
        />

        <Product
          id="a6"
          title="Water Purifier"
          price={12999}
          rating={5}
          image="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800"
        />

        <Product
          id="a7"
          title="Electric Kettle"
          price={1499}
          rating={4}
          image="https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800"
        />

        <Product
          id="a8"
          title="Mixer Grinder"
          price={3499}
          rating={4}
          image="https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=800"
        />

        <Product
          id="a9"
          title="Vacuum Cleaner"
          price={7999}
          rating={5}
          image="https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800"
        />

        <Product
          id="a10"
          title="Dishwasher"
          price={39999}
          rating={5}
          image="https://images.unsplash.com/photo-1586208958839-06c17cacdf08?w=800"
        />

        <Product
          id="a11"
          title="Coffee Machine"
          price={9999}
          rating={4}
          image="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800"
        />

        <Product
          id="a12"
          title="Induction Cooktop"
          price={2499}
          rating={5}
          image="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800"
        />

      </div>

    </div>
  );
}

export default Appliances;