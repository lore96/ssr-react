## SERVER SIDE RENDERING REACT-APP
Here you have an example of a ssr application renderizing a create-react-app.

At the final step you should be able to have REDUX + STYLED COMPONENT + ROUTING + NODE.JS api in a single awesome application!

Next moves: 
 - SVG Support (to recreate exactly the create react application);
 - fixing localhost:3000/client implementation;
 - set a routing for server side rendering;
 - create a NODE.JS api environment;
 - implementing a local development without server side rendering (to speed up the developing time);

 ## USAGE
 Watching at package.json command, you will find the followings command:
  - "ssr-start": start the serve side rendering (with the fils you will find inside the ./assets folder);
  - "pack": create the build in ./assets folder;
  - "babel": transpile all js code that use es6 and JSX to make able node to read it;
  - "build": pack + babel, create the build but not serve it;
  - "prepare": create the build and serve it on localhost:3000;



