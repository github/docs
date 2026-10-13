import { fetchWithRetry, readBodyWithTimeout } from '@/frame/lib/fetch-utils'
import type { Response, NextFunction } from 'express'

import patterns from '@/frame/lib/patterns'
import { isArchivedVersion } from '@/archives/lib/is-archived-version'
import { setFastlySurrogateKey, SURROGATE_ENUMS } from '@/frame/middleware/set-fastly-surrogate-key'
import { archivedCacheControl, defaultCacheControl } from '@/frame/middleware/cache-control'
import type { ExtendedRequest } from '@/types'
import { createLogger } from '@/observability/logger'

const logger = createLogger(import.meta.url)

// Proxies archived CSS and JS assets from docs-ghes-<release number> repositories.
// archived-enterprise-versions.ts handles non-asset paths.

export default async function archivedEnterpriseVersionsAssets(
  req: ExtendedRequest,
  res: Response,
  next: NextFunction,
) {
  if (!patterns.assetPaths.test(req.path)) return next()

  // Versioned and bare asset paths still require an archived Referrer before proxying.
  if (
    !(
      patterns.getEnterpriseVersionNumber.test(req.path) ||
      patterns.getEnterpriseServerNumber.test(req.path) ||
      patterns.getEnterpriseVersionNumber.test(req.get('referrer') || '') ||
      patterns.getEnterpriseServerNumber.test(req.get('referrer') || '')
    )
  ) {
    return next()
  }

  const { isArchived, requestedVersion } = isArchivedVersion(req)
  if (!isArchived || !requestedVersion) return next()

  // Send 204 for chunks, _buildManifest.js, and _ssgManifest.js; archive pages render without them.
  if (
    (req.path.includes('/_next/static/chunks/') ||
      req.path.includes('/_buildManifest.js') ||
      req.path.includes('/_ssgManifest.js')) &&
    (req.get('referrer') || '').match(/enterprise(-server@|\/)[\d.]+/)
  ) {
    archivedCacheControl(res)
    setFastlySurrogateKey(res, SURROGATE_ENUMS.MANUAL)
    return res.sendStatus(204)
  }

  // docs-ghes repositories store assets at the root, without the enterprise version prefix.
  const newEnterprisePrefix = `/enterprise-server@${requestedVersion}`
  const legacyEnterprisePrefix = `/enterprise/${requestedVersion}`
  const assetPath = req.path.replace(newEnterprisePrefix, '').replace(legacyEnterprisePrefix, '')

  // Reject traversal and embedded URL syntax before constructing the proxy path.
  if (
    assetPath.includes('../') ||
    assetPath.includes('://') ||
    (assetPath.includes(':') && assetPath.includes('@'))
  ) {
    defaultCacheControl(res)
    return res.status(404).type('text/plain').send('Asset path not valid')
  }

  const proxyPath = `https://github.github.com/docs-ghes-${requestedVersion}${assetPath}`
  try {
    const r = await fetchWithRetry(
      proxyPath,
      {},
      {
        retries: 0,
        throwHttpErrors: true,
        // Stay below MAX_REQUEST_TIMEOUT, which defaults to 10 seconds in production.
        timeout: 8_000,
      },
    )

    const body = await readBodyWithTimeout(r, () => r.arrayBuffer(), 8_000)

    res.set('accept-ranges', 'bytes')
    const contentType = r.headers.get('content-type')
    if (contentType) {
      // Match got by adding charset=utf-8 to SVG files.
      if (contentType === 'image/svg+xml') {
        res.set('content-type', `${contentType}; charset=utf-8`)
      } else {
        res.set('content-type', contentType)
      }
    }
    const contentLength = r.headers.get('content-length')
    if (contentLength) {
      res.set('content-length', contentLength)
    }
    res.set('x-is-archived', 'true')
    res.set('x-robots-tag', 'noindex')

    // Match archived page caching for archived asset responses.
    archivedCacheControl(res)
    setFastlySurrogateKey(res, SURROGATE_ENUMS.MANUAL)

    return res.send(Buffer.from(body))
  } catch (err) {
    // Throw unmatched nock requests so tests fail with the missing mock.
    if (err instanceof Error && err.toString().includes('Nock: No match for request')) {
      throw err
    }

    logger.warn('Failed to proxy archived enterprise asset', {
      url: proxyPath,
      error: err instanceof Error ? err : new Error(String(err)),
    })

    // Fall through on proxy misses; 404 pages request /_next/static/styles.css from archived pages.
    return next()
  }
}
