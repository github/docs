#!/usr/bin/env node

// [start-readme]
//
// In the .github/workflows, We use...
//
//     uses: some/action@95cb08cb2672c73d4ffd2f422e6d11953d2a9c70
//
// But sometimes we fail to update the uniformly. This script
// is for finding these unicorns.
//
// [end-readme]
//
//

import fs from 'fs'

import { program } from 'commander'
import walk from 'walk-sync'
import chalk from 'chalk'

program
  .description('Finds action shas that are unusual')
  .option('-v, --verbose', 'Verbose outputs')
  .parse(process.argv)

main(program.opts(), program.args)

async function main(opts, args) {
  const files = walk('.github/workflows', { globs: ['*.yml'], includeBasePath: true })
  const counts = {}
  const places = {}

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf-8')
    let lineNo = 0
    for (const line of content.split(/\n/g)) {
      lineNo++
      if (line.includes('uses:') && /@[a-f0-9]{40}/.test(line)) {
        const match = line.match(/\b(?<name>[\w/-]+)@(?<sha>[a-f0-9]{40})/)
        const whole = match[0]
        if (!places[whole]) {
          places[whole] = []
        }
        places[whole].push({ file, line, lineNo })
        const { name, sha } = match.groups
        if (!counts[name]) {
          counts[name] = {}
        }
        counts[name][sha] = 1 + (counts[name][sha] || 0)
      }
    }
  }
  const suspects = Object.fromEntries(
    Object.entries(counts).filter(([, shas]) => Object.keys(shas).length > 1),
  )

  const countSuspects = Object.keys(suspects).length
  if (countSuspects) {
    console.log(chalk.yellow(`Found ${countSuspects} suspect${countSuspects === 1 ? '' : 's'}\n`))

    for (const [action, shas] of Object.entries(suspects)) {
      const total = Object.values(shas).reduce((a, b) => a + b, 0)
      const flat = Object.entries(shas)
        .map(([sha, count]) => [count, sha])
        .sort((a, b) => b[0] - a[0])

      const mostPopular = flat[0]
      for (const [count, sha] of flat.slice(1)) {
        console.log(chalk.bold('Suspect:'), `${action}@${chalk.yellow(sha)}`)
        console.log(
          `is only used ${count} time${count === 1 ? '' : 's'} (${((100 * count) / total).toFixed(
            1,
          )}%) compared to ${mostPopular[1]} (used ${mostPopular[0]} times)`,
        )
        console.log(chalk.bold(`Consider changing to ${action}@${mostPopular[1]}`))
        console.log('in...')
        for (const { file, lineNo } of places[`${action}@${sha}`]) {
          console.log(`\t${file} (line ${lineNo})`)
        }
        console.log('\n')
      }
    }
  } else {
    console.log(chalk.green('All good! No suspects found 😎'))
  }
}
