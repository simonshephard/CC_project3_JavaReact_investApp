import React from 'react';

const MarketSelector = (props) => {

  const options = props.markets.map((market, index) => {
    return <option key={index} value={index}>{market.name}</option>
  });

  function handleChange(event) {
    console.log(event.target.value);
    props.selectMarket(event.target.value);
  }

  return (
    <select id="market-selector" defaultValue="default" onChange={handleChange} >
      <option disabled value="default">Choose a market...</option>
      {options}
    </select>
  )
}

export default MarketSelector;
