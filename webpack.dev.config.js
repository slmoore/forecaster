var webpack = require('webpack');
require('dotenv').config();

// client-side bundle

var entry = (process.env.NODE_ENV === 'production') ? 
  ['babel-polyfill','./app/index.js'] : 
  [
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    'babel-polyfill',
    './app/index.js'
  ];

module.exports = {
  entry: entry,
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
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
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
  ],
  devtool: 'source-map',
  devServer: {
    stats: { colors: true },
    contentBase: './dist'
  }
};

