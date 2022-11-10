import path from 'path'
import { reduce, sortBy } from 'lodash-es'
import { allVersions } from './all-versions.js'
import versionSatisfiesRange from './version-satisfies-range.js'
import checkIfNextVersionOnly from './check-if-next-version-only.js'
import dataDirectory from './data-directory.js'
import encodeBracketedParentheses from './encode-bracketed-parentheses.js'

const featuresDir = path.join('data', 'features')

let featureData = null

const allVersionKeys = Object.keys(allVersions)

// return an array of versions that an article's product versions encompasses
function getApplicableVersions(frontmatterVersions, filepath) {
  if (typeof frontmatterVersions === 'undefined') {
    throw new Error(`No \`versions\` frontmatter found in ${filepath}`)
  }

  // all versions are applicable!
  if (frontmatterVersions === '*') {
    return allVersionKeys
  }

  if (!featureData) {
    featureData = dataDirectory(featuresDir, {
      preprocess: (dataString) => encodeBracketedParentheses(dataString.trimEnd()),
      ignorePatterns: [/README\.md$/],
    })
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

  // Get available versions for frontmatter and for feature versions.
  const foundFeatureVersions = evaluateVersions(featureVersions)
  const foundFrontmatterVersions = evaluateVersions(frontmatterVersions)

  // Combine them!
  const applicableVersions = Array.from(
    new Set(foundFrontmatterVersions.versions.concat(foundFeatureVersions.versions))
  )

  if (
    !applicableVersions.length &&
    !foundFrontmatterVersions.isNextVersionOnly &&
    !foundFeatureVersions.isNextVersionOnly
  ) {
    throw new Error(
      `${filepath} is not available in any currently supported version. Make sure the \`versions\` property includes at least one supported version.`
    )
  }

  // Sort them by the order in lib/all-versions.
  const sortedVersions = sortBy(applicableVersions, (v) => {
    return allVersionKeys.indexOf(v)
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
    // Special handling for frontmatter that evaluates to the next GHES release number or a hardcoded `next`.
    isNextVersionOnly = checkIfNextVersionOnly(planValue)

    // For each available plan (e.g., `ghes`), get the matching versions from allVersions
    const matchingVersions = Object.values(allVersions).filter(
      (relevantVersion) => relevantVersion.plan === plan || relevantVersion.shortName === plan
    )

    // For each matching version found above, compare it to the provided planValue (e.g., `>=2.19).
    matchingVersions.forEach((relevantVersion) => {
      // If the version doesn't require any semantic comparison, we can assume it applies.
      if (!(relevantVersion.hasNumberedReleases || relevantVersion.internalLatestRelease)) {
        versions.push(relevantVersion.version)
        return
      }

      // Determine which release to use for semantic comparison.
      const releaseToCompare = relevantVersion.hasNumberedReleases
        ? relevantVersion.currentRelease
        : relevantVersion.internalLatestRelease

      if (versionSatisfiesRange(releaseToCompare, planValue)) {
        versions.push(relevantVersion.version)
      }
    })
  })

  return { versions, isNextVersionOnly }
}

export default getApplicableVersions
