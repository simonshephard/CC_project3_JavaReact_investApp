import React from 'react';

const PriceData = ({data}) => {

  const listItems = data.map((pricePoint, index) => {
    return <li key={index}>{pricePoint.market}, {pricePoint.date + "-" + pricePoint.time}, {pricePoint.close}</li>
  });

  return (
    <ul>
      {listItems}
    </ul>
  )

}

export default PriceData;
