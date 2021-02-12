const allVersions = require('./all-versions')

// If the version is enterprise-server@2.22, use `enterprise/2.22` as the bucket path
// Otherwise, use the plan name, e.g., `github-ae`
function getS3BucketPathFromVersion (version) {
  const versionObject = allVersions[version]

  if (!versionObject) {
    console.error(`${version} is not a supported version, cannot get S3 bucket path`)
    return
  }

  return versionObject.plan === 'enterprise-server'
    ? `enterprise/${versionObject.currentRelease}`
    : versionObject.plan
}

// Given a bucket path like `enterprise/2.19/foo/bar`, return enterprise-server@2.19
// Given a bucket path like `github-ae/foo/bar`, return github-ae@latest
function getVersionFromS3BucketPath (bucketPath) {
  const bucketPathParts = bucketPath.split('/')

  const version = bucketPathParts[0] === 'enterprise'
    ? `enterprise-server@${bucketPathParts[1]}`
    : `${bucketPathParts[0]}@latest`

  const versionObject = allVersions[version]

  if (!versionObject) {
    console.error(`cannot find a supported version from S3 bucket path ${bucketPath}`)
    return
  }

  return versionObject.version
}

module.exports = {
  getS3BucketPathFromVersion,
  getVersionFromS3BucketPath
}
