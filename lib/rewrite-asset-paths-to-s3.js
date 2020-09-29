const latestEnterpriseVersion = require('./enterprise-server-releases').latest
const nonEnterpriseDefaultVersion = require('./non-enterprise-default-version')
const { getOldVersionFromNewVersion } = require('./old-versions-utils')
const s3BasePath = 'https://github-images.s3.amazonaws.com'

// This module rewrites asset paths on Enterprise versions to S3 paths.
// Source example: /assets/images/foo.png
// Rewritten: https://github-images.s3.amazonaws.com/enterprise/2.20/assets/images/foo.png
// The one exception is Admin pages on the latest GHES release.
module.exports = function rewriteAssetPathsToS3 ($, version, relativePath) {
  // if the current version is non-enterprise, do not rewrite
  if (version === nonEnterpriseDefaultVersion) return

  // get 2.22 from enterprise-server@2.22
  const oldVersion = getOldVersionFromNewVersion(version)

  // the relativePath starts with the product, like /admin/foo or /github/foo
  const product = relativePath.split('/')[0]

  // if this is an Admin page on the latest version, do not rewrite
  if (product === 'admin' && oldVersion === latestEnterpriseVersion) return

  $('img').each((i, el) => {
    const src = $(el).attr('src')
    if (!src.startsWith('/assets/images')) return
    const newSrc = `${s3BasePath}/enterprise/${oldVersion}${src}`
    if (src !== newSrc) $(el).attr('src', newSrc)
  })
}
