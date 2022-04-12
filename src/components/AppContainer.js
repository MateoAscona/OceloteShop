import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { useThemeContext } from "../context/ThemeContext";

const AppContainer = () => {
  const { isOn } = useThemeContext();
  return (
    <div className={`app${isOn}`}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default AppContainer;
