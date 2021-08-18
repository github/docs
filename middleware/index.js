import express from 'express'
import basicAuth from 'express-basic-auth'
import instrument from '../lib/instrument-middleware.js'
import haltOnDroppedConnection from './halt-on-dropped-connection.js'
import abort from './abort.js'
import timeout from './timeout.js'
import morgan from 'morgan'
import datadog from './connect-datadog.js'
import rateLimit from './rate-limit.js'
import cors from './cors.js'
import helmet from 'helmet'
import csp from './csp.js'
import cookieParser from './cookie-parser.js'
import csrf from './csrf.js'
import handleCsrfErrors from './handle-csrf-errors.js'
import compression from 'compression'
import disableCachingOnSafari from './disable-caching-on-safari.js'
import setFastlySurrogateKey from './set-fastly-surrogate-key.js'
import setFastlyCacheHeaders from './set-fastly-cache-headers.js'
import catchBadAcceptLanguage from './catch-bad-accept-language.js'
import reqUtils from './req-utils.js'
import recordRedirect from './record-redirect.js'
import connectSlashes from 'connect-slashes'
import handleErrors from './handle-errors.js'
import handleInvalidPaths from './handle-invalid-paths.js'
import handleNextDataPath from './handle-next-data-path.js'
import detectLanguage from './detect-language.js'
import context from './context.js'
import shortVersions from './contextualizers/short-versions.js'
import redirectsExternal from './redirects/external.js'
import helpToDocs from './redirects/help-to-docs.js'
import languageCodeRedirects from './redirects/language-code-redirects.js'
import handleRedirects from './redirects/handle-redirects.js'
import findPage from './find-page.js'
import blockRobots from './block-robots.js'
import archivedEnterpriseVersionsAssets from './archived-enterprise-versions-assets.js'
import events from './events.js'
import search from './search.js'
import archivedEnterpriseVersions from './archived-enterprise-versions.js'
import robots from './robots.js'
import earlyAccessLinks from './contextualizers/early-access-links.js'
import categoriesForSupport from './categories-for-support.js'
import loaderio from './loaderio-verification.js'
import triggerError from './trigger-error.js'
import releaseNotes from './contextualizers/release-notes.js'
import whatsNewChangelog from './contextualizers/whats-new-changelog.js'
import graphQL from './contextualizers/graphql.js'
import rest from './contextualizers/rest.js'
import webhooks from './contextualizers/webhooks.js'
import layout from './contextualizers/layout.js'
import currentProductTree from './contextualizers/current-product-tree.js'
import genericToc from './contextualizers/generic-toc.js'
import breadcrumbs from './contextualizers/breadcrumbs.js'
import earlyAccessBreadcrumbs from './contextualizers/early-access-breadcrumbs.js'
import features from './contextualizers/features.js'
import productExamples from './contextualizers/product-examples.js'
import featuredLinks from './featured-links.js'
import learningTrack from './learning-track.js'
import next from './next.js'
import renderPage from './render-page.js'

const { NODE_ENV } = process.env
const isDevelopment = NODE_ENV === 'development'
const isTest = NODE_ENV === 'test' || process.env.GITHUB_ACTIONS === 'true'
const isProduction = NODE_ENV === 'production' && process.env.HEROKU_PRODUCTION_APP

// Catch unhandled promise rejections and passing them to Express's error handler
// https://medium.com/@Abazhenov/using-async-await-in-express-with-node-8-b8af872c0016
const asyncMiddleware = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next)
}

export default function (app) {
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
  app.use(instrument(handleInvalidPaths, './handle-invalid-paths'))
  app.use(instrument(handleNextDataPath, './handle-next-data-path'))

  // *** Security ***
  app.use(cors)
  app.use(
    helmet({
      // Override referrerPolicy to match the browser's default: "strict-origin-when-cross-origin".
      // Helmet now defaults to "no-referrer", which is a problem for our archived assets proxying.
      referrerPolicy: {
        policy: 'strict-origin-when-cross-origin',
      },
    })
  )
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
  app.use(instrument(detectLanguage, './detect-language')) // Must come before context, breadcrumbs, find-page, handle-errors, homepages
  app.use(asyncMiddleware(instrument(context, './context'))) // Must come before early-access-*, handle-redirects
  app.use(asyncMiddleware(instrument(shortVersions, './contextualizers/short-versions'))) // Support version shorthands

  // *** Redirects, 3xx responses ***
  // I ordered these by use frequency
  app.use(connectSlashes(false))
  app.use(instrument(redirectsExternal, './redirects/external'))
  app.use(instrument(helpToDocs, './redirects/help-to-docs'))
  app.use(instrument(languageCodeRedirects, './redirects/language-code-redirects')) // Must come before contextualizers
  app.use(instrument(handleRedirects, './redirects/handle-redirects')) // Must come before contextualizers

  // *** Config and context for rendering ***
  app.use(asyncMiddleware(instrument(findPage, './find-page'))) // Must come before archived-enterprise-versions, breadcrumbs, featured-links, products, render-page
  app.use(instrument(blockRobots, './block-robots'))

  // Check for a dropped connection before proceeding
  app.use(haltOnDroppedConnection)

  // *** Rendering, 2xx responses ***
  // I largely ordered these by use frequency
  // archivedEnterpriseVersionsAssets must come before static/assets
  app.use(
    asyncMiddleware(
      instrument(archivedEnterpriseVersionsAssets, './archived-enterprise-versions-assets')
    )
  )
  app.use('/storybook', [
    (isProduction &&
      basicAuth({ users: { octocat: process.env.STORYBOOK_PASSWORD }, challenge: true })) ||
      ((req, res, next) => next()),
    express.static('storybook', {
      index: false,
      etag: false,
      immutable: true,
      lastModified: false,
      maxAge: '1 day', // Relatively short in case we update index.html
    }),
  ])
  app.use(
    '/assets',
    express.static('assets', {
      index: false,
      etag: false,
      lastModified: false,
      maxAge: '1 day', // Relatively short in case we update images
    })
  )
  app.use(
    '/public',
    express.static('data/graphql', {
      index: false,
      etag: false,
      lastModified: false,
      maxAge: '7 days', // A bit longer since releases are more sparse
    })
  )
  app.use('/events', asyncMiddleware(instrument(events, './events')))
  app.use('/search', asyncMiddleware(instrument(search, './search')))

  // Check for a dropped connection before proceeding (again)
  app.use(haltOnDroppedConnection)

  app.use(asyncMiddleware(instrument(archivedEnterpriseVersions, './archived-enterprise-versions')))
  app.use(instrument(robots, './robots'))
  app.use(
    /(\/.*)?\/early-access$/,
    instrument(earlyAccessLinks, './contextualizers/early-access-links')
  )
  app.use(
    '/categories.json',
    asyncMiddleware(instrument(categoriesForSupport, './categories-for-support'))
  )
  app.use(instrument(loaderio, './loaderio-verification'))
  app.get('/_500', asyncMiddleware(instrument(triggerError, './trigger-error')))

  // Check for a dropped connection before proceeding (again)
  app.use(haltOnDroppedConnection)

  // *** Preparation for render-page: contextualizers ***
  app.use(asyncMiddleware(instrument(releaseNotes, './contextualizers/release-notes')))
  app.use(instrument(graphQL, './contextualizers/graphql'))
  app.use(instrument(rest, './contextualizers/rest'))
  app.use(instrument(webhooks, './contextualizers/webhooks'))
  app.use(asyncMiddleware(instrument(whatsNewChangelog, './contextualizers/whats-new-changelog')))
  app.use(instrument(layout, './contextualizers/layout'))
  app.use(instrument(currentProductTree, './contextualizers/current-product-tree'))
  app.use(asyncMiddleware(instrument(genericToc, './contextualizers/generic-toc')))
  app.use(asyncMiddleware(instrument(breadcrumbs, './contextualizers/breadcrumbs')))
  app.use(
    asyncMiddleware(
      instrument(earlyAccessBreadcrumbs, './contextualizers/early-access-breadcrumbs')
    )
  )
  app.use(asyncMiddleware(instrument(features, './contextualizers/features')))
  app.use(asyncMiddleware(instrument(productExamples, './contextualizers/product-examples')))

  app.use(asyncMiddleware(instrument(featuredLinks, './featured-links')))
  app.use(asyncMiddleware(instrument(learningTrack, './learning-track')))

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
