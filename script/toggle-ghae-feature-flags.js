#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import program from 'commander'
import walk from 'walk-sync'
import { execSync } from 'child_process'

import frontmatter from '../lib/read-frontmatter.js'

const scriptName = new URL(import.meta.url).pathname.split('/').pop()

const contentDir = path.resolve('content')
const reusablesDir = path.resolve('data/reusables')
const dataDir = path.resolve('data')

const currentBranch = execSync('git branch --show-current').toString().trim()
const plan = 'ghae'

// [start-readme]
//
// Find and replace lightweight feature flags for GitHub AE content.
//
// [end-readme]

program
  .description(
    'Toggle issue-based, feature-flagged versioning for GitHub AE content like\n' +
      'ghae-next or ghae-issue-1234, then commit the results.\n\n' +
      'Documentation: https://github.com/github/docs-content/blob/main/docs-content-docs/docs-content-workflows/content-creation/versioning-documentation.md#internal-versioning-conventions-for-github-ae\n\n' +
      'Examples:\n' +
      `  ${scriptName} -n\n` +
      `  ${scriptName} -f 'issue-1234, issue-5678'`
  )
  .option('-n, --toggle-next', "toggle 'next' flags for M2 release")
  .option('-s, --show-flags', 'show list of existing flags')
  .option("-f, --toggle-flags '<flag-1>[,flag-2,...]'", 'toggle comma-separated list of flags')
  .parse(process.argv)

const options = program.opts()

let optionsCount = 0
options.toggleNext && optionsCount++
options.showFlags && optionsCount++
options.toggleFlags && optionsCount++

// Show help with no options; error when more than one.

if (optionsCount === 0) {
  program.help()
} else if (optionsCount > 1) {
  console.log(`Error: you specified ${optionsCount} options (accepts 1)`)
  process.exit(1)
}

// Store flags that user wants to toggle.

let flagsToToggle = []
let flagCount = 0
if (options.toggleNext) {
  flagsToToggle = ['next']
} else if (options.toggleFlags) {
  flagsToToggle = options.toggleFlags.split(',').map((item) => item.trim())
  flagCount = flagsToToggle.length
}

if (options.toggleNext || options.toggleFlags) {
  // Refuse to proceed if repository has uncommitted changes.

  const localChangesCount = execSync(
    `git status ${contentDir} ${reusablesDir} ${dataDir} --porcelain=v1 2>/dev/null | wc -l`
  ).toString()

  if (localChangesCount > 0) {
    console.log("Error: refusing to proceed due to uncommitted changes (review 'git status')")
    process.exit(1)
  }
}

// Gather the files.

const markdownFiles = walk(contentDir, { includeBasePath: true, directories: false })
  .concat(walk(reusablesDir, { includeBasePath: true, directories: false }))
  .filter((file) => file.endsWith('.md') && !/readme\.md/i.test(file))

const yamlFiles = walk(dataDir, {
  includeBasePath: true,
  directories: false,
  ignore: ['graphql'],
}).filter((file) => file.endsWith('.yml'))

const allFiles = [...markdownFiles, ...yamlFiles]

// --------------------------------------------------------------- --show-flags

// Create a dictionary to populate with keys as flag names that reference
// arrays of paths to files that contain the flag in YAML front matter or
// Liquid conditionals.

const allFlags = {}
const liquidShowRegExp = new RegExp(`\\s+${plan}-([^\\s]+)`, 'g')

console.log(`Parsing all flags for ${plan} plan on ${currentBranch} branch...`)

allFiles.forEach((file) => {
  const fileContent = fs.readFileSync(file, 'utf8')
  const matches = []

  if (file.endsWith('.md')) {
    const { data } = frontmatter(fileContent)

    // Process YAML front matter.

    if (data.versions && data.versions[plan] && data.versions[plan] !== '*') {
      if (!allFlags[data.versions[plan]]) {
        allFlags[data.versions[plan]] = []
      }

      allFlags[data.versions[plan]].push(file)
    }

    // Process Liquid conditionals in Markdown source.

    const deduplicatedMatches = [...new Set(fileContent.match(liquidShowRegExp))]

    if (deduplicatedMatches.length > 0) {
      matches.push(...deduplicatedMatches.map((match) => match.trim().replace(plan + '-', '')))
    }
  } else if (file.endsWith('.yml')) {
    // Process versions in YAML files for feature-based versioning.

    const yamlShowRegExp = new RegExp(`${plan}: ['"]([A-Za-z0-9-_]+)['"]`, 'g')
    const deduplicatedLiquidMatches = [...new Set(fileContent.match(yamlShowRegExp))]
    const deduplicatedVersionMatches = [...new Set(fileContent.match(liquidShowRegExp))]

    if (deduplicatedLiquidMatches.length > 0) {
      matches.push(
        ...deduplicatedLiquidMatches.map((match) =>
          match.trim().replace(`${plan}: `, '').replace(/['"]+/g, '')
        )
      )
    }

    if (deduplicatedVersionMatches.length > 0) {
      matches.push(
        ...deduplicatedVersionMatches.map((match) => match.trim().replace(plan + '-', ''))
      )
    }
  } else {
    throw new Error(`Unrecognized file (${file}). Not a .md or .yml file.`)
  }

  matches.forEach((match) => {
    if (!allFlags[match]) {
      allFlags[match] = []
    }
    allFlags[match].push(file)
  })
})

// Output flags and lists of files that contain the flags.

if (options.showFlags) {
  let flag, files
  for ([flag, files] of Object.entries(allFlags)) {
    if (flag === 'next') {
      console.log(
        `\n🚩 \x1b[7m ${plan}-${flag} \x1b[0m \x1b[1m\x1b[34m\x1b[4mhttps://github.com/github/docs-content/issues/3950\x1b[0m`
      )
    } else if (flag.match(/^issue-[0-9]+$/)) {
      console.log(
        `\n🚩 \x1b[7m ${plan}-${flag} \x1b[0m \x1b[1m\x1b[34m\x1b[4m${flag.replace(
          'issue-',
          'https://github.com/github/docs-content/issues/'
        )}\x1b[0m`
      )
    } else {
      console.log(`\n🚩 \x1b[43m ${plan}-${flag} \x1b[0m`)
    }

    files.forEach((file) => {
      console.log(`  ${file}`)
    })
  }

  // -------------------------------------------- --toggle-flags or --toggle-next
} else if (options.toggleFlags || options.toggleNext) {
  let commitCount = 0

  console.log(`Toggling flag${flagCount > 1 ? 's' : ''} (${flagsToToggle.join(', ')})...`)

  flagsToToggle.forEach((flag) => {
    if (!(flag in allFlags)) {
      console.warn(`${flag} does not exist in source`)
      return
    }

    allFlags[flag].forEach((file) => {
      const fileContent = fs.readFileSync(file, 'utf8')
      const { data } = frontmatter(fileContent)
      const liquidReplacementRegExp = new RegExp(`${plan}-${flag}`, 'g')
      let newContent

      if (file.endsWith('.md')) {
        // Update versions in Liquid conditionals.

        newContent = fileContent.replace(liquidReplacementRegExp, plan)

        if (data.versions && data.versions[plan] === flag) {
          // Update versions in content files with YAML front matter.

          data.versions[plan] = '*'
        }
        fs.writeFileSync(file, frontmatter.stringify(newContent, data, { lineWidth: 10000 }))
      } else if (file.endsWith('.yml')) {
        const yamlReplacementRegExp = new RegExp(`${plan}: ['"]+${flag}['"]+`, 'g')

        // Update versions in YAML files for feature-based versioning.

        newContent = fileContent.replace(yamlReplacementRegExp, `${plan}: '*'`)

        // Update versions in Liquid conditionals.

        newContent = newContent.replace(liquidReplacementRegExp, plan)
        fs.writeFileSync(file, newContent, 'utf-8')
      } else {
        throw new Error(`Unknown file to toggle (${file}). Not a .yml or .md file.`)
      }
    })

    let filesUpdatedForFlag = 0

    if (allFlags[flag].length) {
      console.log(`Toggled ${flag}. Committing changes...`)

      allFlags[flag].forEach((fileToAdd) => {
        execSync(`git add ${fileToAdd}`)
        filesUpdatedForFlag++
      })

      if (filesUpdatedForFlag === allFlags[flag].length) {
        let commitCommand = `git commit -m 'Toggle ${plan}-${flag} flag'`

        if (flag.match(/^issue-[0-9]+$/)) {
          commitCommand = `${commitCommand} -m 'For ${flag.replace(
            'issue-',
            'github/docs-content#'
          )}'`
        }

        execSync(commitCommand)
        commitCount++
      }
    }

    // Check out any file that had syntax adjusted, but didn't contain one
    // or more feature flags to toggle.

    execSync(`git checkout --quiet ${contentDir} ${reusablesDir} ${dataDir}`)
  })

  if (commitCount > 0) {
    console.log('Done!')
    console.log('  - Review commits:')
    console.log(`      git log -n ${commitCount}`)
    console.log('  - Review changes in diffs:')
    console.log(`      git show -n ${commitCount}`)
    console.log('  - Undo changes:')
    console.log(`      git reset HEAD~${commitCount} && git checkout content data`)
    console.log('  - Push changes:')
    console.log('      git push')
  }
}
