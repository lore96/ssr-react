"use strict";

function template(title) {
  var initialState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var styles = arguments.length > 2 ? arguments[2] : undefined;
  var content = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
  var scripts = '';

  if (content) {
    scripts = " <script>\n                     window.__STATE__ = ".concat(JSON.stringify(initialState), "\n                  </script>\n                  <script src=\"../assets/client.js\"></script>\n                  ");
  } else {
    scripts = " <script src=\"../assets/bundle.js\"> </script> ";
  }

  var page = "<!DOCTYPE html>\n                <html lang=\"en\">\n                <head>\n                  <meta charset=\"utf-8\">\n                  <title> ".concat(title, " </title>\n                  ").concat(styles, "\n                </head>\n                <body>\n                  <div class=\"content\">\n                     <div id=\"root\" class=\"wrap-inner\">\n                        <!--- magic happens here -->  ").concat(content, "\n                     </div>\n                  </div>\n                    ").concat(scripts, "\n                </body>\n                </html>\n                ");
  return page;
}

module.exports = template;