import React from 'react';

const Performance = ({data}) => {


  console.log("data", data);
  const datalen = data.length;
  console.log("data.len", datalen);

  let per_1day = 0;
  let per_1month = 0;
  let per_3month = 0;
  let per_6month = 0;
  let per_12month = 0

  if (datalen > 0) {
    // console.log("data-1", data[datalen-1].close);
    // console.log("data-1/20", data[datalen-1].close / data[datalen-1-20].close);
    // console.log("data-1/60", data[datalen-1].close / data[datalen-1-60].close);
    per_1day = 100 * (data[datalen-1].close / data[datalen-1-1].close -1);
    per_1month = 100 * (data[datalen-1].close / data[datalen-1-20].close -1);
    per_3month = 100 * (data[datalen-1].close / data[datalen-1-60].close -1);
    per_6month = 100 * (data[datalen-1].close / data[datalen-1-125].close -1);
    per_12month = 100 * (data[datalen-1].close / data[datalen-1-250].close -1);
  }

  return (
    <ul>
      <li key={1}>1-day: {per_1day.toFixed(2)}%</li>
      <li key={2}>1-month: {per_1month.toFixed(2)}%</li>
      <li key={3}>3-months: {per_3month.toFixed(2)}%</li>
      <li key={4}>6-months: {per_6month.toFixed(2)}%</li>
      <li key={5}>12-months: {per_12month.toFixed(2)}%</li>
    </ul>
  )

}

export default Performance;
