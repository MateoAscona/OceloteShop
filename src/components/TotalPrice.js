import React from "react";
import { useEffect } from "react";
import { useCartContext } from "./CartContext";

const TotalPrice = () => {
  const { cart, updateTotalPrice, totalPrice } = useCartContext();
  useEffect(() => {
    updateTotalPrice();
  }, [cart]);

  return <div>{totalPrice}</div>;
};

export default TotalPrice;
