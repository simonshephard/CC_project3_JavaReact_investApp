import React from 'react';
import MarketSelector from './MarketSelector';
import PriceChart from './PriceChart';
import Performance from './Performance';

const Prices = ({data, markets, selectMarket}) => {

  console.log("in prices", markets);

  const listItems = data.map((pricePoint, index) => {
    return <li key={index}>{pricePoint.market}, {pricePoint.date + "-" + pricePoint.time}, {pricePoint.close}</li>
  });


  return (
    <div>

      <h4>Market Selector</h4>
      <MarketSelector markets={markets} selectMarket={selectMarket} />

      <h4>Price Chart</h4>
      <PriceChart data={data} />

      <h4>Performance</h4>
      <Performance data={data} />

      <h4>Price Data</h4>
      <ul>
        {listItems}
      </ul>

    </div>
  )
};

export default Prices;
