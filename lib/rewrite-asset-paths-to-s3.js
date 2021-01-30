const latestEnterpriseRelease = require('./enterprise-server-releases').latest
const nonEnterpriseDefaultVersion = require('./non-enterprise-default-version')
const { getS3BucketPathFromVersion } = require('./s3-bucket-path-utils')
const allVersions = require('./all-versions')
const s3BasePath = 'https://github-images.s3.amazonaws.com'

// This module rewrites asset paths on Enterprise versions to S3 paths.
// Source example: /assets/images/foo.png
// Rewritten: https://github-images.s3.amazonaws.com/enterprise/2.20/assets/images/foo.png
// The one exception is Admin pages on the latest GHES release.
module.exports = function rewriteAssetPathsToS3 ($, version, relativePath) {
  // skip if this is the homepage
  if (relativePath === 'index.md') return

  // if the current version is non-enterprise, do not rewrite
  if (version === nonEnterpriseDefaultVersion) return

  // the relativePath starts with the product, like /admin/foo or /github/foo
  const product = relativePath.split('/')[0]

  // if this is an Admin page on the latest GHES release, do not rewrite
  if (product === 'admin' && allVersions[version].currentRelease === latestEnterpriseRelease) return

  // if the version is enterprise-server@2.22, use `enterprise/2.22` as the bucket path
  // otherwise, use the plan name, e.g., `github-ae`
  const bucketPath = getS3BucketPathFromVersion(version)

  $('img').each((i, el) => {
    const src = $(el).attr('src')
    if (!src.startsWith('/assets/images')) return
    const newSrc = `${s3BasePath}/${bucketPath}${src}`
    if (src !== newSrc) $(el).attr('src', newSrc)
  })
}
