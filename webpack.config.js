var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
    publicPath: '/'
  },
  module : {
    loaders : [
      {
        test : /\.(js|jsx)$/,
        include : SRC_DIR,
        loader : 'babel-loader',
        query: {
          presets: ['react', 'env']
       }
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'file-loader'
      }
     
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: true
  },
  resolve: {
    extensions: ['.js', '.jsx'],

    // modulesDirectories: ['node_modules']
  },
};
