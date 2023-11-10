import '../components/BookingForm.css';
import { Link } from "react-router-dom";

function BookingConfirmation() {
 
    return (
        <>
        <main>
        <div className='confirmation'>
            <h3>Thank you for your reservation!</h3>
            <Link to='/' className='button'>Go to homepage</Link>
        </div>
        </main>
        </>
    );
}

export default BookingConfirmation