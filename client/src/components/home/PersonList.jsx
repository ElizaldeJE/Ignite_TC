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

}


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
          { this.state.people.map(person =>
            <li>
              { person.first_name + " " +
              person.last_name + " " +
              person.birth_date + " " + " Years Old"}
            </li>)}
        </ul>
      </div>
    )
  }
};
