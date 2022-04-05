import React from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <>
      <h1>Thanks for buying!</h1>
      <button>
        <Link to="/">Back to the store</Link>
      </button>
    </>
  );
};

export default Checkout;
