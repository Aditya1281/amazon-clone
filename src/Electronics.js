import React from "react";
import "./CategoryPage.css";
import Product from "./Product";

function Electronics() {
  return (
    <div className="categoryPage">

      <img
        className="category_banner"
        src="https://roomswithgreatviews.com/wp-content/uploads/2020/12/Bring-the-modern-touch-with-the-best-electronics-appliances.jpg"
        alt="Electronics Banner"
      />

      <div className="offer_strip">
        <span>⚡ Up to 70% Off Electronics</span>
        <span>💳 No Cost EMI</span>
        <span>🚚 Free Delivery</span>
        <span>🔥 Mega Tech Sale</span>
      </div>

      <div className="brand_section">
        <button className="brand_btn">Apple</button>
        <button className="brand_btn">Samsung</button>
        <button className="brand_btn">Sony</button>
        <button className="brand_btn">LG</button>
        <button className="brand_btn">HP</button>
        <button className="brand_btn">Dell</button>
        <button className="brand_btn">Boat</button>
      </div>

      <h2 className="category_heading">
        Best Electronics Deals
      </h2>

      <div className="category_row">

        <Product
          id="e1"
          title="Apple MacBook Air M2"
          price={114999}
          rating={5}
          image="https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=600"
        />

        <Product
          id="e2"
          title="Samsung Smart TV"
          price={49999}
          rating={5}
          image="https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600"
        />

        <Product
          id="e3"
          title="Sony Headphones"
          price={24999}
          rating={5}
          image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600"
        />

        <Product
          id="e4"
          title="Canon DSLR Camera"
          price={55999}
          rating={4}
          image="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600"
        />

        <Product
          id="e5"
          title="Apple iPad Air"
          price={59999}
          rating={5}
          image="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600"
        />

        <Product
          id="e6"
          title="Boat Smart Watch"
          price={2999}
          rating={4}
          image="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600"
        />

        <Product
          id="e7"
          title="Dell Inspiron Laptop"
          price={65999}
          rating={4}
          image="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600"
        />

        <Product
          id="e8"
          title="JBL Bluetooth Speaker"
          price={7999}
          rating={4}
          image="https://images.unsplash.com/photo-1589003077984-894e133dabab?w=600"
        />

        <Product
          id="e9"
          title="Gaming Monitor"
          price={18999}
          rating={5}
          image="https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600"
        />

        <Product
          id="e10"
          title="Mechanical Keyboard"
          price={4999}
          rating={4}
          image="https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=600"
        />

        <Product
          id="e11"
          title="Wireless Mouse"
          price={1499}
          rating={4}
          image="https://images.unsplash.com/photo-1527814050087-3793815479db?w=600"
        />

        <Product
          id="e12"
          title="PlayStation 5"
          price={54999}
          rating={5}
          image="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600"
        />

      </div>

    </div>
  );
}

export default Electronics;