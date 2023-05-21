'use client'
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Attendance',
      data: [5, 8, 7, 4, 9], 
      borderColor: 'blue',
      backgroundColor: 'rgba(53, 39, 114, 0.5)',
    },
  ],
};


type Props = {}

const AttendanceChart = (props: Props) => {
  return (
    <div>
        <Line options={options} data={data} />
    </div>
  )
}

export default AttendanceChart
