const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

//import NodePolyfillPlugin from "node-polyfill-webpack-plugin"

module.exports = function override(config, env) {
  // do stuff with the webpack config...
  config.plugins.push(new NodePolyfillPlugin())
  return config
}