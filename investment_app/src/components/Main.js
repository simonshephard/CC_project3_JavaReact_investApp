import React, { Component } from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import Prices from "./Prices";

import { BrowserRouter as Router, Route } from "react-router-dom";

class Main extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: [
        {
          date: 20181101,
          price: 1000.00
        }, {
          date: 20181102,
          price: 1010.00
        }
      ]
    }
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
