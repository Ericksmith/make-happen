import React from "react";
import { Switch, Route } from "react-router";
import routes from "./constants/routes";
import HomePage from "./pages/HomePage";
import WishPage from "./pages/WishPage";
import NoMatch from "./pages/NoMatch";

export default () => (
  <>
    <Switch>
      <Route path={routes.WISH} component={WishPage} />
      <Route path={routes.HOME} exact component={HomePage} />
      <Route component={NoMatch} />
    </Switch>
  </>
);
