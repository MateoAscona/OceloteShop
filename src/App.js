import React from "react";
import { BrowserRouter } from "react-router-dom";
import CartContextProvider from "./context/CartContext";
import AppContainer from "./components/AppContainer";
import ThemeContextProvider from "./context/ThemeContext";

const App = () => {
  return (
    <ThemeContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <AppContainer />
        </BrowserRouter>
      </CartContextProvider>
    </ThemeContextProvider>
  );
};

export default App;
