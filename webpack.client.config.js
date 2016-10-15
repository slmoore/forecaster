var webpack = require('webpack');
require('dotenv').config();

// client-side bundle

module.exports = {
  entry: ['babel-polyfill','./app/index.js'],
  output: { 
    path: './dist',
    filename: 'bundle.js',
    //publicPath: pathPublicCDN
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.GEOCODE': JSON.stringify(process.env.GEOCODE),
      'process.env.DARK_SKY': JSON.stringify(process.env.DARK_SKY)
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
      }
    })
  ]
};

