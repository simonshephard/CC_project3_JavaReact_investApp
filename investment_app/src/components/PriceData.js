import React from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';

const PriceData = ({data}) => {

  const rows = data.map((pricePoint, index) => {
    return (
        <Row className="show-grid" key={index}>
          <Col xs={2} md={3}>{pricePoint.market}</Col>
          <Col xs={2} md={3}>{pricePoint.date + "-" + pricePoint.time}</Col>
          <Col xs={2} md={3}>{pricePoint.close}</Col>
          <Col xs={2} md={3}><Button bsSize="small">Edit</Button></Col>
        </Row>
    );
  });

  return (
    <Grid>
      {rows}
    </Grid>
  );

}

export default PriceData;
