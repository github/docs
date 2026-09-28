import semver from 'semver'

// Release is a GHES release such as 3.1; range is a semver range such as <=3.2.
export default function versionSatisfiesRange(release: string | undefined, range: string): boolean {
  if (!release) {
    return false
  }

  // Enterprise Server 11.10.340 predates semver-compatible 2.x, so only less-than ranges match.
  if (release === '11.10.340') return range.startsWith('<')

  // Treat wildcard as 1.0 so it matches wildcard ranges and not next.
  if (release === '*') {
    release = '1.0'
  }

  const coercedRelease = semver.coerce(release)
  if (!coercedRelease) {
    throw new Error(`Unable to coerce release version: ${release}`)
  }

  return semver.satisfies(coercedRelease, range)
}
