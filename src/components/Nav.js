import logo from '../images/Logo.svg'

function Nav() {

    function openMenu() {
    
    }

    return(
        <>
        <nav>
            <div className='navheader'>
            <button id='hamburger' onClick={openMenu}>Menu</button>
            <img src={logo} id='navlogo' alt="little lemon logo" />
            </div>
            <ul>
                <li><a href='/home'>HOME</a></li>
                <li><a href='/home'>ABOUT</a></li>
                <li><a href='/home'>MENU</a></li>
                <li><a href='/home'>RESERVATIONS</a></li>
                <li><a href='/home'>ORDER ONLINE</a></li>
                <li><a href='/home'>LOGIN</a></li>
            </ul>
        </nav>
        </>
    );
}

export default Nav;