import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import NavBar from '../navBar/navBar';
import HomeScreen from '../homeScreen/homeScreen';
import MediaScreen from '../mediaScreen/mediaScreen';
import SoftwareScreen from '../softwareScreen/softwareScreen';
import HardwareScreen from '../hardwareScreen/hardwareScreen';
import ContactScreen from '../contactScreen/contactScreen';

import { url } from '../../config.json';

import './style/pageEntry.css';

class PageEntry extends Component {
  state = {
    navigationIndex: undefined,
    scroll: false
  };

  componentDidMount() {}

  updateNavigationIndex = index => {
    this.setState({ navigationIndex: index });
  };

  render() {
    return (
      <React.Fragment>
        <div id="toast_container" />
        <NavBar
          navigationIndex={this.state.navigationIndex}
          scrollOffset={this.state.scroll}
        />
        <main
          onScroll={event => {
            const e = event.target;
            this.setState({ scroll: e.scrollTop > e.offsetHeight / 25 });
          }}
          className={this.state.scroll ? ' scrollOffset' : ''}
        >
          <Switch>
            <Route
              path={`/${Object.keys(url)[0]}`}
              render={props => (
                <HomeScreen
                  {...props}
                  navigationIndex={0}
                  updateNavigationIndex={this.updateNavigationIndex}
                />
              )}
            />

            <Route
              path={`/${Object.keys(url)[1]}`}
              render={props => (
                <MediaScreen
                  {...props}
                  navigationIndex={1}
                  updateNavigationIndex={this.updateNavigationIndex}
                />
              )}
            />

            <Route
              path={`/${Object.keys(url)[2]}`}
              render={props => (
                <SoftwareScreen
                  {...props}
                  navigationIndex={2}
                  updateNavigationIndex={this.updateNavigationIndex}
                />
              )}
            />

            <Route
              path={`/${Object.keys(url)[3]}`}
              render={props => (
                <HardwareScreen
                  {...props}
                  navigationIndex={3}
                  updateNavigationIndex={this.updateNavigationIndex}
                />
              )}
            />

            <Route
              path={`/${Object.keys(url)[4]}`}
              render={props => (
                <ContactScreen
                  {...props}
                  navigationIndex={4}
                  updateNavigationIndex={this.updateNavigationIndex}
                />
              )}
            />
          </Switch>

          <footer>footer</footer>
        </main>
        <div id="bg" />
      </React.Fragment>
    );
  }
}

export default PageEntry;
