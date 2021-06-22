#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const walk = require('walk-sync')
const { execSync } = require('child_process')
const { loadPages } = require('../../lib/page-data')
const patterns = require('../../lib/patterns')
const { supported } = require('../../lib/enterprise-server-releases')
const semver = require('semver')

const imagesPath = [
  '/assets/enterprise/3.0',
  '/assets/enterprise/github-ae',
  '/assets/enterprise/2.22',
  '/assets/enterprise/2.21',
  '/assets/enterprise/2.20'
]

// these paths should remain in the repo even if they are not referenced directly
const ignoreList = [
  '/assets/images/help/site-policy',
  '/assets/images/site',
  '/assets/images/octicons',
  '/assets/fonts'
]

// search these dirs for images or data references
// content files are handled separately
const dirsToGrep = [
  'includes',
  'layouts',
  'javascripts',
  'stylesheets',
  'README.md',
  'data'
]

async function main () {
  const pages = await getEnglishPages()

  // step 1. find assets referenced in content by searching page markdown
  const markdownImageData = await getMarkdownImageData(pages)

  // step 2. find assets referenced in non-content directories
  const assetsReferencedInNonContentDirs = await getAssetsReferencedInNonContentDirs()

  // step 3. remove enterprise assets that are only used on dotcom pages
  await removeDotcomOnlyImagesFromEnterprise(markdownImageData)

  // step 4. find all assets that exist in the /assets/enterprise directory
  // and remove assets that are referenced in any files
  for (const directory of imagesPath) {
    const allImagesInDir = await getAllAssetsInDirectory(directory)
    await removeEnterpriseImages(markdownImageData, allImagesInDir, assetsReferencedInNonContentDirs, directory)
  }

  // step 5. find all assets that exist in the /assets/images directory
  // and remove assets that are referenced in any files
  const allDotcomImagesInDir = await getAllAssetsInDirectory('/assets/images')
  await removeUnusedDotcomImages(markdownImageData, allDotcomImagesInDir, assetsReferencedInNonContentDirs)
}

// Returns an object of all the images referenced in Markdown
// content and their associated versions
//
// key: image asset path
// value: object key is the plan name and the object value is the plan's range
//
// ex: {
//       '/assets/images/foo/bar.png': { 'enterprise-server': '<=2.22'},
//       '/assets/images/bar/foo/png': { 'github-ae': '*'}
//     }
async function getMarkdownImageData (pages) {
  const imageData = {}

  // loop through each page and get all /assets/images references from Markdown
  for (const page of pages) {
    const fullContent = [page.intro, page.title, page.product, page.markdown].join()
    const pageImageList = await getImageReferencesOnPage(fullContent)

    // for each asset reference on a Markdown page, see if it needs to be
    // added to the imageData object
    for (const imagePath of pageImageList) {
      // if the image isn't already there add the image and its versions
      if (!Object.prototype.hasOwnProperty.call(imageData, imagePath)) {
        imageData[imagePath] = page.versions
        continue
      }

      // if the image reference already exists, see if any new version keys
      // or values need to be added or updated
      for (const pageVersion in page.versions) {
        const imageVersions = imageData[imagePath]
        const versionAlreadyExists = Object.prototype.hasOwnProperty.call(imageVersions, pageVersion)
        const existingVersionRangeIsAll = imageVersions[pageVersion] === '*'

        if (!versionAlreadyExists) {
          imageVersions[pageVersion] = page.versions[pageVersion]
        } else {
          // github-ae and free-pro-team versions only have '*' range
          if (pageVersion !== 'enterprise-server' || existingVersionRangeIsAll) continue

          const rangeOfVersionToAddIsAll = page.versions[pageVersion] === '*'
          // see if the version to add is a superset of the existing version
          const existingVersionIsSubsetOfNewVersion = semver.lt(
            semver.coerce(page.versions[pageVersion].replace('*', 0)),
            semver.coerce(imageVersions[pageVersion].replace('*', 0))
          )

          // only update the version range if the existing range is not '*' or
          // the new range is a superset of the existing range
          if (rangeOfVersionToAddIsAll || existingVersionIsSubsetOfNewVersion) {
            imageVersions[pageVersion] = page.versions[pageVersion]
          }
        }
        imageData[imagePath] = imageVersions
      }
    }
  }
  return imageData
}

async function getEnglishPages () {
  const pages = await loadPages()
  return pages.filter(page => page.languageCode === 'en')
}

async function getAllAssetsInDirectory (directory) {
  return walk(path.join(process.cwd(), directory), { directories: false })
    .map(relPath => path.join(directory, relPath))
}

async function getAssetsReferencedInNonContentDirs () {
  const regex = patterns.imagePath.source
  const grepCmd = `egrep -rh '${regex}' ${dirsToGrep.join(' ')}`
  const grepResults = execSync(grepCmd).toString()
  return await getImageReferencesOnPage(grepResults)
}

async function getImageReferencesOnPage (text) {
  return (text.match(patterns.imagePath) || [])
    .map(ref => {
      return ref
        .replace(/\.\.\//g, '')
        .trim()
    })
}

// loop through images referenced in Markdown and check whether the image
// is only referenced in pages versioned for free-pro-team. If the image
// is only used on free-pro-team pages, then it shouldn't exist in the
// assets/enterprise directory.
function removeDotcomOnlyImagesFromEnterprise (markdownImageData) {
  for (const image in markdownImageData) {
    const imageVersions = markdownImageData[image]
    if (!Object.prototype.hasOwnProperty.call(imageVersions, 'enterprise-server')) {
      supported.forEach(enterpriseReleaseNumber => {
        const imagePath = path.join(__dirname, '../..', `/assets/enterprise/${enterpriseReleaseNumber}`, image)
        if (fs.existsSync(imagePath)) fs.unlinkSync(imagePath)
      })
    }
    if (!Object.prototype.hasOwnProperty.call(imageVersions, 'github-ae')) {
      const imagePath = path.join(__dirname, '../..', '/assets/enterprise/github-ae', image)
      if (fs.existsSync(imagePath)) fs.unlinkSync(imagePath)
    }
  }
}

// loop through each image in a directory under /assets/enterprise
// and check the image's version to determine if the image should be
// removed from the directory
async function removeEnterpriseImages (markdownImageData, directoryImageList, assetsReferencedInNonContentDirs, directory) {
  const directoryVersion = directory.split('/').pop()
  for (const directoryImage of directoryImageList) {
    // get the asset's format that is stored in the markdownImageData object
    const imageDataKey = directoryImage.replace(directory, '')

    // if the image is in a non content file (i.e., javascript or data file)
    // we don't have the page version info so assume it's used in all versions
    if (assetsReferencedInNonContentDirs.includes(imageDataKey)) continue

    const imageFullPath = path.join(process.cwd(), directoryImage)
    const imageVersions = markdownImageData[imageDataKey]

    // if the asset isn't referenced in Markdown at all, remove it
    if (markdownImageData[imageDataKey] === undefined) {
      fs.unlinkSync(imageFullPath)
      continue
    }

    // if the asset is in Markdown but is not used on GitHub AE pages, remove it
    if (directoryVersion === 'github-ae' &&
      !Object.prototype.hasOwnProperty.call(imageVersions, 'github-ae')) {
      fs.unlinkSync(imageFullPath)
      continue
    // if the asset is in Markdown but is not used on a page versioned for the
    // directoryVersion (i.e., GHES release number), remove it
    }
    if (directoryVersion !== 'github-ae' &&
      !Object.prototype.hasOwnProperty.call(imageVersions, 'enterprise-server')) {
      fs.unlinkSync(imageFullPath)
      continue
    }
    if (directoryVersion !== 'github-ae' && semver.lt(
      semver.coerce(directoryVersion),
      semver.coerce(imageVersions['enterprise-server'].replace('*', 0.0)))) {
      fs.unlinkSync(imageFullPath)
    }
  }
}

// loop through each file in /assets/images and check if
async function removeUnusedDotcomImages (markdownImageData, directoryImageList, assetsReferencedInNonContentDirs) {
  for (const directoryImage of directoryImageList) {
    if (ignoreList.find(ignored => directoryImage.startsWith(ignored))) continue

    // if the image is in a non content file (i.e., javascript or data file)
    // we don't have the page version info so assume it's used in all versions
    if (assetsReferencedInNonContentDirs.includes(directoryImage)) continue

    if (markdownImageData[directoryImage] === undefined) {
      fs.unlinkSync(path.join(process.cwd(), directoryImage))
    }
  }
}

main()
  .catch(console.error)
  .finally(() => console.log('Done!'))
