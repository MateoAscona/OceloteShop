import React from "react";
import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";

const cartContext = createContext();
const { Provider } = cartContext;

export const useCartContext = () => useContext(cartContext);

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartQty, setCartQty] = useState(0);

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

  const updateTotalPrice = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.qty;
    });
    return setTotalPrice(total);
  };

  const updateCartQty = () => {
    let qty = 0;
    cart.forEach((item) => {
      qty += item.qty;
    });
    return setCartQty(qty);
  };

  // DARK MODE
  const [isOn, setIsOn] = useState("Light");

  const darkMode = () => {
    if (isOn === "Light") {
      setIsOn("Dark");
    } else {
      setIsOn("Light");
    }
  };

  const contextValue = {
    cart,
    addToCart,
    cleanCart,
    removeFromCart,
    updateTotalPrice,
    totalPrice,
    updateCartQty,
    cartQty,

    // DARK MODE
    isOn,
    darkMode,
  };

  return <Provider value={contextValue}>{children}</Provider>;
};

export default CartContextProvider;
