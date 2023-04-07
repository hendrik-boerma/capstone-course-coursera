import logo from '../images/Logo.svg'

function Footer() {

    return(
        <>
        <footer>
            <img src={logo} alt='little lemon logo' />
            <div>
                <h3>Navigation</h3>
                <p>Home</p>
                <p>About</p>
            </div>
            <div>
                <h3>Contact</h3>
                <p>Adress</p>
                <p>Phone number</p>
                <p>Email</p>
            </div>
            <div>
            <h3>Social media</h3>
                <p>Instagram</p>
                <p>Facebook</p>
            </div>
        </footer>
        </>
    );
}

export default Footer;