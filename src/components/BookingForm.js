import { useState, useEffect } from "react";
import { fetchAPI } from "../bookingsAPI";
import './BookingForm.css';

function BookingForm (props) {

    const [inputValue, setInputValue] = useState({
        name: '',
        mail: '',
        date: '',
        time: '',
        guests: ''
    }
    )

    const [finalTime, setFinalTime] = useState(
    props.availableTimes.map((times) => <option key={times}>{times}</option>)
    );

    let guests = ['','1','2','3','4','5','6','7','8'];

    const handleChange = event => {
        const value = event.target.value;
        setInputValue({
            ...inputValue,
            [event.target.name]: value
        });

        if (event.target.name === "date") {
            dateChange(event)
        }
    }

    const dateChange = event => {
        const newDate = event.target.value;
        props.updateTimes(fetchAPI(newDate));
    }

    useEffect(() => {
        setFinalTime(props.availableTimes.map((times) => <option key={times}>{times}</option>));
      }, [props.availableTimes])

    return (
        <main>
        <form id="form" onSubmit={props.submit}>
        <h2>Make reservation</h2>
            <label htmlFor="res-name">Name</label>
            <input type="text" id="res-name" name='name' value={inputValue.name} onChange={handleChange} required/>
            <label htmlFor="res-mail">E-mail</label>
            <input type="email" id="res-mail" name='mail' value={inputValue.mail} onChange={handleChange} required />
            <label htmlFor="res-date" >Choose date</label>
            <input type="date" id="res-date" name='date' min="2023-01-01" max="2024-12-31" value={inputValue.date} onChange={handleChange} required/>
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" name='time' data-testid="timeoptions" value={inputValue.time} onChange={handleChange} required>
                {finalTime}
            </select>
            <label htmlFor="res-guests">Number of guests</label>
            <select placeholder='' id="res-guests" name='guests' value={inputValue.guests} onChange={handleChange}  required>
                {guests.map(guest => (
                    <option key={guest}>{guest}</option>
                ))}
            </select>
            <input className="button" type="submit" value="Book" />
        </form>
        </main>
    );
}

export default BookingForm