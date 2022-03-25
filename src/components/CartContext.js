import React from "react";
import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react/cjs/react.production.min";

const cartContext = createContext();
const { Provider } = cartContext;

export const useCartContext = () => useContext(cartContext);

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartItems, setCartItems] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const itemExist = (id) => {
    cart.some((item) => item.id === id);
  };

  const addToCart = (product, qty) => {
    const itemToCart = { ...product, qty };
    const cartCopy = [...cart];
    if (itemExist(itemToCart.id)) {
      const index = cart.findIndex((item) => item.id === product.id);

      cartCopy[index].qty += qty;
      setCart(cartCopy);
    } else {
      cartCopy.push(itemToCart);
      setCart(cartCopy);
    }
  };

  const removeFromCart = (id) => {};

  const cleanCart = () => {
    setCart = [];
  };

  const cartQty = () => {
    let qty = 0;
    cart.forEach((item) => (qty = item.qty));
    return qty;
  };
  const contextValue = {
    cart,
    cartItems,
    cartTotal,
    addToCart,
    cleanCart,
    cartQty,
    removeFromCart
  };

  return <Provider value={contextValue}>{children}</Provider>;
};

export default CartContextProvider;
