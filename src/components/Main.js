import React from "react";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import Cart from "./Cart";
import { Route, Routes } from "react-router-dom";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/category/:idCategory" element={<ItemListContainer />} />
      <Route path="/item/:movieId" element={<ItemDetailContainer />} />
    </Routes>
  );
};

export default Main;
