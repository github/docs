#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { program } from 'commander'
import walk from 'walk-sync'
import { execSync, execFileSync } from 'child_process'
import { escapeRegExp } from 'lodash-es'
import frontmatter from '../../../lib/read-frontmatter.js'

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
      'ghae-issue-1234, then commit the results.\n\n' +
      'Documentation: https://github.com/github/docs-content/blob/main/docs-content-docs/docs-content-workflows/content-creation/versioning-documentation.md#internal-versioning-conventions-for-github-ae\n\n' +
      'Examples:\n' +
      `  ${scriptName} -f 'issue-1234, issue-5678'\n` +
      `  ${scriptName} -f 'issue-1234' -c '3.5'`,
  )
  .option('-s, --show-flags', 'show list of existing flags')
  .option("-f, --toggle-flags '<flag-1>[,flag-2,...]'", 'toggle comma-separated list of flags')
  .option("-c, --comparative-replacement '<version>'", 'convert flags to comparative versioning')
  .parse(process.argv)

const options = program.opts()

let optionsCount = 0
options.showFlags && optionsCount++
options.toggleFlags && optionsCount++
options.comparativeReplacement && optionsCount++

// Handle options:
//   - Show help for no options
//   - Indicate that --comparative-replacement requires --toggle-flags
//   - Otherwise, if no --comparative-replacement, error when more than one

if (optionsCount === 0) {
  program.help()
} else {
  if (options.comparativeReplacement && !options.toggleFlags) {
    console.log(`Error: --comparative-replacement requires --toggle-flags`)
    process.exit(1)
  } else if (optionsCount > 1 && options.showFlags) {
    console.log(`Error: you specified ${optionsCount} options (accepts 1 or 2)`)
    process.exit(1)
  } else if (optionsCount > 2) {
    console.log(`Error: you specified ${optionsCount} options (accepts 1 or 2)`)
    process.exit(1)
  }
}

// Store flags that user wants to toggle.

let flagsToToggle = []
let flagCount = 0
if (options.toggleFlags) {
  flagsToToggle = options.toggleFlags.split(',').map((item) => item.trim())
  flagCount = flagsToToggle.length
}

if (options.toggleFlags) {
  // Refuse to proceed if repository has uncommitted changes.

  const cmd = 'git'
  const args = ['status', contentDir, reusablesDir, dataDir, '--porcelain=v1']
  const localChangesCount = execFileSync(cmd, args).toString().trim()

  // localChangesCount can return an empty line, this conditional ignores that scenario
  if (localChangesCount && localChangesCount.split(/\n/g).length > 0) {
    console.log("Error: refusing to proceed due to uncommitted changes (review 'git status')")
    process.exit(1)
  }
}

// Evaluate and store version number for comparative replacement, or abort.

if (options.comparativeReplacement) {
  if (!options.comparativeReplacement.match(/\d\.\d+/)) {
    console.log(
      `Error: you specified ${options.comparativeReplacement} for comparative replacement (must be #.# or #.##)`,
    )
    process.exit(1)
  }
}

// Set replacement values for YAML and Liquid.

let replacementYAMLValue = '*'
let replacementLiquidValue = plan

if (options.comparativeReplacement) {
  replacementYAMLValue = `>= ${options.comparativeReplacement}`

  const liquidVersion = options.comparativeReplacement.split('.', 2)
  if (liquidVersion[1] === '0') {
    console.log(
      `Error: you specified ${options.comparativeReplacement} for comparative replacement (can't be #.0)`,
    )
    process.exit(1)
  } else {
    liquidVersion[1] = liquidVersion[1] - 1
    const liquidVersionForComparison = liquidVersion.join('.')
    replacementLiquidValue = `${plan} > ${liquidVersionForComparison}`
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
          match.trim().replace(`${plan}: `, '').replace(/['"]+/g, ''),
        ),
      )
    }

    if (deduplicatedVersionMatches.length > 0) {
      matches.push(
        ...deduplicatedVersionMatches.map((match) => match.trim().replace(plan + '-', '')),
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
    if (flag.match(/^issue-[0-9]+$/)) {
      console.log(
        `\n🚩 \x1b[7m ${plan}-${flag} \x1b[0m \x1b[1m\x1b[34m\x1b[4m${flag.replace(
          'issue-',
          'https://github.com/github/docs-content/issues/',
        )}\x1b[0m`,
      )
    } else {
      console.log(`\n🚩 \x1b[43m ${plan}-${flag} \x1b[0m`)
    }

    files.forEach((file) => {
      console.log(`  ${file}`)
    })
  }

  // ------------------------------------------------------------- --toggle-flags
} else if (options.toggleFlags) {
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
      const liquidReplacementRegExp = new RegExp(`${plan}-${escapeRegExp(flag)}`, 'g')
      let newContent

      if (file.endsWith('.md')) {
        // Update versions in Liquid conditionals.

        newContent = fileContent.replace(liquidReplacementRegExp, replacementLiquidValue)

        if (data.versions && data.versions[plan] === flag) {
          // Update versions in content files with YAML front matter.

          data.versions[plan] = replacementYAMLValue
        }
        fs.writeFileSync(file, frontmatter.stringify(newContent, data, { lineWidth: 10000 }))
      } else if (file.endsWith('.yml')) {
        const yamlReplacementRegExp = new RegExp(`${plan}: ['"]+${escapeRegExp(flag)}['"]+`, 'g')

        // Update versions in YAML files for feature-based versioning.

        newContent = fileContent.replace(
          yamlReplacementRegExp,
          `${plan}: '${replacementYAMLValue}'`,
        )

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
            'github/docs-content#',
          )}'`
        }

        execSync(commitCommand)
        commitCount++
      }
    }

    // Check out any file that had syntax adjusted, but didn't contain one
    // or more feature flags to toggle.

    const cmd = 'git'
    const args = ['checkout', '--quiet', contentDir, reusablesDir, dataDir]
    execFileSync(cmd, args)
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
