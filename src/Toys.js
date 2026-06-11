import React, { useState, useEffect } from "react";
import "./CategoryPage.css";
import Product from "./Product";

function Toys() {

  const banners = [
    "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=1600",
    "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=1600",
    "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1600",
    "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=1600"
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
        alt="Toys Banner"
      />

      <div className="offer_strip">
        <span>🧸 Kids Special</span>
        <span>🎮 Gaming Fun</span>
        <span>🔥 Up To 70% Off</span>
        <span>🚚 Free Delivery</span>
      </div>

      <div className="brand_section">
        <button className="brand_btn">Action Toys</button>
        <button className="brand_btn">Remote Cars</button>
        <button className="brand_btn">Board Games</button>
        <button className="brand_btn">Educational</button>
        <button className="brand_btn">Soft Toys</button>
        <button className="brand_btn">Offers</button>
      </div>

      <h2 className="category_heading">
        Toys & Games Collection
      </h2>

      <div className="category_row">

        <Product
          id="t1"
          title="Remote Control Car"
          price={1499}
          rating={5}
          image="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800"
        />

        <Product
          id="t2"
          title="Teddy Bear"
          price={799}
          rating={5}
          image="https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800"
        />

        <Product
          id="t3"
          title="Building Blocks Set"
          price={999}
          rating={4}
          image="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800"
        />

        <Product
          id="t4"
          title="Toy Train"
          price={1299}
          rating={4}
          image="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800"
        />

        <Product
          id="t5"
          title="Chess Board"
          price={599}
          rating={5}
          image="https://images.unsplash.com/photo-1528819622765-d6bcf132f793?w=800"
        />

        <Product
          id="t6"
          title="Football Toy Set"
          price={899}
          rating={4}
          image="https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=800"
        />

        <Product
          id="t7"
          title="Barbie Doll"
          price={1199}
          rating={5}
          image="https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=800"
        />

        <Product
          id="t8"
          title="Puzzle Game"
          price={499}
          rating={4}
          image="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800"
        />

        <Product
          id="t9"
          title="Toy Helicopter"
          price={1899}
          rating={5}
          image="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800"
        />

        <Product
          id="t10"
          title="Lego Adventure Set"
          price={2499}
          rating={5}
          image="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800"
        />

        <Product
          id="t11"
          title="Kids Drawing Kit"
          price={699}
          rating={4}
          image="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800"
        />

        <Product
          id="t12"
          title="Mini Basketball Set"
          price={999}
          rating={5}
          image="https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800"
        />

      </div>

    </div>
  );
}

export default Toys;