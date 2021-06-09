module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true,
    node: true
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'standard',
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 11
  },
  rules: {
    'import/no-extraneous-dependencies': ['error'],
  },
  overrides: [
    {
      files: [
        '**/tests/**/*.js'
      ],
      env: {
        jest: true
      }
    },
    {
      files: [
        '**/*.tsx',
        '**/*.ts'
      ],
      parser: '@typescript-eslint/parser',
      rules: {
        'camelcase': 'off',
        'no-unused-vars': 'off',
        'no-undef': 'off',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-unused-vars': ['error'],
      }
    },
  ]
}
