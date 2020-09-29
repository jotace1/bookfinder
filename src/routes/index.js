import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
// import Repository from '../pages/';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
  </Switch>
);

export default Routes;
