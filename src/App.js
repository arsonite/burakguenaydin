import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './style/subzero.css';

//import { url } from './URL.json';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="toast_container" />
        <nav>I am learning backend right now so: </nav>
        <main>
          <p>This site is under construction</p>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
