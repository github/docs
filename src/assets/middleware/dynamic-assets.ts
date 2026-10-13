import fs from 'fs/promises'

import type { Response, NextFunction } from 'express'
import sharp from 'sharp'

import type { ExtendedRequest } from '@/types'
import { assetCacheControl, defaultCacheControl } from '@/frame/middleware/cache-control'
import {
  setFastlySurrogateKey,
  makeLanguageSurrogateKey,
} from '@/frame/middleware/set-fastly-surrogate-key'
import { createLogger } from '@/observability/logger'

const logger = createLogger(import.meta.url)

// Markdown processing injects a max-width segment such as /mw-1440/ into dynamic asset URLs.
// Like /cb-1234/, it marks cacheable work and is not part of the file path on disk.
// Keep this pattern in sync with the Markdown code that builds dynamic asset URLs.
const maxWidthPathPartRegex = /\/mw-(\d+)\//
// Restrict widths to product-supported sizes, so attackers cannot create many
// distinct resize URLs that bypass CDN reuse.
const VALID_MAX_WIDTHS = [1440, 1000]

// WebP effort 5 keeps output smaller without using sharp's slowest CPU setting.
// CDN caching lets production pay the conversion cost once per image.
// https://www.peterbe.com/plog/comparing-different-efforts-with-webp-in-sharp
// Lossy WebP is acceptable because these images are rendered for viewing, not source editing.
// Lossless output is slightly crisper but averages 1.8x larger.
// Sharp's default 80% quality and lossy mode make our images 2.8x smaller than PNGs on average.
export default async function dynamicAssets(
  req: ExtendedRequest,
  res: Response,
  next: NextFunction,
) {
  if (!req.url.startsWith('/assets/')) return next()

  if (!(req.method === 'GET' || req.method === 'HEAD')) {
    return res.status(405).type('text/plain').send('Method Not Allowed')
  }

  // Query strings create distinct dynamic asset URLs, so redirect them to the canonical cached URL.
  if (Object.keys(req.query).length > 0) {
    // Cache the redirect so repeated noncanonical URLs do not keep reaching the backend.
    defaultCacheControl(res)

    // /assets/images/site/logo.webp?foo=bar redirects to /assets/images/site/logo.webp.
    return res.safeRedirect(302, req.path)
  }

  // Dynamic WebP files are generated from PNG sources on demand.
  if (req.path.endsWith('.webp')) {
    const { url, maxWidth, error } = deconstructImageURL(req.path)
    if (error) {
      logger.warn('Invalid dynamic asset URL', { path: req.path, error })
      return res.status(400).type('text/plain').send(error.toString())
    }
    try {
      const originalBuffer = await fs.readFile(url.slice(1).replace(/\.webp$/, '.png'))
      const image = sharp(originalBuffer)

      if (maxWidth) {
        const { width } = await image.metadata()
        if (width === undefined) throw new Error('image metadata does not have a width')
        if (width > maxWidth) {
          image.resize({ width: maxWidth })
        }
      }

      let effort = 5
      if (process.env.NODE_ENV === 'test') {
        // Tests need fast conversion because the WebP buffer is not user-visible.
        effort = 1
      } else if (process.env.NODE_ENV === 'development') {
        // Development has no CDN reuse, so reduce conversion CPU cost.
        effort = 1
      }

      const buffer = await image.webp({ effort }).toBuffer()
      assetCacheControl(res)
      return res.type('image/webp').send(buffer)
    } catch (catchError) {
      if (
        catchError instanceof Error &&
        'code' in catchError &&
        (catchError as NodeJS.ErrnoException).code !== 'ENOENT'
      ) {
        logger.error('Failed to process dynamic asset', { path: req.path, error: catchError })
        throw catchError
      }
    }
  }

  // Cache the 404 so repeated missing assets do not keep reaching the backend.
  defaultCacheControl(res)

  // Missing dynamic assets use the language surrogate key, not manual-purge, so a later deploy can add the image.
  setFastlySurrogateKey(res, makeLanguageSurrogateKey(), true)

  // Keep missing asset responses plain text instead of rendering the HTML page-not-found response.
  res.status(404).type('text/plain').send('Asset not found')
}

function deconstructImageURL(url: string) {
  let error
  let maxWidth
  const match = url.match(maxWidthPathPartRegex)
  if (match) {
    const [whole, number] = match
    maxWidth = parseInt(number)
    if (isNaN(maxWidth) || maxWidth <= 0 || !VALID_MAX_WIDTHS.includes(maxWidth)) {
      error = new Error(`width number (${maxWidth}) is not a valid number`)
    } else {
      url = url.replace(whole, '/')
    }
  }
  return { url, maxWidth, error }
}
