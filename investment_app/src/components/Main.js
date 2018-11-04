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
      data: []
    }
    this.updateData = this.updateData.bind(this);
  }

  componentDidMount() {
    this.updateData();
  }

  updateData() {
    let request = new Request();
    // http://localhost:8080/pricePoints?size=1000
    // request.get("pricePoints").then((data) => {
    request.get("pricePoints?size=1000").then((data) => {
      // console.log(data);
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
          <Route path="/update" component={Update} />
        </React.Fragment>
      </Router>
    )
  }

}

export default Main;
