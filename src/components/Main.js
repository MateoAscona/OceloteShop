import React from "react";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import Cart from "./Cart";
import { Route, Routes } from "react-router-dom";
import Checkout from "./Checkout";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/category/:idCategory" element={<ItemListContainer />} />
      <Route path="/item/:itemId" element={<ItemDetailContainer />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
};

export default Main;
