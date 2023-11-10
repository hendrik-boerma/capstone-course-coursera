import { Routes, Route  } from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import Menu from '../pages/Menu';
import BookingPage from '../pages/BookingPage';
import BookingConfirmation from "../pages/BookingConfirmation";

function Routing () {

    return (
        <Routes basename="/capstone-course-coursera/">
        <Route path="/capstone-course-coursera/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/booking" element={<BookingPage/>}></Route>
        <Route path="/confirmation" element={<BookingConfirmation />}></Route>
      </Routes>
    );
}

export default Routing;