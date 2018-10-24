"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _home = _interopRequireDefault(require("../client/pages/home/home"));

var _list = _interopRequireDefault(require("../client/pages/list/list"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// shared/routes.js
var routes = [{
  path: '/',
  exact: true,
  component: _home.default
}, {
  path: '/list/:id',
  component: _list.default
}];
var _default = routes;
exports.default = _default;