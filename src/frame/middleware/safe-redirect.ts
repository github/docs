import type { Response, NextFunction } from 'express'

import type { ExtendedRequest } from '@/types'

// Normalizes a redirect URL to prevent open redirects via protocol-relative
// URLs (e.g. "//evil.com" which browsers interpret as "https://evil.com").
export function safeRedirectUrl(url: string): string {
  return url.replace(/^\/\/+/, '/')
}

// Matches the overloaded signature of Express's res.redirect().
export type SafeRedirect = {
  (url: string): void
  (status: number, url: string): void
}

// Attaches res.safeRedirect() to the response for all downstream middleware.
// Same signature as res.redirect() but normalizes the URL first.
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
