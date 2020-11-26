#!/usr/bin/env node

const dependencyCheck = require('dependency-check')
const path = require('path')

// [start-readme]
//
// This script checks which modules you have used in your code and then makes sure
// they are listed as dependencies in your package.json, or vice-versa
//
// https://github.com/dependency-check-team/dependency-check
//
// The `ignore` array is for client-side or build-time stuff that doesn't get `require()d` in the normal way.
//
// [end-readme]

const main = async () => {
  const data = await dependencyCheck({
    entries: [
      path.posix.join(__dirname, '..', '*', '*.js'),
      path.posix.join('!', __dirname, '..', 'javascripts', '*.js'),
      path.posix.join(__dirname, '..', 'script', 'graphql', '*.js')
    ],
    path: path.join(__dirname, '..'),
    noDefaultEntries: true
  })

  const extra = dependencyCheck.extra(data.package, data.used, {
    excludeDev: true,
    ignore: [
      '@babel/*',
      '@primer/*',
      'instantsearch.js',
      'querystring',
      'pa11y-ci',
      'sass',
      'babel-loader',
      'cross-env',
      'css-loader',
      'resolve-url-loader',
      'sass-loader',
      'style-loader',
      'webpack-cli',
      'browser-date-formatter',
      'html-truncate',
      'platform-utils',
      'search-with-your-keyboard',
      'uuid',
      'imurmurhash',
      'js-cookie',
      'clipboard'
    ]
  })

  if (extra.length) {
    console.error(`Packages in package.json not used in your code: ${extra.join(', ')}`)
  }

  const missing = dependencyCheck.missing(data.package, data.used)

  if (missing.length) {
    console.error(`Dependencies not listed in package.json: ${missing.join(', ')}`)
  }

  if (extra.length || missing.length) process.exit(1)
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
