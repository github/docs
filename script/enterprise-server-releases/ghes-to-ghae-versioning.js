#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const walk = require('walk-sync')
const program = require('commander')
const frontmatter = require('@github-docs/frontmatter')
const contentPath = path.join(process.cwd(), 'content')
const dataPath = path.join(process.cwd(), 'data')
const translationsPath = path.join(process.cwd(), 'translations')
const { getEnterpriseServerNumber } = require('../../lib/patterns')
const versionSatisfiesRange = require('../../lib/version-satisfies-range')

// [start-readme]
//
// Run this script to add versions frontmatter and Liquid conditionals for
// GitHub AE, based on anything currently versioned for the provided release
// of Enterprise Server. This script should be run as part of the Enterprise
// Server release process.
//
// [end-readme]

program
  .description('Add versions frontmatter and Liquid conditionals for GitHub AE based on a given Enterprise Server release. Runs on all content by default.')
  .option('-r, --ghes-release <RELEASE>', 'The Enterprise Server release to base AE versioning on. Example: 2.23')
  .option('-p, --products [PRODUCT_IDS...]', 'List of space-separated product IDs. Example: admin github developers')
  .option('-c, --currentServerReleases', 'Also add AE versioning to conditionals for current Enterprise Server releases.')
  .option('-t, --translations', 'Run the script on content and data in translations, too.')
  .parse(process.argv)

if (!program.ghesRelease) {
  console.log('Must provide an Enterprise Server release number!')
  process.exit()
}

if (program.products) {
  console.log(`✅ Running on the following products: ${program.products}`)
} else {
  console.log('✅ Running on all products')
}

if (program.currentServerReleases) {
  console.log(`✅ Adding AE versioning based on GHES ${program.ghesRelease} versioning and all currently supported GHES versions`)
} else {
  console.log(`✅ Adding AE versioning based only on GHES ${program.ghesRelease} versioning`)
}

if (program.translations) {
  console.log('✅ Running on both English and translated content and data\n')
} else {
  console.log('✅ Running on English content and data\n')
}

// The new conditional to add
const githubAEConditional = 'currentVersion == "github-ae@latest"'

// Existing conditionals to hook on (if program.currentServerReleases is true)
const notDotcomConditional = /currentVersion != "free-pro-team@latest" (or)?(?!and)/
const allGHESVersionsConditional = /enterpriseServerVersions contains currentVersion (or)?/

// Match: currentVersion <operator> "enterprise-server@(\d+\.\d+)"
const getEnterpriseServerConditional = new RegExp(`currentVersion (\\S+?) "${getEnterpriseServerNumber.source}"`)

console.log('Working...\n')

const englishContentFiles = walkContent(contentPath)
const englishDataFiles = walkData(dataPath, englishContentFiles)

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

function walkData (dirPath, contentFiles) {
  return walk(dirPath, { includeBasePath: true, directories: false })
    .filter(file => file.includes('/data/reusables') || file.includes('/data/variables'))
    .filter(file => !file.endsWith('README.md'))
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

    // Return early if the current page frontmatter does not apply to either GHAE or the given GHES release
    if (!(data.versions['github-ae'] || versionSatisfiesRange(program.ghesRelease, data.versions['enterprise-server']))) return

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
  // We need to match on all conditionals first because we have to do replacements _within_ conditionals
  const allConditionals = content.match(/{% if .+?%}/g)
  if (!allConditionals) return content

  let newContent = content

  allConditionals.forEach(conditional => {
    // Do not process a conditional that already includes github-ae
    if (conditional.includes('github-ae')) return

    let newConditional = conditional

    // Example match: currentVersion ver_gt "enterprise-server@2.21"
    const enterpriseServerMatch = newConditional.match(getEnterpriseServerConditional)

    // Add AE conditional to any `currentVersion != "free-pro-team@latest"`
    if (program.currentServerReleases && newConditional.match(notDotcomConditional)) {
      if (enterpriseServerMatch && !doesReleaseSatisfyConditional(enterpriseServerMatch)) return

      newConditional = newConditional.replace(/( ?)%}/, `$1or ${githubAEConditional} %}`)
      newContent = newContent.replace(conditional, newConditional)
      return
    }

    // Add AE conditional to any `enterpriseServerVersions contains currentVersion`
    if (program.currentServerReleases && newConditional.match(allGHESVersionsConditional)) {
      if (enterpriseServerMatch && !doesReleaseSatisfyConditional(enterpriseServerMatch)) return

      newConditional = newConditional.replace(/( ?)%}/, `$1or ${githubAEConditional} %}`)
      newContent = newContent.replace(conditional, newConditional)
      return
    }

    // Add AE conditional to any conditional that applies to enterprise-server@<provided-release>
    if (!enterpriseServerMatch) return

    const releaseSatisfiesConditional = doesReleaseSatisfyConditional(enterpriseServerMatch)

    // Return early if the conditional does not apply to the given GHES release
    if (!releaseSatisfiesConditional) return

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
