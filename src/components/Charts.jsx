import React from "react";

import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'

const Charts = ({ coinData }) => {
  return (
    <div className="charts">
      {/* {coinData.map(coin => (
        <div className="chart__container" key={coin.name}>
          <h2 className="coin__title">{coin.name}</h2>
          <h4 className="coin__symbol">{coin.symbol}</h4>
          <div className="coin__logo">
            <img src={coin.image} height="40" alt={coin.name} />
          </div>
          <Chart sparklineData={coin.sparkline_in_7d.price} />
        </div>
      ))} */}
      {coinData.map(coin => (
        <Link to={`/${coin.id}`} className='coin-tab'>
          <button color='primary' variant='contained' className='coin-tab-btn'>{coin.name}</button>
        </Link>
      ))}
    </div>
  );
};
export default Charts;
