const nodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const path = require('path');

const srcPath = path.resolve(__dirname, 'src');
const distPath = path.resolve(__dirname, 'dist');

module.exports = {
  context: srcPath,
  entry: './server/index.js',
  output: {
      path: distPath,
      filename: 'server.js',
      publicPath: '/assets/',
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
				use: ExtractTextPlugin.extract(['css-loader?modules,localIdentName="[name]-[local]",camelCase']),
				test: /\.css$/
			}
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true
    })
  ],
  externals: [nodeExternals()]
};
