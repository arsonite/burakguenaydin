import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import NavBar from '../navBar/navBar';
import HomeScreen from '../homeScreen/homeScreen';
import MediaScreen from '../mediaScreen/mediaScreen';
import SoftwareScreen from '../softwareScreen/softwareScreen';
import HardwareScreen from '../hardwareScreen/hardwareScreen';
import ContactScreen from '../contactScreen/contactScreen';

import { nav } from '../../config.json';

import './style/pageEntry.css';

const components = [
  HomeScreen,
  MediaScreen,
  SoftwareScreen,
  HardwareScreen,
  ContactScreen
];

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
      <div id="page">
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
            {components.map((Component, i) => {
              const key = Object.keys(nav)[i];

              return (
                <Route
                  key={i}
                  path={`/${key}`}
                  render={props => (
                    <Component
                      {...props}
                      key={i}
                      links={nav[key]}
                      navigationIndex={i}
                      updateNavigationIndex={this.updateNavigationIndex}
                    />
                  )}
                />
              );
            })}
            />
            <Redirect to={`/home`} />
          </Switch>
        </main>

        <div id="bg" />
      </div>
    );
  }
}

export default PageEntry;

/*
<footer>
  <div className="box">
    <p>Contact</p>
    <div className="contacts">
      You have
      <a href="mailto:guenaydin.burak@gmail.com?subject=Question&body=I have a question about you..">
        a question?
      </a>
    </div>
  </div>

  <hr />

  <div className="box">
    <p>Social</p>
    <div className="images">
      <a href="https://github.com/arsonite">
        <img src="./img/logos/github.svg" alt="" />
      </a>
      <a href="https://twitter.com/notarsonite">
        <img src="./img/logos/twitter.svg" alt="" />
      </a>
      <img src="./img/logos/linkedin.svg" alt="" />
      <img src="./img/logos/xing.svg" alt="" />
    </div>
  </div>

  <hr />

  <div className="box">
    <p>Language</p>
    <div className="languages">
      <img src="./img/flag_de.png" alt="" />
      <img src="./img/flag_en.png" alt="" />
      <img src="./img/flag_tr.png" alt="" />
    </div>
  </div>
</footer>
*/
