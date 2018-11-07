import React from 'react';
import {LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, Tooltip} from 'recharts';

const PriceChart = ({data}) => {

  // <YAxis type="number" domain={[900, 1200]} />
  // <YAxis type="number" domain={[1, 2]} />
  // <YAxis type="number" domain={[0.9, 1.3]} label={{value: "Price", angle: -90, offset: 0, position: "left"}} />
  // <YAxis type="number" domain={[5000, 8000]} label={{value: "Price", angle: -90, offset: 0, position: "left"}} />
  // <Line type="monotone" dataKey="close" dot={false} stroke="#000000" />
  // <Line yAxisId="right" type="monotone" dataKey="sd" dot={false} stroke="#FF0000" />
  // <YAxis id="right" type="number" label={{value: "StDev", angle: -90, offset: 0, position: "right"}} orientation="right" />
  // <YAxis id="left" type="number" label={{value: "Price", angle: -90, offset: 0, position: "left"}} />

  return (
    <LineChart width={600} height={400} data={data} margin={{top: 10, right: 10, bottom: 10, left: 10}}>
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="date" label={{value: "Date", offset: 0, position: "bottom"}} />
      <YAxis yAxisId="left" type="number" label={{value: "Price", angle: -90, offset: 0, position: "left"}} />
      <YAxis yAxisId="right" type="number" label={{value: "StDev", angle: -90, offset: 0, position: "right"}} orientation="right" />
      <Line yAxisId="left" type="monotone" dataKey="close" dot={false} stroke="#000000" />
      <Line yAxisId="left" type="monotone" dataKey="ma" dot={false} stroke="#0000FF" />
      <Line yAxisId="right" type="monotone" dataKey="sd" dot={false} stroke="#FF0000" />
      <Legend width={200} wrapperStyle={{bottom: 80, left: 80, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 2, lineHeight: '30px'}} />
      <Tooltip wrapperStyle={{width: 200, backgroundColor: "#ccc"}} />
    </LineChart>
  )

}

export default PriceChart;
