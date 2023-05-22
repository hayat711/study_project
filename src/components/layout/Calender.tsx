//@ts-nocheck
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


type Props = {}

const Calender = (props: Props) => {
    const [value, onChange] = useState(new Date());

    const tileClassName = ({ date, view }) => {
        // Check if the date is today
        if (view === 'month' && date.toDateString() === new Date().toDateString()) {
          return 'bg-primary text-primary-content rounded-full';
        }
        // Return empty string for other dates
        return '';
      };
    
  return (
    <div>
        <Calendar onChange={onChange} value={value} 
        tileClassName={tileClassName}
        calendarType='US'
        />
    </div>
  )
}

export default Calender