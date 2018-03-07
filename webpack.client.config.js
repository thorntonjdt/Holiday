const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const srcPath = path.resolve(__dirname, 'src');
const distPath = path.resolve(__dirname, 'dist');

const plugins = [
  new ExtractTextPlugin({
    filename: '[name].css',
    allChunks: true
  })
];

if (process.env.NODE_ENV === 'analyze') {
    plugins.push(new BundleAnalyzerPlugin());
}

if (process.env.NODE_ENV === 'production') {
  plugins.push(new CompressionPlugin({
    asset: "[path].gz[query]",
    algorithm: "gzip",
    test: /\.(js|html|css)$/,
    threshold: 0,
    minRatio: 0.8
  }))
}

module.exports = {
  entry: {
    client: `${srcPath}/client/index.js`,
    vendor: ['react', 'react-dom', 'react-router-dom']
  },
  output: {
      path: distPath,
      filename: '[name].js',
      publicPath: '/assets/',
  },
  target: 'web',
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
  plugins,
  devtool: 'source-map'
};
