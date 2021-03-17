const allVersions = require('./all-versions')
const { next } = require('./enterprise-server-releases')
const versionSatisfiesRange = require('./version-satisfies-range')

// return an array of versions that an article's product versions encompasses
function getApplicableVersions (frontmatterVersions, filepath) {
  if (typeof frontmatterVersions === 'undefined') {
    throw new Error(`No \`versions\` frontmatter found in ${filepath}`)
  }

  // all versions are applicable!
  if (frontmatterVersions === '*') {
    return Object.keys(allVersions)
  }

  // get an array like: [ 'free-pro-team@latest', 'enterprise-server@2.21', 'enterprise-cloud@latest' ]
  const applicableVersions = []

  let nextVersion = false

  // where frontmatter is something like:
  //   free-pro-team: '*'
  //   enterprise-server: '>=2.19'
  //   enterprise-cloud: '*'
  //   private-instances: '*'
  // ^ where each key corresponds to a plan
  Object.entries(frontmatterVersions)
    .forEach(([plan, planValue]) => {
      // Special handling for frontmatter that evalues to the next GHES release number or a hardcoded `next`:
      // we don't want to return it in the applicable versions array or it will become a permalink,
      // but we also don't want to throw an error if no other versions are found.
      if (planValue !== '*') {
        if (versionSatisfiesRange(next, planValue) || planValue === 'next') {
          nextVersion = true
        }
      }

      // for each plan (e.g., enterprise-server), get matching versions from allVersions object
      const relevantVersions = Object.values(allVersions).filter(v => v.plan === plan)

      if (!relevantVersions.length) {
        throw new Error(`No applicable versions found for ${filepath}. Please double-check the page's \`versions\` frontmatter.`)
      }

      relevantVersions.forEach(relevantVersion => {
        // special handling for versions with numbered releases
        if (relevantVersion.hasNumberedReleases) {
          if (versionSatisfiesRange(relevantVersion.currentRelease, planValue)) {
            applicableVersions.push(relevantVersion.version)
          }
        } else {
          applicableVersions.push(relevantVersion.version)
        }
      })
    })

  if (!applicableVersions.length && !nextVersion) {
    throw new Error(`No applicable versions found for ${filepath}. Please double-check the page's \`versions\` frontmatter.`)
  }

  return applicableVersions
}

module.exports = getApplicableVersions
