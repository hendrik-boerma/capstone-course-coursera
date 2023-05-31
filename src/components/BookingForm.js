import { useState, useReducer } from "react";
import './BookingForm.css'

function BookingForm () {

    let guests = ['','1','2','3','4','5','6','7','8'];

    const [inputValue, setInputValue] = useState({
        name: '',
        date: '',
        time: '',
        guests: ''
    }
    )

    const initializeTimes = ['', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30'];

    const updateTimes = (times, action) => {
        if (action.type === "2023-05-01") {
            return ['', '17:00', '17:30', '18:00']
        }
        else {
            return initializeTimes;
        }
    }

    const [times, dispatch] = useReducer(updateTimes, initializeTimes);

    const handleChange = event => {
        const value = event.target.value;
        setInputValue({
            ...inputValue,
            [event.target.name]: value
        });
        dispatch({type: inputValue.date});
    }

    const handleSubmit = event => {
        document.getElementById('confirmation').style.display = 'flex';
        document.getElementById('form').style.display = 'none'
        event.preventDefault();
      }

    return (
        <main>
        <div id="confirmation">
            <h2 >Thank you for your reservation {inputValue.name}!</h2>
            <p>
                <span>Date: <br/>{inputValue.date}</span>
                <span>Time: <br/>{inputValue.time}</span>
                <span>Guests: <br/>{inputValue.guests}</span>
            </p>
        </div>
        <form id="form" onSubmit={handleSubmit}>
        <h2>Make reservation</h2>
            <label htmlFor="res-name">Name</label>
            <input  type="text" id="res-name" name='name' value={inputValue.name} onChange={handleChange} required/>
            <label htmlFor="res-mail">E-mail</label>
            <input type="email" id="res-mail" name='mail' onChange={handleChange} required />
            <label htmlFor="res-date" >Choose date</label>
            <input type="date" id="res-date" name='date' min="2023-01-01" max="2024-12-31" value={inputValue.date} onChange={handleChange} required/>
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" name='time' data-testid="timeoptions" value={inputValue.time} onChange={handleChange} required>
                {times.map(time => (
                        <option key={time}>{time}</option>
                    ))}
            </select>
            <label htmlFor="res-guests">Number of guests</label>
            <select placeholder='' id="res-guests" name='guests' value={inputValue.guests} onChange={handleChange}  required>
                {guests.map(guest => (
                    <option key={guest}>{guest}</option>
                ))}
            </select>
            <input className='button' type="submit" value="Book" />
        </form>
        </main>
    );
}

export default BookingForm