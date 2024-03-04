import { reduce, sortBy } from 'lodash-es'
import { allVersions } from './all-versions.js'
import versionSatisfiesRange from './version-satisfies-range.js'
import { next, nextNext } from './enterprise-server-releases.js'
import { getDeepDataByLanguage } from '#src/data-directory/lib/get-data.js'

let featureData = null

const allVersionKeys = Object.keys(allVersions)

// return an array of versions that an article's product versions encompasses
function getApplicableVersions(versionsObj, filepath, opts = {}) {
  if (typeof versionsObj === 'undefined') {
    throw new Error(`No \`versions\` frontmatter found in ${filepath}`)
  }

  // Catch an old frontmatter value that was used to indicate an article was available in all versions.
  if (versionsObj === '*') {
    throw new Error(
      `${filepath} contains the invalid versions frontmatter: *. Please explicitly list out all the versions that apply to this article.`,
    )
  }

  if (!featureData) {
    featureData = getDeepDataByLanguage('features', 'en')
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
  // where the feature is bringing the ghes versions into the mix.
  const featureVersionsObj = reduce(
    versionsObj,
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
    {},
  )

  // Get available versions for feature and standard versions.
  const foundFeatureVersions = evaluateVersions(featureVersionsObj)
  const foundStandardVersions = evaluateVersions(versionsObj)

  // Combine them!
  const applicableVersions = Array.from(new Set(foundStandardVersions.concat(foundFeatureVersions)))

  if (!applicableVersions.length && !opts.doNotThrow) {
    throw new Error(
      `${filepath} is not available in any currently supported version. Make sure the \`versions\` property includes at least one supported version.`,
    )
  }

  // Sort them by the order in lib/all-versions.
  let sortedVersions = sortBy(applicableVersions, (v) => {
    return allVersionKeys.indexOf(v)
  })

  // Strip out not-yet-supported versions if the option to include them is not provided.
  if (!opts.includeNextVersion) {
    sortedVersions = sortedVersions.filter(
      (v) => !(v.endsWith(`@${next}`) || v.endsWith(`@${nextNext}`)),
    )
  }

  return sortedVersions
}

function evaluateVersions(versionsObj) {
  // get an array like: [ 'free-pro-team@latest', 'enterprise-server@2.21', 'enterprise-cloud@latest' ]
  const versions = []

  // where versions obj is something like:
  //   fpt: '*'
  //   ghes: '>=2.19'
  //   ghec: '*'
  // ^ where each key corresponds to a plan's short name (defined in lib/all-versions.js)
  Object.entries(versionsObj).forEach(([plan, planValue]) => {
    // For each available plan (e.g., `ghes`), get the matching versions from allVersions.
    // This will be an array of one or more version objects.
    const matchingVersionObjs = Object.values(allVersions).filter(
      (relevantVersionObj) =>
        relevantVersionObj.plan === plan || relevantVersionObj.shortName === plan,
    )

    // For each matching version found above, compare it to the provided planValue.
    // E.g., compare `enterprise-server@2.19` to `ghes: >=2.19`.
    matchingVersionObjs.forEach((relevantVersionObj) => {
      // If the version doesn't require any semantic comparison, we can assume it applies.
      if (!(relevantVersionObj.hasNumberedReleases || relevantVersionObj.internalLatestRelease)) {
        versions.push(relevantVersionObj.version)
        return
      }

      // Special handling for a plan value that evaluates to the next GHES release number or a hardcoded `next`.
      // Note these will not be included in the final array unless the `includeNextVersion` option is provided.
      if (versionSatisfiesRange(next, planValue) || planValue === 'next') {
        versions.push(`${relevantVersionObj.plan}@${next}`)
      }
      if (versionSatisfiesRange(nextNext, planValue)) {
        versions.push(`${relevantVersionObj.plan}@${nextNext}`)
      }

      // Determine which release to use for semantic comparison.
      const releaseToCompare = relevantVersionObj.hasNumberedReleases
        ? relevantVersionObj.currentRelease
        : relevantVersionObj.internalLatestRelease

      if (versionSatisfiesRange(releaseToCompare, planValue)) {
        versions.push(relevantVersionObj.version)
      }
    })
  })

  return versions
}

export default getApplicableVersions
