var webpack = require('webpack');

if (!process.env.GEOCODE) {
  require('dotenv').config();
}

// development bundle

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    'babel-polyfill',
    './app/index.js'
  ],
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
      'process.env.NODE_ENV': JSON.stringify('development'),
      'process.env.GEOCODE': JSON.stringify(process.env.GEOCODE),
      'process.env.DARK_SKY': JSON.stringify(process.env.DARK_SKY)
    })
  ],
  devtool: 'source-map',
  devServer: {
    stats: { colors: true }
  }
};

