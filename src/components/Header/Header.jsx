import React from "react";

const Header = () => {
  return (
    <div
      id="header"
      className=" h-[450px] max-[750px]:h-[300px]  bg-red-100 mx-10 my-auto bg-[url(/header_img.png)] bg-cover  rounded-4xl relative mt-5 xl:mx-20 lg:mx-15 md:mx-10 sm:mx-10"
    >
      <div
        id="header-content"
        className="absolute flex flex-col align-items-start gap-7 max-w-[80%] bottom-[10%] pl-20 text-white xl:max-w-[50%] lg:max-w-[50%] md:max-w-[65%]  sm:max-w-[80%] max-[750px]:pl-5"
      >
        <h2 className="xl:text-6xl lg:text-6xl font-medium text-shadow-lg md:text-4xl sm:text-4xl text-2xl">
          Order your <br /> favourite food here
        </h2>
        <p className="text-s font-semibold text-shadow-lg max-[750px]:hidden">
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with finest ingredients and culinary expertise. Our mission is
          to satify your cravings and elevate your dining experience, one
          dilicious meal at a time.{" "}
        </p>
        <button className="w-40 h-10 bg-white text-zinc-700 rounded-full ">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
