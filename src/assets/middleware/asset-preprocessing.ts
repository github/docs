import type { Response, NextFunction } from 'express'

import type { ExtendedRequest } from '@/types'

// Markdown image URLs include a cache-busting path part, for example
// /assets/foo/bar.png becomes /assets/cb-123467/foo/bar.png.
// That path lets assets use aggressive Cache-Control and a Fastly surrogate key
// that avoids soft purges on every deployment.

const regex = /\/cb-\d+\//

export default function assetPreprocessing(
  req: ExtendedRequest,
  res: Response,
  next: NextFunction,
) {
  if (req.path.startsWith('/assets/')) {
    // Mixed-case asset URLs can 404 when the file on disk is lowercase.
    if (req.url !== req.url.toLowerCase()) {
      // Redirecting instead of rewriting req.url serves one canonical file and protects CDN hit rates.
      return res.safeRedirect(req.url.toLowerCase())
    }

    // Only cache-busted assets can use the manual surrogate key safely.
    if (regex.test(req.url)) {
      // express.static() needs the original file path on disk.
      req.url = req.url.replace(regex, '/')
    }
  }
  return next()
}
