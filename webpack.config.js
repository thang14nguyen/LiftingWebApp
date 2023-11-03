const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const SRC_DIR = path.join(__dirname, "/client/src");
const DIST_DIR = path.join(__dirname, "/client/dist");

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: "bundle.js",
    path: DIST_DIR,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Flexing',
      inject: 'body',
      template: 'index.html',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        STARTING_PRODUCT: JSON.stringify(process.env.STARTING_PRODUCT),
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};