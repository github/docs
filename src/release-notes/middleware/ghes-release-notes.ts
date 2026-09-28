import type { NextFunction, Response } from 'express'

import { formatReleases, renderPatchNotes } from '@/release-notes/lib/release-notes-utils'
import { all, latestStable } from '@/versions/lib/enterprise-server-releases'
import { executeWithFallback } from '@/languages/lib/render-with-fallback'
import { getReleaseNotes } from './get-release-notes'
import type { Context, ExtendedRequest } from '@/types'

export default async function ghesReleaseNotesContext(
  req: ExtendedRequest,
  res: Response,
  next: NextFunction,
) {
  if (!req.pagePath || !req.context || !req.context.currentVersion)
    throw new Error('request not contextualized')
  if (!(req.pagePath.endsWith('/release-notes') || req.pagePath.endsWith('/admin'))) return next()
  const [requestedPlan, requestedRelease] = req.context.currentVersion.split('@')
  if (requestedPlan !== 'enterprise-server') return next()

  // Forced to English.
  // The Markdown in data/release-notes/**/*.yml spells out product names
  // instead of using Liquid variables,
  // so translators render "Le GitHubbe Cöpilotte" instead of "GitHub Copilot".
  // Revisit once those sources use `{% data variables.product.* %}`.
  const ghesReleaseNotes = getReleaseNotes('enterprise-server', 'en')

  // If the requested GHES release isn't found in data/release-notes/enterprise-server/*,
  // and it IS a valid GHES release, try being helpful and redirecting to the old location.
  // Otherwise, 404.
  if (!Object.keys(ghesReleaseNotes).includes(requestedRelease.replace(/\./, '-'))) {
    return all.includes(requestedRelease)
      ? res.safeRedirect(`https://enterprise.github.com/releases/${requestedRelease}.0/notes`)
      : next()
  }

  // For example, the URL is something like /enterprise-server@3.7/xxx/admin
  // or /enterprise-server@3.7/xxxx/release-notes
  // Then it should not bother because it'll be a 404 anyway.
  if (!req.context.page) return next()

  req.context.ghesReleases = formatReleases(ghesReleaseNotes)

  const matchedReleaseNotes = req.context.ghesReleases.find((r) => r.version === requestedRelease)
  if (!matchedReleaseNotes) throw new Error('Release notes not found')
  const currentReleaseNotes = matchedReleaseNotes.patches

  // The release notes themselves are already forced to English.
  // This forces the reusables to match,
  // while AUTOTITLE links stay in the reader's language.
  const originalLanguage = req.context.currentLanguage
  req.context.autotitleLanguage = originalLanguage
  req.context.currentLanguage = 'en'

  try {
    // Render the release notes Markdown.
    req.context.ghesReleaseNotes = await executeWithFallback(
      req.context,
      () => renderPatchNotes(currentReleaseNotes, req.context!),
      (enContext: Context) => {
        // Something in the release notes ultimately caused a Liquid
        // rendering error. Let's start over and gather the English release
        // notes instead.
        enContext.ghesReleases = formatReleases(ghesReleaseNotes)

        const enMatchedNotes = enContext.ghesReleases!.find((r) => r.version === requestedRelease)
        if (!enMatchedNotes) throw new Error('Release notes not found')
        const enCurrentNotes = enMatchedNotes.patches
        return renderPatchNotes(enCurrentNotes, enContext)
      },
    )
  } finally {
    req.context.currentLanguage = originalLanguage
  }

  // GHES release notes on docs started with 2.20 but older release notes exist on enterprise.github.com.
  // So we want to use _all_ GHES versions when calculating next and previous releases.
  req.context.latestPatch = req.context.ghesReleaseNotes![0].version
  req.context.latestRelease = latestStable

  // Add convenience props for "Supported releases" section on GHES Admin landing page (NOT release notes).
  for (const release of req.context.ghesReleases) {
    release.firstPreviousRelease = all[all.findIndex((v) => v === release.version) + 1]
    release.secondPreviousRelease =
      all[all.findIndex((v) => v === release.firstPreviousRelease) + 1]
  }

  return next()
}
