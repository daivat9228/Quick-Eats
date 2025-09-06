import React, { useContext, useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import { Link, useLocation } from "react-router-dom";
import { storeContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const location = useLocation();
  const [menu, setMenu] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  const {getCartAmount} = useContext(storeContext);

  // update active tab based on current path
  useEffect(() => {
    const path = location.pathname.replace("/", "") || "home";
    setMenu(path);
    // close mobile menu when route changes
    setMobileOpen(false);
  }, [location]);

  // close mobile menu if window resized to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="relative">
      <div className="py-5 flex items-center justify-between mx-10 xl:mx-20 lg:mx-15 md:mx-10 sm:mx-10">
        {/* Logo */}
        <Link to="/" onClick={() => setMobileOpen(false)} className="flex items-center">
          <img
            src={assets.logo}
            alt="Logo"
            id="logo"
            className="w-35 sm:w-35 md:w-40 lg:w-45"
          />
        </Link>

        {/* Desktop menu: visible >= md */}
        <nav className="hidden md:flex md:items-center md:gap-8 lg:gap-10 font-semibold text-zinc-700">
          <Link to="/" className={`cursor-pointer ${menu === "home" ? "underline underline-offset-4 text-orange-600" : ""}`}>Home</Link>
          <Link to="/menu" className={`cursor-pointer ${menu === "menu" ? "underline underline-offset-4 text-orange-600" : ""}`}>Menu</Link>
          <Link to="/mobile-app" className={`cursor-pointer ${menu === "mobile-app" ? "underline underline-offset-4 text-orange-600" : ""}`}>Mobile App</Link>
          <Link to="/contact-us" className={`cursor-pointer ${menu === "contact-us" ? "underline underline-offset-4 text-orange-600" : ""}`}>Contact Us</Link>
        </nav>

        {/* Right side: icons + button + mobile hamburger */}
        <div className="flex items-center gap-3 md:gap-6">
          <img src={assets.search_icon} alt="Search" className="w-4 md:w-5 lg:w-6" />

          <Link to="/cart" className="relative">
            <img src={assets.basket_icon} alt="Cart" className="w-4 md:w-5 lg:w-6" />
            <span className={getCartAmount() > 0 ? "absolute w-2.5 h-2.5 bg-orange-600 rounded-full -top-1.5 -right-1.5" : ""} />
          </Link>

          {/* Sign In: hide or shrink on very small screens if you want */}
          <button
            onClick={() => setShowLogin(true)}
            className="hidden sm:inline-flex items-center bg-transparent text-sm md:text-base text-zinc-700 border border-orange-600 rounded-full px-4 py-2 hover:bg-orange-600 hover:text-white transition"
            aria-label="Sign In"
          >
            Sign In
          </button>

          {/* Hamburger for mobile (visible < md) */}
          <button
            className="md:hidden p-2 rounded-md inline-flex items-center justify-center"
            onClick={() => setMobileOpen((s) => !s)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {/* simple icon */}
            <svg className="w-6 h-6 text-zinc-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu panel (visible < md when mobileOpen true) */}
      <div className={`md:hidden transition-max-height duration-300 ease-in-out overflow-hidden ${mobileOpen ? "max-h-[400px]" : "max-h-0"}`}>
        <nav className="bg-white px-4 pt-2 pb-6 border-t border-zinc-200">
          <ul className="flex flex-col gap-3 text-zinc-700 font-semibold">
            <li>
              <Link to="/" onClick={() => setMobileOpen(false)} className={`block ml-2 py-2 ${menu === "home" ? "text-orange-600" : ""}`}>Home</Link>
            </li>
            <li>
              <Link to="/menu" onClick={() => setMobileOpen(false)} className={`block ml-2 py-2 ${menu === "menu" ? "text-orange-600" : ""}`}>Menu</Link>
            </li>
            <li>
              <Link to="/mobile-app" onClick={() => setMobileOpen(false)} className={`block ml-2 py-2 ${menu === "mobile-app" ? "text-orange-600" : ""}`}>Mobile App</Link>
            </li>
            <li>
              <Link to="/contact-us" onClick={() => setMobileOpen(false)} className={`block ml-2 py-2 ${menu === "contact-us" ? "text-orange-600" : ""}`}>Contact Us</Link>
            </li>
            <li>
              <button onClick={() => { setShowLogin(true); setMobileOpen(false); }} className="w-auto text-left bg-transparent border border-orange-600 rounded-full px-5 py-0.5 ml-2">Sign In</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
