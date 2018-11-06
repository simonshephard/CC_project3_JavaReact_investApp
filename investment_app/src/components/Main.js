import React, { Component } from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import Prices from "./Prices";
import Update from "./Update";
import Request from '../helpers/request.js';
import { BrowserRouter as Router, Route } from "react-router-dom";
import EditData from "./EditData";

class Main extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: [],
      markets: ["EURUSD", "FTSE100", "SPX500"],
      currentMarket: null
    }
    this.updateData = this.updateData.bind(this);
    this.selectMarket = this.selectMarket.bind(this);
  }

  updateData() {
    let request = new Request();
    let dataPath = "pricePoints/market/" + this.state.currentMarket;
    request.get(dataPath).then((data) => {
      this.setState({data: data})
    });
  }

  selectMarket(index) {
    const selectedMarket = this.state.markets[index];
    this.setState({currentMarket: selectedMarket}, () => {
      this.updateData();
    });
  }

  render() {
    console.log("rendering");
    return (
      <Router>
        <React.Fragment>

          <NavBar />

          <Route exact path="/" component={Home} />
          <Route path="/prices"
            render={ () => <Prices data={this.state.data} markets={this.state.markets} selectMarket={this.selectMarket} /> }
          />
          <Route path="/update" component={Update} />
          <Route path="/editprices/:dataIndex"
            render={ () => <EditData data={this.state.data} /> }
          />

        </React.Fragment>
      </Router>
    )
  }

}

export default Main;
