import React from 'react'
import BarChart from '../chart/BarChart';
import SparkLineChart from '../chart/SparkLineChart';
import { faker } from '@faker-js/faker'

const options = {
    responsive: true,
    maintainAspectRation: false,
    plugins: {
        legend: {
            display:false
        }
    }
}

const OverviewGrowthLine = () => {
    const data = [45000, 43000, 55000, 64000, 43000, 47000, 78000];
    const labels = ['10AM', '12PM', '14PM', '16PM', '18PM', '20PM', '22PM',];
    const bgColor = 'rgba(159, 52, 225, 1)';
    const dotColor = 'purple';
    
  return (
    <div className='w-100 flex gap-20 justify-between mx-auto'>
        <SparkLineChart 
            dataSet={labels.map(() => faker.datatype.number({ min: 0, max: 5000 }))}
            bgColor={bgColor} 
            dotColor={dotColor}
            options={options}
            labelX={labels}
        />

        <BarChart 
            dataSet={labels.map(() => faker.datatype.number({ min: 0, max: 5000 }))}
            bgColor={bgColor} 
            dotColor={dotColor}
            options={options}
            labelX={labels}
        />
    </div>
  )
}

export default OverviewGrowthLine