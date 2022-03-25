import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import CartContextProvider from "./components/CartContext";


const App = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Header />
        <Main />
        <ToastContainer />
      </BrowserRouter>
    </CartContextProvider>
  );
};

export default App;
