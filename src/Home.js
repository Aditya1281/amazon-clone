import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const bannerImages = [
  "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1600&auto=format&fit=crop",
];

const sections = [
  {
    title: "Trending Deals",
    route: "/deals",
    products: [
      { image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=600", name: "Wireless Earbuds", offer: "50% Off" },
      { image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=600", name: "Men T-Shirts", offer: "₹699" },
      { image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=600", name: "Smartphones", offer: "40% Off" },
      { image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600", name: "Nike Shoes", offer: "Mega Deal" },
    ],
  },

  {
    title: "Mobiles & Electronics",
    route: "/electronics",
    products: [
      { image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=600", name: "Samsung Galaxy", offer: "30% Off" },
      { image: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?q=80&w=600", name: "iPhone", offer: "EMI" },
      { image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600", name: "Headphones", offer: "Best Seller" },
      { image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=600", name: "Smart Watch", offer: "Trending" },
    ],
  },

  {
    title: "Fashion Picks",
    route: "/fashion",
    products: [
      { image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=600", name: "Casual Wear", offer: "70% Off" },
      { image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=600", name: "Women Fashion", offer: "Deals" },
      { image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600", name: "Running Shoes", offer: "Best Seller" },
      { image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600", name: "Beauty Fashion", offer: "₹499" },
    ],
  },

  {
    title: "Home & Kitchen",
    route: "/home",
    products: [
      { image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=600", name: "Kitchen Set", offer: "Sale" },
      { image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=600", name: "Furniture", offer: "Top Rated" },
      { image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=600", name: "Wall Decor", offer: "Offer" },
      { image: "https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=600", name: "Dining Set", offer: "Decor" },
    ],
  },

  {
    title: "Beauty Picks",
    route: "/beauty",
    products: [
      { image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=600", name: "Beauty Cream", offer: "60% Off" },
      { image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=600", name: "Makeup Kit", offer: "Best Seller" },
      { image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=600", name: "Perfume", offer: "Trending" },
      { image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600", name: "Skin Care", offer: "Deals" },
    ],
  },

  {
    title: "Groceries & Vegetables",
    route: "/sports",
    products: [
      { image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=600", name: "Vegetables", offer: "Fresh" },
      { image: "https://images.unsplash.com/photo-1573246123716-6b1782bfc499?q=80&w=600", name: "Dry Fruits", offer: "Healthy" },
      { image: "https://images.unsplash.com/photo-1506617420156-8e4536971650?q=80&w=600", name: "Fresh Fruits", offer: "Organic" },
      { image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=600", name: "Snacks", offer: "Top Rated" },
    ],
  },

  {
    title: "Gaming Zone",
    route: "/gaming",
    products: [
      { image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=600", name: "Gaming Console", offer: "Mega Offer" },
      { image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=600", name: "Gaming Keyboard", offer: "RGB Sale" },
      { image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=600", name: "Gaming Mouse", offer: "Trending" },
      { image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=600", name: "Gaming Chair", offer: "Pro Gamer" },
    ],
  },
];

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === bannerImages.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">

      <div className="hero_slider">
        {bannerImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            className={
              index === currentSlide
                ? "hero_image active"
                : "hero_image"
            }
          />
        ))}
      </div>

      {sections.map((section, index) => (
        <div className="section_container" key={index}>

          <Link to={section.route} className="section_link">
            <h2 className="section_title">{section.title}</h2>
          </Link>

          <div className="products_row">
            {section.products.map((product, i) => (
              <div className="home_product_card" key={i}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="home_product_image"
                />

                <h4>{product.name}</h4>
                <p>{product.offer}</p>
              </div>
            ))}
          </div>

        </div>
      ))}
    </div>
  );
}

export default Home;