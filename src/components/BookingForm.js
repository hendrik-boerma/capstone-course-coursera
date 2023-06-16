import { useState, useEffect } from "react";
import { submitAPI, fetchAPI } from "../bookingsAPI";
import './BookingForm.css';

function BookingForm (props) {

    const [toggleButton, setToggleButton] = useState(false)

    const [inputValue, setInputValue] = useState({
        name: '',
        mail: '',
        date: '',
        time: '',
        guests: ''
    }
    )

    const [finalTime, setFinalTime] = useState();

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

    useEffect(() => {
        console.log(inputValue)
            if(inputValue.name === "" || inputValue.mail === "" || inputValue.date === "" || inputValue.time === "" || inputValue.guests === "") {
               setToggleButton(false)
            } else {
                setToggleButton(true)
            }
    }, [inputValue])


    const dateChange = event => {
        const newDate = event.target.value;
        props.updateTimes(fetchAPI(newDate));
    }

    useEffect(() => {
        setFinalTime(props.availableTimes?.map((times) => <option key={times}>{times}</option>));
      }, [props.availableTimes])

    const handleSubmit = event => {
        const formData = inputValue;
        submitAPI(formData)
        window.location.href = "/confirmation"
        event.preventDefault();
      }

    return (
        <main>
        <form id="form" onSubmit={handleSubmit}>
        <h2 data-testid="formtitle">Make reservation</h2>
            <label htmlFor="res-name">Name</label>
            <input type="text" id="res-name" name='name' value={inputValue.name} onChange={handleChange} required data-testid="name-element"/>
            <label htmlFor="res-mail">E-mail</label>
            <input type="email" id="res-mail" name='mail' value={inputValue.mail} onChange={handleChange} required data-testid="mail-element"/>
            <label htmlFor="res-date" >Choose date</label>
            <input type="date" id="res-date" name='date' min="2023-01-01" max="2024-12-31" value={inputValue.date} onChange={handleChange} required data-testid="date-element"/>
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" name='time' value={inputValue.time} onChange={handleChange} required data-testid="time-element">
                {finalTime}
            </select>
            <label htmlFor="res-guests">Number of guests</label>
            <select placeholder='' id="res-guests" name='guests' value={inputValue.guests} onChange={handleChange}  required data-testid="guests-element">
                {guests.map(guest => (
                    <option key={guest}>{guest}</option>
                ))}
            </select>
            <input className={toggleButton ? "button" : "hidden-button"} type="submit" value="Book" data-testid="submit-element"/>
        </form>
        </main>
    );
}

export default BookingForm