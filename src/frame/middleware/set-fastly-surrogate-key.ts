import type { Request, Response, NextFunction } from 'express'

import { ExtendedRequest } from '@/types'
import type { Page, Version } from '@/types'

// Fastly soft purges mark cached objects stale while origin fetches a fresh copy.
// Soft purges require surrogate keys.
// https://docs.fastly.com/en/guides/soft-purges
// https://docs.fastly.com/en/guides/getting-started-with-surrogate-keys

// Fastly reads surrogate keys from this response header.
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

// Content responses get about five keys, one per purge axis,
// below Fastly's 16 KB header limit.
// Shapes include language:<code>, product:<top-level-dir>, version:<short-release-slug>,
// product:<product>,language:<code>, and language:<code>,path:<source-path>.
// language:<code> also appears on non-content responses.
// product:<product>,language:<code> targets translation purges.
// language:<code>,path:<source-path> covers one source page across all versions.
// Each response emits at most one product key and at most one version key.
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

// Page surrogate keys cover every version URL for one source page.
// Example: language:en,path:actions/foo.md.
// The purge job rebuilds them from changed file paths.
// Language scoping avoids evicting translations on English deploys.
// Missing language or path returns undefined for non-content responses.
export function makePageSurrogateKey(langCode?: string, relativePath?: string): string | undefined {
  if (!langCode || !relativePath) return undefined
  return `language:${langCode},path:${relativePath}`
}

// Product surrogate keys use the top-level content directory, mirroring Page.parentProductId.
// Example: actions.
// Non-content responses and the top-level homepage return undefined.
function productSurrogateId(page?: Page): string | undefined {
  const relativePath = page?.relativePath
  if (!relativePath) return undefined
  const id = relativePath.split('/')[0]
  if (!id || id.endsWith('.md')) return undefined
  return id
}

// Version surrogate keys use the short name.
// Numbered GitHub Enterprise Server releases append currentRelease for single-release purges.
// Unnumbered plans use the short name alone.
function versionSurrogateKey(versionObj?: Version): string | undefined {
  if (!versionObj) return undefined
  return versionObj.hasNumberedReleases
    ? `${versionObj.shortName}-${versionObj.currentRelease}`
    : versionObj.shortName
}
