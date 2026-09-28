import type { NextFunction, Response } from 'express'

import languages from '@/languages/lib/languages-server'
import { defaultCacheControl } from '@/frame/middleware/cache-control'
import { ExtendedRequest } from '@/types'

const redirectPatterns = Object.values(languages)
  .map((language) => language.redirectPatterns || [])
  .flat()
// Combine enabled language redirectPatterns for a cheap precheck before scanning every pattern.
const combinedRedirectPatternRegex =
  redirectPatterns.length > 0
    ? new RegExp(redirectPatterns.map((rex) => rex.source).join('|'))
    : null

const allRedirectPatterns = Object.values(languages)
  .map((language) =>
    (language.redirectPatterns || []).map((redirectPattern) => [language.code, redirectPattern]),
  )
  .flat() as [string, RegExp][] // flat() loses tuple type inference.

// Redirect mistyped language codes, for example /jp* -> /ja* and /zh-TW* -> /zh*.
export default function languageCodeRedirects(
  req: ExtendedRequest,
  res: Response,
  next: NextFunction,
) {
  // Only paths matching the combined precheck need per-language pattern lookup.
  if (req.path.startsWith('/_next/static')) return next()
  if (!combinedRedirectPatternRegex) return next()
  if (!combinedRedirectPatternRegex.test(req.path)) return next()

  // This rare path favors clarity over optimizing the pattern scan.
  const matched = allRedirectPatterns.find(([, pattern]) => pattern.test(req.path))
  if (matched) {
    const [code, pattern] = matched
    if (code && pattern) {
      defaultCacheControl(res)
      return res.safeRedirect(301, req.path.replace(pattern, `/${code}`))
    }
  }
  return next()
}
