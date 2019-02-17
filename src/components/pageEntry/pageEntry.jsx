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
    navigationIndex: undefined
  };

  updateNavigationIndex = index => {
    this.setState({ navigationIndex: index });
  };

  render() {
    return (
      <React.Fragment>
        <div id="toast_container" />
        <NavBar navigationIndex={this.state.navigationIndex} />
        <main>
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

          <footer />
        </main>
        <div id="bg" />
      </React.Fragment>
    );
  }
}

export default PageEntry;
