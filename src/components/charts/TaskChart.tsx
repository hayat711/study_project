'use client'
import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Assignment } from '@/utils/types.dt';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Task Hours per Day',
        },
    },
};
const labels = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Task Hours per Day',
            data: [4, 6, 2, 5, 3, 7, 1],
            borderWidth: 1,
            backgroundColor: '#ec6c97',
        },
        
    ],
};

type Props = {
    assignment?: Assignment;
};

const TaskChart = (props: Props) => {
    return (
        <div >
            <Bar options={options} data={data} />
        </div>
    );
};

export default TaskChart;
