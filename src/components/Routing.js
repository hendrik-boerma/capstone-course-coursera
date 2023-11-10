import { Route, Routes } from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import Menu from '../pages/Menu';
import BookingPage from '../pages/BookingPage';
import BookingConfirmation from "../pages/BookingConfirmation";

function Routing () {

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