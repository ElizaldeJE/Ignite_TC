import React from "react";
import $ from "jquery";
import { Link } from "react-router-dom";

import PersonList from "../components/home/PersonList.jsx";


class Numbers007 extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
          <div>
            <div>
            <center><PersonList /></center>
            <center><PersonList /></center>
            <center><PersonList /></center>
            </div>
          </div>
    );
  }
};

export default Numbers007;
