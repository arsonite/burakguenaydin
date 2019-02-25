import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import APIEntry from './components/api/apiEntry';
import PageEntry from './components/pageEntry/pageEntry';

import authService from './services/authService';

import * as serviceWorker from './services/serviceWorker';

import './style/index.css';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {window.location.pathname.includes('backend') &&
      !authService.isUserLoggedIn() ? (
        <Redirect to="/" />
      ) : (
        ''
      )}
      <Route path={`/api`} render={props => <APIEntry {...props} />} />
      <Route path={`/`} render={props => <PageEntry {...props} />} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
