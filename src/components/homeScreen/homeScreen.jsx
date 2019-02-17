import React, { Component } from 'react';

import './style/homeScreen.css';

class HomeScreen extends Component {
  _isMounted = false; //Preventing setState() memory leak

  state = {};

  /*
  constructor() {
    super();
  }
  */

  componentDidMount() {
    this.props.updateNavigationIndex(this.props.navigationIndex);
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <div id="homeScreen">
        <div className="container">Home</div>
        <div className="container">Home</div>
        <div className="container">Home</div>
        <div className="container">Home</div>
      </div>
    );
  }
}

export default HomeScreen;
