#!/usr/bin/env node
import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'
import walk from 'walk-sync'
import matter from 'gray-matter'
import program from 'commander'
import { indexOf, nth } from 'lodash-es'
import removeLiquidStatements from '../../lib/remove-liquid-statements.js'
import removeDeprecatedFrontmatter from '../../lib/remove-deprecated-frontmatter.js'
import enterpriseServerReleases from '../../lib/enterprise-server-releases.js'
import runRemoveUnusedAssetsScript from '../remove-unused-assets.js'
const __dirname = path.dirname(fileURLToPath(import.meta.url))

const contentPath = path.join(__dirname, '../../content')
const dataPath = path.join(__dirname, '../../data')
const removeUnusedAssetsScript = 'script/remove-unused-assets'
const elseifRegex = /{-?% elsif/

// [start-readme]
//
// Run this script after an Enterprise deprecation to remove Liquid statements and frontmatter that contain the deprecated Enterprise version.
// See the Enterprise deprecation issue template for instructions.
//
// [end-readme]

program
  .description(
    'Remove Liquid conditionals and update versions frontmatter for a given Enterprise Server release.'
  )
  .option('-r, --release <NUMBER>', 'Enterprise Server release number. Example: 2.19')
  .parse(process.argv)

const release = program.opts().release

// verify CLI options
if (!release) {
  console.log(program.description() + '\n')
  program.options.forEach((opt) => {
    console.log(opt.flags)
    console.log(opt.description + '\n')
  })
  process.exit(1)
}

if (!enterpriseServerReleases.all.includes(release)) {
  console.log(
    `You specified ${release}! Please specify a supported or deprecated release number from lib/enterprise-server-releases.js`
  )
  process.exit(1)
}

const versionToDeprecate = `enterprise-server@${release}`
const currentIndex = indexOf(enterpriseServerReleases.all, release)
const nextOldestRelease = nth(enterpriseServerReleases.all, currentIndex - 1)
const nextOldestVersion = `enterprise-server@${nextOldestRelease}`

console.log(`Deprecating ${versionToDeprecate}!\n`)
console.log(`Next oldest version: ${nextOldestVersion}\n`)

// gather content and data files
const contentFiles = walk(contentPath, { includeBasePath: true, directories: false })
  .filter((file) => file.endsWith('.md'))
  .filter((file) => !(file.endsWith('README.md') || file === 'LICENSE' || file === 'LICENSE-CODE'))

const dataFiles = walk(dataPath, { includeBasePath: true, directories: false })
  .filter((file) => file.includes('data/reusables') || file.includes('data/variables'))
  .filter((file) => !file.endsWith('README.md'))

const allFiles = contentFiles.concat(dataFiles)

main()
console.log(`\nRunning ${removeUnusedAssetsScript}...`)
runRemoveUnusedAssetsScript()

function printElseIfFoundWarning(location) {
  console.log(
    `${location} has an 'elsif' condition! Resolve all elsifs by hand, then rerun the script.`
  )
}

function main() {
  allFiles.forEach((file) => {
    const oldContents = fs.readFileSync(file, 'utf8')
    const { content, data } = matter(oldContents)

    // we can't safely handle elseifs programmatically, too many possible outcomes
    if (elseifRegex.test(content)) {
      printElseIfFoundWarning(`content in ${file}`)
      process.exit()
    }

    Object.keys(data).forEach((key) => {
      if (elseifRegex.test(data[key])) {
        printElseIfFoundWarning(`frontmatter '${key}' in ${file}`)
        process.exit()
      }
    })

    // update frontmatter versions prop
    removeDeprecatedFrontmatter(file, data.versions, versionToDeprecate, nextOldestVersion)

    // update liquid statements in content and data
    const newContent = removeLiquidStatements(content, versionToDeprecate, nextOldestVersion)

    // make sure any intro fields that exist and are empty return an empty string, not null
    if (typeof data.intro !== 'undefined' && !data.intro) {
      data.intro = ''
    }

    // put it all back together
    const newContents = matter.stringify(newContent, data, { lineWidth: 10000 })

    fs.writeFileSync(file, newContents)
  })

  console.log(
    `Removed ${versionToDeprecate} markup from content and data files! Review and run script/test.`
  )
}
