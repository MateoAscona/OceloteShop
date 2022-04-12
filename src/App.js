import React from "react";
import { BrowserRouter } from "react-router-dom";
import CartContextProvider from "./context/CartContext";
import ThemeContextProvider from "./context/ThemeContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {
  return (
    <ThemeContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <Header />
          <Main />
          <Footer />
          <ToastContainer />
        </BrowserRouter>
      </CartContextProvider>
    </ThemeContextProvider>
  );
};

export default App;
