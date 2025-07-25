import React from "react";
import { assets } from "../../assets/assets";

const Navbar = ({setShowLogin}) => {
  return (
    <div className="mx-10 py-5 flex justify-between items-center px-20">
      <img src={assets.logo} className="w-40" alt="" id="logo" />
      <ul
        id="navbar-menu"
        className="flex list-none gap-10 font-semibold text-zinc-700"
      >
        <li className="active:underline-offset-4 cursor-pointer">Home</li>
        <li className="active:underline-offset-4 cursor-pointer">Menu</li>
        <li className="active:underline-offset-4 cursor-pointer">Mobile-app</li>
        <li className="active:underline-offset-4 cursor-pointer">Contact us</li>
      </ul>
      <div id="navbar-right" className="flex items-center gap-10">
        <img src={assets.search_icon} alt="" />
        <div id="navbar-search-icon" className="relative">
          <img src={assets.basket_icon} alt="" />
          <div id="dot" className="absolute min-w-2.5 min-h-2.5 bg-orange-600 rounded-full -top-[8px] -right-[8px]"></div>
        </div>
        <button className="bg-transparent text-md text-zinc-700 border-1 border-orange-600 rounded-full px-7.5 py-2.5 cursor-pointer hover:bg-orange-600 hover:text-white  transition-all 300" 
        onClick={() => setShowLogin(true)}>
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
