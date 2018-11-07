import React, { Component } from "react";
import { FormGroup, FormControl, Button } from 'react-bootstrap';
import Request from '../helpers/request.js';

class EditData extends Component {

  constructor(props){
    super(props);
    this.state = {
      id: "",
      date: "",
      market: "",
      close: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleMarketChange = this.handleMarketChange.bind(this);
    this.handleCloseChange = this.handleCloseChange.bind(this);
  };

  componentDidMount() {

    let request = new Request();
    let dataPath = "/pricePoints/" + this.props.match.params.id;
    request.get(dataPath)
    .then((data) => {
      this.setState({id: data.id, date: data.date, market: data.market, close: data.close});
    })
    .catch((err) => {
      console.log(err);
    });

  }

  handleDateChange(event) {
    this.setState({date: event.target.value});
  }
  handleMarketChange(event) {
    this.setState({market: event.target.value});
  }
  handleCloseChange(event) {
    this.setState({close: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    let request = new Request();
    const newDate = event.target.date.value;
    const newMarket = event.target.market.value;
    const newClose = event.target.close.value;
    const newData = {};
    if (newDate) {newData.date = newDate;}
    if (newMarket) {newData.market = newMarket;}
    if (newClose) {newData.close = newClose;}
    const pathToUpdate = "/pricePoints/" + this.state.id;
    request.patch(pathToUpdate, newData).then((data) => {
      // console.log(data);
      console.log("Data updated");
    });

  }

  render() {

    return (
      <div className="editData">

        <h4>Edit Data</h4>

        <p>id: {this.state.id}</p>
        <form onSubmit={this.handleSubmit}>
          <FormGroup role="form">
            <FormControl type="text" className="form-control" id="market" value={this.state.market} onChange={this.handleMarketChange} />
            <FormControl type="text" className="form-control" id="date" value={this.state.date} onChange={this.handleDateChange} />
            <FormControl type="text" className="form-control" id="close" value={this.state.close} onChange={this.handleCloseChange} />
            <Button className="btn btn-primary btn-large centerButton" type="submit" value="Post">Send</Button>
          </FormGroup>
        </form>

      </div>
    );

  }

};

export default EditData;
