import fs from 'fs'
import path from 'path'

import express from 'express'

import instrument from '#src/observability/lib/instrument-middleware.js'
import haltOnDroppedConnection from './halt-on-dropped-connection.js'
import abort from './abort.js'
import timeout from './timeout.js'
import morgan from 'morgan'
import datadog from '#src/observability/middleware/connect-datadog.js'
import helmet from './helmet.js'
import cookieParser from './cookie-parser.js'
import {
  setDefaultFastlySurrogateKey,
  setLanguageFastlySurrogateKey,
} from './set-fastly-surrogate-key.js'
import handleErrors from '#src/observability/middleware/handle-errors.js'
import handleNextDataPath from './handle-next-data-path.js'
import detectLanguage from '#src/languages/middleware/detect-language.js'
import reloadTree from './reload-tree.js'
import context from './context.js'
import shortVersions from '#src/versions/middleware/short-versions.js'
import languageCodeRedirects from '#src/redirects/middleware/language-code-redirects.js'
import handleRedirects from '#src/redirects/middleware/handle-redirects.js'
import findPage from './find-page.js'
import blockRobots from './block-robots.js'
import archivedEnterpriseVersionsAssets from '#src/archives/middleware/archived-enterprise-versions-assets.js'
import api from './api/index.js'
import healthz from './healthz.js'
import productIcons from './product-icons.js'
import manifestJson from './manifest-json.js'
import remoteIP from './remote-ip.js'
import buildInfo from './build-info.js'
import archivedEnterpriseVersions from '#src/archives/middleware/archived-enterprise-versions.js'
import robots from './robots.js'
import earlyAccessLinks from '#src/early-access/middleware/early-access-links.js'
import categoriesForSupport from './categories-for-support.js'
import triggerError from '#src/observability/middleware/trigger-error.js'
import secretScanning from '#src/secret-scanning/middleware/secret-scanning.js'
import ghesReleaseNotes from '#src/release-notes/middleware/ghes-release-notes.js'
import ghaeReleaseNotes from '#src/release-notes/middleware/ghae-release-notes.js'
import whatsNewChangelog from './contextualizers/whats-new-changelog.js'
import layout from './contextualizers/layout.js'
import currentProductTree from './contextualizers/current-product-tree.js'
import genericToc from './contextualizers/generic-toc.js'
import breadcrumbs from './contextualizers/breadcrumbs.js'
import glossaries from './contextualizers/glossaries.js'
import features from '#src/versions/middleware/features.js'
import productExamples from './contextualizers/product-examples.js'
import productGroups from './contextualizers/product-groups.js'
import featuredLinks from '#src/landings/middleware/featured-links.js'
import learningTrack from '#src/learning-track/middleware/learning-track.js'
import next from './next.js'
import renderPage from './render-page.js'
import assetPreprocessing from '#src/assets/middleware/asset-preprocessing.js'
import archivedAssetRedirects from '#src/archives/middleware/archived-asset-redirects.js'
import favicons from './favicons.js'
import setStaticAssetCaching from '#src/assets/middleware/static-asset-caching.js'
import fastHead from './fast-head.js'
import fastlyCacheTest from './fastly-cache-test.js'
import trailingSlashes from './trailing-slashes.js'
import fastlyBehavior from './fastly-behavior.js'
import mockVaPortal from './mock-va-portal.js'
import dynamicAssets from '#src/assets/middleware/dynamic-assets.js'
import contextualizeSearch from '#src/search/middleware/contextualize.js'
import shielding from '#src/shielding/middleware/index.js'

const { DEPLOYMENT_ENV, NODE_ENV } = process.env
const isTest = NODE_ENV === 'test' || process.env.GITHUB_ACTIONS === 'true'

// By default, logging each request (with morgan), is on. And by default
// it's off if you're in a production environment or running automated tests.
// But if you set the env var, that takes precedence.
const ENABLE_DEV_LOGGING = JSON.parse(
  process.env.ENABLE_DEV_LOGGING || !(DEPLOYMENT_ENV === 'azure' || isTest),
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

  // *** Request logging ***
  if (ENABLE_DEV_LOGGING) {
    app.use(morgan('dev'))
  }

  // *** Observability ***
  if (process.env.DD_API_KEY) {
    app.use(datadog)
  }

  // Put this early to make it as fast as possible because it's used,
  // and used very often, by the Azure load balancer to check the
  // health of each node.
  app.use('/healthz', instrument(healthz, './healthz'))

  // Must appear before static assets and all other requests
  // otherwise we won't be able to benefit from that functionality
  // for static assets as well.
  app.use(setDefaultFastlySurrogateKey)

  // archivedEnterpriseVersionsAssets must come before static/assets
  app.use(
    asyncMiddleware(
      instrument(archivedEnterpriseVersionsAssets, './archived-enterprise-versions-assets'),
    ),
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
      // The next middleware will try its luck and send the 404 if must.
      fallthrough: true,
    }),
  )
  app.use(asyncMiddleware(instrument(dynamicAssets, './dynamic-assets')))
  app.use(
    '/public/',
    express.static('data/graphql', {
      index: false,
      etag: false,
      maxAge: '7 days', // A bit longer since releases are more sparse
      // See note about about use of 'fallthrough'
      fallthrough: false,
    }),
  )

  // In development, let NextJS on-the-fly serve the static assets.
  // But in production, don't let NextJS handle any static assets
  // because they are costly to generate (the 404 HTML page).
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
      }),
    )
  }

  // *** Early exits ***
  app.use(shielding)
  app.use(instrument(handleNextDataPath, './handle-next-data-path'))

  // *** Security ***
  app.use(helmet)
  app.use(cookieParser)
  app.use(express.json())

  if (ENABLE_FASTLY_TESTING) {
    app.use(fastlyBehavior) // FOR TESTING.
  }

  if (process.env.NODE_ENV === 'development') {
    app.use(mockVaPortal) // FOR TESTING.
  }

  // *** Headers ***
  app.set('etag', false) // We will manage our own ETags if desired

  // *** Config and context for redirects ***
  app.use(instrument(detectLanguage, './detect-language')) // Must come before context, breadcrumbs, find-page, handle-errors, homepages
  app.use(asyncMiddleware(instrument(reloadTree, './reload-tree'))) // Must come before context
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
  app.use(asyncMiddleware(instrument(findPage, './find-page'))) // Must come before archived-enterprise-versions, breadcrumbs, featured-links, products, render-page
  app.use(instrument(blockRobots, './block-robots'))

  // Check for a dropped connection before proceeding
  app.use(haltOnDroppedConnection)

  // *** Rendering, 2xx responses ***
  app.use('/api', instrument(api, './api'))
  app.get('/_ip', instrument(remoteIP, './remoteIP'))
  app.get('/_build', instrument(buildInfo, './buildInfo'))
  app.use('/producticons', instrument(productIcons, './product-icons'))
  app.use('/manifest.json', asyncMiddleware(instrument(manifestJson, './manifest')))

  // Things like `/api` sets their own Fastly surrogate keys.
  // Now that the `req.language` is known, set it for the remaining endpoints
  app.use(setLanguageFastlySurrogateKey)

  // Check for a dropped connection before proceeding (again)
  app.use(haltOnDroppedConnection)

  app.use(instrument(robots, './robots'))
  app.use(
    /(\/.*)?\/early-access$/,
    instrument(earlyAccessLinks, './contextualizers/early-access-links'),
  )
  app.use(
    '/categories.json',
    asyncMiddleware(instrument(categoriesForSupport, './categories-for-support')),
  )
  app.get('/_500', asyncMiddleware(instrument(triggerError, './trigger-error')))

  // Check for a dropped connection before proceeding (again)
  app.use(haltOnDroppedConnection)

  // Specifically deal with HEAD requests before doing the slower
  // full page rendering.
  app.head('/*', fastHead)

  // *** Preparation for render-page: contextualizers ***
  app.use(asyncMiddleware(instrument(secretScanning, './contextualizers/secret-scanning')))
  app.use(asyncMiddleware(instrument(ghesReleaseNotes, './contextualizers/ghes-release-notes')))
  app.use(asyncMiddleware(instrument(ghaeReleaseNotes, './contextualizers/ghae-release-notes')))
  app.use(asyncMiddleware(instrument(whatsNewChangelog, './contextualizers/whats-new-changelog')))
  app.use(instrument(layout, './contextualizers/layout'))
  app.use(instrument(features, './contextualizers/features')) // needs to come before product tree
  app.use(asyncMiddleware(instrument(currentProductTree, './contextualizers/current-product-tree')))
  app.use(asyncMiddleware(instrument(genericToc, './contextualizers/generic-toc')))
  app.use(instrument(breadcrumbs, './contextualizers/breadcrumbs'))
  app.use(asyncMiddleware(instrument(productExamples, './contextualizers/product-examples')))
  app.use(asyncMiddleware(instrument(productGroups, './contextualizers/product-groups')))
  app.use(asyncMiddleware(instrument(glossaries, './contextualizers/glossaries')))
  app.use(asyncMiddleware(instrument(contextualizeSearch, './search/middleware/contextualize')))
  app.use(asyncMiddleware(instrument(featuredLinks, './featured-links')))
  app.use(asyncMiddleware(instrument(learningTrack, './learning-track')))

  if (ENABLE_FASTLY_TESTING) {
    // The fastlyCacheTest middleware is intended to be used with Fastly to test caching behavior.
    // This middleware will intercept ALL requests routed to it, so be careful if you need to
    // make any changes to the following line:
    app.use('/fastly-cache-test', fastlyCacheTest)
  }

  // handle serving NextJS bundled code (/_next/*)
  app.use(instrument(next, './next'))

  // Check for a dropped connection before proceeding (again)
  app.use(haltOnDroppedConnection)

  // *** Rendering, must go almost last ***
  app.get('/*', asyncMiddleware(instrument(renderPage, './render-page')))

  // *** Error handling, must go last ***
  app.use(handleErrors)
}
