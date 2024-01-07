import React, { Children, createContext, useState } from "react";
import Swal from "sweetalert2";
export const cartContext = createContext(null);
const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (item) => {
    const itemCheck = cartItems.some((cartItem) => cartItem.id === item.id);
    if (!itemCheck) {
      setCartItems([...cartItems, item]);
      Swal.fire({
        title: "Thank You!",
        text: `The ${item.productName} is now in cart.`,
        icon: "success"
      });
    } else {
      Swal.fire({
        title: "Cancelled",
        text: `The ${item.productName} is already in cart.`,
        icon: "error",
      });
    }
  };
  const removeItemCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
    Swal.fire({
      title: "Removed",
      text: `This food is removed from the cart.`,
      icon: "error",
    });
  };
  const state = {
    cartItems,
    addToCart,
    removeItemCart,
  };
  return <cartContext.Provider value={state}>{children}</cartContext.Provider>;
};

export default CartProvider;
