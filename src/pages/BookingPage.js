import BookingForm from "../components/BookingForm";
import { useReducer } from "react";

function BookingPage () {

    const updateTimes = (state, action) => {
        if ( action.type === 'date_change' ) return ['17:00', '17:30', '18:00']
        return state
    }

    const initializeTimes =  ['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30']
    const [state, dispatch] = useReducer(updateTimes, initializeTimes);

    return (
        <BookingForm times={state} dispatch={dispatch}/>
    );
}

export default BookingPage