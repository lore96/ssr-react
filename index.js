const express = require('express');
const app = express();
const template = require('./views/server/template');
const path = require('path');
const Loadable = require('react-loadable');
const data = require('./public/data.json');
const ssr = require('./views/server/server');

/* TO FIX REQUIRE ENSURE OF WEBPACK TRANSPILE */
let proto = Object.getPrototypeOf(require);
!proto.hasOwnProperty("ensure") && Object.defineProperties(proto, {
    "ensure": {
        value: function ensure(modules, callback) {
            callback(this);
        },
        writable: false
    },
    "include": {
        value: function include() {},
        writable: false
    }
});

// Serving static files
app.use('/assets', express.static(path.resolve(__dirname, 'assets')));
app.use('/media', express.static(path.resolve(__dirname, 'media')));
app.use('/public', express.static(path.resolve(__dirname, 'public')));

// hide powered by express
app.disable('x-powered-by');

// start the server
Loadable.preloadAll().then(() => {
    app.listen(process.env.PORT || 3000, () => {
        console.log(
        `Node server started at 
            - SSR: http://localhost:3000; 
            - CR: http://localhost:3000/client; 
            - Shutdown: http://localhost:3000/exit`
    )});
});

let initialState = {
    isFetching: false,
    apps: data
}

// server rendered home page
app.get('*', (req, res, next) => {
    ssr(initialState, {req, res, next}, (objToRender) => {
        const response = template(objToRender);
        res.setHeader('Cache-Control', 'assets, max-age=604800');
        res.send(response);
    });
});