import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import LoginView from './loginView';

import './style/api.css';

class API extends Component {
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
        </Switch>
      </div>
    );
  }
}

export default API;
