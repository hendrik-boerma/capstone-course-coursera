import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/Logo.svg";
import "./Navbar.css";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav>
      <div className="navheader">
        <button
          aria-label={toggleMenu ? "close menu" : "open menu"}
          id="hamburger"
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          {toggleMenu ? "Close" : "Menu"}
        </button>
        <Link to="/">
          <img src={logo} id="navlogo" alt="little lemon logo" />
        </Link>
      </div>
      <ul
        id="openmenu"
        className={toggleMenu ? "navlist-mobile" : "navlist"}
        onClick={() => setToggleMenu(false)}
      >
        <Link to="/" className="nav-item">
          Home
        </Link>
        <Link to="/about" className="nav-item">
          About
        </Link>
        <Link to="/menu" className="nav-item">
          Menu
        </Link>
        <Link to="/booking" className="nav-item">
          Reserve
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;