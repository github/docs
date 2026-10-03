import fs from 'fs'
import path from 'path'

import express from 'express'
import type { NextFunction, Request, Response, Express } from 'express'

import abort from './abort'
import helmet from './helmet'
import cookieParser from './cookie-parser'
import {
  setDefaultFastlySurrogateKey,
  setLanguageFastlySurrogateKey,
} from './set-fastly-surrogate-key'
import handleErrors from '@/observability/middleware/handle-errors'
import expressMetrics from '@/observability/middleware/express-metrics'
import handleNextDataPath from './handle-next-data-path'
import detectLanguage from '@/languages/middleware/detect-language'
import detectVersion from '@/versions/middleware/detect-version'
import reloadTree from './reload-tree'
import context from './context/context'
import shortVersions from '@/versions/middleware/short-versions'
import languageCodeRedirects from '@/redirects/middleware/language-code-redirects'
import handleRedirects from '@/redirects/middleware/handle-redirects'
import findPage from './find-page'
import blockRobots from './block-robots'
import archivedEnterpriseVersionsAssets from '@/archives/middleware/archived-enterprise-versions-assets'
import api from './api'
import llmsTxt from './llms-txt'
import healthcheck from './healthcheck'
import manifestJson from './manifest-json'
import buildInfo from './build-info'
import reqHeaders from './req-headers'
import archivedEnterpriseVersions from '@/archives/middleware/archived-enterprise-versions'
import robots from './robots'
import earlyAccessLinks from '@/early-access/middleware/early-access-links'
import categoriesForSupport from './categories-for-support'
import triggerError from '@/observability/middleware/trigger-error'
import dataTables from '@/data-directory/middleware/data-tables'
import secretScanning from '@/secret-scanning/middleware/secret-scanning'
import ghesReleaseNotes from '@/release-notes/middleware/ghes-release-notes'
import layout from './context/layout'
import currentProductTree from './context/current-product-tree'
import genericToc from './context/generic-toc'
import breadcrumbs from './context/breadcrumbs'
import glossaries from './context/glossaries'
import resolveCarousels from './resolve-carousels'
import renderProductName from './context/render-product-name'
import features from '@/versions/middleware/features'
import productGroups from './context/product-groups'
import featuredLinks from '@/landings/middleware/featured-links'
import journeyTrack from '@/journeys/middleware/journey-track'
import next from './next'
import renderPage from './render-page'
import assetPreprocessing from '@/assets/middleware/asset-preprocessing'
import archivedAssetRedirects from '@/archives/middleware/archived-asset-redirects'
import favicons from './favicons'
import setStaticAssetCaching from '@/assets/middleware/static-asset-caching'
import fastHead from './fast-head'
import fastlyCacheTest from './fastly-cache-test'
import trailingSlashes from './trailing-slashes'
import mockVaPortal from './mock-va-portal'
import dynamicAssets from '@/assets/middleware/dynamic-assets'
import generalSearchMiddleware from '@/search/middleware/general-search-middleware'
import shielding from '@/shielding/middleware'
import safeRedirect from './safe-redirect'
import { initLoggerContext } from '@/observability/logger/lib/logger-context'
import { getAutomaticRequestLogger } from '@/observability/logger/middleware/get-automatic-request-logger'
import urlDecode from './url-decode'

const ENABLE_FASTLY_TESTING = JSON.parse(process.env.ENABLE_FASTLY_TESTING || 'false')

// asyncMiddleware passes unhandled promise rejections to Express's error handler.
// https://medium.com/@Abazhenov/using-async-await-in-express-with-node-8-b8af872c0016
const asyncMiddleware =
  <TReq extends Request = Request, T = void>(
    fn: (req: TReq, res: Response, next: NextFunction) => T | Promise<T>,
  ) =>
  async (req: Request, res: Response, nextFn: NextFunction) => {
    try {
      await fn(req as TReq, res, nextFn)
    } catch (error) {
      nextFn(error)
    }
  }

// trust proxy makes req.ip read the left-most X-Forwarded-For value for rate limits and logs.
// https://expressjs.com/en/guide/behind-proxies.html
export default function index(app: Express) {
  app.use(abort)

  app.set('trust proxy', true)

  app.use(initLoggerContext)
  app.use(getAutomaticRequestLogger())
  app.use(expressMetrics)

  // Keep healthcheck early so cluster probes skip slower middleware.
  app.use('/healthcheck', healthcheck)

  // Default surrogate keys must run before static assets, so static responses can inherit them.
  app.use(setDefaultFastlySurrogateKey)

  // safeRedirect must run before middleware that redirects.
  app.use(safeRedirect)

  // archivedEnterpriseVersionsAssets must run before static asset middleware.
  app.use(asyncMiddleware(archivedEnterpriseVersionsAssets))

  app.use(favicons)

  // Checksummed assets keep manual keys; assetPreprocessing later rewrites /assets/cb-* URLs.
  app.use(setStaticAssetCaching)

  // archivedAssetRedirects must run before other asset middleware.
  app.use(archivedAssetRedirects)

  // assetPreprocessing must run before express.static assets.
  app.use(assetPreprocessing)

  app.use(
    '/assets/',
    express.static('assets', {
      index: false,
      etag: false,
      // Content image URLs have cache-busting prefixes, so assets can cache aggressively.
      maxAge: '7 days',
      immutable: process.env.NODE_ENV !== 'development',
      // Let later middleware send the asset 404.
      fallthrough: true,
    }),
  )
  app.use(asyncMiddleware(dynamicAssets))
  app.use(
    '/public/',
    express.static('src/graphql/data', {
      index: false,
      etag: false,
      maxAge: '7 days', // Sparse releases tolerate longer caching.
      // Missing release assets 404 here.
      fallthrough: false,
    }),
  )

  // In production, skip Next static handling because generated 404 HTML is expensive.
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
        // Missing Next assets 404 here.
        fallthrough: false,
      }),
    )
  }

  app.use(shielding)
  app.use(handleNextDataPath)

  app.use(helmet)
  app.use(cookieParser)
  app.use(express.json())

  if (process.env.NODE_ENV === 'development') {
    app.use(mockVaPortal)
  }

  app.set('etag', false) // Disable Express ETags so middleware can set them explicitly when needed.

  app.use(urlDecode) // Must run before detectLanguage to decode @ symbols in version segments.
  // Must run before context, breadcrumbs, findPage, handleErrors, and homepages.
  app.use(detectLanguage)
  app.use(detectVersion) // Must run before handleRedirects for version cookie support.
  app.use(asyncMiddleware(reloadTree)) // Must run before context.
  app.use(asyncMiddleware(context)) // Must run before earlyAccessLinks and handleRedirects.
  app.use(shortVersions)
  app.use(asyncMiddleware(renderProductName)) // Must run after shortVersions.

  // archivedEnterpriseVersions must run before handleRedirects because it can redirect or serve.
  app.use(asyncMiddleware(archivedEnterpriseVersions))

  app.use(trailingSlashes)
  app.use(languageCodeRedirects) // Must run before contextualizers.
  app.use(handleRedirects) // Must run before contextualizers.

  // Must run before breadcrumbs, featuredLinks, productGroups, and renderPage.
  app.use(asyncMiddleware(findPage))
  app.use(blockRobots)

  app.use('/api', api)
  app.use('/llms.txt', llmsTxt)
  app.get('/_build', buildInfo)
  app.get('/_req-headers', reqHeaders)
  app.use(asyncMiddleware(manifestJson))

  // After req.language exists, remaining endpoints get language keys; /api keeps its own.
  app.use(setLanguageFastlySurrogateKey)

  app.use(robots)
  app.use(earlyAccessLinks)
  app.use('/categories.json', asyncMiddleware(categoriesForSupport))
  app.get('/_500', asyncMiddleware(triggerError))

  // HEAD requests skip slower full page rendering.
  app.head('/*path', fastHead)

  app.use(asyncMiddleware(dataTables))
  app.use(asyncMiddleware(secretScanning))
  app.use(asyncMiddleware(ghesReleaseNotes))
  app.use(layout)
  app.use(features) // Must run before currentProductTree.
  app.use(asyncMiddleware(currentProductTree))
  app.use(asyncMiddleware(genericToc))
  app.use(breadcrumbs)
  app.use(asyncMiddleware(productGroups))
  app.use(asyncMiddleware(glossaries))
  app.use(asyncMiddleware(generalSearchMiddleware))
  app.use(asyncMiddleware(featuredLinks))
  app.use(asyncMiddleware(resolveCarousels))
  app.use(asyncMiddleware(journeyTrack))

  if (ENABLE_FASTLY_TESTING) {
    // fastlyCacheTest intercepts all routed requests, so keep the route narrow.
    app.use('/fastly-cache-test', fastlyCacheTest)
  }

  app.use(next)

  // renderPage must run after specialized routes.
  app.get('/*path', asyncMiddleware(renderPage))

  // handleErrors must run last to catch middleware errors.
  app.use(handleErrors)
}
