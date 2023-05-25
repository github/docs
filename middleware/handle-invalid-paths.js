import { defaultCacheControl } from './cache-control.js'

const JUNK_PATHS = new Set([
  '/.env',
  '/env',
  '/xmlrpc.php',
  '/wp-login.php',
  '/README.md',
  '/server.js',
  '/package.json',
  '/.git',
])

function isJunkPath(path) {
  if (JUNK_PATHS.has(path)) return true

  // Prevent various malicious injection attacks targeting Next.js
  if (path.match(/^\/_next[^/]/) || path === '/_next/data' || path === '/_next/data/') {
    return true
  }

  return false
}

export default function handleInvalidPaths(req, res, next) {
  if (isJunkPath(req.path)) {
    // We can all the CDN to cache these responses because they're
    // they're not going to suddenly work in the next deployment.
    defaultCacheControl(res)
    res.setHeader('content-type', 'text/plain')
    return res.status(404).send('Not found')
  }

  return next()
}
