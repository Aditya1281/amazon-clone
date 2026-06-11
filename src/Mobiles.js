import React from "react";
import "./CategoryPage.css";
import Product from "./Product";

function Mobiles() {
  return (
    <div className="categoryPage">

      <img
        className="category_banner"
        src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1600&auto=format&fit=crop"
        alt="Mobiles Banner"
      />

      <div className="offer_strip">
        <span>🔥 Up to 40% Off</span>
        <span>📱 Exchange Bonus</span>
        <span>💳 No Cost EMI</span>
        <span>🚚 Free Delivery</span>
      </div>

      <div className="brand_section">
        <button className="brand_btn">Apple</button>
        <button className="brand_btn">Samsung</button>
        <button className="brand_btn">OnePlus</button>
        <button className="brand_btn">Realme</button>
        <button className="brand_btn">Xiaomi</button>
        <button className="brand_btn">Vivo</button>
        <button className="brand_btn">Oppo</button>
      </div>

      <h2 className="category_heading">
        Best Selling Smartphones
      </h2>

      <div className="category_row">

        <Product id="m1" title="iPhone 15 Pro Max" price={159999} rating={5}
          image="https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?q=80&w=600" />

        <Product id="m2" title="Samsung Galaxy S24 Ultra" price={129999} rating={5}
          image="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=600" />

        <Product id="m3" title="OnePlus 12" price={64999} rating={4}
          image="https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=600" />

        <Product id="m4" title="Nothing Phone 2" price={44999} rating={5}
          image="https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=600" />

        <Product id="m5" title="Google Pixel 8" price={75999} rating={5}
          image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600" />

        <Product id="m6" title="Realme GT" price={32999} rating={4}
          image="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=600" />

        <Product id="m7" title="Vivo V30" price={27999} rating={4}
          image="https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=600" />

        <Product id="m8" title="Oppo Reno 11" price={38999} rating={5}
          image="https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=600" />

        <Product id="m9" title="Moto Edge 50" price={29999} rating={4}
          image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600" />

        <Product id="m10" title="iQOO Neo" price={35999} rating={4}
          image="https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?q=80&w=600" />

        <Product id="m11" title="Poco X6 Pro" price={25999} rating={4}
          image="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=600" />

        <Product id="m12" title="Samsung M14" price={14999} rating={4}
          image="https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=600" />

        <Product id="m13" title="Redmi Note 13 Pro" price={24999} rating={4}
          image="https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=600" />

        <Product id="m14" title="Honor X9" price={27999} rating={4}
          image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600" />

        <Product id="m15" title="Tecno Phantom" price={22999} rating={4}
          image="https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?q=80&w=600" />

        <Product id="m16" title="Sony Xperia" price={79999} rating={5}
          image="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=600" />

      </div>

    </div>
  );
}

export default Mobiles;