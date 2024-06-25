import type { Response, NextFunction } from 'express'

import { defaultCacheControl } from '@/frame/middleware/cache-control.js'
import { ExtendedRequest } from '@/types'

// We'll check if the current request path is one of these, or ends with
// one of these.
// These are clearly intentional "guesses" made by some sort of
// pen-testing bot.
const JUNK_ENDS = [
  '/package.json',
  '/package-lock.json',
  '/etc/passwd',
  '/Gemfile',
  '/Gemfile.lock',
  '/WEB-INF/web.xml',
  '/WEB-INF/web.xml%C0%80.jsp',
]
const JUNK_PATHS = new Set([
  ...JUNK_ENDS,
  '/env',
  '/xmlrpc.php',
  '/wp-login.php',
  '/README.md',
  '/server.js',
  '/.git',
  '/_next',
])

// Basename is the last token of the path when split by `/`.
// For example `/foo/bar/baz` has a basename of `baz`.
const JUNK_BASENAMES = new Set([
  // E.g. /en/code-security/.env
  '.env',
])

function isJunkPath(path: string) {
  if (JUNK_PATHS.has(path)) return true

  for (const junkPath of JUNK_ENDS) {
    if (path.endsWith(junkPath)) {
      return true
    }
  }

  const basename = path.split('/').pop()
  // E.g. `/billing/.env.local` or `/billing/.env_sample`
  if (basename && /^\.env(.|_)[\w.]+/.test(basename)) return true
  if (basename && JUNK_BASENAMES.has(basename)) return true

  // Prevent various malicious injection attacks targeting Next.js
  if (path.match(/^\/_next[^/]/) || path === '/_next/data' || path === '/_next/data/') {
    return true
  }

  // We currently don't use next/image for any images.
  // This could change in the future but right now can just 404 on these
  // so we don't have to deal with any other errors.
  if (path.startsWith('/_next/image')) {
    return true
  }

  return false
}

export default function handleInvalidPaths(
  req: ExtendedRequest,
  res: Response,
  next: NextFunction,
) {
  if (isJunkPath(req.path)) {
    // We can all the CDN to cache these responses because they're
    // they're not going to suddenly work in the next deployment.
    defaultCacheControl(res)
    res.setHeader('content-type', 'text/plain')
    return res.status(404).send('Not found')
  }

  if (req.path.endsWith('/index.md') || req.path.endsWith('.md')) {
    defaultCacheControl(res)
    // The originalUrl is the full URL including query string.
    // E.g. `/en/foo.md?bar=baz`
    const newUrl = req.originalUrl.replace(
      req.path,
      req.path.replace(/\/index\.md$/, '').replace(/\.md$/, ''),
    )
    return res.redirect(newUrl)
  }

  return next()
}
