// THIS FILE STORES REACT CODE

import React from "react";
import ReactDOM from "react-dom/client";

//-------------------------------------------------------PLANNING---------------------------------------------------------//
/*
# HEADER COMPONENT
   - Logo
  - Nav Items

# BODY
  -Search
  -RestContainer
  -Rest Card
    * Img
    * Name of rest, rating, cuisine, delivery time etc

# FOOTER
  -Copyright
  -Links
  -Address
  -Contact 
*/
//----------------------------------------------------------------------------------------------------------------------------------//

// Header Component
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.pikbest.com/png-images/20241111/-22creative-food-logo-collection-for-culinary-brands-22_11079861.png!sw800"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  return (
    <div className="rest-card">
      <img
        className="card1-img"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/10/4/e52a21e2-9c0f-4cb2-8aa3-f072f92966ad_a18c3569-8e06-4c6a-84bf-67fa5a25be54.jpg"
      />
      <h3>{props.resName}</h3>
      <h4>{props.cuisine}</h4>
      <h4>{props.star}</h4>
      <h4>{props.duration}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="rest-container">
        <RestaurantCard
          resName="Meghana Foods"
          cuisine="Briyani, North Indian, Asian"
          star="4.4"
          duration="34 minutes"
        />
        <RestaurantCard
          resName="KFC"
          cuisine="Burger, Fast Food, South Korean"
          star="4.2"
          duration="32 minutes"
        />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

// Applayout Component contains all components of planning
const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

// 2. Class Based Component => Old way of writing code of component
