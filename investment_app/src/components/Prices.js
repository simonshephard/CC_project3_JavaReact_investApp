import React from "react";
import {LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, Tooltip} from 'recharts';


const Prices = ({data}) => {

  const listItems = data.map((pricePoint, index) => {
    return <li key={index}>{pricePoint.date}: {pricePoint.price}</li>
  });

  // <YAxis type="number" domain={[900, 1200]} />
  // <YAxis type="number" domain={[1, 2]} />


  return (
    <div>

      <h4>Price Chart</h4>
      <LineChart width={600} height={400} data={data} margin={{top: 10, right: 10, bottom: 10, left: 10}}>
        <Line type="monotone" dataKey="price" dot={false} stroke="#000000" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="date" />
        <YAxis type="number" domain={[0.9, 1.3]} />
        <Legend width={100} wrapperStyle={{bottom: 90, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px'}} />
        <Tooltip wrapperStyle={{width: 200, backgroundColor: "#ccc"}} />
      </LineChart>

      <h4>Price Data</h4>
      <ul>
        {listItems}
      </ul>

    </div>
  )
};

export default Prices;
