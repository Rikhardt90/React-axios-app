import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (<header>
    <nav>
      <NavLink className="nav-link" to="/">Home</NavLink>
      <NavLink className="nav-link" to="/characters">Characters</NavLink>
      <NavLink className="nav-link" to="/locations">Locations</NavLink>
    </nav>
  </header>);
};

export default Navbar;
