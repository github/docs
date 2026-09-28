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

  // Force English because some release-note entries still spell out product names.
  const ghesReleaseNotes = getReleaseNotes('enterprise-server', 'en')

  // Valid releases missing local notes redirect to enterprise.github.com; others return 404.
  if (!Object.keys(ghesReleaseNotes).includes(requestedRelease.replace(/\./, '-'))) {
    return all.includes(requestedRelease)
      ? res.safeRedirect(`https://enterprise.github.com/releases/${requestedRelease}.0/notes`)
      : next()
  }

  // Paths under the right version but wrong page still return 404 through the normal middleware.
  if (!req.context.page) return next()

  req.context.ghesReleases = formatReleases(ghesReleaseNotes)

  const matchedReleaseNotes = req.context.ghesReleases.find((r) => r.version === requestedRelease)
  if (!matchedReleaseNotes) throw new Error('Release notes not found')
  const currentReleaseNotes = matchedReleaseNotes.patches

  // Render reusables in English while AUTOTITLE links stay in the reader's language.
  const originalLanguage = req.context.currentLanguage
  req.context.autotitleLanguage = originalLanguage
  req.context.currentLanguage = 'en'

  try {
    req.context.ghesReleaseNotes = await executeWithFallback(
      req.context,
      () => renderPatchNotes(currentReleaseNotes, req.context!),
      (enContext: Context) => {
        // Unreachable while currentLanguage is forced to en; rebuild props if that changes.
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

  // latestPatch comes from local notes; latestRelease comes from supported release metadata.
  req.context.latestPatch = req.context.ghesReleaseNotes![0].version
  req.context.latestRelease = latestStable

  // Previous-release links include older GHES releases hosted on enterprise.github.com.
  for (const release of req.context.ghesReleases) {
    release.firstPreviousRelease = all[all.findIndex((v) => v === release.version) + 1]
    release.secondPreviousRelease =
      all[all.findIndex((v) => v === release.firstPreviousRelease) + 1]
  }

  return next()
}
