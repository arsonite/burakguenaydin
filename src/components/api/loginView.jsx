import React from 'react';

import './style/loginView.css';

function LoginView() {
  return (
    <div id="login">
      <form>
        <span id="label">API Login</span>

        <div className="input">
          <span>Username</span>
          <input placeholder="Enter username" required />
        </div>

        <div className="input">
          <span>Password</span>
          <input type="password" placeholder="Enter password" required />
        </div>
      </form>
    </div>
  );
}

export default LoginView;
