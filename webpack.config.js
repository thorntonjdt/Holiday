const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const ReactLoadablePlugin = require('react-loadable/webpack').ReactLoadablePlugin;
const ManifestPlugin = require('webpack-manifest-plugin');

const clientConfig = {
  entry: './client.js',
  output: {
    path: `${__dirname}/build`,
    filename: 'client.js',
    publicPath: '/',
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  plugins: [
    // ...
    new webpack.NormalModuleReplacementPlugin(
      /Bundles.js/,
      './AsyncBundles.js'
    ),
  ]
};

const serverConfig = {
  entry: './server/index.js',
  output: {
    path: `${__dirname}/build`,
    filename: 'server.js',
    libraryTarget: 'commonjs2',
  },
  target: 'node',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  plugins: [
    new ManifestPlugin(),
    new ReactLoadablePlugin({
      filename: './build/react-loadable.json'
    })
  ],
  externals: [nodeExternals()]
};

module.exports = serverConfig/*[
  clientConfig,
  serverConfig
];*/
