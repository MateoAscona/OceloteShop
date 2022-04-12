import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import Switch from "./Switch";
import { useThemeContext } from "../context/ThemeContext";


const Header = () => {
  const { isOn } = useThemeContext();
  return (
    <header className={`header-style${isOn}`}>
      <h1>
        <Link to="/" className="header__title">
          OceloteShop
        </Link>
        <img src={logo} alt="icon" />
      </h1>
      <Switch />
      <Nav />
    </header>
  );
};

export default Header;
