import { Routes, Route, useLocation } from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import Menu from '../pages/Menu';
import BookingPage from '../pages/BookingPage';
import BookingConfirmation from "../pages/BookingConfirmation";
import { useEffect } from "react";

function Routing () {

  const location = useLocation();

  useEffect(() => {
    console.log('Path changed:', location.pathname);
    return () => {
      window.scrollTo(0, 0);
    };
  }, [location.pathname]);

    return (
      <Routes basename="/capstone-course-coursera">
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/booking" element={<BookingPage/>} />
        <Route path="/confirmation" element={<BookingConfirmation />} />
      </Routes>
    );
}

export default Routing;