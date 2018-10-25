# SERVER SIDE RENDERING REACT-APP
Here you have an example of a ssr application renderizing a create-react-app.

At the final step you should be able to have **Redux** + **Styled Component** + **React router DOM** + **React Helmet** + **Node js Api** in a single awesome application!

Next moves: 
 
 ✅ SVG Support (to recreate exactly the create react application); (fixed with branch svgImport)
 
 ✅ set a routing for server side rendering; (fixed with branch routing)
    
    - Implementing ss api call before page rendering;
 - create a NODE.JS api environment;
 - implementing a local development without server side rendering (to speed up the developing time);
 - Redux testing

 ✅ Code Splitting

 - Helmet

 # USAGE
 Watching at package.json command, you will find the followings command:
  - **ssr-start**: start the serve side rendering (with the fils you will find inside the ./assets folder);
  - **pack**: create the build in ./assets folder;
  - **babel**: transpile all js code that use es6 and JSX to make able node to read it;
  - **build**: pack + babel, create the build but not serve it;
  - **prepare**: create the build and serve it on localhost:3000;

# Articles
- Server side rendering: https://medium.freecodecamp.org/server-side-rendering-your-react-app-in-three-simple-steps-7a82b95db82e
- Server side styled-component: https://medium.com/styled-components/the-simple-guide-to-server-side-rendering-react-with-styled-components-d31c6b2b8fbf
