import { BiHomeAlt } from 'react-icons/bi';
import { RiExchangeLine } from 'react-icons/ri';
import { BsFileBarGraph } from 'react-icons/bs';
import { MdOutlineAutoGraph } from 'react-icons/md';
import { SiMarketo } from 'react-icons/si';
import { CgProfile } from 'react-icons/cg';
import { BsTelephoneFill } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';
import { AiOutlineLogout } from 'react-icons/ai';

export const links = [
    {
        title: 'Dashboard',
        name: 'Dashboard',
        icon: <BiHomeAlt />
    },
    {
        title: 'Exchange',
        name: 'Exchange',
        icon: <RiExchangeLine />
    },
    {
        title: 'Portofolio',
        name: 'Portofolio',
        icon: <BsFileBarGraph />
    },
    {
        title: 'Statistic',
        name: 'Statistic',
        icon: <MdOutlineAutoGraph />
    },
    {
        title: 'Market',
        name: 'Market',
        icon: <SiMarketo />
    },
  ];

  export const linkSettings = [
    {
        title: 'Profile',
        name: 'Profile',
        icon: <CgProfile />
    },
    {
        title: 'Help',
        name: 'Help',
        icon: <BsTelephoneFill />
    },
    {
        title: 'Settings',
        name: 'Settings',
        icon: <FiSettings />
    },
    {
        title: 'Logout',
        name: 'Logout',
        icon: <AiOutlineLogout />
    },
  ];

  export const SparklineAreaData = [
    { x: 1, y: 2 },
    { x: 2, y: 6 },
    { x: 3, y: 8 },
    { x: 4, y: 5 },
    { x: 5, y: 10 },
  ];

  export const coinOwned = [
    {
        coinName: 'Ethereum - ETH',
        coinExchange: 'Etheruem - USD',
        currentCoin: '343.444 ETH',
        value: '+2.08%',
        icon: '/image/currentcy/cryptocurrency_eth.svg',
        background: 'bg-green-300',
        bgText: 'bg-green-400',
        color: 'text-green-800',
        data: [12,23,34,45,56,78],
        lineChartColor: 'rgba(42,190,47,1)',
        dotColor: 'green',

    },
    {
        coinName: 'Bitcoin - BTC',
        coinExchange: 'Bitcoin - USD',
        currentCoin: '343.444 BTC',
        value: '+4.08%',
        icon: '/image/currentcy/cryptocurrency_btc.svg',
        background:'bg-green-300',
        bgText: 'bg-green-400',
        color: 'text-green-800',
        data: [12,53,34,45,56,78],
        lineChartColor: 'rgba(42,190,47,1)',
        dotColor: 'green',
    },
    {
        coinName: 'Binance - BNB',
        coinExchange: 'Binance - USD',
        currentCoin: '343.444 BNB',
        value: '+3.08%',
        icon: '/image/currentcy/cryptocurrency_bnb.svg',
        background: 'bg-green-300',
        bgText: 'bg-green-400',
        color: 'text-green-800',
        data: [12,23,34,75,56,78],
        lineChartColor: 'rgba(42,190,47,1)',
        dotColor: 'green',
    },
    {
        coinName: 'Solana - SOL',
        coinExchange: 'Solana - USD',
        currentCoin: '343.444 SOL',
        value: '-2.08%',
        icon: '/image/currentcy/cryptocurrency_solana.svg',
        background: 'bg-red-300',
        bgText: 'bg-red-400',
        color: 'text-red-800',
        data: [12,23,34,45,96,58],
        lineChartColor: 'rgba(210,78,78,1)',
        dotColor: 'red',
    },
  ];

  export const summaryFilter = [
    {
        text: '1M',
        desc: '1 Minute'
    },
    {
        text: '15M',
        desc: '15 Minutes'
    },
    {
        text: '1H',
        desc: '1 Hour'
    },
    {
        text: '1M',
        desc: '1 Minute'
    },
    {
        text: '2H',
        desc: '2 Hours'
    },
    {
        text: '1D',
        desc: '1 Day'
    },
    {
        text: '1W',
        desc: '1 Week'
    },
  ];