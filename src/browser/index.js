import React from 'react';
import ReactDOM from 'react-dom';
import App from '../shared/containers/App';
import { BrowserRouter } from 'react-router-dom'

const state = window.__INITIAL_DATA__;
    ReactDOM.hydrate(
      <BrowserRouter>
        <App initialData={state} />
      </BrowserRouter>,
      document.getElementById('root')
    );

