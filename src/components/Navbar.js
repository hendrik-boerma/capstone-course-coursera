import { Link } from "react-router-dom";
import logo from '../images/Logo.svg'
import { useState } from "react";

function Navbar () {

    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav>
      <div className='navheader'>
            <button id='hamburger' onClick={() => setToggleMenu(!toggleMenu)} >{toggleMenu ? "Close" : "Menu"}</button>
            <a href="/"><img src={logo} id='navlogo' alt="little lemon logo" /></a>
        </div>
      <ul id='openmenu' className={toggleMenu ? "navlist-mobile" : "navlist"} onClick={() => setToggleMenu(false)}>
        <Link to="/" className="nav-item">HOME</Link>
        <Link to="/about" className="nav-item">ABOUT</Link>
        <Link to="/menu" className="nav-item">MENU</Link>
        <Link to="/reservations" className="nav-item">RESERVATIONS</Link>
        <Link to="/booking" className="nav-item">BOOK</Link>
      </ul>
    </nav>
    );
}

export default Navbar;