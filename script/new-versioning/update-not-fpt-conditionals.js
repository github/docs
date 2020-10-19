#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const walk = require('walk-sync')
const frontmatter = require('@github-docs/frontmatter')
const contentPath = path.join(process.cwd(), 'content')
const dataPath = path.join(process.cwd(), 'data')

// [start-readme]
//
// Run this script to update these Liquid conditionals:
//
// {% if currentVersion != 'free-pro-team@latest' %}
//
// to:
//
// {% if enterpriseServerVersions contains currentVersion %}
//
// [end-readme]

// The new conditional to add
const newConditional = 'enterpriseServerVersions contains currentVersion'

// The old conditional to replace
const oldConditional = /currentVersion != ["']free-pro-team@latest["']/g

console.log('Working...\n')

const englishContentFiles = walkContent(contentPath)
const englishDataFiles = walkData(dataPath, englishContentFiles)

function walkContent (dirPath) {
  return walk(dirPath, { includeBasePath: true, directories: false })
    .filter(file => file.includes('/content/'))
    .filter(file => file.endsWith('.md'))
    .filter(file => !file.endsWith('README.md'))
}

function walkData (dirPath, contentFiles) {
  return walk(dirPath, { includeBasePath: true, directories: false })
    .filter(file => file.includes('/data/reusables') || file.includes('/data/variables'))
    .filter(file => !file.endsWith('README.md'))
}

englishDataFiles
  .forEach(file => {
    const dataContent = fs.readFileSync(file, 'utf8')

    // Update Liquid in data files
    const newDataContent = updateLiquid(dataContent, file)

    fs.writeFileSync(file, newDataContent)
  })

englishContentFiles
  .forEach(file => {
    const { data, content } = frontmatter(fs.readFileSync(file, 'utf8'))

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

function updateLiquid (content) {
  return content.replace(oldConditional, newConditional)
}

console.log('Done!')
