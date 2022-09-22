import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { MdKeyboard, MdKeyboardArrowDown } from 'react-icons/md';
import SparkLineChart from '../components/dashboard/chart/SparkLineChart';
import CoinCard from '../components/dashboard/dashboard/CoinCard';
import MarketRanking from '../components/dashboard/dashboard/MarketRanking';
import OverviewGrowthLine from '../components/dashboard/dashboard/OverviewGrowthLine';
import Layout from '../components/dashboard/Layout';
import SectionMarket from '../components/landingpage/SectionMarket';
import SEOHead from '../components/landingpage/SEO/SEOHead';
import { coinOwned, SparklineAreaData, summaryFilter } from '../config/const';
import { useStateContext } from '../contexts/ContextProvider';
import { useSession } from 'next-auth/react';
import Router from 'next/router';

const siteURL = "http://localhost:3000/dashboard"

const EndPoint = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=9&page=1&sparkline=false';

export default function Dashboard() {
    const [coins, setCoins] = useState([]);
    const { activeMenu } = useStateContext();
    const { status } = useSession();

    const structuredLd = JSON.stringify({
        "@context": siteURL,
        "description": "Wiki Buy, Sell and Swap Cryptocurrentcy Web App"
    });

    useEffect(() => {
        axios.get(EndPoint)
          .then(res => {
            if (res.status == 200) {
                setCoins(res.data);
            } else {
              return null;
            }
          }).catch(err => {
            console.log(err);
          })

          console.log(EndPoint)
      }, []);

    useEffect(() => {
        if (status === "unauthenticated") Router.replace("/auth/signin");
    });
    
    if (status === "authenticated")
    return (
        <div>
            <SEOHead 
                canonicalUrl={siteURL}
                structuredData={structuredLd}
                title="Wiki | Dashboard"
                description="Buy, sell and Swap Cryptocurrentcy in minutes"
                ogType="WebApp"
            />
            <Layout>
                <div className="mt-6 flex mx-auto w-auto">
                    <div className="flex w-full items-start gap-4 mx-auto">
                        <div className="flex w-100 h-screen max-w-70 flex-col flex-shrink">
                            <div className="rounded-xl bg-[#23212B] w-100 p-8 px-10">
                                <div className="flex items-center justify-between">
                                    <h3 className='text-xl font-light mb-8'>Summary</h3>
                                    <ul className="flex gap-4 items-center text-sm">
                                        {summaryFilter?.map((data, i) => (
                                            <li key={i}>{data.text}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="flex">
                                    <OverviewGrowthLine />
                                    <div className="flex"></div>
                                </div>
                            </div>
                            <div className="mt-5 flex justify-between w-full">
                                <div className="flex w-100">
                                    <div>
                                        <h3 className='text-xl font-light mb-5'>Coin Owned</h3>
                                        <div className="flex gap-4 flex-wrap">
                                            {/* <CoinCard data={coinOwned} /> */}
                                        </div>
                                    </div>
                                </div>
                                <div className='flex-grow'>
                                    <h3 className='text-xl font-light mb-5'>Market Trends</h3>
                                    <div className="p-4 px-6 bg-[#23212B] rounded-xl w-100">
                                        <MarketRanking data={coins} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-8 px-10 w-100 max-w-30 rounded-xl bg-[#23212B] h-screen">
                            <div className="flex flex-col">
                                <h3 className='text-md font-light'>Total Balance</h3>
                                <p className='text-2xl font-medium text-white'>$41,251.06</p>
                                <span className='w-[60px] rounded-full text-xs flex items-center justify-center font-bold p-1 mt-2 mb-2 bg-green-300 text-green-700'>+9.08%</span>
                            </div>
                            <div className="w-48 flex mx-auto my-10">
                                <div className="h-[1px] bg-gray-600 w-full"></div>
                            </div>
                            <div className="flex flex-col">
                                <h3 className='text-md font-light'>Recent Activities</h3>
                                <p className='text-gray-500'>No data found</p>
                            </div>
                            <div className="w-48 flex mx-auto my-10">
                                <div className="h-[1px] bg-gray-600 w-full"></div>
                            </div>
                            <div className="flex w-48 flex-col mx-auto">
                                <h3 className='text-md font-light mb-8'>Convert</h3>
                                <div className="flex rounded-xl mb-4">
                                    <input type="number" placeholder='enter amount' value="1000" className='bg-gray-700 outline-0 px-4 rounded-xl -mr-10'/>
                                    <button className="px-2 bg-[#4A5BF4] flex items-center gap-2 rounded-xl">USD <span><MdKeyboardArrowDown /></span></button>
                                </div>
                                <div className="flex w-48 rounded-xl mx-auto">
                                    <input type="number" placeholder='enter amount' value="0.305157" className='bg-gray-700 outline-0 px-4 rounded-xl -mr-10'/>
                                    <button className="px-2 bg-[#4A5BF4] flex items-center gap-2 rounded-xl">ETH <span><MdKeyboardArrowDown /></span></button>
                                </div>
                                <button type='button' className='bg-[#9F34E1] mt-4 p-1 px-0 rounded-xl'>Convert</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );

    return <div>loading</div>
}