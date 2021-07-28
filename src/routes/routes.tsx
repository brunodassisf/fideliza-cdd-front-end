import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard/components';
import Home from '../pages/Home/components';
import SignIn from '../pages/SignIn/components';
import SignUp from '../pages/SignUp/components';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cadastro" component={SignUp} />
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/home" component={Dashboard} />
      </Switch>
    </Router>
  );
}
