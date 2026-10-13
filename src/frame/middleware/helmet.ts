import { isArchivedVersion } from '@/archives/lib/is-archived-version'
import { languagePrefixPathRegex } from '@/languages/lib/languages-server'
import versionSatisfiesRange from '@/versions/lib/version-satisfies-range'
import type { NextFunction, Request, Response } from 'express'
import helmet from 'helmet'
import { createHash } from 'crypto'

import { colorModeScript } from '@/color-schemes/lib/color-mode-script'

const isDev = process.env.NODE_ENV === 'development'

// The pre-paint theme script from _document.tsx is inline, so CSP needs a script-src hash.
// A nonce would vary per response and break shared CDN caching.
const colorModeScriptHash = `'sha256-${createHash('sha256').update(colorModeScript).digest('base64')}'`
const GITHUB_DOMAINS = [
  "'self'",
  'github.com',
  '*.github.com',
  '*.githubusercontent.com',
  '*.githubassets.com',
]

const DEFAULT_OPTIONS = {
  crossOriginResourcePolicy: true,
  crossOriginEmbedderPolicy: false,
  referrerPolicy: {
    policy: 'no-referrer-when-downgrade' as const,
  },
  // The default CSP blocks untrusted origins and limits inline scripts to approved hashes.
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'none'"],
      prefetchSrc: ["'self'"],
      // Safari local development needs ws: for Next.js hot module reloading.
      connectSrc: ["'self'", 'https://collector.githubapp.com', isDev && 'ws:'].filter(
        Boolean,
      ) as string[],
      fontSrc: ["'self'", 'data:'],
      imgSrc: [...GITHUB_DOMAINS, 'data:', 'placehold.it'],
      objectSrc: ["'self'"],
      // Development webpack eval devtool needs unsafe-eval.
      // https://webpack.js.org/configuration/devtool/#devtool
      scriptSrc: [
        ...GITHUB_DOMAINS,
        "'self'",
        'data:',
        colorModeScriptHash,
        isDev && "'unsafe-eval'",
      ].filter(Boolean) as string[],
      scriptSrcAttr: ["'self'"],
      frameSrc: [
        ...GITHUB_DOMAINS,
        isDev && 'http://localhost:3000',
        // src/frame/components/context/ArticleContext.tsx sets this URL too.
        // A shared constant could capture SUPPORT_PORTAL_URL before it is set.
        process.env.NODE_ENV === 'production'
          ? 'https://support.github.com'
          : // Missing SUPPORT_PORTAL_URL means local development is not testing the VA iframe.
            process.env.SUPPORT_PORTAL_URL || '',
      ].filter(Boolean) as string[],
      frameAncestors: isDev ? ['*'] : [...GITHUB_DOMAINS],
      styleSrc: [...GITHUB_DOMAINS, "'self'", "'unsafe-inline'", 'data:'],
      // Deprecated GitHub Enterprise search still needs child-src.
      childSrc: ["'self'"],
      manifestSrc: ["'self'"],
      upgradeInsecureRequests: isDev ? null : [],
    },
  },
}

const NODE_DEPRECATED_OPTIONS = structuredClone(DEFAULT_OPTIONS)
const ndDirs = NODE_DEPRECATED_OPTIONS.contentSecurityPolicy.directives
ndDirs.scriptSrc.push(
  "'unsafe-eval'",
  "'unsafe-inline'",
  'http://www.google-analytics.com',
  'https://ssl.google-analytics.com',
)
ndDirs.connectSrc.push('https://www.google-analytics.com')
ndDirs.imgSrc.push('http://www.google-analytics.com', 'https://ssl.google-analytics.com')

const DEVELOPER_DEPRECATED_OPTIONS = structuredClone(DEFAULT_OPTIONS)
const devDirs = DEVELOPER_DEPRECATED_OPTIONS.contentSecurityPolicy.directives
devDirs.styleSrc.push('*.googleapis.com')
devDirs.scriptSrc.push("'unsafe-inline'", '*.googleapis.com', 'http://www.google-analytics.com')
devDirs.fontSrc.push('*.gstatic.com')
devDirs.scriptSrcAttr.push("'unsafe-inline'")

const STATIC_DEPRECATED_OPTIONS = structuredClone(DEFAULT_OPTIONS)
STATIC_DEPRECATED_OPTIONS.contentSecurityPolicy.directives.scriptSrc.push("'unsafe-inline'")

const defaultHelmet = helmet(DEFAULT_OPTIONS)
const nodeDeprecatedHelmet = helmet(NODE_DEPRECATED_OPTIONS)
const staticDeprecatedHelmet = helmet(STATIC_DEPRECATED_OPTIONS)
const developerDeprecatedHelmet = helmet(DEVELOPER_DEPRECATED_OPTIONS)

export default function helmetMiddleware(req: Request, res: Response, next: NextFunction) {
  if (['GET', 'OPTIONS'].includes(req.method)) {
    res.set('access-control-allow-origin', '*')
  }

  const { requestedVersion } = isArchivedVersion(req)

  const isDeveloper = req.path
    .replace(languagePrefixPathRegex, '/')
    .startsWith(`/enterprise/${requestedVersion}/developer`)
  if (versionSatisfiesRange(requestedVersion, '<=2.18') && isDeveloper) {
    // Deprecated developer.github.com paths need Google font and inline script exceptions.
    return developerDeprecatedHelmet(req, res, next)
  }

  // Node.js-era deprecated Enterprise docs need relaxed CSP directives.
  if (
    versionSatisfiesRange(requestedVersion, '<=2.19') &&
    versionSatisfiesRange(requestedVersion, '>2.12')
  ) {
    return nodeDeprecatedHelmet(req, res, next)
  }

  // Static-site-era Enterprise search needs inline scripts.
  if (versionSatisfiesRange(requestedVersion, '<=2.12')) {
    return staticDeprecatedHelmet(req, res, next)
  }

  return defaultHelmet(req, res, next)
}
