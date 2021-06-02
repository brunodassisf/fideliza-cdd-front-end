import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ModalAcess from '../pages/ModalAcess/components';

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" component={ModalAcess} />
            </Switch>
        </Router>
    );
}
