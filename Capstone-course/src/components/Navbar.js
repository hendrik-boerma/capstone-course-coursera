import './Navbar.css';
import { Link } from "react-router-dom";
import logo from '../images/Logo.svg'
import { useState } from "react";

function Navbar () {

    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav>
      <div className='navheader'>
            <button  aria-label={toggleMenu ? "close menu" : "open menu"} id='hamburger' onClick={() => setToggleMenu(!toggleMenu)} >{toggleMenu ? "Close" : "Menu"}</button>
            <a href="/"><img src={logo} id='navlogo' alt="little lemon logo" /></a>
        </div>
      <ul id='openmenu' className={toggleMenu ? "navlist-mobile" : "navlist"} onClick={() => setToggleMenu(false)}>
        <Link href="/" to="/" className="nav-item">Home</Link>
        <Link href="/about" to="/about" className="nav-item">About</Link>
        <Link href="/menu" to="/menu" className="nav-item">Menu</Link>
        <Link href="/booking" to="/booking" className="nav-item">Reserve</Link>
      </ul>
    </nav>
    );
}

export default Navbar;