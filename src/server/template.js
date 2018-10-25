import serialize from "serialize-javascript";

function template(helmet, initialState = {}, styles, content = "", data, bundles){
    let scripts = '';
    const dataToRender = data ? data : {test: true};
    if(content){
      scripts = `<script>
                     window.__STATE__ = ${JSON.stringify(initialState)}
                  </script>
                  <script>window.__INITIAL_DATA__ = ${serialize(dataToRender)}</script>
                  <script src="../../assets/client.js"></script>
                  `
    } else {
      scripts = `<script>window.__INITIAL_DATA__ = ${serialize(dataToRender)}</script>
                  <script src="../../assets/client.js"></script>`
    }
    
    let page = `<!DOCTYPE html>
                <html ${helmet.htmlAttributes.toString()}>
                <head>
                  <meta charset="utf-8">
                  ${helmet.title.toString()}
                  ${helmet.meta.toString()}
                  ${helmet.link.toString()}
                  
                  <link rel="shortcut icon" href="/public/favicon.ico">

                  ${styles}
                </head>
                <body ${helmet.bodyAttributes.toString()}>
                  <div class="content">
                     <div id="root" class="wrap-inner">
                        ${content}
                     </div>
                  </div>
                    ${bundles.map(bundle => {
                      console.log('Loading chunk', bundle);
                      return `<script src="../../assets/${bundle.file}"></script>`
                      // alternatively if you are using publicPath option in webpack config
                      // you can use the publicPath value from bundle, e.g:
                      // return `<script src="${bundle.publicPath}"></script>`
                    }).join('\n')}
                    ${scripts}
                </body>
                </html>
                `;
  
    return page;
  }
  
  module.exports = template;