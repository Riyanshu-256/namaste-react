import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/api/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <header className="flex justify-between items-center px-[50px] py-2 bg-[#f8f8f8] shadow-lg rounded-[20px]">
      {/* Logo */}
      <div>
        <img
          src={LOGO_URL}
          alt="Food App Logo"
          className="w-[150px] h-[100px] cursor-pointer object-contain"
        />
      </div>

      {/* Nav */}
      <nav>
        <ul className="flex items-center gap-[35px] text-[18px] list-none m-0 p-0">
          {/* Online Status */}
          <li className="flex items-center gap-2 font-medium">
            Online Status:
            <span>{onlineStatus ? "🟢" : "🔴"}</span>
          </li>

          <li className="text-black font-medium cursor-pointer hover:text-orange-500 transition">
            <Link to="/">Home</Link>
          </li>

          <li className="text-black font-medium cursor-pointer hover:text-orange-500 transition">
            <Link to="/about">About</Link>
          </li>

          <li className="text-black font-medium cursor-pointer hover:text-orange-500 transition">
            <Link to="/contact">Contact</Link>
          </li>

          <li className="text-black font-medium cursor-pointer hover:text-orange-500 transition">
            <Link to="/grocery">Grocery</Link>
          </li>

          <li className="text-black font-medium cursor-pointer hover:text-orange-500 transition">
            Cart
          </li>

          {/* Login Button */}
          <button
            className="px-6 py-2 border border-gray-400 rounded-[5px] font-medium hover:bg-orange-500 hover:text-white transition"
            onClick={() =>
              setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login")
            }
          >
            {btnNameReact}
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
