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
    relativePath: context?.page?.relativePath,
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

// Build the fine-grained surrogate keys for a content response.
// A content page is exactly one of each axis, so ~5 keys per page, well under
// Fastly's 16 KB Surrogate-Key header limit:
//
//   language:<code>              (also emitted for non-content responses)
//   product:<top-level dir>      e.g. product:actions      (~36)
//   version:<short release slug> e.g. version:ghes-3.14     (~7-8)
//   product:<x>,language:<y>     compound, for targeted translation purges
//   language:<code>,path:<path>  compound, one key per source page, all versions
//
export function makeContentSurrogateKeys({
  langCode,
  productId,
  versionKey,
  relativePath,
}: {
  langCode?: string
  productId?: string
  versionKey?: string
  relativePath?: string
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
  const pageKey = makePageSurrogateKey(langCode, relativePath)
  if (pageKey) {
    keys.push(pageKey)
  }
  return keys
}

// One surrogate key per source page, e.g. `language:en,path:actions/foo.md`,
// covering every version-URL of the page. A pure function of language and
// relativePath so the purge job can rebuild the same key from a changed file's
// path. Language-scoped so an English deploy doesn't evict translations. Returns
// undefined for non-content responses.
export function makePageSurrogateKey(langCode?: string, relativePath?: string): string | undefined {
  if (!langCode || !relativePath) return undefined
  return `language:${langCode},path:${relativePath}`
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
