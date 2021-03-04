#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const walk = require('walk-sync')
const program = require('commander')
const frontmatter = require('../../lib/read-frontmatter')
const contentPath = path.join(process.cwd(), 'content')
const dataPath = path.join(process.cwd(), 'data')
const translationsPath = path.join(process.cwd(), 'translations')
const { getEnterpriseServerNumber } = require('../../lib/patterns')
const versionSatisfiesRange = require('../../lib/version-satisfies-range')

// [start-readme]
//
// Run this script to add versions frontmatter and Liquid conditionals for
// GitHub AE, based on anything currently versioned for the specified release
// of Enterprise Server. This script should be run as part of the Enterprise
// Server release process.
//
// [end-readme]

program
  .description('Add versions frontmatter and Liquid conditionals for GitHub AE based on a given Enterprise Server release. Runs on all content by default.')
  .option('-r, --ghes-release <RELEASE>', 'The Enterprise Server release to base AE versioning on. Example: 2.23')
  .option('-p, --products [OPTIONAL PRODUCT_IDS...]', 'Optional list of space-separated product IDs. Example: admin github developers')
  .option('-t, --translations', 'Run the script on content and data in translations too.')
  .parse(process.argv)

if (!program.ghesRelease) {
  console.error('Must provide an Enterprise Server release number!')
  process.exit(1)
}

console.log(`✅ Adding AE versioning based on GHES ${program.ghesRelease} versioning`)

if (program.products) {
  console.log(`✅ Running on the following products: ${program.products}`)
} else {
  console.log('✅ Running on all products')
}

if (program.translations) {
  console.log('✅ Running on both English and translated content and data\n')
} else {
  console.log('✅ Running on English content and data\n')
}

// The new conditional to add
const githubAEConditional = 'currentVersion == "github-ae@latest"'

// Match: currentVersion <operator> "enterprise-server@(\d+\.\d+)"
// Example: currentVersion ver_gt "enterprise-server@2.21"
const enterpriseServerConditionalRegex = new RegExp(`currentVersion (\\S+?) "${getEnterpriseServerNumber.source}"`)

console.log('Working...\n')

const englishContentFiles = walkContent(contentPath)
const englishDataFiles = walkData(dataPath)

function walkContent (dirPath) {
  const products = program.products || ['']
  return products.map(product => {
    dirPath = path.join(contentPath, product)
    return walk(dirPath, { includeBasePath: true, directories: false })
      .filter(file => file.includes('/content/'))
      .filter(file => file.endsWith('.md'))
      .filter(file => !file.endsWith('README.md'))
  }).flat()
}

function walkData (dirPath) {
  return walk(dirPath, { includeBasePath: true, directories: false })
    .filter(file => file.includes('/data/reusables') || file.includes('/data/variables'))
    .filter(file => !file.endsWith('README.md'))
}

let allContentFiles, allDataFiles
if (program.translations) {
  const translatedContentFiles = walkContent(translationsPath)
  const translatedDataFiles = walkData(translationsPath)
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

// Update the data files
allDataFiles
  .forEach(file => {
    const dataContent = fs.readFileSync(file, 'utf8')

    const conditionalsToUpdate = getConditionalsToUpdate(dataContent)
    if (!conditionalsToUpdate.length) return

    // Update Liquid in data files
    const newDataContent = updateLiquid(conditionalsToUpdate, dataContent)

    fs.writeFileSync(file, newDataContent)
  })

// Update the content files
allContentFiles
  .forEach(file => {
    const { data, content } = frontmatter(fs.readFileSync(file, 'utf8'))

    // Return early if the current page frontmatter does not apply to either GHAE or the given GHES release
    if (!(data.versions['github-ae'] || versionSatisfiesRange(program.ghesRelease, data.versions['enterprise-server']))) return

    const conditionalsToUpdate = getConditionalsToUpdate(content)
    if (!conditionalsToUpdate.length) return

    // Update Liquid in content files
    const newContent = updateLiquid(conditionalsToUpdate, content)

    // Add frontmatter version
    data.versions['github-ae'] = '*'

    // Update Liquid in frontmatter props
    Object.keys(data)
      .filter(key => typeof data[key] === 'string')
      .forEach(key => {
        const conditionalsToUpdate = getConditionalsToUpdate(data[key])
        if (!conditionalsToUpdate.length) return
        data[key] = updateLiquid(conditionalsToUpdate, data[key])
      })

    fs.writeFileSync(file, frontmatter.stringify(newContent, data, { lineWidth: 10000 }))
  })

function getConditionalsToUpdate (content) {
  const allConditionals = content.match(/{% if .+?%}/g)

  return (allConditionals || [])
    .filter(conditional => !conditional.includes('github-ae'))
    .filter(conditional => doesReleaseSatisfyConditional(conditional.match(enterpriseServerConditionalRegex)))
}

function updateLiquid (conditionalsToUpdate, content) {
  let newContent = content

  conditionalsToUpdate.forEach(conditional => {
    let newConditional = conditional

    const enterpriseServerMatch = conditional.match(enterpriseServerConditionalRegex)

    // First do the replacement within the conditional
    // Old: {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
    // New: {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
    newConditional = newConditional.replace(enterpriseServerMatch[0], `${enterpriseServerMatch[0]} or ${githubAEConditional}`)

    // Then replace all instances of the conditional in the content
    newContent = newContent.replace(conditional, newConditional)
  })

  return newContent
}

console.log('Done!')

function doesReleaseSatisfyConditional (enterpriseServerMatch) {
  if (!enterpriseServerMatch) return

  // Example liquid operator: ver_gt
  const liquidOperator = enterpriseServerMatch[1]

  // Example semver operator: >
  const semverOperator = operators[liquidOperator]

  // Example number: 2.21
  const number = enterpriseServerMatch[2]

  // Example range: >2.21
  const range = `${semverOperator}${number}`

  return versionSatisfiesRange(program.ghesRelease, range)
}
