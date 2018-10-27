import React from 'react';
import {hydrate} from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from '../redux/configureStore';
import App from '../client/App';
import { BrowserRouter } from 'react-router-dom';
import Loadable from 'react-loadable';

const state = window.__STATE__;
delete window.__STATE__;
const initialData = window.__INITIAL_DATA__;
const store = configureStore(state);

delete window.__INITIAL_DATA__;
delete window.__STATE__;

Loadable.preloadReady().then(() => {
  hydrate(
    <Provider store={store} >
      <BrowserRouter>
        <App fetchedData={initialData} />
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  );
});