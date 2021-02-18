var path = require('path');
var Dotenv = require('dotenv-webpack');
var HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    bundle: './src/index.jsx',
    vendor: [
      'axios',
      'react',
      'react-dom',
      'react-redux',
      '@reduxjs/toolkit',
      '@material-ui/core',
      '@material-ui/icons'
    ]
  },
  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: { loader: 'babel-loader' },
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/,
        use: { loader: 'file-loader' }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '$hooks': path.resolve(__dirname, 'src/hooks'),
      '$theme': path.resolve(__dirname, 'src/common/theme'),
      '$components': path.resolve(__dirname, 'src/components'),
      '$redux-toolkit': path.resolve(__dirname, 'src/redux-toolkit')
    }
  },
  performance: {
    hints: false
  },
  devtool: 'eval-source-map',
  plugins: [
    new Dotenv(),
    new HtmlWebPackPlugin({ template: './src/index.html' })
  ]
};
