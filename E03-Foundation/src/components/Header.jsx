// Header.jsx is the top part of the website that contains the logo and navigation items
// like Home, About, and Cart. It appears on every page.

import { LOGO_URL } from "../utils/constants";

// Header Component
const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};

// Export Header component so it can be used in other files
export default Header;
