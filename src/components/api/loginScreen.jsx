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
      const login = this.state.login;
      await authService.login(login.username, login.password);
      this.props.history.push('/api');
    } catch (exception) {
      if (exception.response && exception.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.data = exception.response.data;
        this.setState({ err: errors });
      }
    }
  };

  change = ({ currentTarget: input }) => {
    const data = this.state.data;
    data[input.name] = input.value;
    this.setState({ data: data }, () => {
      console.log(data);
    });
  };

  render() {
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
