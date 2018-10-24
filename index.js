const express = require('express');
const app = express();
const template = require('./views/server/template');
const path = require('path');
const Loadable = require('react-loadable');

// Serving static files
app.use('/assets', express.static(path.resolve(__dirname, 'assets')));
app.use('/media', express.static(path.resolve(__dirname, 'media')));

// hide powered by express
app.disable('x-powered-by');

// start the server
Loadable.preloadAll().then(() => {
    app.listen(process.env.PORT || 3000);
}, () => {console.log(
    `Node server started at 
        - SSR: http://localhost:3000; 
        - CR: http://localhost:3000/client; 
        - Shutdown: http://localhost:3000/exit`
)});

// our apps data model
const data = require('./public/data.json');

let initialState = {
    isFetching: false,
    apps: data
}

//SSR function import
const ssr = require('./views/server/server');

// server rendered home page
app.get('*', (req, res, next) => {
    
    ssr(initialState, {req, res, next}, (content, preloadedState, styleTags, data, bundles) => {
        const response = template("Server Rendered Page", preloadedState, styleTags, content, data, bundles);
        res.setHeader('Cache-Control', 'assets, max-age=604800');
        res.send(response);
    });
});