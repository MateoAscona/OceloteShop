import React from "react";
import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";

const themeContext = createContext();
const { Provider } = themeContext;

export const useThemeContext = () => useContext(themeContext);

const ThemeContextProvider = ({ children }) => {
  const [isOn, setIsOn] = useState("Light");

  const darkMode = () => {
    if (isOn === "Light") {
      setIsOn("Dark");
    } else {
      setIsOn("Light");
    }
  };

  const contextValue = {
    isOn,
    darkMode,
  };

  return <Provider value={contextValue}>{children}</Provider>;
};

export default ThemeContextProvider;
