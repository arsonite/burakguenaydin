import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import API from './components/api/api';
import PageEntry from './components/pageEntry/pageEntry';

import authService from './services/authService';

import * as serviceWorker from './services/serviceWorker';

import './style/index.css';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path={`/api`} render={props => <API {...props} />} />

      <Route path={`/`} render={props => <PageEntry {...props} />} />

      {window.location.pathname.includes('backend') &&
      !authService.isUserLoggedIn() ? (
        ''
      ) : (
        <Redirect to="/" />
      )}
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
