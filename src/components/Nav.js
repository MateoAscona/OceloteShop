import React from "react";
import CartWidget from "./CartWidget";
import NavLinks from "./NavLinks";

const Nav = () => {
  return (
    <nav className="nav">
      <NavLinks />
      <CartWidget />
    </nav>
  );
};

export default Nav;
