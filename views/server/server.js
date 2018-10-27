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

var _reactHelmet = _interopRequireDefault(require("react-helmet"));

var _serverFetch = _interopRequireDefault(require("./methods/serverFetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function render(initialState, applicationRoute, callback) {
  var activeRoute = _routes.default.find(function (route) {
    return (0, _reactRouterDom.matchPath)(applicationRoute.req.url, route);
  }) || {};
  console.log('@@@', activeRoute, activeRoute.compileTime);
  var dataToFetch = activeRoute.compileTime && activeRoute.compileTime.length > 0 ? activeRoute.compileTime : [];
  var promise = dataToFetch.length > 0 ? dataToFetch.map(function (api) {
    return (0, _serverFetch.default)(api.url, api.params);
  }) : [];
  Promise.all(promise).then(function (resp) {
    console.log('@@@@, new route data', resp);
    var data = resp && resp.length > 0 ? resp.map(function (single) {
      return single.data;
    }) : [];
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

    var helmet = _reactHelmet.default.renderStatic();

    console.log('@@', data);
    var objToRender = {
      content: content,
      initialState: preloadedState ? preloadedState : {},
      styles: styleTags ? styleTags : '',
      data: data ? data : '',
      bundles: bundles,
      helmet: helmet
    };
    callback(objToRender);
  }).catch(applicationRoute.next);
};