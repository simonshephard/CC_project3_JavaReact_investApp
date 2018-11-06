import React, { Component } from "react";
import { FormGroup, FormControl, Button } from 'react-bootstrap';
import Request from '../helpers/request.js';

// const EditData = (props) => {
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

    console.log("props:", this.props);
    console.log("props.match.params.id:", this.props.match.params.id);

    let data = null;
    let request = new Request();
    let dataPath = "/pricePoints/" + this.props.match.params.id;
    request.get(dataPath)
    .then((data) => {
      console.log("data", data);
      this.setState({id: data.id, date: data.date, market: data.market, close: data.close}, () => {console.log("this.state.data", this.state);});
    })
    .catch((err) => {
      console.log(err);
    });

    console.log("out");

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


  // let request = new Request();
  // const newTime = "05:00";
  // request.patch("pricePoints/1", {time: newTime}).then((data) => {
  //   console.log(data);
  // });

  handleSubmit(event) {
    event.preventDefault();
    console.log("handleSubmit called");
    console.log("event.target", event.target);
    console.log("date", event.target.date.value);
    console.log("market", event.target.market.value);
    console.log("close", event.target.close.value);
    console.log("event.target.value", event.target.value);

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
      console.log(data);
    });



  }


  // handleSubmit(event) {
  //    event.preventDefault();
  //    const author = this.state.author.trim();
  //    const text = this.state.text.trim();
  //    if (!text || !author) {
  //      return
  //    }
  //    this.props.onCommentSubmit({author: author, text: text});
  //    this.setState({author: '', text: ''});
  //  }

  // <form className="comment-form" onSubmit={this.handleSubmit}>
  //   <input
  //     type="text"
  //     placeholder="Your name"
  //     value={this.state.author}
  //     onChange={this.handleAuthorChange}
  //   />
  //   <input
  //     type="text"
  //     placeholder="Say something..."
  //     value={this.state.text}
  //     onChange={this.handleTextChange}
  //   />
  //   <input type="submit" value="Post" />
  // </form>



  render() {

    return (
      <div>
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
