import React, { Component } from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import Prices from "./Prices";

import Request from '../helpers/request.js';

import { BrowserRouter as Router, Route } from "react-router-dom";

class Main extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: []
      // data: [
      //   {
      //     date: 20181101,
      //     price: 1000.00
      //   }, {
      //     date: 20181102,
      //     price: 1010.00
      //   }
      // ]
    }

    this.updateData = this.updateData.bind(this);

  }

  componentDidMount() {
    this.updateData();
  }

  updateData() {
    let request = new Request();
    // request.get("/pricePoints").then((data) => {
    request.get("pricePoints").then((data) => {
      console.log(data);
      this.setState({data: data._embedded.pricePoints})
    });

  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route path="/prices"
            render={ ()=> <Prices data={this.state.data} /> }
          />
        </React.Fragment>
      </Router>
    )
  }

}

export default Main;
