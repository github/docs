import { formatReleases, renderPatchNotes } from '#src/release-notes/lib/release-notes-utils.js'
import { all } from '#src/versions/lib/enterprise-server-releases.js'
import { executeWithFallback } from '../../../lib/render-with-fallback.js'
import { getReleaseNotes } from './get-release-notes.js'

export default async function ghesReleaseNotesContext(req, res, next) {
  if (!(req.pagePath.endsWith('/release-notes') || req.pagePath.endsWith('/admin'))) return next()
  const [requestedPlan, requestedRelease] = req.context.currentVersion.split('@')
  if (requestedPlan !== 'enterprise-server') return next()

  // (This applies to ghae release notes too)
  // We deliberately force the language to be English for now.
  // The underlying reason is that the content (in data/release-notes/**/*.yml)
  // is Markdown that does NOT use variables controlled by English-only
  // things like product names.
  // Therefore, the **nouns (like product names) get translated** instead
  // of left as is. For example. "Le GitHubbe Cöpilotte" instead
  // of "GitHub Copilot".
  // Until the Markdown sources used for release notes have Liquid
  // variables (like `{% data variables.product.prodname_ghe_cloud %}}`)
  // we'll force the text to be that from English.
  const ghesReleaseNotes = getReleaseNotes('enterprise-server', 'en')

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

  // This means the AUTOTITLE links are in the current language, but
  // since we're already force the source of the release notes from English
  // exclusively, by doing this we can force all reusables to be in English
  // too and leave links as is.
  const originalLanguage = req.context.currentLanguage
  req.context.autotitleLanguage = originalLanguage
  req.context.currentLanguage = 'en'

  try {
    // Run the current release notes through the markdown rendering pipeline.
    // Returns the current release's patches array: [{version, patchVersion, intro, date, sections}]
    req.context.ghesReleaseNotes = await executeWithFallback(
      req.context,
      () => renderPatchNotes(currentReleaseNotes, req.context),
      (enContext) => {
        // Something in the release notes ultimately caused a Liquid
        // rendering error. Let's start over and gather the English release
        // notes instead.
        enContext.ghesReleases = formatReleases(ghesReleaseNotes)
        const currentReleaseNotes = enContext.ghesReleases.find(
          (r) => r.version === requestedRelease,
        ).patches
        return renderPatchNotes(currentReleaseNotes, enContext)
      },
    )
  } finally {
    // Restore the original language
    req.context.currentLanguage = originalLanguage
  }

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
