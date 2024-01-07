import React, { useContext, useEffect, useState } from "react";
import { cartContext } from "../Provider/CartProvider";
import Ordered from "./Ordered";

const Cart = () => {
  const { cartItems, removeItemCart,setEnter } = useContext(cartContext);
  const [totalCost, setTotalCost] = useState(0);
  useEffect(()=>{
    setEnter(true);
  },[])
  if (cartItems.length === 0) {
    return (
      <div className="mx-4 p-10">
        <h1 className="app_food_headtext">CART</h1>
        <div className="app_cart_headtext_border"></div>
        <div className="flex justify-center items-center">
        <p className="mt-6 text-3xl">You haven't selected any items.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-4 p-10">
      <h1 className="app_food_headtext">CART</h1>
      <div className="app_cart_headtext_border"></div>
      <div className="mt-6 flex gap-4">
        <div className="p-5 bg-[#F1D5BB] rounded-3xl flex-1 flex flex-col gap-y-4">
          {cartItems.map((item, index) => (
            <Ordered
              item={item}
              removeItemCart={removeItemCart}
              cartItems={cartItems}
              totalCost={totalCost}
              setTotalCost={setTotalCost}
              key={index}
            ></Ordered>
          ))}
        </div>

        <div className="py-5 px-10 bg-[#F1D5BB] rounded-3xl">
          <div className="w-[250px] flex flex-col justify-center">
            <h1 className="text-center text-5xl font-bold">Bill</h1>
            <div className="h-[1px] w-full bg-black mt-5 "></div>
            <p>Items: {cartItems.length}</p>
            <p className="text-xl  mt-5">Items total price: {totalCost} tk</p>
            <p className="text-xl  ">Service charge: 100 tk</p>
            <div className="h-[1px] w-full bg-black mt-5 "></div>
            <p className="text-3xl mt-5 mb-5">Total: {totalCost + 100} tk.</p>
            <button className="w-full bg-black text-[#fff] text-xl py-5 px-10 rounded-md">
              Confirm Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
