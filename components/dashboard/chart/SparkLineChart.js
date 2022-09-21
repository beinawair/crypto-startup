import React from 'react';
import { Line } from 'react-chartjs-2';
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

ChartJS.register(
CategoryScale,
LinearScale,
PointElement,
LineElement,
Title,
Tooltip,
Legend
);

const SparkLineChart = ({ dataSet, bgColor, dotColor, options, height, width, labelX }) => {
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
        <Line 
            data={data} 
            options={options}
            height={height}
            width={width}
        />
    </div>
  )
}

export default SparkLineChart