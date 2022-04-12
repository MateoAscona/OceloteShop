import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import { useEffect } from "react";

const CartWidget = () => {
  const { cartQty, updateCartQty, cart } = useCartContext();
  useEffect(() => {
    updateCartQty();
  }, [cart]);
  if (cartQty === 0) {
    return <span></span>;
  } else {
    return (
      <Link to="/cart" className="cartWidget">
        <span className="material-icons nav-item">shopping_cart</span>
        <span>{cartQty}</span>
      </Link>
    );
  }
};

export default CartWidget;
