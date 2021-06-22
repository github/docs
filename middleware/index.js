const express = require('express')
const instrument = require('../lib/instrument-middleware')
const haltOnDroppedConnection = require('./halt-on-dropped-connection')
const abort = require('./abort')
const timeout = require('./timeout')
const morgan = require('morgan')
const datadog = require('./connect-datadog')
const rateLimit = require('./rate-limit')
const cors = require('./cors')
const helmet = require('helmet')
const csp = require('./csp')
const cookieParser = require('./cookie-parser')
const csrf = require('./csrf')
const handleCsrfErrors = require('./handle-csrf-errors')
const compression = require('compression')
const disableCachingOnSafari = require('./disable-caching-on-safari')
const setFastlySurrogateKey = require('./set-fastly-surrogate-key')
const setFastlyCacheHeaders = require('./set-fastly-cache-headers')
const catchBadAcceptLanguage = require('./catch-bad-accept-language')
const reqUtils = require('./req-utils')
const recordRedirect = require('./record-redirect')
const connectSlashes = require('connect-slashes')
const handleErrors = require('./handle-errors')

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
  if (!isTest) app.use(timeout)
  app.use(abort)

  // *** Development tools ***
  app.use(morgan('dev', { skip: (req, res) => !isDevelopment }))

  // *** Observability ***
  if (process.env.DD_API_KEY) {
    app.use(datadog)
  }

  // *** Early exits ***
  // Don't use the proxy's IP, use the requester's for rate limiting
  // See https://expressjs.com/en/guide/behind-proxies.html
  app.set('trust proxy', 1)
  app.use(rateLimit)
  app.use(instrument('./handle-invalid-paths'))
  app.use(instrument('./handle-next-data-path'))

  // *** Security ***
  app.use(cors)
  app.use(helmet({
    // Override referrerPolicy to match the browser's default: "strict-origin-when-cross-origin".
    // Helmet now defaults to "no-referrer", which is a problem for our archived assets proxying.
    referrerPolicy: {
      policy: 'strict-origin-when-cross-origin'
    }
  }))
  app.use(csp) // Must come after helmet
  app.use(cookieParser) // Must come before csrf
  app.use(express.json()) // Must come before csrf
  app.use(csrf)
  app.use(handleCsrfErrors) // Must come before regular handle-errors

  // *** Headers ***
  app.set('etag', false) // We will manage our own ETags if desired
  app.use(compression())
  app.use(disableCachingOnSafari)
  app.use(setFastlySurrogateKey)
  app.use(catchBadAcceptLanguage)

  // *** Config and context for redirects ***
  app.use(reqUtils) // Must come before record-redirect and events
  app.use(recordRedirect)
  app.use(instrument('./detect-language')) // Must come before context, breadcrumbs, find-page, handle-errors, homepages
  app.use(asyncMiddleware(instrument('./context'))) // Must come before early-access-*, handle-redirects
  app.use(asyncMiddleware(instrument('./contextualizers/short-versions'))) // Support version shorthands

  // *** Redirects, 3xx responses ***
  // I ordered these by use frequency
  app.use(connectSlashes(false))
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
  app.use('/categories.json', asyncMiddleware(instrument('./categories-for-support')))
  app.use(instrument('./loaderio-verification'))
  app.get('/_500', asyncMiddleware(instrument('./trigger-error')))

  // Check for a dropped connection before proceeding (again)
  app.use(haltOnDroppedConnection)

  // *** Preparation for render-page: contextualizers ***
  app.use(asyncMiddleware(instrument('./contextualizers/release-notes')))
  app.use(instrument('./contextualizers/graphql'))
  app.use(instrument('./contextualizers/rest'))
  app.use(instrument('./contextualizers/webhooks'))
  app.use(asyncMiddleware(instrument('./contextualizers/whats-new-changelog')))
  app.use(instrument('./contextualizers/layout'))
  app.use(instrument('./contextualizers/current-product-tree'))
  app.use(asyncMiddleware(instrument('./contextualizers/generic-toc')))
  app.use(asyncMiddleware(instrument('./contextualizers/breadcrumbs')))
  app.use(asyncMiddleware(instrument('./contextualizers/early-access-breadcrumbs')))
  app.use(asyncMiddleware(instrument('./contextualizers/product-examples')))

  app.use(asyncMiddleware(instrument('./dev-toc')))
  app.use(asyncMiddleware(instrument('./featured-links')))
  app.use(asyncMiddleware(instrument('./learning-track')))
  app.use(asyncMiddleware(instrument('./is-next-request')))

  // *** Headers for pages only ***
  app.use(setFastlyCacheHeaders)

  // handle serving NextJS bundled code (/_next/*)
  if (process.env.FEATURE_NEXTJS) {
    app.use(instrument('./next'))
  }

  // Check for a dropped connection before proceeding (again)
  app.use(haltOnDroppedConnection)

  // *** Rendering, must go almost last ***
  app.get('/*', asyncMiddleware(instrument('./render-page')))

  // *** Error handling, must go last ***
  app.use(handleErrors)
}
