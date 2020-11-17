const express = require('express')

const isDevelopment = process.env.NODE_ENV === 'development'

// Catch unhandled promise rejections and passing them to Express's error handler
// https://medium.com/@Abazhenov/using-async-await-in-express-with-node-8-b8af872c0016
const asyncMiddleware = fn =>
  (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next)
  }

module.exports = function (app) {
  // Don't use the proxy's IP, use the requester's for rate limiting
  // See https://expressjs.com/en/guide/behind-proxies.html
  app.set('trust proxy', 1)
  app.use(require('morgan')('dev', { skip: (req, res) => !isDevelopment }))
  app.use(require('./rate-limit'))
  if (isDevelopment) app.use(require('./webpack'))
  app.use(require('./cookie-parser'))
  app.use(require('./req-utils'))
  app.use(require('./record-redirect'))
  app.use(require('./redirects/external'))
  app.use(require('./redirects/help-to-docs'))
  app.use(require('./set-fastly-cache-headers'))
  app.use(require('./handle-invalid-paths'))
  app.use(require('./loaderio-verification'))
  app.use(require('./cors'))
  app.use(require('./csp'))
  app.use(require('helmet')())
  app.use(require('./robots'))
  app.use(express.json()) // Must come before ./csrf
  app.use(require('./csrf'))
  app.use(require('./handle-csrf-errors'))
  app.use(require('compression')())
  app.use(require('connect-slashes')(false))
  app.use('/dist', express.static('dist'))
  app.use('/events', require('./events'))
  app.use(require('./categories-for-support-team'))
  app.use(require('./detect-language'))
  app.use(asyncMiddleware(require('./context')))
  app.use('/csrf', require('./csrf-route'))
  app.use(require('./early-access-paths'))
  app.use(require('./early-access-proxy'))
  app.use(require('./find-page'))
  app.use(require('./archived-enterprise-versions'))
  app.use(require('./archived-enterprise-versions-assets'))
  app.use('/assets', express.static('assets'))
  app.use('/public', express.static('data/graphql'))
  app.use(require('./redirects/language-code-redirects'))
  // redirects need to be handled before the contextualizers
  app.use(require('./redirects/handle-redirects'))
  app.use(require('./contextualizers/graphql'))
  app.use(require('./contextualizers/rest'))
  app.use(require('./contextualizers/webhooks'))
  app.use(require('./disable-caching-on-safari'))
  app.get('/_500', asyncMiddleware(require('./trigger-error')))
  app.use(require('./breadcrumbs'))
  app.use(require('./featured-links'))
  app.get('/*', asyncMiddleware(require('./render-page')))
  app.use(require('./handle-errors'))
}
