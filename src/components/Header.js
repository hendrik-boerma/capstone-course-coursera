import headerImage from '../images/restaurant chef B.jpg'
import './Header.css'
import { Link } from "react-router-dom";

function Header() {

    return(
        <>
        <header>
            <article>
                <h1>Little Lemon</h1>
                <p>
"A hidden gem of culinary delight, where vibrant flavors and warm hospitality converge to create an unforgettable dining experience."</p>
                <Link to='/booking' className='button'>Reserve a Table</Link>
            </article>
            <img src={headerImage} alt='Chef'/>
        </header>
        </>
    );
}

export default Header;