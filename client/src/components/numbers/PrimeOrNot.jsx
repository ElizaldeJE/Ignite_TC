import $ from 'jquery';
import React from 'react';
import { Grid, Row, Col } from "react-bootstrap";


export default class IsPrime extends React.Component {
  constructor(props) {
  super(props);

  this.state = {
    numbers: [],
    number: 0
  };
};

getNumbs(){
  $.ajax({
   url: 'http://174.138.36.217/numbers/',
   method: 'GET',
   success: (data) => {
     this.setState({numbers: data});
   },
   error: ( xhr, err ) => {
     console.log('err', err);
   }
  })
};

primeOrNot(num) {
  for(var i = 2; i < num; i++)
    if(num % i === 0) return num + " " + "Is not prime";
  return num + " " + "Is prime";
};

componentDidMount() {
  this.getNumbs();
};

  render() {
    return (
      <Grid className="numbersGrid">
      <center><h1 className="titles">Numbers</h1></center>
        <Row className="numbersRow" id="texts">
          <Col xs={6} md={12}>
          { this.state.numbers.map(digitos => <text><br/>{this.primeOrNot(digitos.number)}</text>)}
          </Col>
        </Row>
      </Grid>
    )
  }
};
