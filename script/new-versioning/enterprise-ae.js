#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const walk = require('walk-sync')
const program = require('commander')
const { uniq, dropRight } = require('lodash')
const frontmatter = require('@github-docs/frontmatter')
const contentPath = path.join(process.cwd(), 'content')
const dataPath = path.join(process.cwd(), 'data')
const translationsPath = path.join(process.cwd(), 'translations')
const { latest } = require('../../lib/enterprise-server-releases')
const { getEnterpriseServerNumber } = require('../../lib/patterns')
const versionSatisfiesRange = require('../../lib/version-satisfies-range')
const getApplicableVersions = require('../../lib/get-applicable-versions')
const getDataReferences = require('../../lib/get-liquid-data-references')

// [start-readme]
//
// Run this script to add versions frontmatter and Liquid conditionals for
// Enterprise AE, based on anything currently versioned for the latest release
// of Enterprise Server. This script should be run as part of the Enterprise
// Server release process.
//
// [end-readme]

program
  .description('Add versions frontmatter and Liquid conditionals for Enterprise AE based on the latest Enterprise Server release.')
  .option('-p, --product <PRODUCT_ID>', 'Product ID. Example: admin')
  .option('-t, --translations', 'Run the script on content and data in translations, too.')
  .parse(process.argv)

if (program.product) {
  console.log(`✅ Running on the ${program.product} product only`)
} else {
  console.log('✅ Running on all products')
}

if (program.translations) {
  console.log('✅ Running on both English and translated content and data\n')
} else {
  console.log('✅ Running on English content and data\n')
}

// The new conditional to add
const enterpriseAEConditional = 'currentVersion == "github-ae@latest"'

// Match: currentVersion <operator> "enterprise-server@(\d+\.\d+)"
const getEnterpriseServerConditional = new RegExp(`currentVersion (\\S+?) "${getEnterpriseServerNumber.source}"`)

console.log(`Adding versioning for Enterprise AE based on ${latest}!\n`)
console.log('Working...\n')

const englishContentFiles = walkContent(contentPath)
const englishDataFiles = walkData(dataPath, englishContentFiles)

function walkContent (dirPath) {
  if (program.product) {
    // Run on content/<product> only
    dirPath = path.join(contentPath, program.product)
  }
  return walk(dirPath, { includeBasePath: true, directories: false })
    .filter(file => file.includes('/content/'))
    .filter(file => file.endsWith('.md'))
    .filter(file => !file.endsWith('README.md'))
}

function walkData (dirPath, contentFiles) {
  if (program.product) {
    const dataFilesPerProductInContent = getReferencedDataFiles(contentFiles)
    const dataFilesPerProductInData = getReferencedDataFiles(dataFilesPerProductInContent)
    const dataFilesPerProduct = dataFilesPerProductInContent.concat(dataFilesPerProductInData)
    return dataFilesPerProduct
  } else {
    return walk(dirPath, { includeBasePath: true, directories: false })
      .filter(file => file.includes('/data/reusables') || file.includes('/data/variables'))
      .filter(file => !file.endsWith('README.md'))
  }
}

// Return an array of variable and reusable filenames referenced in a given set of files.
function getReferencedDataFiles (files) {
  return uniq(files
    .map(file => getDataReferences(fs.readFileSync(file, 'utf8'))).flat()
    .map(dataRef => {
      dataRef = dataRef.replace('site.', '').replace(/\./g, '/')
      dataRef = dataRef.includes('variables') ? dropRight(dataRef.split('/')).join('/') : dataRef
      dataRef = dataRef.includes('variables') ? `${dataRef}.yml` : `${dataRef}.md`
      return path.join(process.cwd(), dataRef)
    }))
}

let allContentFiles, allDataFiles
if (program.translations) {
  const translatedContentFiles = walkContent(translationsPath)
  const translatedDataFiles = walkData(translationsPath, translatedContentFiles)
  allContentFiles = englishContentFiles.concat(translatedContentFiles)
  allDataFiles = englishDataFiles.concat(translatedDataFiles)
} else {
  allContentFiles = englishContentFiles
  allDataFiles = englishDataFiles
}

// Map Liquid operators to semver operators
const operators = {
  ver_gt: '>',
  ver_lt: '<',
  '==': '='
}

allDataFiles
  .forEach(file => {
    const dataContent = fs.readFileSync(file, 'utf8')

    // Update Liquid in data files
    const newDataContent = updateLiquid(dataContent, file)

    fs.writeFileSync(file, newDataContent)
  })

allContentFiles
  .forEach(file => {
    const { data, content } = frontmatter(fs.readFileSync(file, 'utf8'))

    const applicableVersions = getApplicableVersions(data.versions, file)

    // If the current page is not available in the latest version of GHES, nothing to do!
    if (!applicableVersions.includes(`enterprise-server@${latest}`)) return

    // Add frontmatter version
    data.versions['github-ae'] = '*'

    // Update Liquid in content files
    const newContent = updateLiquid(content, file)

    // Update Liquid in frontmatter props
    Object.keys(data)
      .filter(key => typeof data[key] === 'string')
      .forEach(key => {
        data[key] = updateLiquid(data[key], file)
      })

    fs.writeFileSync(file, frontmatter.stringify(newContent, data, { lineWidth: 10000 }))
  })

function updateLiquid (content, file) {
  const allConditionals = content.match(/{% if .+?%}/g)
  if (!allConditionals) return content

  let newContent = content

  allConditionals.forEach(conditional => {
    // Do not process a conditional that already includes github-ae
    if (conditional.includes('github-ae')) return

    // Example match: currentVersion ver_gt "enterprise-server@2.21"
    const enterpriseServerMatch = conditional.match(getEnterpriseServerConditional)
    if (!enterpriseServerMatch) return

    // Example liquid operator: ver_gt
    const liquidOperator = enterpriseServerMatch[1]

    // Example semver operator: >
    const semverOperator = operators[liquidOperator]

    // Example number: 2.21
    const number = enterpriseServerMatch[2]

    // Example range: >2.21
    const range = `${semverOperator}${number}`

    // Return early if the conditional does not apply to the latest GHES version;
    // that means it will not apply to GHPI either
    if (!versionSatisfiesRange(latest, range)) return

    // First do the replacement within the conditional
    // Old: {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
    // New: {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
    const newConditional = conditional.replace(enterpriseServerMatch[0], `${enterpriseServerMatch[0]} or ${enterpriseAEConditional}`)

    // Then replace all instances of the conditional in the content
    newContent = newContent.replace(conditional, newConditional)
  })

  return newContent
}

console.log('Done!')
