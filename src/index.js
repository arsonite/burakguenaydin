import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import NavBar from './components/navBar/navBar';

import './style/index.css';

import * as serviceWorker from './services/serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <React.Fragment>
      <div id="toast_container" />
      <NavBar selectIndex={0} />
      <main />
      <div id="bg">
        <img src="./img/pattern.png" alt="" />
      </div>
    </React.Fragment>
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
