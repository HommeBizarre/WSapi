const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {

  // ... other webpack config
  resolve: {
    fallback: {
      net: require.resolve("net"),
      tls: require.resolve("tls"),
      "fs": false,
      //fs: require.resolve("fs"),
      url: require.resolve('url'),
      assert: require.resolve('assert'),
      crypto: require.resolve('crypto-browserify'),
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify'),
      os: require.resolve('os-browserify/browser'),
      buffer: require.resolve('buffer'),
      stream: require.resolve('stream-browserify'),
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    })
  ],
  externals: [
    nodeExternals()
  ]
}