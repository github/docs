import type { NextFunction, Response } from 'express'
import type { ExtendedRequest } from '@/types'

// Decodes URL-encoded @ symbols anywhere in the URL.
// SharePoint and other systems encode @ as %40, which breaks our versioned
// URLs like /en/enterprise-cloud@latest.
export default function urlDecode(req: ExtendedRequest, res: Response, next: NextFunction) {
  const originalUrl = req.url

  if (!originalUrl.includes('%40')) {
    return next()
  }

  try {
    const decodedUrl = originalUrl.replace(/%40/g, '@')
    req.url = decodedUrl
    return next()
  } catch {
    // If decoding fails for any reason, continue with original URL
    return next()
  }
}
