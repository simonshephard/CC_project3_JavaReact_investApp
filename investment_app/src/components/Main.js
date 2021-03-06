import React, { Component } from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import Prices from "./Prices";
import Update from "./Update";
import Upload from "./Upload";
import Request from '../helpers/request.js';
import { BrowserRouter as Router} from "react-router-dom";
import { Switch, Route } from 'react-router'
import EditData from "./EditData";

class Main extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: [],
      markets: ["EURUSD", "FTSE100", "SPX500", "EUSTX50", "JPN225"],
      currentMarket: "FTSE100",
      selectedDataPoint: null
    }
    this.updateData = this.updateData.bind(this);
    this.selectMarket = this.selectMarket.bind(this);
  }

  componentDidMount() {
    let request = new Request();
    let dataPath = "/pricePoints/market/" + this.state.currentMarket;
    request.get(dataPath).then((data) => {
      this.setState({data: data})
    });
  }

  updateData() {
    let request = new Request();
    let dataPath = "/pricePoints/market/" + this.state.currentMarket;
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
    return (
      <Router>
        <React.Fragment>

          <NavBar />
          <div id="main">
          <Switch>

              <Route className="comp" exact path="/" component={Home} />

              <Route className="comp" exact path="/prices/all"
                render={ () => <Prices data={this.state.data} markets={this.state.markets} selectMarket={this.selectMarket} currentMarket={this.state.currentMarket}/> }
              />

              <Route className="comp" exact path="/prices/:id"
                render={ (props) => <EditData {...props} /> }
              />

              <Route className="comp" path="/update" component={Update} />

              <Route className="comp" path="/upload" component={Upload} />

          </Switch>
          </div>

        </React.Fragment>
      </Router>
    )
  }

}

export default Main;
