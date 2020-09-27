#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const walk = require('walk-sync')
const frontmatter = require('@github-docs/frontmatter')
const contentPath = path.join(process.cwd(), 'content')
const dataPath = path.join(process.cwd(), 'data')

const contentFiles = walk(contentPath, { includeBasePath: true, directories: false })
  .filter(file => file.endsWith('.md'))
  .filter(file => !file.endsWith('README.md'))

const dataFiles = walk(dataPath, { includeBasePath: true, directories: false })
  .filter(file => file.includes('data/reusables') || file.includes('data/variables'))
  .filter(file => !file.endsWith('README.md'))

dataFiles
  .forEach(file => {
    const content = fs.readFileSync(file, 'utf8')

    // Update Liquid in data files
    const newContent = updateLiquid(content)

    fs.writeFileSync(file, newContent)
  })

contentFiles
  .forEach(file => {
    const { data, content } = frontmatter(fs.readFileSync(file, 'utf8'))

    // Update Liquid in content files
    const newContent = content ? updateLiquid(content) : ''

    // Update versions frontmatter
    if (data) {
      if (!data.versions && data.productVersions) {
        data.versions = data.productVersions
        Object.keys(data.versions).forEach(version => {
          // update dotcom, actions, rest, etc.
          if (version !== 'enterprise') {
            data.versions['free-pro-team'] = data.versions[version]
            delete data.versions[version]
          } else {
            data.versions['enterprise-server'] = data.versions.enterprise
            delete data.versions.enterprise
          }
        })
      }

      delete data.productVersions

      // Update Liquid in frontmatter props
      Object.keys(data)
        // Only process a subset of props
        .filter(key => key === 'title' || key === 'intro' || key === 'product')
        .forEach(key => {
          data[key] = updateLiquid(data[key])
        })
    }

    fs.writeFileSync(file, frontmatter.stringify(newContent, data, { lineWidth: 10000 }))
  })

function updateLiquid (content) {
  return content
    .replace(/page.version/g, 'currentVersion')
    .replace(/["'](?:')?dotcom["'](?:')?/g, '"free-pro-team@latest"')
    .replace(/["'](?:')?(2\.\d{2})["'](?:')?/g, '"enterprise-server@$1"')
}
