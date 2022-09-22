import Image from 'next/image'
import React from 'react'
import SparkLineChart from '../chart/SparkLineChart'

const optionsCoinOwned = {
    scales: {
        y: {
            grid: {
                display: false
            },
            ticks: {
                display: false
            }
        },
        x: {
            grid: {
                display: false
            },
            ticks: {
                display: false
            }
        }
    },
    plugins: {
        legend: {
            display:false
        }
    }
};


const CoinCard = ({ data }) => {
  return (
    <>
        {data?.map((item, i) => (
            <div key={i} className={'flex flex-col gap-4 w-35 h-25 p-4 rounded-xl ' + item.background}>
                <div className="flex items-center gap-4">
                    <Image src={item.icon} alt={item.coinName} height={50} width={50} />
                    <div className="flex flex-col">
                        <p className='text-gray-700 font-bold'>{item.coinName}</p>
                        <p className='text-xs text-gray-500 font-normal'>{item.coinExchange}</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex flex-col">
                        <div className={'w-[70px] rounded-full text-xs flex items-center justify-center font-bold p-2 mb-2 ' + item.bgText + ' ' + item.color}>{item.value}</div>
                        <p className="text-xl font-bold text-gray-700">{item.currentCoin}</p>
                    </div>
                    {/* <SparkLineChart 
                        dataSet={''} 
                        bgColor={item.lineChartColor} 
                        dotColor={item.dotColor}
                        options={optionsCoinOwned}
                        height='72px'
                        width='75px'
                        labelX={[1,2,3,4,5,6]}
                    /> */}
                </div>
            </div>
        ))}
    </>
  )
}

export default CoinCard