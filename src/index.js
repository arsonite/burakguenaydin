import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import PageEntry from './components/pageEntry/pageEntry';

import * as serviceWorker from './services/serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <PageEntry />
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
