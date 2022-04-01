import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <nav className="nav-item">
      <NavLink to={`/category/Processor`} className="a__nav-item">
      Processor
      </NavLink>
      <NavLink to={`/category/Motherboard`} className="a__nav-item">
      Motherboard
      </NavLink>
      <NavLink to={`/category/RAM`} className="a__nav-item">
      RAM
      </NavLink>
      <NavLink to={`/category/SSD`} className="a__nav-item">
      SSD
      </NavLink>
      <NavLink to={`/category/HDD`} className="a__nav-item">
      HDD
      </NavLink>
    </nav>
  );
};

export default NavLinks;
