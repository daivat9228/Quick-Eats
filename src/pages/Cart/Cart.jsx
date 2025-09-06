import React, { useContext } from "react";
import { storeContext } from "../../context/StoreContext";
import { MdDeleteForever } from "react-icons/md";

const Cart = () => {
  const { cartItem, removeFromCart, food_list, getCartAmount } = useContext(storeContext);

  const subtotal = getCartAmount();
  const deliveryFee = subtotal > 0 ? 2 : 0; // if cart empty => no delivery fee
  const total = subtotal + deliveryFee;

  return (
    <div className="mt-25 mx-30 mb-20 max-md:mx-7" id="cart">
      <div id="cart-items">
        <div
          id="cart-items-title"
          className="grid grid-cols-6 items-center text-gray-500 font-semibold"
        >
          <p className="flex justify-center">Items</p>
          <p className="flex justify-center">Title</p>
          <p className="flex justify-center">Price</p>
          <p className="flex justify-center">Quantity</p>
          <p className="flex justify-center">Total</p>
          <p className="flex justify-center">Remove</p>
        </div>
        <br />
        <hr className="bg-gray-400 border-none h-[1px]" />
        {food_list.map((item) => {
          if (cartItem[item._id] > 0) {
            return (
              <div key={item._id}>
                <div className="grid grid-cols-6 items-center text-gray-800 font-semibold mt-1.5 mb-1.5">
                  <img src={item.image} alt="" className="w-[50px]" />
                  <p className="flex justify-center">{item.name}</p>
                  <p className="flex justify-center">{item.price}</p>
                  <p className="flex justify-center">{cartItem[item._id]}</p>
                  <p className="flex justify-center">
                    $ {item.price * cartItem[item._id]}
                  </p>
                  <p
                    className="cursor-pointer flex justify-center text-red-600"
                    onClick={() => removeFromCart(item._id)}
                  >
                    <MdDeleteForever />
                  </p>
                </div>
                <hr className="bg-gray-300 border-none h-[1px]" />
              </div>
            );
          }
        })}
      </div>

      {/* cart bottom */}
      <div
        id="card-bottom"
        className="flex justify-between mt-10 mx-5 gap-[max(12vw,20px)] max-md:flex-col-reverse max-md:width[100%]"
      >
        <div id="cart-total" className="flex-1 flex flex-col gap-5 mb-5">
          <h2 className="text-2xl font-bold">Cart Totals</h2>
          <div>
            <div className="flex justify-between items-center mt-2">
              <p>Subtotal</p>
              <p>${subtotal}</p>
            </div>
            <hr className="bg-gray-300 border-none h-[1px]" />
            <div className="flex justify-between items-center mt-2">
              <p>Delivery fee</p>
              <p>${deliveryFee}</p>
            </div>
            <hr className="bg-gray-300 border-none h-[1px]" />
            <div className="flex justify-between items-center mt-2 font-semibold">
              <p>Total</p>
              <p>${total}</p>
            </div>
          </div>
          <button className="border-none text-white bg-orange-600 py-3 px-0 rounded-sm w-[max(15vw,200px)]">
            PROCEED TO CHECKOUT
          </button>
        </div>

        <div id="cart-promocode" className="flex-1 flex flex-col max-md:justify-start">
          <div>
            <p className="text-gray-800">If you have a promo code, Enter it here</p>
            <div>
              <input
                type="text"
                placeholder="Promo code"
                className="mt-2.5 border-none bg-gray-200 text-sm p-2 w-[max(10vw,200px)]"
              />
              <button className="border-none text-white bg-black text-sm p-2 w-[max(5vw,100px)]">
                Submit
              </button>
            </div>
          </div>
          <div>
            <p className="text-gray-700 mt-3 text-sm">
              Need help?{" "}
              <span className="text-gray-800 hover:text-orange-600 cursor-pointer font-semibold">
                Contact us
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
