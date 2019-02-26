import React, { Component } from 'react';

import Input from '../common/input';

import authService from '../../services/authService';

import './style/loginScreen.css';

class LoginView extends Component {
  state = {
    data: {},
    err: null
  };

  submit = async () => {
    try {
      const data = this.state.data;
      await authService.login(data.username, data.password);
      this.props.history.push('/api');
    } catch (exception) {
      if (exception.response && exception.response.status === 400) {
        console.log(exception.response.data);
      }
    }
  };

  change = ({ currentTarget: input }) => {
    const data = this.state.data;
    data[input.name] = input.value;
    this.setState({ data: data });
  };

  render() {
    if (authService.isUserLoggedIn()) this.props.history.push('/api');

    return (
      <div id="login">
        <form onSubmit={this.submit}>
          <span id="label">API Login</span>

          <Input name={'username'} onChange={this.change} required={true} />

          <Input
            name={'password'}
            type={'password'}
            onChange={this.change}
            required={true}
          />

          <button type="button" onClick={this.submit}>
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
