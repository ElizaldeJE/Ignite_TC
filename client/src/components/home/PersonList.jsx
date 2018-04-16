import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  constructor(props) {
  super(props);

  this.state = {
    people: [],
    first_name: "",
    last_name: "",
    birth_date: ""
  };

};


get_age(time){
    var MILLISECONDS_IN_A_YEAR = 1000*60*60*24*365;
    var date_array = time.split('-')
    var years_elapsed = (new Date() - new Date(date_array[0], date_array[1], date_array[2])) / (MILLISECONDS_IN_A_YEAR);
    return Math.floor(years_elapsed)
  };



componentDidMount() {
  axios.get(`http://174.138.36.217/people/`)
  .then(res => {
    const people = res.data;
    this.setState({ people });
  })
};


  render() {
    return (
      <div>
        <ul>
          { this.state.people.map(person => <li>{ person.first_name + " " + person.last_name}</li>)}

          { this.state.people.map(person => <li>{this.get_age(person.birth_date) + " " + "Years Old"}</li>)}
        </ul>
      </div>
    )
  }
};
