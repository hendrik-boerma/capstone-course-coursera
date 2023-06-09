import BookingForm from "../components/BookingForm";
import { useReducer } from "react";
import {fetchAPI} from '../bookingsAPI';

function BookingPage() {
    function updateTimes(date) {
        return fetchAPI(date);
      }
    const output = fetchAPI(new Date());
    const [availableTimes, dispatch] = useReducer(updateTimes, output);

    return (
        <BookingForm availableTimes={availableTimes} updateTimes={dispatch}/>
    );
}

export default BookingPage