const path = require('path');
const ReactLoadablePlugin = require('react-loadable/webpack').ReactLoadablePlugin;

module.exports = {
  entry: {
    client: './src/server/client.js',
    bundle: './src/server/bundle.js'
  },
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: "[name].js"
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.(ttf|eot|otf|svg|png|jpg|gif)$/, loader: 'file-loader' }
    ]
  }, 
  plugins: [
    new ReactLoadablePlugin({
      filename: './assets/react-loadable.json',
    })
  ],
}