import React, { Component } from 'react';

import './style/registrationView.css';

class RegistrationView extends Component {
  render() {
    return (
      <div id="registration">
        <form>
          <div className="input">
            <input placeholder="E-Mail" required />
          </div>

          <div className="input">
            <input placeholder="Username" required />
          </div>

          <div className="input">
            <input type="password" placeholder="Password" required />
          </div>

          <div className="input">
            <input type="password" placeholder="Confirm password" required />
          </div>

          <button
            id="register"
            type="button"
            onClick={() => {
              this.props.history.push('/api/login');
            }}
          >
            Register
          </button>

          <button
            id="back"
            type="button"
            onClick={() => {
              this.props.history.push('/api/login');
            }}
          >
            Back
          </button>
        </form>
      </div>
    );
  }
}

export default RegistrationView;
