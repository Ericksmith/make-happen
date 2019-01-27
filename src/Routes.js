import React from "react";
import { Switch, Route } from "react-router";
import routes from "./constants/routes";
import HomePage from "./pages/HomePage";
import WishPage from "./pages/WishPage";
import NoMatch from "./pages/NoMatch";
import copy from './constants/copy'

export default () => (
  <>
    <Switch>
      <Route path={routes.DISNEY} exact render={() => <WishPage content={copy.disney} />} />
      <Route path={routes.QUINCEANERA} exact render={() => <WishPage content={copy.quinceanera} />} />
      <Route path={routes.HOME} exact component={HomePage} />
      <Route component={NoMatch} />
    </Switch>
  </>
);
