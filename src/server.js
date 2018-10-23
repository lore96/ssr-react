import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import App from './client/App';

import { ServerStyleSheet } from 'styled-components';


module.exports = function render(initialState) {
    const sheet = new ServerStyleSheet();
    
    // Model the initial state
    const store = configureStore(initialState);
    
    let content = renderToString(
        <Provider store={store} >
            {sheet.collectStyles(<App />)}
        </Provider>
    );

    const styleTags = sheet.getStyleTags();

    const preloadedState = store.getState();

    return {content, preloadedState, styleTags};
}