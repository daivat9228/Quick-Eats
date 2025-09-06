import React from "react";
import { menu_list } from "../../assets/assets"; 

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div
      id="explore-menu"
      className="flex flex-col gap-5 pt-15 mx-10 xl:mx-20 lg:mx-15 md:mx-10 sm:mx-10"
    >
      <h1 className="font-bold text-4xl text-zinc-800">Explore our menu</h1>
      <p className="text-md font-semibold text-zinc-800">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt illum
        deleniti laborum.
      </p>
      <div
        id="explore-menu-list"
        className="flex items-center justify-between text-center gap-7.5 mx-0 my-5 overflow-x-scroll overflow-auto scrollbar-hide"
      >
        {menu_list.map((item, index) => {
          return (
            <div
              key={index}
              id="explore-menu-list-item"
              className=""
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "all" : item.menu_name
                )
              }
            >
              <img
                src={item.menu_image}
                className={`w-[7.5vw] min-w-[80px] cursor-pointer  rounded-full transition 200 active:border-3  p-1 active:border-orange-500 ${
                  category === item.menu_name
                    ? "border-[4px] border-[tomato] p-[2px]"
                    : ""
                }`}
              />
              <p
                className={`font-medium text-lg  cursor-pointer  py-1 ${
                  category === item.menu_name
                    ? "text-orange-500"
                    : "text-zinc-700"
                }`}
              >
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>
      <hr className="my-2 mx-0 h-0.5 border-none bg-zinc-300" />
    </div>
  );
};

export default ExploreMenu;
