#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const walk = require('walk-sync')
const { flatten } = require('lodash')
const dirsToProcess = ['content', 'data', 'translations']
const allFiles = flatten(dirsToProcess.map(dir => {
  return walk(path.join(process.cwd(), dir), { includeBasePath: true, directories: false })
    .filter(file => !file.endsWith('README.md'))
}))

allFiles.forEach(file => {
  let newContents = fs.readFileSync(file, 'utf8')
    .replace(/page.version/g, 'currentVersion')
    .replace(/["'](?:')?dotcom["'](?:')?/g, '"free-pro-team@latest"')
    .replace(/["'](?:')?(2\.\d{2})["'](?:')?/g, '"enterprise-server@$1"')
    // TODO handle this separately? requires a change in lib/rewrite-local-links.js
    // .replace(/class="dotcom-only"/g, 'class="do-not-version"')

  // replace this one weird subtitle
  if (file.endsWith('content/github/index.md')) {
    newContents = newContents.replace(`
{% if currentVersion != "free-pro-team@latest" %}
<h1 class="border-bottom-0">GitHub Enterprise Server {{ currentVersion }}</h1>
{% endif %}
`, '')
  }

  // update this one weird link
  if (file.endsWith('content/graphql/overview/public-schema.md')) {
    newContents = newContents.replace('(GitHub Enterprise {{ currentVersion }})', '({{ allVersions[currentVersion].versionTitle }})')
  }

  fs.writeFileSync(file, newContents)
})
