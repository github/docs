import { fileURLToPath } from 'url'
import path from 'path'
import { reduce, sortBy } from 'lodash-es'
import allVersions from './all-versions.js'
import versionSatisfiesRange from './version-satisfies-range.js'
import checkIfNextVersionOnly from './check-if-next-version-only.js'
import dataDirectory from './data-directory.js'
import encodeBracketedParentheses from './encode-bracketed-parentheses.js'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const featuresDir = path.posix.join(__dirname, '../data/features')

const featureData = dataDirectory(featuresDir, {
  preprocess: (dataString) => encodeBracketedParentheses(dataString.trimEnd()),
  ignorePatterns: [/README\.md$/],
})

// return an array of versions that an article's product versions encompasses
function getApplicableVersions(frontmatterVersions, filepath) {
  if (typeof frontmatterVersions === 'undefined') {
    throw new Error(`No \`versions\` frontmatter found in ${filepath}`)
  }

  // all versions are applicable!
  if (frontmatterVersions === '*') {
    return Object.keys(allVersions)
  }

  // Check for frontmatter that includes a feature name, like:
  //    fpt: '*'
  //    feature: 'foo'
  // or multiple feature names, like:
  //    fpt: '*'
  //    feature: ['foo', 'bar']
  // and add the versions affiliated with the feature (e.g., foo) to the frontmatter versions object:
  //    fpt: '*'
  //    ghes: '>=2.23'
  //    ghae: '*'
  // where the feature is bringing the ghes and ghae versions into the mix.
  const featureVersions = reduce(
    frontmatterVersions,
    (result, value, key) => {
      if (key === 'feature') {
        if (typeof value === 'string') {
          Object.assign(result, { ...featureData[value].versions })
        } else if (Array.isArray(value)) {
          value.forEach((str) => {
            Object.assign(result, { ...featureData[str].versions })
          })
        }
        delete result[key]
      }
      return result
    },
    {}
  )

  // We will be evaluating feature versions separately, so we can remove this.
  delete frontmatterVersions.feature

  // Get available versions for frontmatter and for feature versions.
  const foundFeatureVersions = evaluateVersions(featureVersions)
  const foundFrontmatterVersions = evaluateVersions(frontmatterVersions)

  // Combine them!
  const applicableVersions = [
    ...new Set(foundFrontmatterVersions.versions.concat(foundFeatureVersions.versions)),
  ]

  if (
    !applicableVersions.length &&
    !foundFrontmatterVersions.isNextVersionOnly &&
    !foundFeatureVersions.isNextVersionOnly
  ) {
    throw new Error(
      `No applicable versions found for ${filepath}. Please double-check the page's \`versions\` frontmatter.`
    )
  }

  // Sort them by the order in lib/all-versions.
  const sortedVersions = sortBy(applicableVersions, (v) => {
    return Object.keys(allVersions).indexOf(v)
  })

  return sortedVersions
}

function evaluateVersions(versionsObj) {
  let isNextVersionOnly = false

  // get an array like: [ 'free-pro-team@latest', 'enterprise-server@2.21', 'enterprise-cloud@latest' ]
  const versions = []

  // where versions obj is something like:
  //   fpt: '*'
  //   ghes: '>=2.19'
  //   ghae: '*'
  // ^ where each key corresponds to a plan's short name (defined in lib/all-versions.js)
  Object.entries(versionsObj).forEach(([plan, planValue]) => {
    // Special handling for frontmatter that evalues to the next GHES release number or a hardcoded `next`.
    isNextVersionOnly = checkIfNextVersionOnly(planValue)

    // For each plan (e.g., enterprise-server), get matching versions from allVersions object
    Object.values(allVersions)
      .filter(
        (relevantVersion) => relevantVersion.plan === plan || relevantVersion.shortName === plan
      )
      .forEach((relevantVersion) => {
        // Use a dummy value of '1.0' for non-numbered versions like free-pro-team and github-ae
        // This will evaluate to true against '*' but false against 'next', which is what we want.
        const versionToCompare = relevantVersion.hasNumberedReleases
          ? relevantVersion.currentRelease
          : '1.0'

        if (versionSatisfiesRange(versionToCompare, planValue)) {
          versions.push(relevantVersion.version)
        }
      })
  })

  return { versions, isNextVersionOnly }
}

export default getApplicableVersions
