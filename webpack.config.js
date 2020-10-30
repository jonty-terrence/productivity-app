const path = require('path')
const Dotevn = require('dotenv-webpack')

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, 'server/public'),
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new Dotevn()
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: './server/public'
  }
}
