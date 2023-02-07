import { useState } from 'react'
import Calendar from 'react-calendar'


function CalView() {
    const [selectedDate, setSelectedDate] = useState(new Date())

    const tileContent = ({ date, view }) => view === 'month' && date === selectedDate ? <p>Selected date</p> : null;

    console.log(selectedDate)


    return (
    <div className="calendar">
        <h1 className='text-center'>React Calendar</h1>
        <div className='calendar-container'>
            <Calendar onChange={setSelectedDate} value={selectedDate} tileContent={tileContent} />
        </div>
        <p className='text-center'>
            <span className='bold'>Selected Date:</span>{' '}
            {selectedDate.toDateString()}
        </p>
        </div>
    );
}

export default CalView
