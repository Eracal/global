const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  // Entry
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  // Loaders
  module: {
    rules : [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  // Plugins
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ],
  watch: true,
};

// Exports
module.exports = config;