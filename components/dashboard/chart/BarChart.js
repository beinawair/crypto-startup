import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend,
    BarElement
  } from 'chart.js';

ChartJS.register(
CategoryScale,
LinearScale,
PointElement,
BarElement,
Title,
Tooltip,
Legend
);

const BarChart = ({ dataSet, bgColor, dotColor, options, height, width, labelX }) => {
    const data = {
        labels: labelX,
        datasets: [
            {
            label: '',
            data: dataSet,
            fill: true,
            backgroundColor: dotColor,
            borderColor: bgColor,
            },
        ]
    };

  return (
    <div>
        <Bar 
            data={data} 
            options={options}
            height={height}
            width={width}
        />
    </div>
  )
}

export default BarChart