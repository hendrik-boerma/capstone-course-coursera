import BookingForm from "../components/BookingForm";
import { useState } from "react";
import {fetchAPI} from '../bookingsAPI';

function BookingPage() {

    const [availableTimes, setAvailableTimes] = useState(fetchAPI(new Date()));

    return (
        <BookingForm availableTimes={availableTimes} updateTimes={setAvailableTimes} />
    );
}

export default BookingPage