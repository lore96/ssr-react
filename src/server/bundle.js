import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from '../redux/configureStore'
import App from '../client/App';
import { BrowserRouter } from 'react-router-dom';

const store = configureStore();

render(
  <Provider store={store} >
    <BrowserRouter>
     <App fetchedData={window.__INITIAL_DATA__}/>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
)