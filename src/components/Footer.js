import React from "react";
import {useThemeContext} from "../context/ThemeContext";

const Footer = () => {
  const { isOn } = useThemeContext();
  return (
    <footer className={`footer${isOn}`}>
      <p>Contact</p>
      <p>About us</p>
      <p>Social Networks</p>
    </footer>
  );
};

export default Footer;
