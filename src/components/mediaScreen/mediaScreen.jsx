import React, { Component } from 'react';

import Card from '../common/card';
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
      <div id="mediaScreen" className="screen">
        <Card src="https://picsum.photos/1000" />

        <Thumbnail src="https://picsum.photos/2000" />
      </div>
    );
  }
}

export default MediaScreen;
