#!/usr/bin/env node

const { flatten } = require('lodash')
const path = require('path')
const walk = require('walk-sync')
const { execSync } = require('child_process')
const assert = require('assert')
const loadSiteData = require('../../lib/site-data')
const { loadPages } = require('../../lib/pages')
const patterns = require('../../lib/patterns')
const getDataReferences = require('../../lib/get-liquid-data-references')
const imagesPath = '/assets/images'

// these paths should remain in the repo even if they are not referenced directly
const ignoreList = [
  '/assets/images/help/site-policy',
  'site.data.reusables.policies'
]

// search these dirs for images or data references
// content files are handled separately in assetsReferencedInContent
const dirsToGrep = [
  'includes',
  'layouts',
  'javascripts',
  'stylesheets',
  'README.md',
  'data/reusables',
  'data/variables'
]

const validArgs = ['reusables', 'variables', 'images']

module.exports = async function findUnusedAssets (assetType) {
  assert(validArgs.includes(assetType), `arg must be one of: ${validArgs.join(', ')}`)

  const pages = await getEnglishPages()
  const data = await loadSiteData()

  // step 1. find all assets that exist in the repo
  const allReusablesInRepo = data.en.site.data.reusables
  const allVariablesInRepo = data.en.site.data.variables
  const allImagesInRepo = getAllImagesInRepo()

  // step 2. find assets referenced in content by searching page markdown
  const assetsReferencedInContent = flatten(pages.map(page => {
    const fullContent = [page.intro, page.title, page.product, page.markdown].join()

    return assetType === 'images'
      ? getImageReferences(fullContent)
      : getDataReferences(fullContent)
  }))

  // step 3. find assets referenced in non-content directories
  const assetsReferencedInNonContentDirs = getAssetsReferencedInNonContentDirs(assetType)

  // step 4. combine all the referenced assets into one array
  const allReferencedAssets = [...new Set(assetsReferencedInContent.concat(assetsReferencedInNonContentDirs))]

  // step 5. return asssets that exist but are not referenced
  switch (assetType) {
    case 'images':
      return getUnusedImages(allImagesInRepo, allReferencedAssets)
    case 'reusables':
      return getUnusedData(allReusablesInRepo, assetType, allReferencedAssets)
    case 'variables':
      return getUnusedData(allVariablesInRepo, assetType, allReferencedAssets)
  }
}

async function getEnglishPages () {
  const pages = await loadPages()
  return pages.filter(page => page.languageCode === 'en')
}

function getAllImagesInRepo () {
  return walk(path.join(process.cwd(), imagesPath), { directories: false })
    .filter(relPath => !relPath.endsWith('.md') && !relPath.match(/^(octicons|site)\//))
    .map(relPath => path.join(imagesPath, relPath))
}

function getAssetsReferencedInNonContentDirs (assetType) {
  const regex = assetType === 'images'
    ? patterns.imagePath.source
    : patterns.dataReference.source

  const grepCmd = `egrep -rh '${regex}' ${dirsToGrep.join(' ')}`

  const grepResults = execSync(grepCmd).toString()

  return assetType === 'images'
    ? getImageReferences(grepResults)
    : getDataReferences(grepResults)
}

function getImageReferences (text) {
  return (text.match(patterns.imagePath) || [])
    .map(ref => {
      return ref
        .replace(/\.\.\//g, '')
        .trim()
    })
}

function getUnusedData (allDataInRepo, assetType, allReferencedAssets) {
  const unusedData = []

  Object.keys(allDataInRepo).forEach(filename => {
    Object.keys(allDataInRepo[filename]).forEach(key => {
      const name = `site.data.${assetType}.${filename}.${key}`
      if (!allReferencedAssets.includes(name) && !ignoreList.find(ignored => name.startsWith(ignored))) {
        unusedData.push(name)
      }
    })
  })

  return unusedData
}

function getUnusedImages (allImagesInRepo, allReferencedAssets) {
  return allImagesInRepo.filter(image => !allReferencedAssets.includes(image) && !ignoreList.find(ignored => image.startsWith(ignored)))
}
