import BookingForm from "../components/BookingForm";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { submitAPI, fetchAPI } from "../bookingsAPI";

function BookingPage() {

    const [availableTimes, setAvailableTimes] = useState(fetchAPI(new Date()));
    const navigate = useNavigate();
    const handleSubmit = event => {
        submitAPI()
        navigate('/confirmation')
        event.preventDefault();
      }

    return (
        <BookingForm availableTimes={availableTimes} updateTimes={setAvailableTimes} submit={handleSubmit} />
    );
}

export default BookingPage