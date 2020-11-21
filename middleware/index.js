const express = require('express')

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

  // *** Early exits ***
  // Don't use the proxy's IP, use the requester's for rate limiting
  // See https://expressjs.com/en/guide/behind-proxies.html
  app.set('trust proxy', 1)
  app.use(require('./rate-limit'))
  app.use(require('./handle-invalid-paths'))

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
  app.use(require('./set-fastly-cache-headers'))
  app.use(require('./disable-caching-on-safari'))

  // *** Config and context for redirects ***
  app.use(require('./req-utils')) // Must come before record-redirect and events
  app.use(require('./record-redirect'))
  app.use(require('./detect-language')) // Must come before context, breadcrumbs, find-page, handle-errors, homepages
  app.use(asyncMiddleware(require('./context'))) // Must come before early-access-*, handle-redirects

  // *** Redirects, 3xx responses ***
  // I ordered these by use frequency
  app.use(require('connect-slashes')(false))
  app.use(require('./redirects/external'))
  app.use(require('./redirects/help-to-docs'))
  app.use(require('./redirects/language-code-redirects')) // Must come before contextualizers
  app.use(require('./redirects/handle-redirects')) // Must come before contextualizers

  // *** Config and context for rendering ***
  app.use(require('./find-page')) // Must come before archived-enterprise-versions, breadcrumbs, featured-links, products, render-page

  // *** Rendering, 2xx responses ***
  // I largely ordered these by use frequency
  app.use(require('./archived-enterprise-versions-assets')) // Must come before static/assets
  app.use('/dist', express.static('dist'))
  app.use('/assets', express.static('assets'))
  app.use('/public', express.static('data/graphql'))
  app.use('/events', require('./events'))
  app.use('/csrf', require('./csrf-route'))
  app.use(require('./archived-enterprise-versions'))
  app.use(require('./robots'))
  app.use(require('./early-access-paths'))
  app.use(require('./early-access-proxy'))
  app.use(require('./categories-for-support-team'))
  app.use(require('./loaderio-verification'))
  app.get('/_500', asyncMiddleware(require('./trigger-error')))

  // *** Preparation for render-page ***
  app.use(asyncMiddleware(require('./contextualizers/enterprise-release-notes')))
  app.use(require('./contextualizers/graphql'))
  app.use(require('./contextualizers/rest'))
  app.use(require('./contextualizers/webhooks'))
  app.use(require('./breadcrumbs'))
  app.use(require('./dev-toc'))
  app.use(require('./featured-links'))

  // *** Rendering, must go last ***
  app.get('/*', asyncMiddleware(require('./render-page')))
  app.use(require('./handle-errors'))
}
