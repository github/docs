#!/usr/bin/env node
import fs from 'fs'
import walk from 'walk-sync'
import path from 'path'
import { escapeRegExp } from 'lodash-es'
import { Tokenizer } from 'liquidjs'
import frontmatter from '#src/frame/lib/read-frontmatter.js'
import { allVersions } from '#src/versions/lib/all-versions.js'
import { deprecated, oldestSupported } from '#src/versions/lib/enterprise-server-releases.js'

const allVersionKeys = Object.values(allVersions)
const dryRun = ['-d', '--dry-run'].includes(process.argv[2])

const walkFiles = (pathToWalk, ext) => {
  return walk(path.posix.join(process.cwd(), pathToWalk), {
    includeBasePath: true,
    directories: false,
  }).filter((file) => file.endsWith(ext) && !file.endsWith('README.md'))
}

const markdownFiles = walkFiles('content', '.md').concat(walkFiles('data', '.md'))
const yamlFiles = walkFiles('data', '.yml')

const operatorsMap = {
  // old: new
  '==': '=',
  ver_gt: '>',
  ver_lt: '<',
  '!=': '!=', // noop
}

// [start-readme]
//
// Run this script to convert long form Liquid conditionals (e.g., {% if currentVersion == "free-pro-team" %}) to
// the new custom tag (e.g., {% ifversion fpt %}) and also use the short names in versions frontmatter.
//
// [end-readme]

async function main() {
  if (dryRun)
    console.log('This is a dry run! The script will not write any files. Use for debugging.\n')

  // 1. UPDATE MARKDOWN FILES (CONTENT AND REUSABLES)
  console.log('Updating Liquid conditionals and versions frontmatter in Markdown files...\n')
  for (const file of markdownFiles) {
    // A. UPDATE LIQUID CONDITIONALS IN CONTENT
    // Create an { old: new } conditionals object so we can get the replacements and
    // make the replacements separately and not do both in nested loops.
    const content = fs.readFileSync(file, 'utf8')
    const contentReplacements = getLiquidReplacements(content, file)
    const newContent = makeLiquidReplacements(contentReplacements, content)

    // B. UPDATE FRONTMATTER VERSIONS PROPERTY
    const { data } = frontmatter(newContent)
    if (data.versions && typeof data.versions !== 'string') {
      Object.entries(data.versions).forEach(([plan, value]) => {
        // Update legacy versioning while we're here
        const valueToUse = value
          .replace('2.23', '3.0')
          .replace(`>=${oldestSupported}`, '*')
          .replace(/>=?2\.20/, '*')
          .replace(/>=?2\.19/, '*')

        // Find the relevant version from the master list so we can access the short name.
        const versionObj = allVersionKeys.find(
          (version) => version.plan === plan || version.shortName === plan,
        )
        if (!versionObj) {
          console.error(`can't find supported version for ${plan}`)
          process.exit(1)
        }
        delete data.versions[plan]
        data.versions[versionObj.shortName] = valueToUse
      })
    }

    if (dryRun) {
      console.log(contentReplacements)
    } else {
      fs.writeFileSync(file, frontmatter.stringify(newContent, data, { lineWidth: 10000 }))
    }
  }

  // 2. UPDATE LIQUID CONDITIONALS IN DATA YAML FILES
  console.log('Updating Liquid conditionals in YAML files...\n')
  for (const file of yamlFiles) {
    const yamlContent = fs.readFileSync(file, 'utf8')
    const yamlReplacements = getLiquidReplacements(yamlContent, file)
    // Update any `versions` properties in the YAML as well (learning tracks, etc.)
    const newYamlContent = makeLiquidReplacements(yamlReplacements, yamlContent)
      .replace(/("|')?free-pro-team("|')?:/g, 'fpt:')
      .replace(/("|')?enterprise-server("|')?:/g, 'ghes:')

    if (dryRun) {
      console.log(yamlReplacements)
    } else {
      fs.writeFileSync(file, newYamlContent)
    }
  }
}

main().then(
  () => {
    console.log('Done!')
  },
  (err) => {
    console.error(err)
    process.exit(1)
  },
)

// Convenience function to help with readability by removing this large but unneded property.
function removeInputProps(arrayOfObjects) {
  return arrayOfObjects.map((obj) => {
    delete obj.input || delete obj.token.input
    return obj
  })
}

function makeLiquidReplacements(replacementsObj, text) {
  let newText = text
  Object.entries(replacementsObj).forEach(([oldCond, newCond]) => {
    const oldCondRegex = new RegExp(`({%-?)\\s*?${escapeRegExp(oldCond)}\\s*?(-?%})`, 'g')
    newText = newText
      .replace(oldCondRegex, `$1 ${newCond} $2`)
      // Content files use an old-school hack to ensure our old regex deprecation script DTRT, for example:
      // `if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.21"`
      // This script will change the above to `if ghes and ghes > 2.21`.
      // But we don't need the hack for the new deprecation script, because it will change `if ghes > 2.21` to `if ghes`.
      // So we can update this to the simpler `{% if ghes > 2.21 %}`.
      .replace(/ghes and ghes/g, 'ghes')
  })

  return newText
}

// Versions map:
// if currentVersion == "myVersion@myRelease" -> ifversion myVersionShort OR ifversion myVersionShort = @myRelease
// if currentVersion != "myVersion@myRelease" -> ifversion not myVersionShort OR ifversion myVersionShort != @myRelease
// if currentVersion ver_gt "myVersion@myRelease -> ifversion myVersionShort > myRelease
// if currentVersion ver_lt "myVersion@myRelease -> ifversion myVersionShort < myRelease
// if enterpriseServerVersions contains currentVersion -> ifversion ghes
function getLiquidReplacements(content, file) {
  const replacements = {}

  const tokenizer = new Tokenizer(content)
  const tokens = removeInputProps(tokenizer.readTopLevelTokens())

  tokens
    .filter(
      (token) =>
        (token.name === 'if' || token.name === 'elsif') && token.content.includes('currentVersion'),
    )
    .map((token) => token.content)
    .forEach((token) => {
      const newToken = token.startsWith('if') ? ['ifversion'] : ['elsif']
      // Everything from here on pushes to the `newToken` array to construct the new conditional.
      token
        .replace(/(if|elsif) /, '')
        .split(/ (or|and) /)
        .forEach((op) => {
          if (op === 'or' || op === 'and') {
            newToken.push(op)
            return
          }

          // This string will always resolve to `ifversion ghes`.
          if (op.includes('enterpriseServerVersions contains currentVersion')) {
            newToken.push('ghes')
            return
          }

          // For the rest, we need to check the release string.

          // E.g., [ 'currentVersion', '==', '"enterprise-server@3.0"'].
          const opParts = op.split(' ')

          if (!(opParts.length === 3 && opParts[0] === 'currentVersion')) {
            console.error(`Something went wrong with ${token} in ${file}`)
            process.exit(1)
          }

          const operator = opParts[1]
          // Remove quotes around the version and then split it on the at sign.
          const [plan, release] = opParts[2].slice(1, -1).split('@')

          // Find the relevant version from the master list so we can access the short name.
          const versionObj = allVersionKeys.find((version) => version.plan === plan)

          if (!versionObj) {
            console.error(`Couldn't find a version for ${plan} in "${token}" in ${file}`)
            process.exit(1)
          }

          // Handle numbered releases!
          if (versionObj.hasNumberedReleases) {
            const newOperator = operatorsMap[operator]
            if (!newOperator) {
              console.error(
                `Couldn't find an operator that corresponds to ${operator} in "${token} in "${file}`,
              )
              process.exit(1)
            }

            // Account for this one weird version included in a couple content files
            deprecated.push('1.19')

            // E.g., ghes > 2.20
            const availableInAllGhes = deprecated.includes(release) && newOperator === '>'

            // We can change > deprecated releases, like ghes > 2.19, to just ghes.
            // These are now available for all ghes releases.
            if (availableInAllGhes) {
              newToken.push(versionObj.shortName)
              return
            }

            // E.g., ghes < 2.20
            const lessThanDeprecated = deprecated.includes(release) && newOperator === '<'
            // E.g., ghes < 2.21
            const lessThanOldestSupported = release === oldestSupported && newOperator === '<'
            // E.g., ghes = 2.20
            const equalsDeprecated = deprecated.includes(release) && newOperator === '='
            const hasDeprecatedContent =
              lessThanDeprecated || lessThanOldestSupported || equalsDeprecated

            // Remove these by hand.
            if (hasDeprecatedContent) {
              console.error(`Found content that needs to be removed! See "${token} in "${file}`)
              process.exit(1)
            }

            // Override for legacy 2.23, which should be 3.0
            const releaseToUse = release === '2.23' ? '3.0' : release

            newToken.push(`${versionObj.shortName} ${newOperator} ${releaseToUse}`)
            return
          }

          // Turn != into nots, now that we can assume this is not a numbered release.
          if (operator === '!=') {
            newToken.push(`not ${versionObj.shortName}`)
            return
          }

          // We should only have equality conditionals left.
          if (operator !== '==') {
            console.error(`Expected == but found ${operator} in "${op}" in ${token}`)
            process.exit(1)
          }

          // Handle `latest`!
          if (release === 'latest') {
            newToken.push(versionObj.shortName)
            return
          }

          // Handle all other non-standard releases, like github-ae@next and github-ae@issue-12345
          newToken.push(`${versionObj.shortName}-${release}`)
        })

      replacements[token] = newToken.join(' ')
    })

  return replacements
}
