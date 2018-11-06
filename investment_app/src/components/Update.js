import React from "react";
import Request from '../helpers/request.js';

const Update = () => {

  let request = new Request();
  // let listItems = [];
  const newTime = "05:00";
  request.patch("pricePoints/1", {time: newTime}).then((data) => {
    // listItems = data.map((pricePoint, index) => {
      // return <li key={index}>{pricePoint.date + "-" + pricePoint.time}, {pricePoint.close}</li>
    // });
    console.log(data);
    // DATA RETURNED IS NOT UPDATED DATA - IT IS RESPONSE LOG - NEED TO DO DIRECT BELOW
    // listItems.push(<li key={1}>{data.date + "-" + data.time}, {data.close}</li>)
    // console.log(listItems);
  });

  return (
    <div>
      <h4>Updated data</h4>
      <ul>
        <li key={1}>Updated time of item {1} to {newTime}</li>
      </ul>

    </div>
  )
};

export default Update;
