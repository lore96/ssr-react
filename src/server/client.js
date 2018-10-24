import React from 'react';
import {hydrate} from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from '../redux/configureStore';
import App from '../client/App';
import { BrowserRouter } from 'react-router-dom';
import Loadable from 'react-loadable';

const state = window.__STATE__;
delete window.__STATE__;
const store = configureStore(state)

Loadable.preloadReady().then(() => {
  hydrate(
    <Provider store={store} >
      <BrowserRouter>
        <App fetchedData={window.__INITIAL_DATA__} />
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  );
});