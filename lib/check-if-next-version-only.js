const { next, latest } = require('./enterprise-server-releases')
const versionSatisfiesRange = require('./version-satisfies-range')

// Special handling for frontmatter that evalues to the next GHES release number or a hardcoded `next`:
// we don't want to return it as an applicable version or it will become a permalink,
// but we also don't want to throw an error if no other versions are found.
module.exports = function checkIfNextVersionOnly (value) {
  if (value === '*') return false

  const ghesNextVersionOnly = versionSatisfiesRange(next, value) && !versionSatisfiesRange(latest, value)

  return (ghesNextVersionOnly || value === 'next')
}
