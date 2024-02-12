#!/usr/bin/env node

// [start-readme]
//
// Run this script after an Enterprise deprecation to remove Liquid statements and frontmatter that
// contain the deprecated Enterprise version. See the Enterprise deprecation issue template for instructions.
//
// [end-readme]

import fs from 'fs'
import { program } from 'commander'

import frontmatter from '../../../lib/read-frontmatter.js'
import removeLiquidStatements from './remove-liquid-statements.js'
import removeDeprecatedFrontmatter from './remove-deprecated-frontmatter.js'
import { all, getNextReleaseNumber } from '#src/versions/lib/enterprise-server-releases.js'
import walkFiles from '../../../script/helpers/walk-files.js'

program
  .description(
    'Remove Liquid conditionals and update versions frontmatter for a given Enterprise Server release.',
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

if (!all.includes(release)) {
  console.log(
    `You specified ${release}! Please specify a supported or deprecated release number from lib/enterprise-server-releases.js`,
  )
  process.exit(1)
}

const nextOldestRelease = getNextReleaseNumber(release)

console.log(`Deprecating GHES ${release}!\n`)
console.log(`Next oldest version: ${nextOldestRelease}\n`)

// gather content and data files
const contentFiles = walkFiles('content', '.md', { includeEarlyAccess: true })
const reusables = walkFiles('data/reusables', '.md', { includeEarlyAccess: true })
const variables = walkFiles('data/variables', '.yml', { includeEarlyAccess: true })
const learningTracks = walkFiles('data/learning-tracks', '.yml', { includeEarlyAccess: true })
const allFiles = contentFiles.concat(reusables, variables, learningTracks)

main()

async function main() {
  for (const file of allFiles) {
    const oldContents = fs.readFileSync(file, 'utf8')
    const { content, data } = frontmatter(oldContents)
    let fileChanged = false
    // update frontmatter versions prop
    fileChanged ||= removeDeprecatedFrontmatter(file, data.versions, release, nextOldestRelease)

    // update liquid statements in content and data
    const { newContent, contentChanged } = removeLiquidStatements(
      content,
      release,
      nextOldestRelease,
      file,
    )
    fileChanged ||= contentChanged

    // update liquid statements in content frontmatter (like intro and title)
    for (const key in data) {
      const value = data[key]
      if (typeof value === 'string' && value.includes('{% ifversion')) {
        const { newContent, contentChanged } = removeLiquidStatements(
          value,
          release,
          nextOldestRelease,
          file,
        )
        fileChanged ||= contentChanged
        data[key] = newContent
      }
    }

    // When stringifying frontmatter, the frontmatter is also formatted.
    // This means that even if there were no Liquid versioning changes,
    // the frontmatter may still be modified to modify line breaks or quotes.
    // This an already difficult PR noisier to review. This prevents writing
    // the file unless there are versioning changes made.
    if (fileChanged) {
      // make sure any intro fields that exist and are empty return an empty string, not null
      if (typeof data.intro !== 'undefined' && !data.intro) {
        data.intro = ''
      }
      // put it all back together
      const newContents = frontmatter.stringify(newContent, data, { lineWidth: 10000 })

      // if the content file is now empty, remove it
      if (newContents.replace(/\s/g, '').length === 0) {
        fs.unlinkSync(file)
        continue
      }

      fs.writeFileSync(file, newContents)
    }
  }

  console.log(`Removed GHES ${release} markup from content and data files! Review and run tests.`)
}
