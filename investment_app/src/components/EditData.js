import React, { Component } from "react";
import { FormGroup, FormControl, Button } from 'react-bootstrap';
import Request from '../helpers/request.js';

// const EditData = (props) => {
class EditData extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: {}
    }
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
      this.setState({data: data}, () => {console.log("this.state.data", this.state.data);});
    })
    .catch((err) => {
      console.log(err);
    });

    console.log("out");

  }


  render() {
    
    return (
      <div>
        <h4>Edit Data</h4>

        <p>id: {this.state.data.id}</p>
        <form >
          <FormGroup role="form">
            <FormControl type="text" className="form-control" value={this.state.data.market} />
            <FormControl type="text" className="form-control" value={this.state.data.date} />
            <FormControl type="text" className="form-control" value={this.state.data.close} />
            <Button className="btn btn-primary btn-large centerButton" type="submit">Send</Button>
          </FormGroup>
        </form>

      </div>
    );

  }

};

export default EditData;
