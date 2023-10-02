import { formatReleases, renderPatchNotes } from '#src/release-notes/lib/release-notes-utils.js'
import { allVersions } from '#src/versions/lib/all-versions.js'
import { getReleaseNotes } from './get-release-notes.js'

export default async function ghaeReleaseNotesContext(req, res, next) {
  // For example, the URL is something like /github-ae@latest/xxx/admin
  // or /github-ae@latest/xxxx/release-notes
  // Then it should not bother because it'll be a 404 anyway.
  if (!req.context.page) return next()

  if (!(req.pagePath.endsWith('/release-notes') || req.pagePath.endsWith('/admin'))) return next()
  if (
    !allVersions[req.context.currentVersion] ||
    req.context.currentVersion.split('@')[0] !== 'github-ae'
  )
    return next()

  // (This applies to ghes release notes too)
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
  const ghaeReleaseNotes = getReleaseNotes('github-ae', 'en')

  // internalLatestRelease is set in lib/all-versions, e.g., '3.5' but UI still displays '@latest'.
  let requestedRelease = req.context.currentVersionObj.internalLatestRelease

  // The internalLatestRelease may not necessarily correspond to an existing release notes number,
  // so just fall back to the latest existing release note number.
  if (!Object.keys(ghaeReleaseNotes).includes(requestedRelease.replace(/\./, '-'))) {
    requestedRelease = Object.keys(ghaeReleaseNotes)[0].replace(/-/, '.')
  }

  // Returns [{version, patches: [ {version, patchVersion, intro, date, sections: { features: [], bugs: []...}} ] }]
  req.context.ghaeReleases = formatReleases(ghaeReleaseNotes)

  // This means the AUTOTITLE links are in the current language, but
  // since we're already force the source of the release notes from English
  // exclusively, by doing this we can force all reusables to be in English
  // too and leave links as is.
  const originalLanguage = req.context.currentLanguage
  req.context.autotitleLanguage = originalLanguage
  req.context.currentLanguage = 'en'

  // Run _all_ the GHAE patches through the markdown rendering pipeline.
  // This is different from req.context.ghesReleaseNotes, which renders one release at a time.
  // Returns all patches: [{version, patchVersion, intro, date, sections}]
  try {
    req.context.ghaeReleaseNotes = (
      await Promise.all(
        req.context.ghaeReleases.map(
          async (release) => await renderPatchNotes(release.patches, req.context),
        ),
      )
    ).flat()
  } finally {
    // Restore the original language
    req.context.currentLanguage = originalLanguage
  }

  return next()
}
