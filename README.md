# SERVER SIDE RENDERING REACT-APP
Here you have an example of a ssr application renderizing a create-react-app.

At the final step you should be able to have **Redux** + **Styled Component** + **React router DOM** + **React Helmet** + **Node js Api** in a single awesome application!

Next moves: 
 
 ✅ SVG Support (to recreate exactly the create react application); (implemented with branch svgImport)
 
 ✅ set a routing for server side rendering; (implemented with branch routing)
    
 ✅ Implementing ss api call before page rendering;
    
 ✅ create a NODE.JS api environment; (implemented with branch serverApi);
 
 ✅ Implementing a static error page for server error; (implemented with branch staticError)
 
 ✅ implementing a local development without server side rendering (to speed up the developing time); (implemented with branch devServer);
 
 - Redux testing

 ✅ Code Splitting; (implemented with branch codeSplitting);

 ✅  Helmet (implemented with branch helmet);

 # USAGE
 Watching at package.json command, you will find the followings command:
  - **ssr-start**: start the serve side rendering (with the files you will find inside the ./assets folder);
  - **pack**: create the build in ./assets folder;
  - **babel**: transpile all js code that use es6 and JSX in client to make able node to read it, generating the views folder;
  - **build**: pack + babel, create the all the stuff you need to serve it (this will not start the server);
  - **ssr-prepare**: create the build and serve it on http://localhost:3000;
  - **cd api-server && start-api-server**: to run api server on http://localhost:5000
  - **start-dev-server**: to run webpack dev server for local development (no server rendering)

# Articles
- Server side rendering: https://medium.freecodecamp.org/server-side-rendering-your-react-app-in-three-simple-steps-7a82b95db82e
- Server side styled-component: https://medium.com/styled-components/the-simple-guide-to-server-side-rendering-react-with-styled-components-d31c6b2b8fbf
- Code splitting with react-loadable: https://github.com/jamiebuilds/react-loadable
