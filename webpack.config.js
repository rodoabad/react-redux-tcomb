const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'sourcemap',
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'demo'),
    filename: 'app.js'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        include: /src/,
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        include: /src/,
        loaders: [
          'babel?cacheDirectory'
        ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};
