import React from "react";
import $ from "jquery";
import { Link } from "react-router-dom";

import PersonList from "../components/home/PersonList.jsx";
import IsPrime from "../components/numbers/PrimeOrNot.jsx";
import CapitalLetterss from "../components/capitalLetters/MakeAllCapitals.jsx";


class People extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
          <div>
            <div>
            <center><PersonList /></center>
            <center><h1>----------</h1></center>
            <center><IsPrime /></center>
            <br />
            <center><h1>----------</h1></center>
            <center><CapitalLetterss /></center>
            <center><h1>----------</h1></center>

            </div>
          </div>
    );
  }
};

export default People;
