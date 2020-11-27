module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true,
    node: true
  },
  parser: 'babel-eslint',
  plugins: ['prettier'],
  extends: [
    'eslint:recommended',
    'standard',
    'prettier',
    'plugin:prettier/recommended',
    'prettier/standard'
  ],
  parserOptions: {
    ecmaVersion: 11
  },
  rules: {},
  overrides: [
    {
      files: ['**/tests/**/*.js'],
      env: {
        jest: true
      }
    }
  ]
}
