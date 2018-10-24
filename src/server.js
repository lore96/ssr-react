import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import App from './client/App';

import { ServerStyleSheet } from 'styled-components';
import { StaticRouter,  matchPath } from "react-router-dom"
import routes from './shared/routes'


module.exports = function render(initialState, applicationRoute, callback) {
    const activeRoute = routes.find((route) => matchPath(applicationRoute.req.url, route)) || {};

    const promise = activeRoute.fetchData ? activeRoute.fetchData(applicationRoute.req.path) : Promise.resolve();

    promise.then((data) => {
        const sheet = new ServerStyleSheet();
    
        // Model the initial state
        const store = configureStore(initialState);
        
        let content = renderToString(
            <Provider store={store} >
                <StaticRouter location={applicationRoute.req.url} context={{}}>
                    {sheet.collectStyles(<App fetchedData={data}/>)}    
                </StaticRouter>
            </Provider>
        );
    
        const styleTags = sheet.getStyleTags();
    
        const preloadedState = store.getState();
    
        callback(content, preloadedState, styleTags, data);
    }).catch(applicationRoute.next);

   
}