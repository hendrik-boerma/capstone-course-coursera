import logo from '../images/Logo.svg'

function Footer() {

    return(
        <>
        <footer>
            <div className='container'>
            <img src={logo} alt='little lemon logo' />
            <div>
                <h4>Navigation</h4>
                <p>Home</p>
                <p>About</p>
            </div>
            <div>
                <h4>Contact</h4>
                <p>Adress</p>
                <p>Phone number</p>
                <p>Email</p>
            </div>
            <div>
            <h4>Social media</h4>
                <p>Instagram</p>
                <p>Facebook</p>
            </div>
            </div>
        </footer>
        </>
    );
}

export default Footer;