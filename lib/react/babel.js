const babel = require('@babel/core')

const reactBabelOptions = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react'
  ],
  plugins: [
    '@babel/plugin-transform-react-jsx',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-class-properties',
    '@babel/transform-runtime'
  ]
}

const transform = code =>
  babel.transform(code, reactBabelOptions).code

module.exports = {
  transform: transform,
  reactBabelOptions: reactBabelOptions
}
