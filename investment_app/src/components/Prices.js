import React from 'react';
import MarketSelector from './MarketSelector';
import PriceChart from './PriceChart';
import Performance from './Performance';
import PriceData from './PriceData';

const Prices = ({data, markets, selectMarket}) => {

  return (
    <div>

      <h4>Market Selector</h4>
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
