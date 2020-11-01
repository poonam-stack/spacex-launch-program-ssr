import React from 'react';
import ReactDOM from 'react-dom';
import App from '../shared/containers/App';
import { BrowserRouter } from 'react-router-dom'
import Loadable from 'react-loadable';

const state = window.__INITIAL_DATA__;
window.onload = () => {
  Loadable.preloadReady().then(() => {
    ReactDOM.hydrate(
      <BrowserRouter>
        <App initialData={state} />
      </BrowserRouter>,
      document.getElementById('root')
    );
  });
};

