import { reduce, sortBy } from 'lodash-es'
import { allVersions } from './all-versions'
import versionSatisfiesRange from './version-satisfies-range'
import { next, nextNext } from './enterprise-server-releases'
import { getDeepDataByLanguage } from '@/data-directory/lib/get-data'
import type { Version } from '@/types'

interface VersionsObject {
  [key: string]: string | string[]
}

interface GetApplicableVersionsOptions {
  doNotThrow?: boolean
  includeNextVersion?: boolean
}

interface FeatureData {
  [featureName: string]: {
    versions: VersionsObject
  }
}

// Feature data loads lazily from YAML on first use.
let featureData: FeatureData | null = null

const allVersionKeys = Object.keys(allVersions)

// Feature frontmatter can name one feature, feature: foo, or many, feature: [foo, bar].
// Merge each feature's version rules before evaluation. Example: fpt: * with
// feature: foo can add ghes: >=2.23 to the versions object.
function getApplicableVersions(
  versionsObj: VersionsObject | string | undefined,
  filepath?: string,
  opts: GetApplicableVersionsOptions = {},
): string[] {
  if (typeof versionsObj === 'undefined') {
    throw new Error(`No \`versions\` frontmatter found in ${filepath || 'undefined'}`)
  }

  // versions: * is invalid legacy frontmatter; use plan keys or feature-based frontmatter.
  if (versionsObj === '*') {
    throw new Error(
      `${filepath || 'undefined'} contains the invalid versions frontmatter: *. Please explicitly list out all the versions that apply to this article.`,
    )
  }

  if (!featureData) {
    featureData = getDeepDataByLanguage('features', 'en') as FeatureData
  }

  const featureVersionsObj: VersionsObject =
    typeof versionsObj === 'string'
      ? {}
      : reduce(
          versionsObj,
          (result: VersionsObject, value, key) => {
            if (key === 'feature') {
              if (typeof value === 'string') {
                Object.assign(result, { ...featureData?.[value]?.versions })
              } else if (Array.isArray(value)) {
                for (const str of value) {
                  Object.assign(result, { ...featureData?.[str]?.versions })
                }
              }
              delete result[key]
            }
            return result
          },
          {},
        )

  const foundFeatureVersions = evaluateVersions(featureVersionsObj)
  const foundStandardVersions = typeof versionsObj === 'string' ? [] : evaluateVersions(versionsObj)

  const applicableVersions: string[] = Array.from(
    new Set(foundStandardVersions.concat(foundFeatureVersions)),
  )

  if (!applicableVersions.length && !opts.doNotThrow) {
    throw new Error(
      `${filepath || 'undefined'} is not available in any currently supported version. Make sure the \`versions\` property includes at least one supported version.`,
    )
  }

  // Return versions in the same order as src/versions/lib/all-versions.ts.
  let sortedVersions = sortBy(applicableVersions, (v) => {
    return allVersionKeys.indexOf(v)
  })

  if (!opts.includeNextVersion) {
    sortedVersions = sortedVersions.filter(
      (v: string) => !(v.endsWith(`@${next}`) || v.endsWith(`@${nextNext}`)),
    )
  }

  return sortedVersions
}

// evaluateVersions accepts short names such as ghes: >=2.19 and expands them to full version keys.
function evaluateVersions(versionsObj: VersionsObject): string[] {
  const versions: string[] = []

  for (const [plan, planValue] of Object.entries(versionsObj)) {
    if (typeof planValue !== 'string') continue

    // Short and full plan names both match version objects.
    const matchingVersionObjs: Version[] = Object.values(allVersions).filter(
      (relevantVersionObj: Version) =>
        relevantVersionObj.plan === plan || relevantVersionObj.shortName === plan,
    )

    for (const relevantVersionObj of matchingVersionObjs) {
      // Non-numbered plans always match because only numbered releases use ranges.
      if (!relevantVersionObj.hasNumberedReleases) {
        versions.push(relevantVersionObj.version)
        continue
      }

      // Include future GHES releases only when includeNextVersion keeps them in the returned array.
      if (versionSatisfiesRange(next, planValue) || planValue === 'next') {
        versions.push(`${relevantVersionObj.plan}@${next}`)
      }
      if (versionSatisfiesRange(nextNext, planValue)) {
        versions.push(`${relevantVersionObj.plan}@${nextNext}`)
      }

      const releaseToCompare: string = relevantVersionObj.currentRelease

      if (releaseToCompare && versionSatisfiesRange(releaseToCompare, planValue)) {
        versions.push(relevantVersionObj.version)
      }
    }
  }

  return versions
}

export default getApplicableVersions
