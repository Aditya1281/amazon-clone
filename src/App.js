import React from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";

import Deals from "./Deals";
import Mobiles from "./Mobiles";
import Electronics from "./Electronics";
import Fashion from "./Fashion";
import HomeKitchen from "./HomeKitchen";
import Computers from "./Computers";
import Books from "./Books";
import Gaming from "./Gaming";
import Beauty from "./Beauty";
import Sports from "./Sports";
import Groceries from "./Groceries";
import Vegetables from "./Vegetables";
import Appliances from "./Appliances";
import FurniturePage from "./FurniturePage";
import Toys from "./Toys";

import Login from "./Login";

function App() {
  return (
    <Router basename="/amazon-clone">
      <div className="app">

        <Routes>

          <Route path="/login" element={<Login />} />

          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />

          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />

          <Route
            path="/deals"
            element={
              <>
                <Header />
                <Deals />
              </>
            }
          />

          <Route
            path="/mobiles"
            element={
              <>
                <Header />
                <Mobiles />
              </>
            }
          />

          <Route
            path="/electronics"
            element={
              <>
                <Header />
                <Electronics />
              </>
            }
          />

          <Route
            path="/fashion"
            element={
              <>
                <Header />
                <Fashion />
              </>
            }
          />

          <Route
            path="/home-kitchen"
            element={
              <>
                <Header />
                <HomeKitchen />
              </>
            }
          />

          <Route
            path="/computers"
            element={
              <>
                <Header />
                <Computers />
              </>
            }
          />

          <Route
            path="/books"
            element={
              <>
                <Header />
                <Books />
              </>
            }
          />

          <Route
            path="/gaming"
            element={
              <>
                <Header />
                <Gaming />
              </>
            }
          />

          <Route
            path="/beauty"
            element={
              <>
                <Header />
                <Beauty />
              </>
            }
          />

          <Route
            path="/sports"
            element={
              <>
                <Header />
                <Sports />
              </>
            }
          />

          <Route
            path="/groceries"
            element={
              <>
                <Header />
                <Groceries />
              </>
            }
          />

          <Route
            path="/vegetables"
            element={
              <>
                <Header />
                <Vegetables />
              </>
            }
          />

          <Route
            path="/appliances"
            element={
              <>
                <Header />
                <Appliances />
              </>
            }
          />

          <Route
            path="/furniture"
            element={
              <>
                <Header />
                <FurniturePage />
              </>
            }
          />

          <Route
            path="/toys"
            element={
              <>
                <Header />
                <Toys />
              </>
            }
          />

        </Routes>

      </div>
    </Router>
  );
}

export default App;