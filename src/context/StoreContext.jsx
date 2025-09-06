import React, { createContext, useState } from "react";
import { food_list } from "../assets/assets";

export const storeContext = createContext(null);

const StoreContext = ({ children }) => {

  const [cartItem, setCartItem] = useState({})

  const addToCart = (itemId) => {
    if(!cartItem[itemId]){
      setCartItem((prev) => ({...prev, [itemId]:1}))
    } else {
      setCartItem((prev) => ({...prev, [itemId]:prev[itemId]+1}))
    }
  }

  const removeFromCart = (itemId) => {
    setCartItem((prev) => ({...prev, [itemId]:prev[itemId]-1}))
  }
  
  const getCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        const itemInfo = food_list.find((product) => product._id === item);
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItem[item];
        }
      }
    }
    return totalAmount;
  };

  const contextValue = {
    food_list,
    cartItem,
    setCartItem,
    addToCart,
    removeFromCart,
    getCartAmount
  };

  return (
    <storeContext.Provider value={contextValue}>
      {children}
    </storeContext.Provider>
  );
};

export default StoreContext;


// import { createContext } from "react";
// import { food_list } from "../assets/assets";

// export const StoreContext = createContext( );

// const StoreContextProvider = ({ children }) => {
//   const contextValue = {
//      food_list
//   };
//   return (
//     <StoreContextProvider value={contextValue}>{children}</StoreContextProvider>
//   );
// };

// export default StoreContextProvider;