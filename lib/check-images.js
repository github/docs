const fs = require('fs')
const path = require('path')
const rewriteAssetPathsToS3 = require('./rewrite-asset-paths-to-s3')
const { promisify } = require('util')

module.exports = async function checkImages ($, version, relativePath, checkedImageCache = {}) {
  rewriteAssetPathsToS3($, version, relativePath)

  const brokenImages = []

  // this does not check S3 images because those live outside of the repo
  const images = $('img[src^="/assets"]').get()

  for (const image of images) {
    const src = $(image).attr('src')

    if (checkedImageCache[src]) continue

    try {
      await promisify(fs.access)(path.join(__dirname, '..', src))
    } catch (e) {
      brokenImages.push({ 'broken image reference': src })
    }
  }

  return { brokenImages, checkedImageCache }
}
