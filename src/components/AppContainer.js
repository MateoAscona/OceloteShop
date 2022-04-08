import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { useCartContext } from "./CartContext";

const AppContainer = () => {
  const { isOn } = useCartContext();
  return (
    <div className={`app${isOn}`}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default AppContainer;
