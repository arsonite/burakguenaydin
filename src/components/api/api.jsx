import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import authService from '../../services/authService';

import './style/api.css';

class API extends Component {
  render() {
    if (!authService.isUserLoggedIn()) this.props.history.push('/api/login');

    return (
      <React.Fragment>
        <div id="navBar">
          <Link to="/api/login" onClick={authService.logout}>
            Logout
          </Link>
        </div>
        <div id="content" />
      </React.Fragment>
    );
  }
}

export default API;
