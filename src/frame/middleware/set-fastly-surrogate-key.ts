import type { Request, Response, NextFunction } from 'express'

import { ExtendedRequest } from '@/types'
import type { Page, Version } from '@/types'

// Fastly provides a Soft Purge feature that allows you to mark content as outdated (stale) instead of permanently
// purging and thereby deleting it from Fastly's caches. Objects invalidated with Soft Purge will be treated as
// outdated (stale) while Fastly fetches a new version from origin.
//
// Use of a surrogate key is required for soft purging
// https://docs.fastly.com/en/guides/soft-purges
// https://docs.fastly.com/en/guides/getting-started-with-surrogate-keys

// What the header needs to be called for Fastly to recognize it.
const KEY = 'surrogate-key'

export const SURROGATE_ENUMS = {
  MANUAL: 'manual-purge',
}

export function setFastlySurrogateKey(res: Response, enumKey: string, isCustomKey = false) {
  if (process.env.NODE_ENV !== 'production') {
    if (!isCustomKey && !Object.values(SURROGATE_ENUMS).includes(enumKey)) {
      throw new Error(
        `Unrecognized surrogate enumKey. ${enumKey} is not one of ${Object.values(
          SURROGATE_ENUMS,
        )}`,
      )
    }
  }
  res.set(KEY, enumKey)
}

export function setDefaultFastlySurrogateKey(req: Request, res: Response, next: NextFunction) {
  res.set(KEY, makeLanguageSurrogateKey())
  return next()
}

export function setLanguageFastlySurrogateKey(
  req: ExtendedRequest,
  res: Response,
  next: NextFunction,
) {
  const context = req.context
  const keys = makeContentSurrogateKeys({
    langCode: req.language,
    productId: productSurrogateId(context?.page),
    versionKey: versionSurrogateKey(context?.currentVersionObj),
  })
  res.set(KEY, keys.join(' '))
  return next()
}

export function makeLanguageSurrogateKey(langCode?: string) {
  if (!langCode) {
    return 'no-language'
  }
  return `language:${langCode}`
}

// Build the fine-grained surrogate keys for a content response (docs-engineering#6719).
// A content page is exactly one of each axis, so ~4 keys per page, well under
// Fastly's 16 KB Surrogate-Key header limit:
//
//   language:<code>              (also emitted for non-content responses)
//   product:<top-level dir>      e.g. product:actions      (~36)
//   version:<short release slug> e.g. version:ghes-3.14     (~7-8)
//   product:<x>,language:<y>     compound, for targeted translation purges
//
// These keys are inert: nothing purges the new keys yet. docs-engineering#6720
// will use them to target the tightest key that covers a deploy instead of
// soft-purging a whole language. Space is the Fastly delimiter; colons and
// commas are fine (we already ship `language:en` and `api-search:en`). The
// language key stays first so anything that only reads the first token (e.g.
// the caching-headers test helper) keeps working.
export function makeContentSurrogateKeys({
  langCode,
  productId,
  versionKey,
}: {
  langCode?: string
  productId?: string
  versionKey?: string
}): string[] {
  const keys = [makeLanguageSurrogateKey(langCode)]
  if (productId) {
    keys.push(`product:${productId}`)
    if (langCode) {
      keys.push(`product:${productId},language:${langCode}`)
    }
  }
  if (versionKey) {
    keys.push(`version:${versionKey}`)
  }
  return keys
}

// Derive the product id for the `product:` surrogate key from a content page's
// path. The top-level content directory is the product id (mirrors
// Page.parentProductId), e.g. `actions`. Returns undefined for non-content
// responses and the top-level homepage (`content/index.md`).
function productSurrogateId(page?: Page): string | undefined {
  const relativePath = page?.relativePath
  if (!relativePath) return undefined
  const id = relativePath.split('/')[0]
  if (!id || id.endsWith('.md')) return undefined
  return id
}

// Derive the short release slug for the `version:` surrogate key, e.g. `fpt`,
// `ghec`, `ghes-3.14`. Numbered releases (GHES) get the release appended so a
// version-scoped purge can target a single release; unnumbered plans use the
// plain short name.
function versionSurrogateKey(versionObj?: Version): string | undefined {
  if (!versionObj) return undefined
  return versionObj.hasNumberedReleases
    ? `${versionObj.shortName}-${versionObj.currentRelease}`
    : versionObj.shortName
}
