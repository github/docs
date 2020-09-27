#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const frontmatter = require('@github-docs/frontmatter')
const { flatten } = require('lodash')
const patterns = require('../../lib/patterns')
const walk = require('walk-sync')
const dirsToProcess = ['content', 'translations']
const allFiles = flatten(dirsToProcess.map(dir => {
  return walk(path.join(process.cwd(), dir), { includeBasePath: true, directories: false })
    .filter(file => !file.endsWith('README.md'))
    .filter(file => !file.endsWith('LICENSE'))
    // we only want to process frontmatter in content files in translations, so skip data files
    // this is very brittle but works well enough for this script
    // (note data files are updated in script/new-versioning/update-content.js)
    .filter(file => !file.includes('/data/'))
}))

allFiles.forEach(file => {
  const contents = fs.readFileSync(file, 'utf8')
  const { data, content } = frontmatter(contents)

  if (!data.versions) {
    data.versions = data.productVersions
    Object.keys(data.versions).forEach(version => {
      // process dotcom, actions, rest, etc.
      if (version !== 'enterprise') {
        data.versions['free-pro-team'] = data.versions[version]
        delete data.versions[version]
      } else {
        data.versions['enterprise-server'] = data.versions.enterprise
        // TODO we are not adding these WIP versions yet
        // we can run a modified version of this script later to add them
        // data.versions['enterprise-cloud'] = '*'
        // data.versions['private-instances'] = '*'
        delete data.versions.enterprise
      }
    })
  }

  // remove hardcoded version numbers in redirect frontmatter
  // fix for https://github.com/github/docs-internal/issues/10835
  if (data.redirect_from) {
    data.redirect_from = Array.from([data.redirect_from]).flat().filter(oldPath => {
      return !patterns.getEnterpriseVersionNumber.test(oldPath)
    })
  }

  delete data.productVersions

  // update some oneoff content files
  if (file.endsWith('content/index.md')) {
    data.versions['enterprise-server'] = '*'
    // TODO we are not adding these WIP versions yet
    // we can run a modified version of this script later to add them
    // data.versions['enterprise-cloud'] = '*'
    // data.versions['private-instances'] = '*'
  }

  if (file.endsWith('content/github/index.md')) {
    data.title = 'GitHub.com'
    delete data.shortTitle
  }

  if (file.endsWith('content/admin/index.md')) {
    data.title = 'Enterprise Administrators'
    delete data.shortTitle
  }

  fs.writeFileSync(file, frontmatter.stringify(content, data, { lineWidth: 10000 }))
})
