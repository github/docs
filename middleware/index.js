const express = require('express')
const instrument = require('../lib/instrument-middleware')
const haltOnDroppedConnection = require('./halt-on-dropped-connection')

const { NODE_ENV } = process.env
const isDevelopment = NODE_ENV === 'development'
const isTest = NODE_ENV === 'test' || process.env.GITHUB_ACTIONS === 'true'

// Catch unhandled promise rejections and passing them to Express's error handler
// https://medium.com/@Abazhenov/using-async-await-in-express-with-node-8-b8af872c0016
const asyncMiddleware = fn =>
  (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next)
  }

module.exports = function (app) {
  // *** Request connection management ***
  if (!isTest) app.use(require('./timeout'))
  app.use(require('./abort'))

  // *** Development tools ***
  app.use(require('morgan')('dev', { skip: (req, res) => !isDevelopment }))
  if (isDevelopment) app.use(require('./webpack'))

  // *** Observability ***
  if (process.env.DD_API_KEY) {
    app.use(require('./connect-datadog'))
  }

  // *** Early exits ***
  // Don't use the proxy's IP, use the requester's for rate limiting
  // See https://expressjs.com/en/guide/behind-proxies.html
  app.set('trust proxy', 1)
  app.use(require('./rate-limit'))
  app.use(instrument('./handle-invalid-paths'))

  // *** Security ***
  app.use(require('./cors'))
  app.use(require('./csp')) // Must come before helmet
  app.use(require('helmet')())
  app.use(require('./cookie-parser')) // Must come before csrf
  app.use(express.json()) // Must come before csrf
  app.use(require('./csrf'))
  app.use(require('./handle-csrf-errors')) // Must come before regular handle-errors

  // *** Headers ***
  app.set('etag', false) // We will manage our own ETags if desired
  app.use(require('compression')())
  app.use(require('./disable-caching-on-safari'))
  app.use(require('./set-fastly-surrogate-key'))

  // *** Config and context for redirects ***
  app.use(require('./req-utils')) // Must come before record-redirect and events
  app.use(require('./record-redirect'))
  app.use(instrument('./detect-language')) // Must come before context, breadcrumbs, find-page, handle-errors, homepages
  app.use(asyncMiddleware(instrument('./context'))) // Must come before early-access-*, handle-redirects

  // *** Redirects, 3xx responses ***
  // I ordered these by use frequency
  app.use(require('connect-slashes')(false))
  app.use(instrument('./redirects/external'))
  app.use(instrument('./redirects/help-to-docs'))
  app.use(instrument('./redirects/language-code-redirects')) // Must come before contextualizers
  app.use(instrument('./redirects/handle-redirects')) // Must come before contextualizers

  // *** Config and context for rendering ***
  app.use(asyncMiddleware(instrument('./find-page'))) // Must come before archived-enterprise-versions, breadcrumbs, featured-links, products, render-page
  app.use(instrument('./block-robots'))

  // Check for a dropped connection before proceeding
  app.use(haltOnDroppedConnection)

  // *** Rendering, 2xx responses ***
  // I largely ordered these by use frequency
  app.use(asyncMiddleware(instrument('./archived-enterprise-versions-assets'))) // Must come before static/assets
  app.use('/dist', express.static('dist', {
    index: false,
    etag: false,
    immutable: true,
    lastModified: false,
    maxAge: '28 days' // Could be infinite given our fingerprinting
  }))
  app.use('/assets', express.static('assets', {
    index: false,
    etag: false,
    lastModified: false,
    maxAge: '1 day' // Relatively short in case we update images
  }))
  app.use('/public', express.static('data/graphql', {
    index: false,
    etag: false,
    lastModified: false,
    maxAge: '7 days' // A bit longer since releases are more sparse
  }))
  app.use('/events', asyncMiddleware(instrument('./events')))
  app.use('/search', asyncMiddleware(instrument('./search')))
  app.use(asyncMiddleware(instrument('./archived-enterprise-versions')))
  app.use(instrument('./robots'))
  app.use(/(\/.*)?\/early-access$/, instrument('./contextualizers/early-access-links'))
  app.use(asyncMiddleware(instrument('./categories-for-support-team')))
  app.use(instrument('./loaderio-verification'))
  app.get('/_500', asyncMiddleware(instrument('./trigger-error')))

  // Check for a dropped connection before proceeding (again)
  app.use(haltOnDroppedConnection)

  // *** Preparation for render-page ***
  app.use(asyncMiddleware(instrument('./contextualizers/enterprise-release-notes')))
  app.use(instrument('./contextualizers/graphql'))
  app.use(instrument('./contextualizers/rest'))
  app.use(instrument('./contextualizers/webhooks'))
  app.use(asyncMiddleware(instrument('./contextualizers/whats-new-changelog')))
  app.use(asyncMiddleware(instrument('./breadcrumbs')))
  app.use(asyncMiddleware(instrument('./early-access-breadcrumbs')))
  app.use(asyncMiddleware(instrument('./enterprise-server-releases')))
  app.use(asyncMiddleware(instrument('./dev-toc')))
  app.use(asyncMiddleware(instrument('./featured-links')))
  app.use(asyncMiddleware(instrument('./learning-track')))

  // *** Headers for pages only ***
  app.use(require('./set-fastly-cache-headers'))

  // Check for a dropped connection before proceeding (again)
  app.use(haltOnDroppedConnection)

  // *** Rendering, must go almost last ***
  app.get('/*', asyncMiddleware(instrument('./render-page')))

  // *** Error handling, must go last ***
  app.use(require('./handle-errors'))
}
