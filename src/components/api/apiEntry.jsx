import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import API from './api';
import LoginView from './loginView';
import RegistrationView from './registrationView';

import authService from '../../services/authService';

import './style/apiEntry.css';

class APIEntry extends Component {
  componentDidMount() {
    document.title = 'Burak Günaydin | API';
    document.title = document.title.replace(/\|.*/g, '');
  }

  render() {
    return (
      <div id="api">
        <Switch>
          <Route
            path={`/api/login`}
            render={props => <LoginView {...props} />}
          />

          <Route
            path={`/api/registration`}
            render={props => <RegistrationView {...props} />}
          />
          {authService.isUserLoggedIn() ? <Redirect to="/api/login" /> : ''}

          <Route path={`/api`} render={props => <API {...props} />} />
        </Switch>
      </div>
    );
  }
}

export default APIEntry;
