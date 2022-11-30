import semver from 'semver'
import { all, latest, firstReleaseNote } from '../../lib/enterprise-server-releases.js'
import {
  sortReleasesByDate,
  sortPatchKeys,
  renderPatchNotes,
  getAllReleases,
} from '../../lib/release-notes-utils.js'

// Display all GHES release notes, regardless of deprecation status,
// starting with the first release notes in 2.20
const supported = all.filter((release) => {
  return (
    semver.gte(semver.coerce(release), semver.coerce(firstReleaseNote)) && release !== '11.10.340'
  )
})

export default async function releaseNotesContext(req, res, next) {
  // The `/release-notes` sub-path
  if (!(req.pagePath.endsWith('/release-notes') || req.pagePath.endsWith('/admin'))) return next()

  const [requestedPlan, requestedRelease] = req.context.currentVersion.split('@')
  const releaseNotesPerPlan = req.context.site.data['release-notes'][requestedPlan]

  // Release notes handling differs if version has numbered releases (like GHES) or not (like GHAE)
  const hasNumberedReleases = !(requestedRelease === 'latest')

  // 404 if no release notes can be found or the requested release is not valid
  if (!releaseNotesPerPlan) return next()
  if (hasNumberedReleases && !all.includes(requestedRelease)) return next()

  // GHES gets handled here...
  if (hasNumberedReleases) {
    const currentReleaseNotes = releaseNotesPerPlan[`${requestedRelease.replace(/\./g, '-')}`]

    if (!currentReleaseNotes && req.pagePath.endsWith('/release-notes')) {
      // If the GHES version doesn't have any release notes, let's be helpful and redirect to `enterprise.github.com`
      return requestedPlan === 'enterprise-server'
        ? res.redirect(`https://enterprise.github.com/releases/${requestedRelease}.0/notes`)
        : next()
    }

    const patches = sortPatchKeys(currentReleaseNotes, requestedRelease, {
      semverSort: hasNumberedReleases,
    })
    req.context.releaseNotes = await Promise.all(
      patches.map(async (patch) => renderPatchNotes(patch, req.context))
    )
    req.context.releases = getAllReleases(supported, releaseNotesPerPlan, hasNumberedReleases)

    // Add firstPreviousRelease and secondPreviousRelease convenience props for use in includes/product-releases.html
    req.context.releases.forEach((release) => {
      release.firstPreviousRelease = all[all.findIndex((v) => v === release.version) + 1]
      release.secondPreviousRelease =
        all[all.findIndex((v) => v === release.firstPreviousRelease) + 1]
    })

    const releaseIndex = supported.findIndex((release) => release === requestedRelease)
    req.context.nextRelease = supported[releaseIndex - 1]
    req.context.prevRelease = supported[releaseIndex + 1]

    req.context.latestPatch = patches[0].version
    req.context.latestRelease = latest
  }

  // GHAE gets handled here...
  if (!hasNumberedReleases) {
    const sortedReleases = sortReleasesByDate(releaseNotesPerPlan)
    const sortedNotes = sortedReleases
      .map((release) => sortPatchKeys(releaseNotesPerPlan[release], release, { semverSort: false }))
      .flat()

    req.context.releaseNotes = await Promise.all(
      sortedNotes.map(async (patch) => renderPatchNotes(patch, req.context))
    )
    req.context.releases = getAllReleases(sortedReleases, releaseNotesPerPlan, hasNumberedReleases)
      // do some date format massaging, since we want the friendly date to render as the "version"
      .map((r) => {
        const d = r.patches[0].friendlyDate.split(' ')
        d.splice(1, 1)
        r.version = d.join(' ')
        return r
      })

    req.context.latestPatch = sortedNotes[0].date
  }

  return next()
}
