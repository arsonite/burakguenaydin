import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Input from '../common/input';

import authService from '../../services/authService';

import './style/registrationScreen.css';

class RegistrationView extends Component {
  state = {
    data: {},
    err: null
  };

  submit = async () => {
    try {
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
    if (authService.isUserLoggedIn()) return <Redirect to="/api" />;

    return (
      <div id="registration">
        <form>
          <Input name={'email'} onChange={this.change} required={true} />

          <Input name={'username'} onChange={this.change} required={true} />

          <Input
            name={'password'}
            type={'password'}
            onChange={this.change}
            required={true}
          />

          <Input
            name={'passwordConfirm'}
            type={'password'}
            placeholder={'Confirm password'}
            onChange={this.change}
            required={true}
          />

          <button id="register" type="button" onClick={this.submit}>
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
