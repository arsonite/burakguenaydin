import React, { Component } from 'react';

import './style/hardwareScreen.css';

class HardwareScreen extends Component {
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
      <div id="hardwareScreen" className="container">
        Hardware
      </div>
    );
  }
}

export default HardwareScreen;
