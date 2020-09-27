#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const walk = require('walk-sync')
const matter = require('gray-matter')
const readlineSync = require('readline-sync')
const removeLiquidStatements = require('../lib/remove-liquid-statements')
const removeDeprecatedFrontmatter = require('../lib/remove-deprecated-frontmatter')
const versionToDeprecate = require('../lib/enterprise-server-releases').deprecated[0]
const nextOldestVersion = require('../lib/enterprise-server-releases').oldestSupported
const devCheckout = process.argv[2]
const prompt = `This script will run in the current checkout of help.github.com.
Is that what you want? Press Y to continue, or enter any other key to cancel: `

// [start-readme]
//
// Run this script after an Enterprise deprecation to remove Liquid statements and frontmatter that contain the deprecated Enterprise version.
// See the Enterprise deprecation issue template for instructions.
//
// You can run this script on either the help docs or the developer docs. To run it on the help docs, enter:
//
// `script/remove-deprecated-enterprise-version-markup.js`
//
// To run it on the developer docs, provide a path to your developer docs checkout as an argument. You can use a tilde to represent your home directory. For example:
//
// `script/remove-deprecated-enterprise-version-markup.js ~/Desktop/internal-developer.github.com/`
//
// [end-readme]

let contentDir = path.join(__dirname, '../content')
let dataDir = path.join(__dirname, '../data')

const elseifRegex = /{-?% elsif/

// determine whether to run the script on help docs or developer docs
if (devCheckout) {
  try {
    process.chdir(devCheckout)
    console.log('OK, the script will run in ' + devCheckout)
    contentDir = path.join(devCheckout, 'content')
    dataDir = path.join(devCheckout, 'data')
  } catch (err) {
    console.log('No such directory! ' + devCheckout)
  }
} else {
  const answer = readlineSync.question(prompt)

  if (!answer.match(/^Y$/mi)) {
    console.log('Exiting!')
    process.exit()
  }
}

// gather content and data files
const contentFiles = walk(contentDir, { includeBasePath: true })
  .filter(relativePath => relativePath.endsWith('.md') && !relativePath.match(/README/i))

const dataFiles = walk(dataDir, { includeBasePath: true })
  .filter(relativePath => relativePath.endsWith('.yml') || relativePath.endsWith('.md'))
  .filter(relativePath => !relativePath.includes('/graphql/'))

const files = contentFiles.concat(dataFiles)

main()
console.log(`Removed ${versionToDeprecate} markup from content and data files! Review and run script/test.`)

function main () {
  files.forEach(file => {
    const oldContents = fs.readFileSync(file, 'utf8')
    const { content, data } = matter(oldContents)

    // can't safely handle elseifs programmatically, too many possible outcomes
    // (only intro and title frontmatter are likely to contain elseif tags)
    if (content.match(elseifRegex) || (data.intro && data.intro.match(elseifRegex)) || (data.title && data.title.match(elseifRegex))) {
      console.log(`${file} has an 'elsif' condition! Resolve all elsifs by hand, then rerun the script.`)
      process.exit()
    }

    // update frontmatter data (i.e., productVersions field)
    const newData = removeDeprecatedFrontmatter(data, devCheckout, versionToDeprecate, nextOldestVersion)

    // update liquid statements in body content
    const newContent = removeLiquidStatements(content, versionToDeprecate, nextOldestVersion)

    // make sure any intro fields that exist and are empty return an empty string, not null
    if (typeof data.intro !== 'undefined' && !data.intro) {
      data.intro = ''
    }

    // put it all back together
    const newContents = matter.stringify(newContent, newData, { lineWidth: 10000 })

    fs.writeFileSync(file, newContents)
  })
}
