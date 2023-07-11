import { formatReleases, renderPatchNotes } from '../../lib/release-notes-utils.js'
import { all } from '../../lib/enterprise-server-releases.js'
import { executeWithFallback } from '../../lib/render-with-fallback.js'
import { getReleaseNotes } from './get-release-notes.js'

export default async function ghesReleaseNotesContext(req, res, next) {
  if (!(req.pagePath.endsWith('/release-notes') || req.pagePath.endsWith('/admin'))) return next()
  const [requestedPlan, requestedRelease] = req.context.currentVersion.split('@')
  if (requestedPlan !== 'enterprise-server') return next()

  const ghesReleaseNotes = getReleaseNotes('enterprise-server', req.language)

  // If the requested GHES release isn't found in data/release-notes/enterprise-server/*,
  // and it IS a valid GHES release, try being helpful and redirecting to the old location.
  // Otherwise, 404.
  if (!Object.keys(ghesReleaseNotes).includes(requestedRelease.replace(/\./, '-'))) {
    return all.includes(requestedRelease)
      ? res.redirect(`https://enterprise.github.com/releases/${requestedRelease}.0/notes`)
      : next()
  }

  // For example, the URL is something like /enterprise-server@3.7/xxx/admin
  // or /enterprise-server@3.7/xxxx/release-notes
  // Then it should not bother because it'll be a 404 anyway.
  if (!req.context.page) return next()

  // Returns [{version, patches: [{version, patchVersion, intro, date, sections: { features: [], bugs: []...}} ]}]
  req.context.ghesReleases = formatReleases(ghesReleaseNotes)

  // Find the notes for the current release only
  const currentReleaseNotes = req.context.ghesReleases.find(
    (r) => r.version === requestedRelease,
  ).patches

  // Run the current release notes through the markdown rendering pipeline.
  // Returns the current release's patches array: [{version, patchVersion, intro, date, sections}]
  req.context.ghesReleaseNotes = await executeWithFallback(
    req.context,
    () => renderPatchNotes(currentReleaseNotes, req.context),
    (enContext) => {
      // Something in the release notes ultimately caused a Liquid
      // rendering error. Let's start over and gather the English release
      // notes instead.
      const ghesReleaseNotes = getReleaseNotes('enterprise-server', 'en')
      enContext.ghesReleases = formatReleases(ghesReleaseNotes)
      const currentReleaseNotes = enContext.ghesReleases.find(
        (r) => r.version === requestedRelease,
      ).patches
      return renderPatchNotes(currentReleaseNotes, enContext)
    },
  )

  // GHES release notes on docs started with 2.20 but older release notes exist on enterprise.github.com.
  // So we want to use _all_ GHES versions when calculating next and previous releases.
  req.context.latestPatch = req.context.ghesReleaseNotes[0].version
  req.context.latestRelease = all[0]

  // Add convenience props for "Supported releases" section on GHES Admin landing page (NOT release notes).
  req.context.ghesReleases.forEach((release) => {
    release.firstPreviousRelease = all[all.findIndex((v) => v === release.version) + 1]
    release.secondPreviousRelease =
      all[all.findIndex((v) => v === release.firstPreviousRelease) + 1]
  })

  return next()
}
