// Header.jsx is the top part of the website that contains the logo and navigation items
// like Home, About, and Cart. It appears on every page.

import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";

//------------------------------------------------------------useEffect Hook dependency concept in React -------------------------------------//

// if no dependency array => useEffect is called on every render.
// useEffect(() => {
//   console.log("useEffect Called");
// });

// if dependency array is empty [] => useEffect is called only once when the page/component opens.
// useEffect(() => {
//   console.log("useEffect Called");
// }, []);

// if dependency array is [btnNameReact] => called everytime when btnNameReact is updated
useEffect(() => {
  console.log("useEffect Called");
}, [btnNameReact]);

//--------------------------------------------------------HEADER COMPONENT----------------------------------------------------//

// Header Component
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
          alt="Food delivery app logo"
          title="Food Delivery App"
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

// Export Header component so it can be used in other files
export default Header;
