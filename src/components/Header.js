import headerImage from '../images/restaurant chef B.jpg'

function Header() {

    return(
        <>
        <header>
            <article>
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button className='button'>Reserve a Table</button>
            </article>
            <img src={headerImage} alt='Chef'/>
        </header>
        </>
    );
}

export default Header;