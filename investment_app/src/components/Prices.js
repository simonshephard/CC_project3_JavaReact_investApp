import React from 'react';
import MarketSelector from './MarketSelector';
import PriceChart from './PriceChart';
import Performance from './Performance';
import PriceData from './PriceData';

const Prices = ({data, markets, selectMarket, currentMarket}) => {

  let runningTotal = 0.0;
  for (let i = 0; i < data.length; i++) {
    if (i < 20) {
      runningTotal += parseFloat(data[i].close);
      data[i].ma = (runningTotal/(i+1)).toFixed(4);
    } else {
      runningTotal += parseFloat(data[i].close - data[i-20].close);
      data[i].ma = (runningTotal/20).toFixed(4);
    }
  }

  let runningWelfordM = 0.0;
  for (let i = 1; i < data.length; i++) {
    if (i <= 20) {
      runningWelfordM += (parseFloat(data[i].close) - data[i-1].ma) * (parseFloat(data[i].close) - data[i].ma);
      data[i].sd = ((runningWelfordM/(i+1))^0.5).toFixed(4);
    } else {
      runningWelfordM += (parseFloat(data[i].close) - data[i-1].ma) * (parseFloat(data[i].close) - data[i].ma);
      runningWelfordM -= (parseFloat(data[i-20].close) - data[i-20-1].ma) * (parseFloat(data[i-20].close) - data[i-20].ma);
      data[i].sd = ((runningWelfordM/20)^0.5).toFixed(4);
    }
  }


  return (
    <div>

      <h4>Market Selector (current: {currentMarket})</h4>
      <MarketSelector markets={markets} selectMarket={selectMarket} />

      <h4>Price Chart</h4>
      <PriceChart data={data} />

      <h4>Performance</h4>
      <Performance data={data} />

      <h4>Price Data</h4>
      <PriceData data={data} />

    </div>
  )

};

export default Prices;
