import { next, latest } from './enterprise-server-releases.js'
import versionSatisfiesRange from './version-satisfies-range.js'

// Special handling for frontmatter that evalues to the next GHES release number,
// GHAE `issue-\d{4}` or a hardcoded `next`. We don't want to return any of these
// as an applicable version or it will become a permalink, but we also don't want
// to throw an error if no other versions are found.
export default function checkIfNextVersionOnly(value) {
  if (value === '*') return false

  const ghesNextVersion =
    versionSatisfiesRange(next, value) && !versionSatisfiesRange(latest, value)

  const ghaeUpcomingVersion = value.includes('issue-')

  return ghesNextVersion || ghaeUpcomingVersion || value === 'next'
}
