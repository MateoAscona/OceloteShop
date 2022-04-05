import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useCartContext } from "./CartContext";
import { pushOrder } from "../firebase/dbFunctions";

const Checkout = () => {
  const { cart, totalPrice, cleanCart } = useCartContext();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [orderId, setOrderId] = useState("");

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePhone = (e) => {
    setPhone(e.target.value);
  };

  const orderData = {
    buyer: {
      name: name,
      phone: phone,
      email: email,
    },
    items: cart,
    total: totalPrice,
  };

  const onSubmit = (e) => {
    e.preventDefault();
    pushOrder(orderData).then((res) => {
      setOrderId(res);
    });
    cleanCart();
    setEmail("");
    setName("");
    setPhone("");
  };

  if (cart.length !== 0) {
    return (
      <>
        <h1>Add purchase data</h1>
        <form action="">
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => {
              updateName(e);
            }}
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => {
              updateEmail(e);
            }}
          />
          <input
            type="text"
            placeholder="Phone"
            onChange={(e) => {
              updatePhone(e);
            }}
          />

          <input
            type="submit"
            value="Submit"
            onClick={(e) => {
              onSubmit(e);
            }}
          />
        </form>
        <button>
          <Link to="/">Back to the store</Link>
        </button>
      </>
    );
  } else {
    return (
      <>
        <h2>Thank for buying!</h2>
        <p>
          Your but order is <b>{orderId}</b>
        </p>
      </>
    );
  }
};

export default Checkout;
