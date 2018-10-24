"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _LogoIcon = _interopRequireDefault(require("../../components/LogoIcon/LogoIcon"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var AnotherContainer = _styledComponents.default.div.withConfig({
  displayName: "newRoute__AnotherContainer",
  componentId: "sc-79knqa-0"
})(["text-align:center;"]);

var AnotherHeader = _styledComponents.default.div.withConfig({
  displayName: "newRoute__AnotherHeader",
  componentId: "sc-79knqa-1"
})(["background-color:#8b0000;min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;font-size:calc(10px + 2vmin);color:white;"]);

var AnotherLink = _styledComponents.default.a.withConfig({
  displayName: "newRoute__AnotherLink",
  componentId: "sc-79knqa-2"
})(["color:#ff0000;"]);

var newRoute =
/*#__PURE__*/
function (_Component) {
  _inherits(newRoute, _Component);

  function newRoute() {
    _classCallCheck(this, newRoute);

    return _possibleConstructorReturn(this, _getPrototypeOf(newRoute).apply(this, arguments));
  }

  _createClass(newRoute, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(AnotherContainer, null, _react.default.createElement(AnotherHeader, null, _react.default.createElement(_LogoIcon.default, {
        color: "#ff0000"
      }), _react.default.createElement("p", null, "Hi, I'm another react page!"), _react.default.createElement(AnotherLink, {
        href: "/"
      }, "Go home"), _react.default.createElement(_reactRouterDom.NavLink, {
        to: "/"
      }, "Go home with Link")));
    }
  }]);

  return newRoute;
}(_react.Component);

var _default = newRoute;
exports.default = _default;