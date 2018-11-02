import React from "react";

const Prices = ({data}) => {

  const listItems = data.map((pricePoint, index) => {
    return <li key={index}>{pricePoint.date}: {pricePoint.price}</li>
  });

  return (
    <div>
      <h4>Price Data</h4>
      <ul>
        {listItems}
      </ul>
    </div>
  )
};

export default Prices;
