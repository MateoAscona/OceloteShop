import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useCartContext } from "./CartContext";
import TotalPrice from "./TotalPrice";

const Cart = () => {
  const { cart, removeFromCart, cleanCart, totalPrice, updateTotalPrice } =
    useCartContext();

  if (cart.length === 0)
    return (
      <div className="emptyCartContainer">
        <h1>Cart is empty</h1>
        <p>Add something to cart</p>
        <Link className="backButton" to={"/"}>
          Back to the store
        </Link>
      </div>
    );
  else
    return (
      <div className="cartTableContainer">
        <table className="cartTable">
          <thead className="cartThead">
            <tr>
              <th>Title</th>
              <th>Image</th>
              <th>Quantity</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody className="cartBody">
            {cart.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>
                    <img src={item.image} alt={item.title}></img>
                  </td>
                  <td>{item.qty}</td>
                  <td>
                    <button
                      className="cartButton"
                      onClick={() => {
                        removeFromCart(item.id);
                      }}
                    >
                      X
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <TotalPrice />
        <button
          className="cleanButton"
          onClick={() => {
            cleanCart();
          }}
        >
          Clean Cart
        </button>
      </div>
    );
};

export default Cart;
