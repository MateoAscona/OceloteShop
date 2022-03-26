import React from "react";
import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";

const cartContext = createContext();
const { Provider } = cartContext;

export const useCartContext = () => useContext(cartContext);

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const itemExist = (id) => {
    return cart.some(function (item) {
      return item.id === id;
    });
  };

  const addToCart = (item, qty) => {
    const cartCopy = [...cart];
    const itemToCart = { ...item, qty };
    if (itemExist(item.id)) {
      const index = cart.findIndex((i) => i.id === item.id);

      cartCopy[index].qty += qty;
      setCart(cartCopy);
    } else {
      cartCopy.push(itemToCart);
      setCart(cartCopy);
    }
  };

  const removeFromCart = (id) => {
    const cartCopy = [...cart];
    const index = cart.findIndex((i) => i.id === id);
    cartCopy.splice(index, 1);
    setCart(cartCopy);
  };

  let cleanCart = () => {
    setCart([]);
  };

  const contextValue = {
    cart,
    addToCart,
    cleanCart,
    removeFromCart,
  };

  return <Provider value={contextValue}>{children}</Provider>;
};

export default CartContextProvider;
