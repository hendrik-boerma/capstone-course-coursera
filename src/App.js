import './App.css';
import logo from './images/Logo.svg'
import Home from './components/Home';
import { Routes, Route, Link } from "react-router-dom";
import About from './components/About';

function App() {

  function openMenu() {
  }

  return (
    <>
    <nav>
      <div className='navheader'>
            <button id='hamburger' onClick={openMenu}>Menu</button>
            <img src={logo} id='navlogo' alt="little lemon logo" />
            </div>
      <div className='navlist'>
        <Link to="/" className="nav-item">HOME</Link>
        <Link to="/about" className="nav-item">ABOUT</Link>
        <Link to="/menu" className="nav-item">MENU</Link>
        <Link to="/reservations" className="nav-item">RESERVATIONS</Link>
        <Link to="/orderonline" className="nav-item">ORDER ONLINE</Link>
        <Link to="/account" className="nav-item">LOGIN</Link>
      </div>
    </nav>
      <Routes>
      <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </>
  );
}

export default App;
