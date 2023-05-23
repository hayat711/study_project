//@ts-nocheck
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type Props = {};

const Calender = (props: Props) => {
    const [value, onChange] = useState(new Date());
    return (
        <div>
            <Calendar
                onChange={onChange}
                value={value}
                calendarType='KO'
                defaultActiveStartDate={new Date()}
                onClickDay={(value: Date, event: React.MouseEvent<HTMLDivElement, MouseEvent>) => alert(value)}
                selectRange={true}
                formatDay={(locale, date) => date.toLocaleString('en', { day: 'numeric' })}
            />
        </div>
    );
};

export default Calender;
