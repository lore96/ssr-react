"use strict";

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _reactRedux = require("react-redux");

var _configureStore = _interopRequireDefault(require("../redux/configureStore"));

var _App = _interopRequireDefault(require("../client/App"));

var _styledComponents = require("styled-components");

var _reactRouterDom = require("react-router-dom");

var _routes = _interopRequireDefault(require("../shared/routes"));

var _reactLoadable = _interopRequireDefault(require("react-loadable"));

var _webpack = require("react-loadable/webpack");

var _reactLoadable2 = _interopRequireDefault(require("../../assets/react-loadable.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function render(initialState, applicationRoute, callback) {
  var activeRoute = _routes.default.find(function (route) {
    return (0, _reactRouterDom.matchPath)(applicationRoute.req.url, route);
  }) || {};
  var promise = activeRoute.fetchData ? activeRoute.fetchData(applicationRoute.req.path) : Promise.resolve();
  promise.then(function (data) {
    var modules = [];
    var sheet = new _styledComponents.ServerStyleSheet(); // Model the initial state

    var store = (0, _configureStore.default)(initialState);
    var content = (0, _server.renderToString)(_react.default.createElement(_reactLoadable.default.Capture, {
      report: function report(moduleName) {
        return modules.push(moduleName);
      }
    }, _react.default.createElement(_reactRedux.Provider, {
      store: store
    }, _react.default.createElement(_reactRouterDom.StaticRouter, {
      location: applicationRoute.req.url,
      context: {}
    }, sheet.collectStyles(_react.default.createElement(_App.default, {
      fetchedData: data
    }))))));
    console.log('Modules, ', modules);
    var bundles = (0, _webpack.getBundles)(_reactLoadable2.default, modules);
    var styleTags = sheet.getStyleTags();
    var preloadedState = store.getState();
    callback(content, preloadedState, styleTags, data, bundles);
  }).catch(applicationRoute.next);
};