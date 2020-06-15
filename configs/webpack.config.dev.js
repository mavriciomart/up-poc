const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');

const commonConfiguration = require('./webpack.config.js');

module.exports = merge(commonConfiguration, {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/demo'),
    publicPath: '/'
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: './demo',
    watchContentBase: true,
    hot: true,
    open: true
  }
});
