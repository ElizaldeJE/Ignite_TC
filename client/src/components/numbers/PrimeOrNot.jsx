import React from 'react';
import $ from 'jquery';

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
      <div>
        <ul>
          { this.state.numbers.map(digitos => <li>{this.primeOrNot(digitos.number)}</li>)}
        </ul>
      </div>
    )
  }
};
