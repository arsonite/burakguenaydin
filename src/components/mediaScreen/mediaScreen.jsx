import React, { Component } from 'react';

import Thumbnail from '../common/thumbnail';

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
      <div id="mediaScreen">
        <div className="container">
          <Thumbnail />
        </div>

        <div className="container">
          <Thumbnail />
        </div>
      </div>
    );
  }
}

export default MediaScreen;
