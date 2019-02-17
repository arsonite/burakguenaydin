import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import NavBar from './components/navBar/navBar';

import { url } from './config.json';

import './style/index.css';

class PageEntry extends Component {
  state = {
    navigationIndex: undefined
  };

  updateSelectIndex = index => {
    this.setState({ navigationIndex: index });
  };

  render() {
    return (
      <React.Fragment>
        <div id="toast_container" />
        <NavBar navigationIndex={this.state.navigationIndex} />
        <main>
          <Switch>
            <Route path={url.home} component={homeScreen} />
          </Switch>
        </main>
        <div id="bg" />
      </React.Fragment>
    );
  }
}

export default PageEntry;
