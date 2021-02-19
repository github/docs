const webpack = require('webpack')
const middleware = require('webpack-dev-middleware')
const config = require('../webpack.config')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

const webpackCompiler = webpack({
  ...config,
  mode: 'development',
  plugins: [
    ...config.plugins,
    new FriendlyErrorsWebpackPlugin({
      clearConsole: false
    })
  ]
})

module.exports = middleware(webpackCompiler, {
  publicPath: config.output.publicPath,
  logLevel: 'silent'
})
