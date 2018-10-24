"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _home = _interopRequireDefault(require("../client/pages/home/home"));

var _newRoute = _interopRequireDefault(require("../client/pages/newRoute/newRoute"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// shared/routes.js
var routes = [{
  path: '/',
  exact: true,
  component: _home.default
}, {
  path: '/newroute',
  component: _newRoute.default
}];
var _default = routes;
exports.default = _default;