import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div id="footer" className=" w-full flex flex-col justify-center items-center text-white bg-zinc-700 gap-5 px-20 py-5 pt-20">
      <div id="footer-content" className="w-full grid grid-cols-[2fr_1fr_1fr] gap-5">
        <div id="footer-content-left" className="flex flex-col items-start gap-5 ">
          <img src={assets.logo} alt="" />
          <p className="text-sm max-w-110">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            minima  molestias expedita odio animi, nisi illo! Fugit possimus
            dolorem illum?
          </p>
          <div id="footer-social-icon" className="flex gap-3">
            <img src={assets.facebook_icon} alt="" className="w-12 mr-2.5 cursor-pointer"/>
            <img src={assets.twitter_icon} alt=""  className="w-12 mr-2.5 cursor-pointer"/>
            <img src={assets.linkedin_icon} alt=""  className="w-12 mr-2.5 cursor-pointer"/>
          </div>
        </div>
        <div id="footer-content-center" className="flex flex-col items-start gap-5 ">
          <h2 className="text-xl font-bold">COMPANY</h2>
          <ul>
               <li>Home</li>
               <li>About us</li>
               <li>Delivery</li>
               <li>Privacy policy</li>
          </ul>
        </div>
        <div id="footer-content-right" className="flex flex-col items-start gap-5" >
          <h2 className="text-xl font-bold">GET IN TOUCH</h2>
          <ul>
               <li>+91-8988989889</li>
               <li>quickits@contact.com</li>
          </ul>
        </div>
      </div>
      <hr className="w-full h-[2px] my-5 mx-0 bg-zinc-400 border-none"/>
      <p id="footer-copyright">Copyright 2025 @ Tomato.com - All Right Reserved.</p>
    </div>
  );
};

export default Footer;
