import logo from '../images/Logo.svg'
import './Footer.css'
import { Link } from "react-router-dom";

function Footer() {

    return(
        <>
        <footer>
            <div className='container'>
            <Link to='/'><img src={logo} alt='little lemon logo' /></Link>
            <div>
                <h4>Contact</h4>
                <p>331 North Street <br></br> London E24 8QB</p>
                <p>info@littlelemon.com</p>
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