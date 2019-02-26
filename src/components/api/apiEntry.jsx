import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import API from './api';
import LoginScreen from './loginScreen';
import RegistrationScreen from './registrationScreen';

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
            render={props => <LoginScreen {...props} />}
          />

          <Route
            path={`/api/registration`}
            render={props => <RegistrationScreen {...props} />}
          />
          {authService.isUserLoggedIn() ? <Redirect to="/api/login" /> : ''}

          <Route path={`/api`} render={props => <API {...props} />} />
        </Switch>
      </div>
    );
  }
}

export default APIEntry;
