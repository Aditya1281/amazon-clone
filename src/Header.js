import React, { useState } from "react";
import "./Header.css";

import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { Link, useLocation } from "react-router-dom";

function Header() {

  const [showMenu, setShowMenu] = useState(false);

  const location = useLocation();

  return (
    <div className="header">

      {/* TOP HEADER */}

      <div className="header_top">

        {/* LOGO */}

        <Link to="/" className="header_logoLink">

          <img
            className="header_logo"
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
          />

        </Link>

        {/* LOCATION */}

        <div className="header_option header_location">

          <LocationOnIcon />

          <div>

            <span className="header_optionLineOne">
              Delivering to Pune
            </span>

            <span className="header_optionLineTwo">
              Update location
            </span>

          </div>

        </div>

        {/* SEARCH */}

        <div className="header_search">

          <select className="header_select">
            <option>All</option>
          </select>

          <input
            className="header_searchInput"
            type="text"
            placeholder="Search Amazon.in"
          />

          <SearchIcon className="header_searchIcon" />

        </div>

        {/* ACCOUNT */}

     {/* ACCOUNT */}

<div className="header_nav">

  <Link to="/login" className="header_link_signin">

    <div className="header_option">

      <span className="header_optionLineOne">
        Hello, Sign In
      </span>

      <span className="header_optionLineTwo">
        Account & Lists
      </span>

    </div>

  </Link>

  <div className="header_option">

    <span className="header_optionLineOne">
      Returns
    </span>

    <span className="header_optionLineTwo">
      & Orders
    </span>

  </div>

  <Link to="/checkout" className="header_basket">

    <ShoppingBasketIcon />

    <span className="header_optionLineTwo header_basketCount">
      0
    </span>

  </Link>

</div>
  </div>

      {/* NAVBAR */}

      <div className="header_bottom">

        <div
          className="header_all"
          onClick={() => setShowMenu(true)}
        >

          <MenuIcon />

          <span>All</span>

        </div>

        <Link
          to="/"
          className={`header_link ${location.pathname === "/" ? "active" : ""}`}
        >
          Home
        </Link>

        <Link
          to="/mobiles"
          className={`header_link ${location.pathname === "/mobiles" ? "active" : ""}`}
        >
          Mobiles
        </Link>

        <Link
          to="/electronics"
          className={`header_link ${location.pathname === "/electronics" ? "active" : ""}`}
        >
          Electronics
        </Link>

        <Link
          to="/fashion"
          className={`header_link ${location.pathname === "/fashion" ? "active" : ""}`}
        >
          Fashion
        </Link>

        <Link
          to="/home-kitchen"
          className={`header_link ${location.pathname === "/home-kitchen" ? "active" : ""}`}
        >
          Home & Kitchen
        </Link>

        <Link
          to="/computers"
          className={`header_link ${location.pathname === "/computers" ? "active" : ""}`}
        >
          Computers
        </Link>

        <Link
          to="/books"
          className={`header_link ${location.pathname === "/books" ? "active" : ""}`}
        >
          Books
        </Link>

        <Link
          to="/gaming"
          className={`header_link ${location.pathname === "/gaming" ? "active" : ""}`}
        >
          Gaming
        </Link>

        <Link
          to="/beauty"
          className={`header_link ${location.pathname === "/beauty" ? "active" : ""}`}
        >
          Beauty
        </Link>

        <Link
          to="/sports"
          className={`header_link ${location.pathname === "/sports" ? "active" : ""}`}
        >
          Sports
        </Link>

        <Link
          to="/groceries"
          className={`header_link ${location.pathname === "/groceries" ? "active" : ""}`}
        >
          Groceries
        </Link>

        <Link
          to="/vegetables"
          className={`header_link ${location.pathname === "/vegetables" ? "active" : ""}`}
        >
          Vegetables
        </Link>

        <Link
          to="/appliances"
          className={`header_link ${location.pathname === "/appliances" ? "active" : ""}`}
        >
          Appliances
        </Link>

        <Link
          to="/furniture"
          className={`header_link ${location.pathname === "/furniture" ? "active" : ""}`}
        >
          Furniture
        </Link>

        <Link
          to="/toys"
          className={`header_link ${location.pathname === "/toys" ? "active" : ""}`}
        >
          Toys & Games
        </Link>

      </div>

      {/* SIDEBAR */}

      {
        showMenu && (

          <div className="sidebar_overlay">

            <div className="sidebar">

              <div className="sidebar_top">

                <h2>Hello, Sign in</h2>

                <CloseIcon
                  className="sidebar_close"
                  onClick={() => setShowMenu(false)}
                />

              </div>

              <div className="sidebar_section">

                <h3>Trending</h3>

                <p>Best Sellers</p>
                <p>New Releases</p>
                <p>Today's Deals</p>

              </div>

              <div className="sidebar_section">

                <h3>Digital Content & Devices</h3>

                <p>Echo & Alexa</p>
                <p>Fire TV</p>
                <p>Kindle</p>
                <p>Prime Video</p>
                <p>Prime Music</p>

              </div>

              <div className="sidebar_section">

                <h3>Shop by Category</h3>

                <p>Mobiles</p>
                <p>Electronics</p>
                <p>Fashion</p>
                <p>Home & Kitchen</p>
                <p>Books</p>
                <p>Gaming</p>
                <p>Beauty</p>
                <p>Sports</p>
                <p>Groceries</p>
                <p>Furniture</p>

              </div>

            </div>

          </div>

        )
      }

    </div>
  );
}

export default Header;