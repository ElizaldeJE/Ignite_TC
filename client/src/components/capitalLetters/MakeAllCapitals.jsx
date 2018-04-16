import $ from 'jquery';
import React from 'react';
import { Grid, Row, Col } from "react-bootstrap";

export default class CapitalLetterss extends React.Component {
  constructor(props) {
  super(props);

  this.state = {
    title: "",
    text: ""
  };
this.titleCase=this.titleCase.bind(this);
};


titleCase(){
  $.ajax({
   url: 'http://174.138.36.217/texts/',
   method: 'GET',
   success: (data) => {
     this.setState({title: data[0].title, text: data[0].text});
   },
   error: ( xhr, err ) => {
     console.log('err', err);
    }
  })
};

titleCaseS(str) {
  var splitStr = str.toLowerCase().split(' ');
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(' ');
};

textCaseS(str) {
  var splitStr = str.toLowerCase().split('. ');
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join('. ');
};

  componentDidMount() {
    this.titleCase();
  };

  render() {
    return (
      <Grid className="textGrid">
        <Row className="textsRow" >
          <Col xs={6} md={12}>
          { this.titleCaseS(this.state.title) }
          </Col>
          <Col xs={6} md={12}>
          { this.textCaseS(this.state.text)  }
          </Col>
        </Row>
      </Grid>
    )
  }
};
