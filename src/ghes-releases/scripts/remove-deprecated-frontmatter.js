// Returns false when no changes were made to the frontmatter,
// true when changes were made.
export default function removeDeprecatedFrontmatter(
  file,
  frontmatterVersions,
  releaseToDeprecate,
  nextOldestRelease,
) {
  // skip files with no Enterprise Server versions frontmatter
  if (!frontmatterVersions) return false
  if (!frontmatterVersions.ghes) return false

  const ghesRange = frontmatterVersions.ghes

  // skip files with versions frontmatter that already applies to all enterprise-server releases
  if (ghesRange === '*') return false

  // if the release to deprecate is 2.13, and the FM is either '>=2.13', '>2.13', or '>=2.14',
  // we can safely change the FM to ghes: '*'
  const appliesToAllSupportedGhesReleases =
    ghesRange === `>=${releaseToDeprecate}` ||
    ghesRange === `>${releaseToDeprecate}` ||
    ghesRange === `>=${nextOldestRelease}`

  if (appliesToAllSupportedGhesReleases) {
    frontmatterVersions.ghes = '*'
    return true
  }

  // if the release to deprecate is 2.13, and the FM is either '=2.13', '<2.13', '<=2.13', or '<2.14',
  // delete (aka deprecate) the ghes frontmatter property.
  const appliesToNoSupportedGhesReleases =
    ghesRange === `=${releaseToDeprecate}` ||
    ghesRange === `<${releaseToDeprecate}` ||
    ghesRange === `<=${releaseToDeprecate}` ||
    ghesRange === `<${nextOldestRelease}`

  if (appliesToNoSupportedGhesReleases) {
    // Throw a warning if there are no other frontmatter versions specified.
    if (Object.keys(frontmatterVersions).length === 1) {
      console.log(
        `Warning! ${file} has frontmatter versioning that will make it never appear when ${releaseToDeprecate} is deprecated. The article should probably be removed.`,
      )
      return false
    }

    delete frontmatterVersions.ghes
    return true
  }
}
