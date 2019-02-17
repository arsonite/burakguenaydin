import React, { Component } from 'react';

import './style/contactScreen.css';

class ContactScreen extends Component {
  _isMounted = false; //Preventing setState() memory leak

  state = {};

  componentDidMount() {
    this.props.updateNavigationIndex(this.props.navigationIndex);
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <div id="contactScreen" className="container">
        Contact
      </div>
    );
  }
}

export default ContactScreen;
