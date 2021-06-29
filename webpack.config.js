const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { EnvironmentPlugin, ProvidePlugin } = require('webpack')

module.exports = {
  mode: 'development',
  devtool: process.env.NODE_ENV === 'development' ? 'eval' : 'source-map', // no 'eval' outside of development
  entry: './javascripts/index.ts',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist'
  },
  stats: 'errors-only',
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.css', '.scss']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              url: false
            }
          },
          {
            // Needed to resolve image url()s within @primer/css
            loader: 'resolve-url-loader',
            options: {}
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                quietDeps: true,
                includePaths: ['./stylesheets', './node_modules'],
                options: {
                  sourceMap: true,
                  sourceMapContents: false
                }
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'index.css'
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'node_modules/@primer/css/fonts', to: 'fonts' }
      ]
    }),
    new EnvironmentPlugin({
      NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
      DEBUG: false
    }),
    new ProvidePlugin({
      process: 'process/browser'
    })
  ]
}
