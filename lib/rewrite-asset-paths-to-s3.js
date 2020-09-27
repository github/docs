const latestEnterpriseVersion = require('./enterprise-server-releases').latest
const nonEnterpriseDefaultVersion = require('./non-enterprise-default-version')
const { getOldVersionFromNewVersion } = require('./old-versions-utils')

// rewrite asset paths to s3 if it's a dotcom article on any GHE version
// or if it's an admin article on any GHE version EXCEPT latest version
module.exports = function rewriteAssetPathsToS3 ($, version, relativePath) {
  let oldVersion
  if (process.env.FEATURE_NEW_VERSIONS) {
    if (version === nonEnterpriseDefaultVersion) return
    // get 2.22 from enterprise-server@2.22
    oldVersion = getOldVersionFromNewVersion(version)
    // relativePath starts with the product, like /admin/foo or /github/foo
    const product = relativePath.split('/')[0]
    if (product === 'admin' && oldVersion === latestEnterpriseVersion) return
  } else {
    if (version === 'dotcom') return
    if (relativePath.includes('enterprise/') && version === latestEnterpriseVersion) return
    oldVersion = version
  }

  const s3Path = 'https://github-images.s3.amazonaws.com'
  $('img').each((i, el) => {
    const src = $(el).attr('src')
    if (!src.startsWith('/assets/images')) return
    const newSrc = `${s3Path}/enterprise/${oldVersion}${src}`
    if (src !== newSrc) $(el).attr('src', newSrc)
  })
}
