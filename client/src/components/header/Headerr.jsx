import React, { Component } from 'react';
import {Nav, NavItem, Glyphicon } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <div className="page-header">
        <img id='foodMenuImgs' src="https://i.imgur.com/HfldIUQ.png" alt="Sopes"/>
        <p className="titleText2">Ignite Technical Challenge</p>
      </div>
    );
  }
};

export default Header;
