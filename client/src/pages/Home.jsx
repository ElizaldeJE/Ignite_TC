import React from "react";

import PersonList from "../components/home/PersonList.jsx";
import IsPrime from "../components/numbers/PrimeOrNot.jsx";
import CapitalLetterss from "../components/capitalLetters/MakeAllCapitals.jsx";


class People extends React.Component {
  constructor(props) {
    super(props);

  };

  render() {
    return (
          <div>
            <div>
              <center><PersonList /></center>
            </div>
              <center><h1>----------------</h1></center>
            <div>
              <center><IsPrime /></center>
            </div>
              <center><h1>----------------</h1></center>
            <div>
              <center><CapitalLetterss /></center>
            </div>
          </div>
    );
  }
};

export default People;
