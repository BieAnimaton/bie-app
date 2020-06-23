import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Account from './pages/account';
import Main from './pages/main';
import Create_Account from './pages/create_account';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/account" component={Account} />
            <Route path="/create_account" component={Create_Account}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;