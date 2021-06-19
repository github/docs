const webpack = require('webpack')
const middleware = require('webpack-dev-middleware')
const config = require('../webpack.config')

const webpackCompiler = webpack({
  ...config,
  plugins: [
    ...config.plugins
  ]
})

module.exports = middleware(webpackCompiler, {
  publicPath: config.output.publicPath
})
