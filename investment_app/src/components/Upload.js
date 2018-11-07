import React, { Component } from "react";
import { FormGroup, FormControl, Button } from 'react-bootstrap';
// import Request from '../helpers/request.js';

class Upload extends Component {

  handleUpload(event) {
      event.preventDefault();

  }

  render() {
    return (
      <div className="editData">

        <h4>Upload data</h4>

        <form onSubmit={this.handleUpload}>
          <FormGroup role="form">
            <FormControl type="file" className="form-control" id="file" />
            <Button className="btn btn-primary btn-large centerButton" type="submit" value="Post">Upload</Button>
          </FormGroup>
        </form>

      </div>
    )
  }

}

export default Upload;
