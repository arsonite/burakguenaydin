import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import LoginScreen from './loginScreen';
import RegistrationScreen from './registrationScreen';

import authService from '../../services/authService';

import './style/api.css';

class API extends Component {
  componentDidMount() {
    document.title = 'Burak Günaydin | API';
    document.title = document.title.replace(/\|.*/g, '');
  }

  render() {
    return (
      <React.Fragment>
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

            <div id="control">
              {!authService.isUserLoggedIn() ? (
                <Redirect to="/api/login" />
              ) : (
                ''
              )}
              <div id="navBar">
                <ul>
                  <li>API</li>
                  <li>Database</li>
                  <li>Debug</li>
                  <li>Statistics</li>

                  <li
                    id="logout"
                    onClick={() => {
                      authService.logout();
                      this.props.history.push('/api/login');
                    }}
                  >
                    Logout
                  </li>
                </ul>
              </div>
              <div id="content">
                <div id="subnav" />
                <div className="box" />
                <div className="box" />
                <div className="box" />
                <div className="box" />
              </div>
            </div>
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default API;
