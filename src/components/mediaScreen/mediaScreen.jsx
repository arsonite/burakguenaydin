import React, { Component } from 'react';

import './style/mediaScreen.css';

class MediaScreen extends Component {
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
      <div id="mediaScreen" className="container">
        Media
      </div>
    );
  }
}

export default MediaScreen;
