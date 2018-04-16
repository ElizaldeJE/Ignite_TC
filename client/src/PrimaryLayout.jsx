import React from "react";
import { Switch, Route } from "react-router-dom";

import People from "./pages/Home.jsx";

const PrimaryLayout = ({ match }) => (
  <div className="primary-layout">
    <main>
      <Switch>
        <Route exact path={`${match.path}`} component={People} />
      </Switch>
    </main>
  </div>
);

export default PrimaryLayout;
