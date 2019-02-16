import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import NavBar from './components/navBar/navBar';
import Navigation from './components/navBar/navigation';

import './style/subzero.css';

//import { url } from './URL.json';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="toast_container" />
        <NavBar selectIndex={0} />
        <main />
      </React.Fragment>
    );
  }
}

export default App;
