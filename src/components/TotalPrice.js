import React from "react";
import { useEffect } from "react";
import { useCartContext } from "../context/CartContext";

const TotalPrice = () => {
  const { cart, updateTotalPrice, totalPrice } = useCartContext();
  useEffect(() => {
    updateTotalPrice();
  }, [cart]);

  return <p className="totalPrice">Total: ${totalPrice}</p>;
};

export default TotalPrice;
