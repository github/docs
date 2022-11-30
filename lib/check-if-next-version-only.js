import { next, nextNext } from './enterprise-server-releases.js'
import versionSatisfiesRange from './version-satisfies-range.js'

// This is special handling for versioning (in either frontmatter or data/features)
// that evaluates to either of the next two GHES releases or a hardcoded `next`. The
// use case is when contributors intentionally version content for a future release,
// we don't want to throw an error if no currently supported versions are found. In
// all other scenarios, we DO want to throw an error to prevent versioning mistakes
// that would result in content not rendering.
export default function checkIfNextVersionOnly(value) {
  if (value === '*') return false

  const isNext = versionSatisfiesRange(next, value) || value === 'next'
  const isNextNext = versionSatisfiesRange(nextNext, value)

  return isNext || isNextNext
}
