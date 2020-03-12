import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {Route, BrowserRouter} from 'react-router-dom'
import axios from "axios";

import Charts from "./components/Charts";
import Coin from './components/Coin'
import Navbar from "./components/Navbar";

import "./styles.scss";

const App = () => {
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Charts coinData={coinData} />
        <Route exact path='/:coinId'>
          <Coin coinData={coinData} />
        </Route>
      </div>
    </BrowserRouter>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
