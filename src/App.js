import React from "react";
import { BrowserRouter } from "react-router-dom";
import CartContextProvider from "./components/CartContext";
import AppContainer from "./components/AppContainer";

const App = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <AppContainer />
      </BrowserRouter>
    </CartContextProvider>
  );
};

export default App;
