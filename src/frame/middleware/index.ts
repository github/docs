import fs from 'fs'
import path from 'path'

import express from 'express'
import type { NextFunction, Request, Response, Express } from 'express'
import timeout from 'connect-timeout'

import { haltOnDroppedConnection } from './halt-on-dropped-connection'
import abort from './abort'
import morgan from 'morgan'
import datadog from '@/observability/middleware/connect-datadog'
import helmet from './helmet'
import cookieParser from './cookie-parser'
import {
  setDefaultFastlySurrogateKey,
  setLanguageFastlySurrogateKey,
} from './set-fastly-surrogate-key.js'
import handleErrors from '@/observability/middleware/handle-errors'
import handleNextDataPath from './handle-next-data-path'
import detectLanguage from '@/languages/middleware/detect-language'
import reloadTree from './reload-tree.js'
import context from './context/context.js'
import shortVersions from '@/versions/middleware/short-versions.js'
import languageCodeRedirects from '@/redirects/middleware/language-code-redirects.js'
import handleRedirects from '@/redirects/middleware/handle-redirects.js'
import findPage from './find-page.js'
import blockRobots from './block-robots.js'
import archivedEnterpriseVersionsAssets from '@/archives/middleware/archived-enterprise-versions-assets.js'
import api from './api.js'
import healthz from './healthz'
import productIcons from './product-icons.js'
import manifestJson from './manifest-json.js'
import remoteIP from './remote-ip.js'
import buildInfo from './build-info.js'
import archivedEnterpriseVersions from '@/archives/middleware/archived-enterprise-versions.js'
import robots from './robots.js'
import earlyAccessLinks from '@/early-access/middleware/early-access-links.js'
import categoriesForSupport from './categories-for-support.js'
import triggerError from '@/observability/middleware/trigger-error.js'
import secretScanning from '@/secret-scanning/middleware/secret-scanning.js'
import ghesReleaseNotes from '@/release-notes/middleware/ghes-release-notes.js'
import whatsNewChangelog from './context/whats-new-changelog.js'
import layout from './context/layout.js'
import currentProductTree from './context/current-product-tree.js'
import genericToc from './context/generic-toc.js'
import breadcrumbs from './context/breadcrumbs.js'
import glossaries from './context/glossaries.js'
import renderProductName from './context/render-product-name.js'
import features from '@/versions/middleware/features.js'
import productExamples from './context/product-examples.js'
import productGroups from './context/product-groups.js'
import featuredLinks from '@/landings/middleware/featured-links.js'
import learningTrack from '@/learning-track/middleware/learning-track.js'
import next from './next.js'
import renderPage from './render-page.js'
import assetPreprocessing from '@/assets/middleware/asset-preprocessing.js'
import archivedAssetRedirects from '@/archives/middleware/archived-asset-redirects.js'
import favicons from './favicons.js'
import setStaticAssetCaching from '@/assets/middleware/static-asset-caching.js'
import fastHead from './fast-head.js'
import fastlyCacheTest from './fastly-cache-test.js'
import trailingSlashes from './trailing-slashes.js'
import fastlyBehavior from './fastly-behavior.js'
import mockVaPortal from './mock-va-portal.js'
import dynamicAssets from '@/assets/middleware/dynamic-assets.js'
import contextualizeSearch from '@/search/middleware/contextualize.js'
import shielding from '@/shielding/middleware/index.js'
import tracking from '@/tracking/middleware/index.js'
import { MAX_REQUEST_TIMEOUT } from '@/frame/lib/constants.js'

const { DEPLOYMENT_ENV, NODE_ENV } = process.env
const isTest = NODE_ENV === 'test' || process.env.GITHUB_ACTIONS === 'true'

// By default, logging each request (with morgan), is on. And by default
// it's off if you're in a production environment or running automated tests.
// But if you set the env var, that takes precedence.
const ENABLE_DEV_LOGGING = Boolean(
  process.env.ENABLE_DEV_LOGGING
    ? JSON.parse(process.env.ENABLE_DEV_LOGGING)
    : !(DEPLOYMENT_ENV === 'azure' || isTest),
)

const ENABLE_FASTLY_TESTING = JSON.parse(process.env.ENABLE_FASTLY_TESTING || 'false')

// Catch unhandled promise rejections and passing them to Express's error handler
// https://medium.com/@Abazhenov/using-async-await-in-express-with-node-8-b8af872c0016
const asyncMiddleware = (fn: Function) => (req: Request, res: Response, next: NextFunction) => {
  Promise.resolve(fn(req, res, next)).catch(next)
}

export default function (app: Express) {
  // *** Request connection management ***
  if (!isTest) app.use(timeout(MAX_REQUEST_TIMEOUT))
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
  app.use('/healthz', healthz)

  // Must appear before static assets and all other requests
  // otherwise we won't be able to benefit from that functionality
  // for static assets as well.
  app.use(setDefaultFastlySurrogateKey)

  // archivedEnterpriseVersionsAssets must come before static/assets
  app.use(asyncMiddleware(archivedEnterpriseVersionsAssets))

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
  app.use(asyncMiddleware(dynamicAssets))
  app.use(
    '/public/',
    express.static('src/graphql/data', {
      index: false,
      etag: false,
      maxAge: '7 days', // A bit longer since releases are more sparse
      // See note about the use of 'fallthrough'
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
        // See note about the use of 'fallthrough'
        fallthrough: false,
      }),
    )
  }

  // *** Early exits ***
  app.use(shielding)
  app.use(handleNextDataPath)

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

  // ** Possible early exits after cookies **
  app.use(tracking)

  // *** Headers ***
  app.set('etag', false) // We will manage our own ETags if desired

  // *** Config and context for redirects ***
  app.use(detectLanguage) // Must come before context, breadcrumbs, find-page, handle-errors, homepages
  app.use(asyncMiddleware(reloadTree)) // Must come before context
  app.use(asyncMiddleware(context)) // Must come before early-access-*, handle-redirects
  app.use(shortVersions) // Support version shorthands
  app.use(asyncMiddleware(renderProductName)) // Must come after shortVersions

  // Must come before handleRedirects.
  // This middleware might either redirect to serve something.
  app.use(asyncMiddleware(archivedEnterpriseVersions))

  // *** Redirects, 3xx responses ***
  // I ordered these by use frequency
  app.use(trailingSlashes)
  app.use(languageCodeRedirects) // Must come before contextualizers
  app.use(handleRedirects) // Must come before contextualizers

  // *** Config and context for rendering ***
  app.use(asyncMiddleware(findPage)) // Must come before archived-enterprise-versions, breadcrumbs, featured-links, products, render-page
  app.use(blockRobots)

  // Check for a dropped connection before proceeding
  app.use(haltOnDroppedConnection)

  // *** Rendering, 2xx responses ***
  app.use('/api', api)
  app.get('/_ip', remoteIP)
  app.get('/_build', buildInfo)
  app.use('/producticons', productIcons)
  app.use(asyncMiddleware(manifestJson))

  // Things like `/api` sets their own Fastly surrogate keys.
  // Now that the `req.language` is known, set it for the remaining endpoints
  app.use(setLanguageFastlySurrogateKey)

  // Check for a dropped connection before proceeding (again)
  app.use(haltOnDroppedConnection)

  app.use(robots)
  app.use(earlyAccessLinks)
  app.use('/categories.json', asyncMiddleware(categoriesForSupport))
  app.get('/_500', asyncMiddleware(triggerError))

  // Check for a dropped connection before proceeding (again)
  app.use(haltOnDroppedConnection)

  // Specifically deal with HEAD requests before doing the slower
  // full page rendering.
  app.head('/*', fastHead)

  // *** Preparation for render-page: contextualizers ***
  app.use(asyncMiddleware(secretScanning))
  app.use(asyncMiddleware(ghesReleaseNotes))
  app.use(asyncMiddleware(whatsNewChangelog))
  app.use(layout)
  app.use(features) // needs to come before product tree
  app.use(asyncMiddleware(currentProductTree))
  app.use(asyncMiddleware(genericToc))
  app.use(breadcrumbs)
  app.use(asyncMiddleware(productExamples))
  app.use(asyncMiddleware(productGroups))
  app.use(asyncMiddleware(glossaries))
  app.use(asyncMiddleware(contextualizeSearch))
  app.use(asyncMiddleware(featuredLinks))
  app.use(asyncMiddleware(learningTrack))

  if (ENABLE_FASTLY_TESTING) {
    // The fastlyCacheTest middleware is intended to be used with Fastly to test caching behavior.
    // This middleware will intercept ALL requests routed to it, so be careful if you need to
    // make any changes to the following line:
    app.use('/fastly-cache-test', fastlyCacheTest)
  }

  // handle serving NextJS bundled code (/_next/*)
  app.use(next)

  // Check for a dropped connection before proceeding (again)
  app.use(haltOnDroppedConnection)

  // *** Rendering, must go almost last ***
  app.get('/*', asyncMiddleware(renderPage))

  // *** Error handling, must go last ***
  app.use(handleErrors)
}
