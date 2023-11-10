import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import Menu from '../pages/Menu';
import BookingPage from '../pages/BookingPage';
import BookingConfirmation from "../pages/BookingConfirmation";

function Routing() {
  return (
    <Router basename="/capstone-course-coursera">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/confirmation" element={<BookingConfirmation />} />
      </Routes>
    </Router>
  );
}

export default Routing;