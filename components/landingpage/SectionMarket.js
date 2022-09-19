const SectionMarket = ({ data }) => {
    console.log(typeof(data.market_cap_change_percentage_24h))
    return (
        <div className="market-wrapper">
            <h2 className="title-head-sub text-center">Market Trends</h2>
            <p className="text-paragraph text-center mt-8 text-md">Providing the up to date market rank of all times around the world of crypto currentcy</p>
            <div className="card-realtime">
                <table className="table-market">
                    <thead className="table-head">
                        <tr>
                            <th className="head-item center">Rank</th>
                            <th className="head-item">Name</th>
                            <th className="head-item">Price</th>
                            <th className="head-item">Market Cap</th>
                            <th className="head-item center">24H</th>
                        </tr>
                    </thead>
                    <tbody className="table-body">
                        {data?.map((item, index) => (
                            <tr key={index} className="table-row">
                                <td className="body-item">{item.market_cap_rank}</td>
                                <td className="body-item left">{item.id + " - " + item.symbol.toUpperCase()}</td>
                                <td className="body-item left">{"$ " + item.current_price}</td>
                                <td className="body-item left">{"$ " + item.market_cap.toLocaleString()}</td>
                                {item.market_cap_change_percentage_24h < 0 ? (
                                    <td className="body-item red">{item.market_cap_change_percentage_24h}</td>
                                ) : (
                                    <td className="body-item green">{item.market_cap_change_percentage_24h}</td>
                                )
                            }
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SectionMarket;