"use strict";

var _serializeJavascript = _interopRequireDefault(require("serialize-javascript"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function template(title) {
  var initialState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var styles = arguments.length > 2 ? arguments[2] : undefined;
  var content = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
  var data = arguments.length > 4 ? arguments[4] : undefined;
  var bundles = arguments.length > 5 ? arguments[5] : undefined;
  var scripts = '';
  var dataToRender = data ? data : {
    test: true
  };

  if (content) {
    scripts = "<script>\n                     window.__STATE__ = ".concat(JSON.stringify(initialState), "\n                  </script>\n                  <script>window.__INITIAL_DATA__ = ").concat((0, _serializeJavascript.default)(dataToRender), "</script>\n                  ");
  } else {
    scripts = "<script>window.__INITIAL_DATA__ = ".concat((0, _serializeJavascript.default)(dataToRender), "</script>");
  }

  var page = "<!DOCTYPE html>\n                <html lang=\"en\">\n                <head>\n                  <meta charset=\"utf-8\">\n                  <title> ".concat(title, " </title>\n                  ").concat(styles, "\n                </head>\n                <body>\n                  <div class=\"content\">\n                     <div id=\"root\" class=\"wrap-inner\">\n                        ").concat(content, "\n                     </div>\n                  </div>\n                    ").concat(bundles.map(function (bundle) {
    return "<script src=\"../../assets/".concat(bundle.file, "\"></script>"); // alternatively if you are using publicPath option in webpack config
    // you can use the publicPath value from bundle, e.g:
    // return `<script src="${bundle.publicPath}"></script>`
  }).join('\n'), "\n                    ").concat(scripts, "\n                </body>\n                </html>\n                ");
  return page;
}

module.exports = template;