import headerImage from '../images/restaurant chef B.jpg'
import './Header.css'

function Header() {

    return(
        <>
        <header>
            <article>
                <h1>Little Lemon</h1>
                <p>
"A hidden gem of culinary delight, where vibrant flavors and warm hospitality converge to create an unforgettable dining experience."</p>
                <a href='/booking' className='button'>Reserve a Table</a>
            </article>
            <img src={headerImage} alt='Chef'/>
        </header>
        </>
    );
}

export default Header;