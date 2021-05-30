import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SignIn from '../pages/SingIn/components';

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" component={SignIn} />
            </Switch>
        </Router>
    );
}
