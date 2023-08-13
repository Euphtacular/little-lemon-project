import { useState } from "react";
import { Link } from "react-router-dom";

export default function BookingForm(props) {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const [availableTimes, setAvailableTimes] = useState(
        props.availableTimes.map((times) => <option>{times}</option>) );

        function handleDateChange(e) {
            setDate(e.target.value);
        
            var stringify = e.target.value;
            const date = new Date(stringify);
        
            props.updateTimes(date);
        
            setAvailableTimes(props.availableTimes.map((times) => <option>{times}</option>));
          }
        

return (
<form>
   <label htmlFor="res-date">Choose date</label>
   <input
   type="date"
   id="res-date"
   value={date}
   onChange={(e) => setDate(e.target.value)} />
   <label htmlFor="res-time">Choose time</label>
   <select
   id="res-time"
   value={time}
   onChange={(e) => setTime(e.target.value)}>
    {availableTimes}
   </select>
   <label htmlFor="guests">Number of guests</label>
   <input
   type="number"
   placeholder="1"
   min="1"
   max="10"
   id="guests"
   value={guests}
   onChange={(e) => setGuests(e.target.value)} />
   <label htmlFor="occasion">Occasion</label>
   <select
   id="occasion"
   value={occasion}
   onChange={(e) => setOccasion(e.target.value)}>
      <option>None</option>
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Engagement</option>
          <option>Other</option>
   </select>
   <div>
        <br></br>
        <small>
          <p>
            Note: You cannot edit your reservation after submission. Please
            double-check your answer before submitting your reservation request.
          </p>
        </small>
        <Link className="action-button" to="/reserve-confirmation">
          Book Table
        </Link>
      </div>
</form> )}