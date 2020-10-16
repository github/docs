const babel = require('@babel/core')
const transform = code =>
  babel.transform(code, {
    presets: ['@babel/preset-env'],
    plugins: [
      '@babel/plugin-transform-react-jsx',
      '@babel/plugin-proposal-object-rest-spread',
      '@babel/plugin-transform-modules-commonjs',
      '@babel/plugin-proposal-class-properties'
    ]
  }).code

module.exports = transform
