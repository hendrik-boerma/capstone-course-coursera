import BookingForm from "../components/BookingForm";
import { useReducer } from "react";
import {fetchAPI} from '../bookingsAPI';

function BookingPage() {

    function updateTimes(date) {
        return fetchAPI(date);
      }

    const [availableTimes, dispatch] = useReducer(updateTimes, fetchAPI(new Date()));

    return (
        <BookingForm availableTimes={availableTimes} updateTimes={dispatch} />
    );
}

export default BookingPage