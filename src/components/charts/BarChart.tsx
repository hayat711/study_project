'use client'
import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { day: 'Monday', hours: 4 },
    { day: 'Tuesday', hours: 2 },
    { day: 'Wednesday', hours: 2 },
    { day: 'Thursday', hours: 5 },
    { day: 'Friday', hours: 3 },
    { day: 'Saturday', hours: 4 },
    { day: 'Sunday', hours: 1 },
];

class BarChartCard extends PureComponent {
    render() {
        return (
            <div className='bg-base-100 rounded-lg shadow-lg h-full'>
                <h3 className='text-lg font-medium mb-1'>Task Hours per Day</h3>
                <ResponsiveContainer width='100%' height={300}>
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray='2 2' />
                        <XAxis dataKey='day' />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey='hours' fill='#d884b8' />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        );
    }
}

export default BarChartCard;
