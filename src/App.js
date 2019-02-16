import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

//import { url } from './URL.json';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="toast_container" />
        <nav />
        <main />
      </React.Fragment>
    );
  }
}

export default App;
