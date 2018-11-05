import React, { Component } from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import Prices from "./Prices";
import Update from "./Update";

import Request from '../helpers/request.js';

import { BrowserRouter as Router, Route } from "react-router-dom";

class Main extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: [],
      markets: ["FTSE100", "EURUSD"],
      currentMarket: null
    }
    this.updateData = this.updateData.bind(this);
    this.selectMarket = this.selectMarket.bind(this);
  }

  // componentDidMount() {
  //   this.updateData();
  // }

  updateData() {
    let request = new Request();
    // http://localhost:8080/pricePoints?size=1000
    // request.get("pricePoints").then((data) => {
    // request.get("pricePoints?size=2000").then((data) => {

    // request.get("pricePoints/market/FTSE100").then((data) => {
    console.log("updating data - currentMarket is: ", this.state.currentMarket);
    let dataPath = "pricePoints/market/" + this.state.currentMarket;
    request.get(dataPath).then((data) => {
      // console.log(data);
      // this.setState({data: data._embedded.pricePoints})
      this.setState({data: data})
    });
  }

  selectMarket(index) {
    console.log("selectMarket called");
    const selectedMarket = this.state.markets[index];
    console.log("selectMarket is: ", selectedMarket);
    this.setState({currentMarket: selectedMarket});
    this.updateData();
  }

  render() {
    // this.updateData();
    return (
      <Router>
        <React.Fragment>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route path="/prices"
            render={ ()=> <Prices data={this.state.data} markets={this.state.markets} selectMarket={this.selectMarket} /> }
          />
          <Route path="/update" component={Update} />
        </React.Fragment>
      </Router>
    )
  }

}

export default Main;
