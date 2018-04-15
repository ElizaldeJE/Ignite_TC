import React from "react";
import { Switch, Route } from "react-router-dom";

import People from "./pages/Home.jsx";
import Numbers007 from "./pages/Numbersss.jsx";
import CapitalLetter from "./pages/CapitalLetters.jsx";



const PrimaryLayout = ({ match }) => (
  <div className="primary-layout">
    <main>
      <Switch>
        <Route exact path={`${match.path}`} component={People} />
        <Route  path={`${match.path}odd`} component={Numbers007} />
        <Route  path={`${match.path}capital`} component={CapitalLetter} />
      </Switch>
    </main>
  </div>
);

export default PrimaryLayout;
