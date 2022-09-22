import React from 'react'
import BarChart from '../chart/BarChart';
import SparkLineChart from '../chart/SparkLineChart'

const options = {
    maintainAspectRation: false,
    plugins: {
        legend: {
            display:false
        }
    }
}

const OverviewGrowthLine = () => {
    const data = [45000, 43000, 55000, 64000, 43000, 47000, 78000];
    const bgColor = 'rgba(159, 52, 225, 1)';
    const dotColor = 'purple';
    
  return (
    <div className='w-100 flex gap-20 justify-between mx-auto'>
        <SparkLineChart 
            // dataSet={data} 
            // bgColor={bgColor} 
            // dotColor={dotColor}
            // options={options}
            // labelX={['10AM', '12PM', '14PM', '16PM', '18PM', '20PM', '22PM',]}
        />

        <BarChart 
            // dataSet={data} 
            // bgColor={bgColor} 
            // dotColor={dotColor}
            // options={options}
            // labelX={['10AM', '12PM', '14PM', '16PM', '18PM', '20PM', '22PM',]}
        />
    </div>
  )
}

export default OverviewGrowthLine