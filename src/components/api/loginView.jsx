import React, { Component } from 'react';

import './style/loginView.css';

class LoginView extends Component {
  render() {
    return (
      <div id="login">
        <form>
          <span id="label">API Login</span>

          <div className="input">
            <input placeholder="Enter username" required />
          </div>

          <div className="input">
            <input type="password" placeholder="Enter password" required />
          </div>

          <button
            type="button"
            onClick={() => {
              this.props.history.push('/api');
            }}
          >
            Login
          </button>

          <button
            type="button"
            onClick={() => {
              this.props.history.push('/api/registration');
            }}
          >
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default LoginView;
