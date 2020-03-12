import React, { useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import Chart from "./Chart";

const Coin = (props) => {
    const [coin, setCoin] = useState({
        name: 'Initial',
        symbol: 'Coin'
    });
    const {coinId} = useParams();

    useEffect(() => {
        console.log('coin id is', coinId)
        const currentCoin = props.coinData.filter(coin => coin.id === coinId)[0]
        console.log(currentCoin);
        console.log(props.coinData)
        currentCoin ? setCoin(currentCoin): setCoin({ name: 'abc', symbol: 'x' });
    },[coinId])

    // const currentCoin = props.coinData.filter(coin => coin.id === 'bitcoin')[0]
    //     console.log(currentCoin);
 if(coin.image === undefined){
    return <div className='chart__container'>Click on Coin Tab</div>
 } else {
     return (
        <div className="chart__container" key={coin.name}>
            <h2 className="coin__title">{coin.name}</h2>
            <h4 className="coin__symbol">{coin.symbol}</h4>
            <div className="coin__logo">
            <img src={coin.image} height="40" alt={coin.name} />
            </div>
            <Chart sparklineData={coin.sparkline_in_7d.price} />
        </div>
      );
 }
};
export default Coin;