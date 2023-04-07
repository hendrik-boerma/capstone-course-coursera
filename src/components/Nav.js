import logo from '../images/Logo.svg'

function Nav() {

    return(
        <>
        <nav>
            <img src={logo} alt="little lemon logo" />
            <ul>
                <li><a href='/home'>Home</a></li>
            </ul>
        </nav>
        </>
    );
}

export default Nav;