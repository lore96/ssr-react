
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "public/index.html"),
    filename: "./index.html"
});

module.exports = {
    entry: path.join(__dirname, "./src/client/index.js"),
    output: {
      path: path.resolve(__dirname, './dev-server'),
      chunkFilename: "[name].chunk.js",
      publicPath: path.resolve(__dirname, './dev-server'),
      filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [htmlWebpackPlugin],
    resolve: {
        extensions: [".js", ".jsx"]
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'dev-server'),
      port: 3333
    }
};