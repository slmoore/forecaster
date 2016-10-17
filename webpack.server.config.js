var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

if (!process.env.GEOCODE) {
  require('dotenv').config();
}

// server-side bundle

module.exports = {
  // bundle express server config with react
  entry: path.resolve(__dirname, 'server.js'),

  output: {
    // run the output using node
    filename: 'server.bundle.js'
  },
  // target usage for node.js
  target: 'node',

  // keep node_module paths out of the bundle
  externals: fs.readdirSync(path.resolve(__dirname, 'node_modules')).concat([
    'react-dom/server', 'react/addons',
  ]).reduce(function (ext, mod) {
    ext[mod] = 'commonjs ' + mod
    return ext
  }, {}),

  node: {
    __filename: true,
    __dirname: true
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