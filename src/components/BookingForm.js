import { useState } from "react";

function BookingForm () {

    const [availableTimes] = useState(['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30'])
    const [inputValue, setInputValue] = useState({
        name: '',
        date: '',
        time: '',
        guests: ''
    }
    )

    const handleChange = event => {
        const value = event.target.value;
        setInputValue({
            ...inputValue,
            [event.target.name]: value
        });
    }
    const handleSubmit = event => {
        alert(`Thank you for your reservation ${inputValue.name}! \n\n Date: ${inputValue.date} \n Time: ${inputValue.time} \n Guests: ${inputValue.guests}`)
        setInputValue({name: 'Enjoy your reservation!'})
        event.preventDefault();
      }

    return (
        <main>
        <form onSubmit={handleSubmit}>
            <label htmlFor="res-name">Name</label>
            <input  type="text" id="res-name" name='name' value={inputValue.name} onChange={handleChange} required/>
            <label htmlFor="res-date" >Choose date</label>
            <input type="date" id="res-date" name='date' min="2023-01-01" max="2024-12-31" value={inputValue.date} onChange={handleChange} required/>
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" name='time' value={inputValue.time} onChange={handleChange} required>
                <option hidden selected></option>
                <option>{availableTimes[0]}</option>
                <option>{availableTimes[1]}</option>
                <option>{availableTimes[2]}</option>
                <option>{availableTimes[3]}</option>
                <option>{availableTimes[4]}</option>
                <option>{availableTimes[5]}</option>
                <option>{availableTimes[6]}</option>
                <option>{availableTimes[7]}</option>
            </select>
            <label htmlFor="res-guests">Number of guests</label>
            <select placeholder='' id="res-guests" name='guests' value={inputValue.guests} onChange={handleChange} required>
                <option hidden selected></option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
            </select>
            <input class='button' type="submit" value="Book" />
        </form>
        </main>
    );
}

export default BookingForm