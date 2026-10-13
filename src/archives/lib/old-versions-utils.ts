import path from 'path'
import { supported, latest } from '@/versions/lib/enterprise-server-releases'
import patterns from '@/frame/lib/patterns'
import nonEnterpriseDefaultVersion from '@/versions/lib/non-enterprise-default-version'
import { allVersions } from '@/versions/lib/all-versions'
const latestNewVersion = `enterprise-server@${latest}`
const oldVersions = ['dotcom'].concat(supported)
const newVersions = Object.keys(allVersions)

// Converts legacy version paths to versioned paths.
// See lib/path-utils.ts for utilities based on versioned paths.
// /github/category/article becomes /free-pro-team@latest/github/category/article.
// /enterprise/2.21/user/github/category/article becomes
// /enterprise-server@2.21/github/category/article.
// /enterprise/user/github/category/article becomes
// /enterprise-server@<latest>/github/category/article.

// Unknown enterprise version names fall back to the latest GHES release.
// Example: private-instances@latest maps to the latest GHES release.
export function getOldVersionFromNewVersion(newVersion: string) {
  return newVersion === nonEnterpriseDefaultVersion
    ? 'dotcom'
    : oldVersions.find((oldVersion) => newVersion.includes(oldVersion)) || latest
}

// Unknown legacy enterprise versions fall back to the latest versioned GHES path.
export function getNewVersionFromOldVersion(oldVersion: string) {
  return oldVersion === 'dotcom'
    ? nonEnterpriseDefaultVersion
    : newVersions.find((newVersion) => newVersion.includes(oldVersion)) || latestNewVersion
}

export function getOldVersionFromOldPath(oldPath: string) {
  // Callers pass legacy enterprise paths or dotcom paths, not enterprise-server@ paths.
  if (!patterns.enterprise.test(oldPath)) return 'dotcom'

  const ghesNumber = oldPath.match(patterns.getEnterpriseVersionNumber)
  return ghesNumber ? ghesNumber[1] : latest
}

// /en/enterprise/2.21/user/github/category/article becomes
// /en/enterprise-server@2.21/github/category/article.
// Paths can already contain a versioned segment after currentVersion renders.
// Example: /en/enterprise/private-instances@latest/admin/category/article keeps
// private-instances@latest.
export function getNewVersionedPath(oldPath: string, languageCode = '') {
  const pathParts = oldPath.split('/')
  const possibleVersion = languageCode ? pathParts[3] : pathParts[2]
  let newVersion = newVersions.includes(possibleVersion) ? possibleVersion : ''

  if (!newVersion) {
    const oldVersion = getOldVersionFromOldPath(oldPath)
    newVersion = getNewVersionFromOldVersion(oldVersion)
  }

  // patterns.oldEnterprisePath leaves the product path, such as /github/category/article.
  const restOfString = oldPath.replace(patterns.oldEnterprisePath, '')

  return path.posix.join('/', languageCode, newVersion, restOfString)
}

export default {
  oldVersions,
  getOldVersionFromOldPath,
  getOldVersionFromNewVersion,
  getNewVersionFromOldVersion,
  getNewVersionedPath,
}
