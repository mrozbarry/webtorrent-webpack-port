const Webpack = require('webpack')
const path = require('path')
const ROOT_PATH = path.join(__dirname, '..')
const SRC_PATH = path.join(ROOT_PATH, 'src')

module.exports = {
  devtool: 'cheap-module-eval-source-map',

  entry: [
    path.join(SRC_PATH, 'index.js')
  ],

  output: {
    path: path.join(ROOT_PATH, 'public'),
    publicPath: '/',
    filename: 'bundle.js'
  },

  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },

  target: 'web',
  node: {
    fs: 'empty'
  },

  module: {
    preLoaders: [{
      test: /\.jsx?$/,
      include: SRC_PATH,
      loader: 'standard'
    }],

    loaders: [
      {
        test: /\.jsx?$/,
        include: SRC_PATH,
        loader: 'babel'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },

  standard: {
    parser: 'babel-eslint'
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: [
      SRC_PATH
    ]
  },

  plugins: [
    new Webpack.HotModuleReplacementPlugin(),
    new Webpack.NoErrorsPlugin()
  ],

  devServer: {
    contentBase: path.join(ROOT_PATH, 'public'),
    hot: true,
    inline: true,
    progress: true,
    publicPath: '/'
  }
}
