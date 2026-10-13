import type { Response, NextFunction } from 'express'

import { defaultCacheControl } from '@/frame/middleware/cache-control'
import { ExtendedRequest } from '@/types'

// These path guesses come from penetration-testing bots.
const JUNK_STARTS = ['///', '/\\', '/\\.']
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

// Basenames catch nested probes such as /en/code-security/.env.
const JUNK_BASENAMES = new Set([
  // Keep .env separate from .env.local matching below.
  '.env',
])

function isJunkPath(path: string) {
  if (JUNK_PATHS.has(path)) return true

  for (const junkPath of JUNK_STARTS) {
    if (path.startsWith(junkPath)) {
      return true
    }
  }

  for (const junkPath of JUNK_ENDS) {
    if (path.endsWith(junkPath)) {
      return true
    }
  }

  const basename = path.split('/').pop()
  // Matches /billing/.env.local and /billing/.env_sample.
  if (basename && /^\.env(.|_)[\w.]+/.test(basename)) return true
  if (basename && JUNK_BASENAMES.has(basename)) return true

  // Block malformed Next.js paths before Next.js handles them.
  if (path.match(/^\/_next[^/]/) || path === '/_next/data' || path === '/_next/data/') {
    return true
  }

  // Docs does not use next/image, so these paths can 404 before Next.js handles them.
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
    // The CDN can cache scanner responses because the paths will not work in the next deployment.
    defaultCacheControl(res)
    res.status(404).type('text').send('Not found')
    return
  }

  if (req.path.endsWith('/index.md')) {
    defaultCacheControl(res)
    const newUrl = req.originalUrl.replace(req.path, req.path.replace(/\/index\.md$/, ''))
    return res.safeRedirect(newUrl)
  }

  return next()
}
