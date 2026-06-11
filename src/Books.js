import React, { useState, useEffect } from "react";
import "./CategoryPage.css";
import Product from "./Product";

function Books() {

  const banners = [
    "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1600",
    "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1600",
    "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1600",
    "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=1600"
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
        alt="Books Banner"
      />

      <div className="offer_strip">
        <span>📚 Best Sellers</span>
        <span>🔥 Up To 70% Off</span>
        <span>🚚 Free Delivery</span>
        <span>⭐ Editor's Choice</span>
      </div>

      <div className="brand_section">
        <button className="brand_btn">Self Help</button>
        <button className="brand_btn">Business</button>
        <button className="brand_btn">Fiction</button>
        <button className="brand_btn">Motivation</button>
        <button className="brand_btn">Finance</button>
        <button className="brand_btn">Education</button>
      </div>

      <h2 className="category_heading">
        Top Selling Books
      </h2>

      <div className="category_row">

        <Product
          id="601"
          title="Atomic Habits"
          price={499}
          rating={5}
          image="https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg"
        />

        <Product
          id="602"
          title="Rich Dad Poor Dad"
          price={399}
          rating={5}
          image="https://covers.openlibrary.org/b/isbn/9781612680194-L.jpg"
        />

        <Product
          id="603"
          title="The Psychology of Money"
          price={349}
          rating={4}
          image="https://covers.openlibrary.org/b/isbn/9789390166268-L.jpg"
        />

        <Product
          id="604"
          title="Do Epic Shit"
          price={299}
          rating={4}
          image="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=800"
        />

        <Product
          id="605"
          title="Think and Grow Rich"
          price={299}
          rating={5}
          image="https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800"
        />

        <Product
          id="606"
          title="Ikigai"
          price={349}
          rating={5}
          image="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800"
        />

        <Product
          id="607"
          title="Deep Work"
          price={449}
          rating={5}
          image="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=800"
        />

        <Product
          id="608"
          title="The Alchemist"
          price={299}
          rating={5}
          image="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800"
        />

        <Product
          id="609"
          title="Can't Hurt Me"
          price={599}
          rating={5}
          image="https://images.unsplash.com/photo-1526243741027-444d633d7365?w=800"
        />

        <Product
          id="610"
          title="Start With Why"
          price={399}
          rating={4}
          image="https://images.unsplash.com/photo-1495640388908-05fa85288e61?w=800"
        />

        <Product
          id="611"
          title="Sapiens"
          price={549}
          rating={5}
          image="https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=800"
        />

        <Product
          id="612"
          title="Zero To One"
          price={449}
          rating={5}
          image="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800"
        />

      </div>

    </div>
  );
}

export default Books;