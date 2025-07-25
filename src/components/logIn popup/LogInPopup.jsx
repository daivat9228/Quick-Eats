import React, { useState } from "react";
import { assets } from "../../assets/assets";

const LogInPopup = ({ setShowLogin }) => {
  const [crrStatus, setCrrStatus] = useState("Sign Up");

  return (
    <div
      id="login-popup"
      className="fixed z-[1] w-full h-full  backdrop-blur-xs  grid"
    >
      <form
        id="login-popup-container"
        className="place-self-center w-[max(23vw,330px)] text-zinc-600 bg-white flex flex-col gap-6 rounded-lg p-6"
      >
        <div
          id="login-pop-title"
          className="flex items-center justify-between font-bold text-lg"
        >
          <h2>{crrStatus}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="close icon"
            className="w-4 h-4 cursor-pointer"
          />
        </div>
        <div id="loin-popup-inputs" className="flex flex-col gap-4">
          {crrStatus === "Sign Up" ? (
            <input
              type="text"
              placeholder="your name"
              required
              className="outline-none border-1 p-2.5 border-zinc-400 rounded-md"
            />
          ) : (
            <></>
          )}
          <input
            type="email"
            placeholder="your email"
            required
            className="outline-none border-1 p-2.5  border-zinc-400 rounded-md"
          />
          <input
            type="password"
            placeholder="password"
            required
            className="outline-none border-1 p-2.5  border-zinc-400 rounded-md"
          />
        </div>
        <button className="border-none p-2.5 rounded-md text-white bg-orange-600 font-medium cursor-pointer ">
          {crrStatus === "Sign Up" ? "Create accont" : "Login"}
        </button>
        <div
          id="login-popup-condition"
          className="flex items-start gap-2 -mt-4"
        >
          <input type="checkbox" required className="mt-1" />
          <p className="text-sm ">
            By continuing, I agree to the terms of use & privacy policy
          </p>
        </div>
        {crrStatus === "Sign Up" ? (
          <p onClick={() => setCrrStatus("login")} className="text-sm ">
            Already have an account?{" "}
            <span className="text-orange-600 font-semibold cursor-pointer">
              Login here
            </span>
          </p>
        ) :
        (
          <p onClick={() => setCrrStatus("Sign Up")} className="text-sm ">
            Create a new account?{" "}
            <span className="text-orange-600 font-semibold cursor-pointer">
              Click here
            </span>
          </p>
        )  }
      </form>
    </div>
  );
};

export default LogInPopup;
