import { useState, useEffect } from "react";
import { submitAPI, fetchAPI } from "../bookingsAPI";
import './BookingForm.css';
import { Link } from "react-router-dom";

function BookingForm (props) {

    const [toggleButton, setToggleButton] = useState(false)
    const [emailValidation, setEmailValidation]  = useState(false)

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

        if (event.target.name === "mail") {
            validateMail(event)
        }

    }

    useEffect(() => {
        setInputValue(prevInputValue => ({
            ...prevInputValue,
            time: ''
        }));
    }, [inputValue.date]);
    

    useEffect(() => {
            if(inputValue.name === "" || inputValue.mail === "" || inputValue.date === "" || inputValue.time === "" || inputValue.guests === "" || emailValidation === false) {
               setToggleButton(false)
            } else {
                setToggleButton(true)
            }
    }, [emailValidation, inputValue])

    const dateChange = event => {
        const newDate = event.target.value;
        props.updateTimes(fetchAPI(newDate));
    }

    const validateMail = (event) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        const isValidEmail = emailRegex.test(event.target.value);
    
        setEmailValidation(isValidEmail);
    };


    useEffect(() => {
        if (props.availableTimes) {
          const options = [
            <option key="default"></option>,
            ...props.availableTimes.map((times) => <option key={times}>{times}</option>)
          ];
      
          setFinalTime(options);
        }
      }, [props.availableTimes]);

    const handleSubmit = event => {
        const formData = inputValue;
        submitAPI(formData)
        event.preventDefault();
      }

    return (
        <main>
        <h2 data-testid="formtitle">Make a reservation</h2>
        <form id="form" onSubmit={handleSubmit}>
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
            <select id="res-guests" name='guests' value={inputValue.guests} onChange={handleChange}  required data-testid="guests-element">
                {guests.map(guest => (
                    <option key={guest}>{guest}</option>
                ))}
            </select>
            <Link to={toggleButton ? "/confirmation" : ""} className={toggleButton ? "button" : "hidden-button"} type="submit" value="Book" data-testid="submit-element">Book</Link>
        </form>
        </main>
    );
}

export default BookingForm