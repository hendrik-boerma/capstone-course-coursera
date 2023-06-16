import headerImage from '../images/restaurant chef B.jpg'
import './Header.css'

function Header() {

    return(
        <>
        <header>
            <article>
                <h1>Little Lemon</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a href='/booking' className='button'>Reserve a Table</a>
            </article>
            <img src={headerImage} alt='Chef'/>
        </header>
        </>
    );
}

export default Header;