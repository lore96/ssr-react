"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var domainCallUrl = 'http://localhost:5000';

var _default = function _default(url, params) {
  return _axios.default.get("".concat(domainCallUrl).concat(url), params);
};

exports.default = _default;