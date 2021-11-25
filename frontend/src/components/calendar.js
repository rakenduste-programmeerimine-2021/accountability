import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./calendar.css";

const locales = {
    // Meie asukoha aeg
    "et": require("date-fns/esm/locale/et"),
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const events = [
    {
        title: "Suur kodutöö",
        // allDay: true,
        start: new Date(2021, 10, 20),
        end: new Date(2021, 10, 20), // juuli on kuues
    },
    {
        title: "Kodutöö",
        start: new Date(2021, 6, 7),
        end: new Date(2021, 6, 10),
    },
    {
        title: "Osta poest jahu",
        start: new Date(2021, 6, 20),
        end: new Date(2021, 6, 23),
    },
];

let formats = {
    timeGutterFormat: 'HH:mm',
  }

function CalendarSample() {
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(events);

    function handleAddEvent() {
        setAllEvents([...allEvents, newEvent]);
    }

    return (
        <div className="Calendar">
            <h1>Calendar</h1>
            <h2>Add New Event</h2>

            <div>
                <input type="text" placeholder="Add Title" style={{ width: "20%", marginRight: "10px" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                <DatePicker placeholderText="Start Date" style={{ marginRight: "10px" }} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
                <DatePicker placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
                <button stlye={{ marginTop: "10px" }} onClick={handleAddEvent}>
                    Add Event
                </button>
            </div>
            <Calendar 
                // views={['month', 'week', 'day']}
                defaultDate={new Date()}
                defaultView="week"
                localizer={localizer} 
                events={allEvents} 
                formats={formats}
                startAccessor="start" 
                endAccessor="end" 
                style={{ height: 500, margin: "50px" }} 
                dateFormat={''}
                // timeslots={1}
                selectable={true}
            />
        </div>
    );
}

export default CalendarSample;
