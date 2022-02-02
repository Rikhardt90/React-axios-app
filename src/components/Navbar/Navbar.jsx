import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (<header>
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/characters">Characters</NavLink>
      <NavLink to="/locations">Locations</NavLink>
    </nav>
  </header>);
};

export default Navbar;
