import React from "react";


const Header = () => {
  return (
    <div id="header" className=" h-[450px] bg-red-100 mx-20 my-auto bg-[url(/header_img.png)] bg-cover  rounded-4xl relative mt-5 ">
      <div id="header-content" className="absolute flex flex-col align-items-start gap-7 max-w-[50%] bottom-[10%] pl-20 text-white ">
        <h2 className="text-6xl font-medium text-shadow-lg ">Order your <br /> favourite food here</h2>
        <p className="text-s font-semibold text-shadow-lg ">
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with finest ingredients and culinary expertise. Our mission is
          to satify your cravings and elevate your dining experience, one
          dilicious meal at a time. {" "}
        </p>
        <button className="w-40 h-10 bg-white text-zinc-700 rounded-full  ">View Menu</button>
      </div>
    </div>
  );
};

export default Header;
