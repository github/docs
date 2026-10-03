import type { Response, NextFunction } from 'express'

import type { ExtendedRequest } from '@/types'

// Strip protocol-relative prefixes so browsers cannot turn redirects into external URLs.
// Example: //evil.com becomes /evil.com.
export function safeRedirectUrl(url: string): string {
  return url.replace(/^\/\/+/, '/')
}

// SafeRedirect matches the overloaded signature of Express res.redirect.
export type SafeRedirect = {
  (url: string): void
  (status: number, url: string): void
}

// Downstream middleware calls res.safeRedirect with the Express redirect signature.
export default function safeRedirect(req: ExtendedRequest, res: Response, next: NextFunction) {
  res.safeRedirect = function (statusOrUrl: number | string, url?: string) {
    if (typeof statusOrUrl === 'number' && url !== undefined) {
      // eslint-disable-next-line no-restricted-syntax
      return res.redirect(statusOrUrl, safeRedirectUrl(url))
    }
    // eslint-disable-next-line no-restricted-syntax
    return res.redirect(safeRedirectUrl(statusOrUrl as string))
  }
  return next()
}
