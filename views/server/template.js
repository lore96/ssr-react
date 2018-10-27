"use strict";

function template(objToRender) {
  var scripts = '';
  var dataToRender = objToRender.data ? JSON.stringify(objToRender.data) : JSON.stringify([]);

  if (objToRender.content) {
    scripts = "<script>\n                     window.__STATE__ = ".concat(JSON.stringify(objToRender.initialState), "\n                  </script>\n                  <script>window.__INITIAL_DATA__ = ").concat(dataToRender, "</script>\n                  <script src=\"../../assets/client.js\"></script>\n                  ");
  } else {
    scripts = "<script>window.__INITIAL_DATA__ = ".concat(dataToRender, "</script>\n                  <script src=\"../../assets/client.js\"></script>");
  }

  var page = "<!DOCTYPE html>\n                <html ".concat(objToRender.helmet.htmlAttributes.toString(), ">\n                <head>\n                  <meta charset=\"utf-8\">\n                  ").concat(objToRender.helmet.title.toString(), "\n                  ").concat(objToRender.helmet.meta.toString(), "\n                  ").concat(objToRender.helmet.link.toString(), "\n                  \n                  <link rel=\"shortcut icon\" href=\"/public/favicon.ico\">\n\n                  ").concat(objToRender.styles, "\n                </head>\n                <body ").concat(objToRender.helmet.bodyAttributes.toString(), ">\n                  <div class=\"content\">\n                     <div id=\"root\" class=\"wrap-inner\">\n                        ").concat(objToRender.content, "\n                     </div>\n                  </div>\n                    ").concat(objToRender.bundles.map(function (bundle) {
    console.log('Loading chunk', bundle);
    return "<script src=\"../../assets/".concat(bundle.file, "\"></script>"); // alternatively if you are using publicPath option in webpack config
    // you can use the publicPath value from bundle, e.g:
    // return `<script src="${bundle.publicPath}"></script>`
  }).join('\n'), "\n                    ").concat(scripts, "\n                </body>\n                </html>\n                ");
  return page;
}

module.exports = template;