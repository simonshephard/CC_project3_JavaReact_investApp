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
    console.log("before updating data currentMarket is:", this.state.currentMarket);
    let request = new Request();
    // request.get("pricePoints/market/FTSE100").then((data) => {
    let dataPath = "pricePoints/market/" + this.state.currentMarket;
    request.get(dataPath).then((data) => {
      // console.log(data);
      // this.setState({data: data._embedded.pricePoints})
      this.setState({data: data})
    });
    console.log("after updating data currentMarket is:", this.state.currentMarket);
  }

  selectMarket(index) {
    // console.log("selectMarket called - index", index);
    const selectedMarket = this.state.markets[index];
    // console.log("selectedMarket is:", selectedMarket);
    // console.log("before updating state currentMarket is:", this.state.currentMarket);
    this.setState({currentMarket: selectedMarket}, () => {
      // console.log("after updating state in callback currentMarket is:", this.state.currentMarket);
      this.updateData();
    });
    // console.log("after updating state outside callback currentMarket is:", this.state.currentMarket);
  }

  render() {
    console.log("rendering");
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
