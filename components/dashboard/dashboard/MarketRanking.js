import React from 'react'

const MarketRanking = ({ data }) => {
    console.log(data)
  return (
    <div className='w-full'>
        <table className="w-56">
            <thead className="">
                <tr>
                    <th className="font-normal text-center">Code</th>
                    <th className="font-normal text-center">Buy</th>
                    <th className="font-normal text-center">Sell</th>
                </tr>
            </thead>
            <tbody className="table-body mt-1">
                {data?.map((item, index) => (
                    <tr key={index} className="pt-1">
                        <td className="text-center">{item.market_cap_rank}</td>
                        <td className="text-center">{item.symbol.toUpperCase()}</td>
                        {item.market_cap_change_percentage_24h < 0 ? (
                            <td className="text-center red">{item.market_cap_change_percentage_24h}</td>
                        ) : (
                            <td className="text-center green">{item.market_cap_change_percentage_24h}</td>
                        )
                    }
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default MarketRanking