import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Login from './pages/Login';
import Reservations from './pages/Reservations';
import Orderonline from './pages/Order online';
import BookingPage from './pages/BookingPage';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/menu" element={<Menu />}></Route>
      <Route path="/reservations" element={<Reservations />}></Route>
      <Route path="/orderonline" element={<Orderonline />}></Route>
      <Route path="/account" element={<Login />}></Route>
      <Route path="/booking" element={<BookingPage/>}></Route>
    </Routes>
    <Footer />
    </>
  );
}

export default App;
