import serialize from "serialize-javascript";

function template(title, initialState = {}, styles, content = "", data){
    let scripts = '';
    const dataToRender = data ? data : {test: true};
    if(content){
      scripts = `<script>
                     window.__STATE__ = ${JSON.stringify(initialState)}
                  </script>
                  <script>window.__INITIAL_DATA__ = ${serialize(dataToRender)}</script>
                  <script src="../assets/client.js"></script>
                  `
    } else {
      scripts = `<script>window.__INITIAL_DATA__ = ${serialize(dataToRender)}</script>
                  <script src="../assets/bundle.js"> </script>`
    }
    let page = `<!DOCTYPE html>
                <html lang="en">
                <head>
                  <meta charset="utf-8">
                  <title> ${title} </title>
                  ${styles}
                </head>
                <body>
                  <div class="content">
                     <div id="root" class="wrap-inner">
                        ${content}
                     </div>
                  </div>
                    ${scripts}
                </body>
                </html>
                `;
  
    return page;
  }
  
  module.exports = template;