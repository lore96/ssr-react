function template(objToRender){
    let scripts = '';
    const dataToRender = objToRender.data ? objToRender.data : {test: true};

    if(objToRender.content){
      scripts = `<script>
                     window.__STATE__ = ${JSON.stringify(objToRender.initialState)}
                  </script>
                  <script>window.__INITIAL_DATA__ = ${dataToRender}</script>
                  <script src="../../assets/client.js"></script>
                  `
    } else {
      scripts = `<script>window.__INITIAL_DATA__ = ${dataToRender}</script>
                  <script src="../../assets/client.js"></script>`
    }
    
    let page = `<!DOCTYPE html>
                <html ${objToRender.helmet.htmlAttributes.toString()}>
                <head>
                  <meta charset="utf-8">
                  ${objToRender.helmet.title.toString()}
                  ${objToRender.helmet.meta.toString()}
                  ${objToRender.helmet.link.toString()}
                  
                  <link rel="shortcut icon" href="/public/favicon.ico">

                  ${objToRender.styles}
                </head>
                <body ${objToRender.helmet.bodyAttributes.toString()}>
                  <div class="content">
                     <div id="root" class="wrap-inner">
                        ${objToRender.content}
                     </div>
                  </div>
                    ${objToRender.bundles.map(bundle => {
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