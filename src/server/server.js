import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import configureStore from '../redux/configureStore';
import App from '../client/App';

import { ServerStyleSheet } from 'styled-components';
import { StaticRouter,  matchPath } from "react-router-dom"
import routes from '../shared/routes'

import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable/webpack'
import stats from '../../assets/react-loadable.json';

import Helmet from 'react-helmet';
import serverFetch from './methods/serverFetch';


module.exports = function render(initialState, applicationRoute, callback) {
    const activeRoute = routes.find((route) => matchPath(applicationRoute.req.url, route)) || {};
    console.log('@@@', activeRoute, activeRoute.compileTime);

    const dataToFetch = (activeRoute.compileTime && activeRoute.compileTime.length > 0)  ? activeRoute.compileTime : [];

    const promise = dataToFetch.length > 0 ? dataToFetch.map(api => serverFetch(api.url, api.params)) : [Promise.resolve()];

    Promise.all(promise).then((data) => {
        let modules = [];

        const sheet = new ServerStyleSheet();
    
        // Model the initial state
        const store = configureStore(initialState);
        
        let content = renderToString(
            <Loadable.Capture report={moduleName => modules.push(moduleName)}>
                <Provider store={store} >
                    <StaticRouter location={applicationRoute.req.url} context={{}}>
                        {sheet.collectStyles(<App fetchedData={data}/>)}    
                    </StaticRouter>
                </Provider>
            </Loadable.Capture>
        );

        console.log('Modules, ', modules);

        let bundles = getBundles(stats, modules);

        const styleTags = sheet.getStyleTags();
    
        const preloadedState = store.getState();

        const helmet = Helmet.renderStatic();

        const objToRender = {
            content,
            initialState: preloadedState ? preloadedState : {},
            styles: styleTags ? styleTags : '',
            data: data ? data : '',
            bundles,
            helmet
        };
    
        callback(objToRender);
    }).catch(applicationRoute.next);

   
}