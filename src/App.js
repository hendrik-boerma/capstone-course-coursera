import './App.css';
import logo from './images/Logo.svg'
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Login from './pages/Login';
import Reservations from './pages/Reservations';
import Orderonline from './pages/Order online';

function App() {

  function openMenu() {
  }

  return (
    <>
    <nav>
      <div className='navheader'>
            <button id='hamburger' onClick={openMenu}>Menu</button>
            <a href="/"><img src={logo} id='navlogo' alt="little lemon logo" /></a>
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
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/reservations" element={<Reservations />}></Route>
        <Route path="/orderonline" element={<Orderonline />}></Route>
        <Route path="/account" element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default App;
