const path = require('path');

module.exports = {
  entry: {
    client: './src/client.js',
    bundle: './src/bundle.js'
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
 }
}