import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from 'react-router-dom';

import PrimaryLayout from "./PrimaryLayout.jsx";

class App extends React.Component {

  render(){
    return(
      <BrowserRouter>
        <Route path="/" component={PrimaryLayout} />
      </BrowserRouter>
    )}
};

ReactDOM.render(<App/>, document.getElementById('app'));
