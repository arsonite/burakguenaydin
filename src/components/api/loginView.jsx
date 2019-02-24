import React from 'react';

import './style/loginView.css';

function LoginView(props) {
  return (
    <div id="login">
      <form>
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
