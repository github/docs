import helmet from 'helmet'
import { cloneDeep } from 'lodash-es'
import isArchivedVersion from '../lib/is-archived-version.js'
import versionSatisfiesRange from '../lib/version-satisfies-range.js'

const isDev = process.env.NODE_ENV === 'development'
const AZURE_STORAGE_URL = 'githubdocs.azureedge.net'
const GITHUB_DOMAINS = [
  "'self'",
  'github.com',
  '*.github.com',
  '*.githubusercontent.com',
  '*.githubassets.com',
]

const DEFAULT_OPTIONS = {
  crossOriginResourcePolicy: true,
  crossOriginEmbedderPolicy: false, // doesn't work with youtube
  referrerPolicy: {
    policy: 'strict-origin-when-cross-origin',
  },
  // This module defines a Content Security Policy (CSP) to disallow
  // inline scripts and content from untrusted sources.
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'none'"],
      prefetchSrc: ["'self'"],
      // When doing local dev, especially in Safari, you need to add `ws:`
      // which NextJS uses for the hot module reloading.
      connectSrc: ["'self'", isDev && 'ws:'].filter(Boolean),
      fontSrc: ["'self'", 'data:', AZURE_STORAGE_URL],
      imgSrc: [...GITHUB_DOMAINS, 'data:', AZURE_STORAGE_URL, 'placehold.it'],
      objectSrc: ["'self'"],
      // For use during development only!
      // `unsafe-eval` allows us to use a performant webpack devtool setting (eval)
      // https://webpack.js.org/configuration/devtool/#devtool
      scriptSrc: ["'self'", isDev && "'unsafe-eval'"].filter(Boolean),
      frameSrc: [
        ...GITHUB_DOMAINS,
        isDev && 'http://localhost:3000',
        'https://www.youtube-nocookie.com',
      ].filter(Boolean),
      frameAncestors: [...GITHUB_DOMAINS],
      styleSrc: ["'self'", "'unsafe-inline'"],
      childSrc: ["'self'"], // exception for search in deprecated GHE versions
    },
  },
}

const NODE_DEPRECATED_OPTIONS = cloneDeep(DEFAULT_OPTIONS)
const { directives: ndDirs } = NODE_DEPRECATED_OPTIONS.contentSecurityPolicy
ndDirs.scriptSrc.push(
  "'unsafe-eval'",
  "'unsafe-inline'",
  'http://www.google-analytics.com',
  'https://ssl.google-analytics.com'
)
ndDirs.connectSrc.push('https://www.google-analytics.com')
ndDirs.imgSrc.push('http://www.google-analytics.com', 'https://ssl.google-analytics.com')

const STATIC_DEPRECATED_OPTIONS = cloneDeep(DEFAULT_OPTIONS)
STATIC_DEPRECATED_OPTIONS.contentSecurityPolicy.directives.scriptSrc.push("'unsafe-inline'")

const defaultHelmet = helmet(DEFAULT_OPTIONS)
const nodeDeprecatedHelmet = helmet(NODE_DEPRECATED_OPTIONS)
const staticDeprecatedHelmet = helmet(STATIC_DEPRECATED_OPTIONS)

export default function helmetMiddleware(req, res, next) {
  // Enable CORS
  if (['GET', 'OPTIONS'].includes(req.method)) {
    res.set('access-control-allow-origin', '*')
  }

  // Determine version for exceptions
  const { requestedVersion } = isArchivedVersion(req)

  // Exception for deprecated Enterprise docs (Node.js era)
  if (
    versionSatisfiesRange(requestedVersion, '<=2.19') &&
    versionSatisfiesRange(requestedVersion, '>2.12')
  ) {
    return nodeDeprecatedHelmet(req, res, next)
  }

  // Exception for search in deprecated Enterprise docs <=2.12 (static site era)
  if (versionSatisfiesRange(requestedVersion, '<=2.12')) {
    return staticDeprecatedHelmet(req, res, next)
  }

  return defaultHelmet(req, res, next)
}
