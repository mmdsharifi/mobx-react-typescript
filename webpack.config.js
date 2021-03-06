var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.ts', '.tsx', '.json']
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: "style!css"
      },
      {
        test: /\.json$/,
        loaders: ['json-loader']
      },
      {
        test: /\.tsx?$/,
        loaders: ['react-hot/webpack', 'ts-loader'],
        include: path.join(__dirname, 'src')
      }
    ]
  }
};
