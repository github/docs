const express = require('express')
const instrument = require('../lib/instrument-middleware')

const isDevelopment = process.env.NODE_ENV === 'development'

// Catch unhandled promise rejections and passing them to Express's error handler
// https://medium.com/@Abazhenov/using-async-await-in-express-with-node-8-b8af872c0016
const asyncMiddleware = fn =>
  (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next)
  }

module.exports = function (app) {
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
  app.use(require('compression')())
  app.use(require('./disable-caching-on-safari'))

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
  app.use(instrument('./find-page')) // Must come before archived-enterprise-versions, breadcrumbs, featured-links, products, render-page
  app.use(instrument('./block-robots'))

  // *** Rendering, 2xx responses ***
  // I largely ordered these by use frequency
  app.use(instrument('./archived-enterprise-versions-assets')) // Must come before static/assets
  app.use('/dist', express.static('dist', {
    index: false,
    etag: false,
    immutable: true,
    lastModified: false,
    maxAge: '28 days'
  }))
  app.use('/assets', express.static('assets'))
  app.use('/public', express.static('data/graphql'))
  app.use('/events', instrument('./events'))
  app.use('/csrf', instrument('./csrf-route'))
  app.use('/search', instrument('./search'))
  app.use(instrument('./archived-enterprise-versions'))
  app.use(instrument('./robots'))
  app.use(/(\/.*)?\/early-access$/, instrument('./contextualizers/early-access-links'))
  app.use(instrument('./categories-for-support-team'))
  app.use(instrument('./loaderio-verification'))
  app.get('/_500', asyncMiddleware(instrument('./trigger-error')))

  // *** Preparation for render-page ***
  app.use(asyncMiddleware(instrument('./contextualizers/enterprise-release-notes')))
  app.use(instrument('./contextualizers/graphql'))
  app.use(instrument('./contextualizers/rest'))
  app.use(instrument('./contextualizers/webhooks'))
  app.use(instrument('./breadcrumbs'))
  app.use(instrument('./early-access-breadcrumbs'))
  app.use(instrument('./enterprise-server-releases'))
  app.use(instrument('./dev-toc'))
  app.use(instrument('./featured-links'))
  app.use(instrument('./learning-track'))

  // *** Headers for pages only ***
  app.use(require('./set-fastly-cache-headers'))

  // *** Rendering, must go last ***
  app.get('/*', asyncMiddleware(instrument('./render-page')))
  app.use(require('./handle-errors'))
}
