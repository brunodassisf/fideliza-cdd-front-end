import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard/components';
import Home from '../pages/Home/components';
import ModalAcess from '../pages/ModalAcess/components';

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/acesso" component={ModalAcess} />
                <Route exact path="/home" component={Dashboard} />
            </Switch>
        </Router>
    );
}
