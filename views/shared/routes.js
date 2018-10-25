"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactLoadable = _interopRequireDefault(require("react-loadable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HomeComponent = (0, _reactLoadable.default)({
  loader: function loader() {
    return new Promise(function (resolve) {
      require.ensure([], function (require) {
        resolve(require("../client/pages/home/home"));
      });
    });
  },
  modules: ["../client/pages/home/home"],
  webpack: function webpack() {
    return [require.resolveWeak("../client/pages/home/home")];
  },
  loading: function loading() {
    return _react.default.createElement("div", null, "Loading....");
  }
});
var NewRouteComponent = (0, _reactLoadable.default)({
  loader: function loader() {
    return new Promise(function (resolve) {
      require.ensure([], function (require) {
        resolve(require("../client/pages/newRoute/newRoute"));
      });
    });
  },
  modules: ["../client/pages/newRoute/newRoute"],
  webpack: function webpack() {
    return [require.resolveWeak("../client/pages/newRoute/newRoute")];
  },
  loading: function loading() {
    return _react.default.createElement("div", null, "Loading....");
  }
});
var test = (0, _reactLoadable.default)({
  loader: function loader() {
    return new Promise(function (resolve) {
      require.ensure([], function (require) {
        resolve(require("../client/pages/test/test"));
      });
    });
  },
  modules: ["../client/pages/test/test"],
  webpack: function webpack() {
    return [require.resolveWeak("../client/pages/test/test")];
  },
  loading: function loading() {
    return _react.default.createElement("div", null, "Loading....");
  }
});
var routes = [{
  path: '/',
  exact: true,
  component: HomeComponent
}, {
  path: '/newroute',
  component: NewRouteComponent
}, {
  path: '/test',
  component: test
}];
var _default = routes;
exports.default = _default;