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
            {components.map((Component, i) => {
              const i1 = i + 1;
              const key = Object.keys(url)[i1];

              return (
                <Route
                  key={i1}
                  path={`/${key}`}
                  render={props => (
                    <Component
                      {...props}
                      key={i1}
                      links={url[key]}
                      navigationIndex={i1}
                      updateNavigationIndex={this.updateNavigationIndex}
                    />
                  )}
                />
              );
            })}
            />
          </Switch>
        </main>

        <div id="bg" />
      </React.Fragment>
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
