import React from "react";
import { Switch, Route } from "react-router";
import routes from "./constants/routes";
import Home from "./pages/Home";
// import Logo from "./pages/Logo";
// import Service from "./pages/Service";
import NoMatch from "./pages/NoMatch";

export default () => (
  <>
    <Switch>
      <Route path={routes.HOME} component={Home} />
      <Route component={NoMatch} />
    </Switch>
  </>
);
