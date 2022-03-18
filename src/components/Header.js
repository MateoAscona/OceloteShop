import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="header-style">
      <h1>
        <Link to="/" className="header__title">
          OceloteShop
        </Link>
      </h1>
      <Nav />
    </header>
  );
};

export default Header;
