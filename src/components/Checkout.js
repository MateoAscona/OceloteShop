import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useCartContext } from "./CartContext";
import { pushOrder } from "../firebase/dbFunctions";
import logo from "../logo.png";

const Checkout = () => {
  const { cart, totalPrice, cleanCart, isOn } = useCartContext();
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
      <div className={`checkoutContainer${isOn}`}>
        <h1>Add purchase data</h1>
        <form action="">
          <input
            className="formInput"
            type="text"
            placeholder="Name"
            required
            minLength={3}
            maxLength={15}
            onChange={(e) => {
              updateName(e);
            }}
          />
          <input
            className="formInput"
            type="email"
            placeholder="Email"
            onChange={(e) => {
              updateEmail(e);
            }}
          />
          <input
            className="formInput"
            type="text"
            placeholder="Phone"
            required
            minLength={8}
            onChange={(e) => {
              updatePhone(e);
            }}
          />

          <input
            className="defaultButton"
            type="submit"
            value="Submit"
            onClick={(e) => {
              onSubmit(e);
            }}
          />
        </form>
        <Link to="/" className="deleteButtons">
          Back to the store
        </Link>
      </div>
    );
  } else {
    return (
      <div className={`thanksContainer${isOn}`}>
        <h2>Thank for buying!</h2>
        <img src={logo} alt="logo" />
        <p>
          Purchase order code: <b>{orderId}</b>
        </p>
      </div>
    );
  }
};

export default Checkout;
