import type { NextFunction, Response } from 'express'
import type { ExtendedRequest } from '@/types'

/**
 * Middleware to decode URL-encoded @ symbols.
 *
 * SharePoint and other systems automatically encode @ symbols to %40,
 * which breaks our versioned URLs like /en/enterprise-cloud@latest.
 * This middleware decodes @ symbols anywhere in the URL.
 */
export default function urlDecode(req: ExtendedRequest, res: Response, next: NextFunction) {
  const originalUrl = req.url

  // Only process URLs that contain %40 (encoded @)
  if (!originalUrl.includes('%40')) {
    return next()
  }

  try {
    // Decode the entire URL, replacing %40 with @
    const decodedUrl = originalUrl.replace(/%40/g, '@')
    req.url = decodedUrl
    return next()
  } catch {
    // If decoding fails for any reason, continue with original URL
    return next()
  }
}
