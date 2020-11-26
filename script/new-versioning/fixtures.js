#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const walk = require('walk-sync')
const frontmatter = require('@github-docs/frontmatter')
const fixturesPath = path.join(process.cwd(), 'tests/fixtures')

// NOTE this script does not run as part of script/new-versioning/main!
// It was a one-time-use script that can be removed soon

const fixturesFiles = walk(fixturesPath, { includeBasePath: true, directories: false })
  .filter(file => file.endsWith('.md'))
  .filter(file => !file.includes('tests/fixtures/remove-liquid-statements'))

fixturesFiles
  .forEach(file => {
    const { data, content } = frontmatter(fs.readFileSync(file, 'utf8'))

    // Update Liquid in content
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
