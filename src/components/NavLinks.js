import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <nav className="nav-item">
      <NavLink to={`/category/Drama`} className="a__nav-item">
        Drama
      </NavLink>
      <NavLink to={`/category/Comedy`} className="a__nav-item">
        Comedy
      </NavLink>
      <NavLink to={`/category/Thriller`} className="a__nav-item">
        Thriller
      </NavLink>
      <NavLink to={`/category/Action`} className="a__nav-item">
        Action
      </NavLink>
      <NavLink to={`/category/Documentary`} className="a__nav-item">
        Documentary
      </NavLink>
    </nav>
  );
};

export default NavLinks;
