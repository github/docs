import fs from 'fs'
import path from 'path'

import express from 'express'

import instrument from '../lib/instrument-middleware.js'
import haltOnDroppedConnection from './halt-on-dropped-connection.js'
import abort from './abort.js'
import timeout from './timeout.js'
import morgan from 'morgan'
import datadog from './connect-datadog.js'
import helmet from './helmet.js'
import cookieParser from './cookie-parser.js'
import csrf from './csrf.js'
import handleCsrfErrors from './handle-csrf-errors.js'
import { setDefaultFastlySurrogateKey } from './set-fastly-surrogate-key.js'
import setFastlyCacheHeaders from './set-fastly-cache-headers.js'
import reqUtils from './req-utils.js'
import recordRedirect from './record-redirect.js'
import handleErrors from './handle-errors.js'
import handleInvalidPaths from './handle-invalid-paths.js'
import handleNextDataPath from './handle-next-data-path.js'
import detectLanguage from './detect-language.js'
import context from './context.js'
import shortVersions from './contextualizers/short-versions.js'
import languageCodeRedirects from './redirects/language-code-redirects.js'
import handleRedirects from './redirects/handle-redirects.js'
import findPage from './find-page.js'
import blockRobots from './block-robots.js'
import archivedEnterpriseVersionsAssets from './archived-enterprise-versions-assets.js'
import events from './events.js'
import search from './search.js'
import healthz from './healthz.js'
import anchorRedirect from './anchor-redirect.js'
import remoteIP from './remote-ip.js'
import buildInfo from './build-info.js'
import archivedEnterpriseVersions from './archived-enterprise-versions.js'
import robots from './robots.js'
import earlyAccessLinks from './contextualizers/early-access-links.js'
import categoriesForSupport from './categories-for-support.js'
import triggerError from './trigger-error.js'
import releaseNotes from './contextualizers/release-notes.js'
import whatsNewChangelog from './contextualizers/whats-new-changelog.js'
import graphQL from './contextualizers/graphql.js'
import webhooks from './contextualizers/webhooks.js'
import layout from './contextualizers/layout.js'
import currentProductTree from './contextualizers/current-product-tree.js'
import genericToc from './contextualizers/generic-toc.js'
import breadcrumbs from './contextualizers/breadcrumbs.js'
import features from './contextualizers/features.js'
import productExamples from './contextualizers/product-examples.js'
import featuredLinks from './featured-links.js'
import learningTrack from './learning-track.js'
import next from './next.js'
import renderPage from './render-page.js'
import assetPreprocessing from './asset-preprocessing.js'
import archivedAssetRedirects from './archived-asset-redirects.js'
import favicons from './favicons.js'
import setStaticAssetCaching from './static-asset-caching.js'
import cacheFullRendering from './cache-full-rendering.js'
import protect from './overload-protection.js'
import fastHead from './fast-head.js'
import fastlyCacheTest from './fastly-cache-test.js'
import fastRootRedirect from './fast-root-redirect.js'
import trailingSlashes from './trailing-slashes.js'
import fastlyBehavior from './fastly-behavior.js'

const { DEPLOYMENT_ENV, NODE_ENV } = process.env
const isTest = NODE_ENV === 'test' || process.env.GITHUB_ACTIONS === 'true'
// By default, logging each request (with morgan), is on. And by default
// it's off if you're in a production environment or running automated tests.
// But if you set the env var, that takes precedence.
const ENABLE_DEV_LOGGING = JSON.parse(
  process.env.ENABLE_DEV_LOGGING || !(DEPLOYMENT_ENV === 'azure' || isTest)
)

const ENABLE_FASTLY_TESTING = JSON.parse(process.env.ENABLE_FASTLY_TESTING || 'false')

// Catch unhandled promise rejections and passing them to Express's error handler
// https://medium.com/@Abazhenov/using-async-await-in-express-with-node-8-b8af872c0016
const asyncMiddleware = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next)
}

export default function (app) {
  // *** Request connection management ***
  if (!isTest) app.use(timeout)
  app.use(abort)

  // Don't use the proxy's IP, use the requester's for rate limiting or
  // logging.
  // See https://expressjs.com/en/guide/behind-proxies.html
  // Essentially, setting this means it believe that the IP is the
  // first of the `X-Forwarded-For` header values.
  // If it was 0 (or false), the value would be that
  // of `req.socket.remoteAddress`.
  // Now, the `req.ip` becomes the first entry from x-forwarded-for
  // and falls back on `req.socket.remoteAddress` in all other cases.
  // Their documentation says:
  //
  //   	If true, the client's IP address is understood as the
  //    left-most entry in the X-Forwarded-For header.
  //
  app.set('trust proxy', true)

  // *** Overload Protection ***
  // Only used in production because our tests can overload the server
  if (
    process.env.NODE_ENV === 'production' &&
    !JSON.parse(process.env.DISABLE_OVERLOAD_PROTECTION || 'false')
  ) {
    app.use(protect)
  }

  // *** Request logging ***
  if (ENABLE_DEV_LOGGING) {
    app.use(morgan('dev'))
  }

  // *** Observability ***
  if (process.env.DD_API_KEY) {
    app.use(datadog)
  }

  // Must appear before static assets and all other requests
  // otherwise we won't be able to benefit from that functionality
  // for static assets as well.
  app.use(setDefaultFastlySurrogateKey)

  // Must come before `csrf` otherwise you get a Set-Cookie on successful
  // asset requests. And it can come before `rateLimit` because if it's a
  // 200 OK, the rate limiting won't matter anyway.
  // archivedEnterpriseVersionsAssets must come before static/assets
  app.use(
    asyncMiddleware(
      instrument(archivedEnterpriseVersionsAssets, './archived-enterprise-versions-assets')
    )
  )

  app.use(favicons)

  // Any static URL that contains some sort of checksum that makes it
  // unique gets the "manual" surrogate key. If it's checksummed,
  // it's bound to change when it needs to change. Otherwise,
  // we want to make sure it doesn't need to be purged just because
  // there's a production deploy.
  // Note, for `/assets/cb-*...` requests,
  // this needs to come before `assetPreprocessing` because
  // the `assetPreprocessing` middleware will rewrite `req.url` if
  // it applies.
  app.use(setStaticAssetCaching)

  // Must come before any other middleware for assets
  app.use(archivedAssetRedirects)

  // This must come before the express.static('assets') middleware.
  app.use(assetPreprocessing)

  app.use(
    '/assets/',
    express.static('assets', {
      index: false,
      etag: false,
      // Can be aggressive because images inside the content get unique
      // URLs with a cache busting prefix.
      maxAge: '7 days',
      immutable: process.env.NODE_ENV !== 'development',
      // This means, that if you request a file that starts with /assets/
      // any file doesn't exist, don't bother (NextJS) rendering a
      // pretty HTML error page.
      fallthrough: false,
    })
  )
  app.use(
    '/public/',
    express.static('data/graphql', {
      index: false,
      etag: false,
      maxAge: '7 days', // A bit longer since releases are more sparse
      // See note about about use of 'fallthrough'
      fallthrough: false,
    })
  )

  // In development, let NextJS on-the-fly serve the static assets.
  // But in production, don't let NextJS handle any static assets
  // because they are costly to generate (the 404 HTML page)
  // and it also means that a CSRF cookie has to be generated.
  if (process.env.NODE_ENV !== 'development') {
    const assetDir = path.join('.next', 'static')
    if (!fs.existsSync(assetDir))
      throw new Error(`${assetDir} directory has not been generated. Run 'npm run build' first.`)

    app.use(
      '/_next/static/',
      express.static(assetDir, {
        index: false,
        etag: false,
        maxAge: '365 days',
        immutable: true,
        // See note about about use of 'fallthrough'
        fallthrough: false,
      })
    )
  }

  // *** Early exits ***
  app.get('/', fastRootRedirect)
  app.use(instrument(handleInvalidPaths, './handle-invalid-paths'))
  app.use(instrument(handleNextDataPath, './handle-next-data-path'))

  // *** Security ***
  app.use(helmet)
  app.use(cookieParser) // Must come before csrf
  app.use(express.json()) // Must come before csrf

  if (ENABLE_FASTLY_TESTING) {
    app.use(fastlyBehavior) // FOR TESTING. Must come before csrf
  }

  app.use(csrf)
  app.use(handleCsrfErrors) // Must come before regular handle-errors

  // *** Headers ***
  app.set('etag', false) // We will manage our own ETags if desired

  // *** Config and context for redirects ***
  app.use(reqUtils) // Must come before record-redirect and events
  app.use(recordRedirect)
  app.use(instrument(detectLanguage, './detect-language')) // Must come before context, breadcrumbs, find-page, handle-errors, homepages
  app.use(asyncMiddleware(instrument(context, './context'))) // Must come before early-access-*, handle-redirects
  app.use(instrument(shortVersions, './contextualizers/short-versions')) // Support version shorthands

  // Must come before handleRedirects.
  // This middleware might either redirect to serve something.
  app.use(asyncMiddleware(instrument(archivedEnterpriseVersions, './archived-enterprise-versions')))

  // *** Redirects, 3xx responses ***
  // I ordered these by use frequency
  app.use(instrument(trailingSlashes, './redirects/trailing-slashes'))
  app.use(instrument(languageCodeRedirects, './redirects/language-code-redirects')) // Must come before contextualizers
  app.use(instrument(handleRedirects, './redirects/handle-redirects')) // Must come before contextualizers

  // *** Config and context for rendering ***
  app.use(instrument(findPage, './find-page')) // Must come before archived-enterprise-versions, breadcrumbs, featured-links, products, render-page
  app.use(instrument(blockRobots, './block-robots'))

  // Check for a dropped connection before proceeding
  app.use(haltOnDroppedConnection)

  // *** Rendering, 2xx responses ***
  app.use('/events', instrument(events, './events'))
  app.use('/search', instrument(search, './search'))
  app.use('/healthz', instrument(healthz, './healthz'))
  app.use('/anchor-redirect', instrument(anchorRedirect, './anchor-redirect'))
  app.get('/_ip', instrument(remoteIP, './remoteIP'))
  app.get('/_build', instrument(buildInfo, './buildInfo'))

  // Check for a dropped connection before proceeding (again)
  app.use(haltOnDroppedConnection)

  app.use(instrument(robots, './robots'))
  app.use(
    /(\/.*)?\/early-access$/,
    instrument(earlyAccessLinks, './contextualizers/early-access-links')
  )
  app.use(
    '/categories.json',
    asyncMiddleware(instrument(categoriesForSupport, './categories-for-support'))
  )
  app.get('/_500', asyncMiddleware(instrument(triggerError, './trigger-error')))

  // Check for a dropped connection before proceeding (again)
  app.use(haltOnDroppedConnection)

  // Specifically deal with HEAD requests before doing the slower
  // full page rendering.
  app.head('/*', fastHead)

  // For performance, this is before contextualizers if, on a cache hit,
  // we can't reuse a rendered response without having to contextualize.
  app.get('/*', asyncMiddleware(instrument(cacheFullRendering, './cache-full-rendering')))

  // *** Preparation for render-page: contextualizers ***
  app.use(asyncMiddleware(instrument(releaseNotes, './contextualizers/release-notes')))
  app.use(instrument(graphQL, './contextualizers/graphql'))
  app.use(instrument(webhooks, './contextualizers/webhooks'))
  app.use(asyncMiddleware(instrument(whatsNewChangelog, './contextualizers/whats-new-changelog')))
  app.use(instrument(layout, './contextualizers/layout'))
  app.use(instrument(currentProductTree, './contextualizers/current-product-tree'))
  app.use(asyncMiddleware(instrument(genericToc, './contextualizers/generic-toc')))
  app.use(asyncMiddleware(instrument(breadcrumbs, './contextualizers/breadcrumbs')))
  app.use(instrument(features, './contextualizers/features'))
  app.use(asyncMiddleware(instrument(productExamples, './contextualizers/product-examples')))

  app.use(asyncMiddleware(instrument(featuredLinks, './featured-links')))
  app.use(asyncMiddleware(instrument(learningTrack, './learning-track')))

  if (ENABLE_FASTLY_TESTING) {
    // The fastlyCacheTest middleware is intended to be used with Fastly to test caching behavior.
    // This middleware will intercept ALL requests routed to it, so be careful if you need to
    // make any changes to the following line:
    app.use('/fastly-cache-test', fastlyCacheTest)
  }

  // *** Headers for pages only ***
  app.use(setFastlyCacheHeaders)

  // handle serving NextJS bundled code (/_next/*)
  app.use(instrument(next, './next'))

  // Check for a dropped connection before proceeding (again)
  app.use(haltOnDroppedConnection)

  // *** Rendering, must go almost last ***
  app.get('/*', asyncMiddleware(instrument(renderPage, './render-page')))

  // *** Error handling, must go last ***
  app.use(handleErrors)
}
