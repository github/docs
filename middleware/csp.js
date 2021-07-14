// This module defines a Content Security Policy (CSP) to disallow
// inline scripts and content from untrusted sources.

const { contentSecurityPolicy } = require('helmet')
const isArchivedVersion = require('../lib/is-archived-version')
const versionSatisfiesRange = require('../lib/version-satisfies-range')
const AZURE_STORAGE_URL = 'githubdocs.azureedge.net'

module.exports = function csp (req, res, next) {
  const csp = {
    directives: {
      defaultSrc: ["'none'"],
      connectSrc: [
        "'self'",
        '*.algolia.net',
        '*.algolianet.com'
      ],
      fontSrc: [
        "'self'",
        'data:',
        AZURE_STORAGE_URL
      ],
      imgSrc: [
        "'self'",
        'data:',
        'github.githubassets.com',
        AZURE_STORAGE_URL,
        'placehold.it',
        '*.githubusercontent.com',
        'github.com'
      ],
      objectSrc: [
        "'self'"
      ],
      scriptSrc: [
        "'self'",
        'data:',
        // For use during development only! This allows us to use a performant webpack devtool setting (eval)
        // https://webpack.js.org/configuration/devtool/#devtool
        process.env.NODE_ENV === 'development' && "'unsafe-eval'"
      ].filter(Boolean),
      frameSrc: [ // exceptions for GraphQL Explorer
        'https://graphql-explorer.githubapp.com', // production env
        'https://graphql.github.com/',
        'http://localhost:3000', // development env
        'https://www.youtube-nocookie.com'
      ],
      styleSrc: [
        "'self'",
        "'unsafe-inline'"
      ],
      childSrc: [
        "'self'" // exception for search in deprecated GHE versions
      ]
    }
  }

  const { requestedVersion } = isArchivedVersion(req)

  // Exception for Algolia instantsearch in deprecated Enterprise docs (Node.js era)
  if (versionSatisfiesRange(requestedVersion, '<=2.19') && versionSatisfiesRange(requestedVersion, '>2.12')) {
    csp.directives.scriptSrc.push("'unsafe-eval'", "'unsafe-inline'", 'http://www.google-analytics.com', 'https://ssl.google-analytics.com')
    csp.directives.connectSrc.push('https://www.google-analytics.com')
    csp.directives.imgSrc.push('http://www.google-analytics.com', 'https://ssl.google-analytics.com')
  }

  // Exception for search in deprecated Enterprise docs <=2.12 (static site era)
  if (versionSatisfiesRange(requestedVersion, '<=2.12')) {
    csp.directives.scriptSrc.push("'unsafe-inline'")
  }

  return contentSecurityPolicy(csp)(req, res, next)
}
