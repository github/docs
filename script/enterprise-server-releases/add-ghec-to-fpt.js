#!/usr/bin/env node

// [start-readme]
//
// Run this script to add versions frontmatter and Liquid conditionals for
// GitHub Enterprise Cloud, based on anything currently versioned for the specified release
// of free-pro-team.
//
// [end-readme]

const fs = require('fs')
const path = require('path')
const walk = require('walk-sync')
const program = require('commander')
const { escapeRegExp } = require('lodash')
const frontmatter = require('../../lib/read-frontmatter')
const getLiquidConditionals = require('../helpers/get-liquid-conditionals')
const contentPath = path.join(process.cwd(), 'content')
const dataPath = path.join(process.cwd(), 'data')

program
  .description('Add versions frontmatter and Liquid conditionals for GitHub EC based on FPT. Runs on all content by default.')
  .option('-p, --products [OPTIONAL PRODUCT_IDS...]', 'Optional list of space-separated product IDs. Example: admin github developers')
  .parse(process.argv)

const { products } = program.opts()

console.log('✅ Adding EC versioning based on FPT latest versioning')

if (products) {
  console.log(`✅ Running on the following products: ${products}`)
} else {
  console.log('✅ Running on all products')
}

console.log('✅ Running on English content and data\n')

console.log('Working...\n')

const englishContentFiles = walkContent(contentPath)
const englishDataFiles = walkData(dataPath)

function walkContent (dirPath) {
  const productArray = products || ['']
  return productArray.map(product => {
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

const allContentFiles = englishContentFiles
const allDataFiles = englishDataFiles

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

    // Return early if the current page frontmatter does not apply to either GHEC or the given fpt release
    if (!data.versions.fpt) return

    const conditionalsToUpdate = getConditionalsToUpdate(content)
    if (!conditionalsToUpdate.length) return

    // Update Liquid in content files
    const newContent = updateLiquid(conditionalsToUpdate, content)

    // Add frontmatter version
    data.versions.ghec = '*'

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
  return getLiquidConditionals(content, 'ifversion')
    .filter(c => c.includes('fpt'))
    .filter(c => !c.includes('ghec'))
}

function updateLiquid (conditionalsToUpdate, content) {
  let newContent = content
  conditionalsToUpdate.forEach(cond => {
    const oldConditional = `{% ifversion ${cond} %}`
    const newConditional = `{% ifversion ${cond.concat(' or ghec')} %}`
    const oldConditionalRegex = new RegExp(escapeRegExp(oldConditional), 'g')

    // Then replace all instances of the conditional in the content
    newContent = newContent.replace(oldConditionalRegex, newConditional)
  })

  return newContent
}

console.log('Done!')
