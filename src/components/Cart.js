import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "./CartContext";
import TotalPrice from "./TotalPrice";
import { pushOrder } from "../firebase/dbFunctions";

const Cart = () => {
  const { cart, removeFromCart, cleanCart, totalPrice } =
    useCartContext();

    const orderData = {
      buyer: {
        name: "Juan",
        phone: "123456789",
        email: "juan@coder.com"
      },
      items: cart,
      total: totalPrice,
    };

  const onSubmit = (e) => {
    pushOrder(orderData);
    cleanCart();
  };


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
        <button>
          <Link className="checkoutButton" to={"/checkout"} onClick={()=>{onSubmit()}}>
            Checkout
          </Link>
        </button>
      </div>
    );
};

export default Cart;
