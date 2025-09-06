import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { storeContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, description, image, price }) => {
  
  const [itemCount, setItemCount] = useState(0);

  const {cartItem,addToCart, removeFromCart} = useContext(storeContext)

  return (
    <div id="food-item" className="w-full h-auto rounded-3xl shadow-lg overflow-hidden">
      <div className="relative" id="food-item-image-container">
        <img
          src={image}
          id="food-item-image"
          alt=""
          className="w-full rounded-t-lg object-cover "
        />
        {!cartItem[id] ? (
          <img
            className="w-[35px] absolute bottom-4 right-4 cursor-pointer rounded-full bg-white"
            id="add-icon"
            src={assets.add_icon_white}
            onClick={() => setItemCount(addToCart(id))}
          />
        ) : (
          <div className="absolute bottom-4 right-4 flex items-center p-1 gap-2 rounded-full bg-white">
            <img
              src={assets.remove_icon_red}
              onClick={() => setItemCount(removeFromCart(id))}
            />
            <p>{cartItem[id]}</p>
            <img
              src={assets.add_icon_green}
              onClick={() => setItemCount(addToCart(id))}
            />
          </div>
        )}
      </div>
      <div id="food-item-info" className="p-5">
        <div
          id="food-item-name-rating"
          className="flex items-center justify-between mb-2.5"
        >
          <p className="text-lg font-semibold">{name}</p>
          <img className="w-20" src={assets.rating_starts} alt="" />
        </div>
        <p id="food-item-desc" className="text-xs font-normal text-zinc-600">
          {description}
        </p>
        <p
          id="food-item-price"
          className="text font-semibold text-orange-600 my-1.5"
        >
          ${price}
        </p>
      </div>
    </div>
  );
};

export default FoodItem;
