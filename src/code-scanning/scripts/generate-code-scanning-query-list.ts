#!/usr/bin/env node

/**
 * This script generates a block of Markdown that can be saved as a reusable.
 * The reusable lists all the queries for one programming language, with CWEs, as a Markdown table.
 *
 * To be able to execute this script, you need to have the CodeQL CLI installed.
 * To do that, you need two things:
 *
 *     1. The directory where the github/codeql repo is clone
 *     2. The path to the executable `codeql` file.
 *
 * The directory where the github/codeql repo is cloned is needed because
 * that's how it looks up files. You can set it up like this:
 *
 *     cd /tmp
 *     git clone git@github.com:github/codeql.git
 *     cd codeql
 *     pwd
 *
 * To install the codeql executable, use `gh` like this:
 *
 *     gh extension install github/gh-codeql
 *     gh codeql set-channel nightly
 *     gh codeql version
 *
 * Note that when you run the `gh codeql version` command, it will tell you
 * where the executable is installed. For example:
 *
 *   /Users/peterbe/.local/share/gh/extensions/gh-codeql/dist/nightly/codeql-bundle-20231204/codeql
 *
 * If you've git cloned github/codeql in /tmp/ now you can execute this script.
 * For example, to generate the Markdown
 * for Python:
 *
 *   npm run generate-code-scanning-query-list -- \
 *     --codeql-path ~/.local/share/gh/extensions/gh-codeql/dist/nightly/codeql-bundle-20231204/codeql \
 *     --codeql-dir /tmp/codeql python | tee /tmp/python.md
 *   less /tmp/python.md
 */

import fs from 'fs'
import { execFileSync } from 'child_process'

import chalk from 'chalk'
import { program } from 'commander'

program
  .description('Generate a reusable Markdown for for a code scanning query language')
  .option('--verbose', 'Verbose outputs')
  .option('--codeql-path <path>', 'path to the codeql executable', 'codeql')
  .option('--codeql-dir <path>', 'path to the codeql executable', '.codeql/')
  .option('-o, --output-file <path>', 'path to the codeql executable', 'stdout')
  .option('-p, --pack <pack>', 'which packs to search for', ['code-scanning', 'security-extended'])
  .argument('<language>', 'for example java')
  .parse(process.argv)

type Options = {
  codeqlPath: string
  codeqlDir: string
  outputFile: string
  packs: string[]
  verbose: boolean
}

type QueryMetadata = {
  id?: string
  name?: string
  tags?: string
}

type Query = {
  name: string
  url: string
  packs: string[]
  cwes: string[]
}

const opts = program.opts()
main(
  {
    codeqlPath: opts.codeqlPath,
    codeqlDir: opts.codeqlDir,
    outputFile: opts.outputFile,
    packs: opts.pack,
    verbose: Boolean(opts.verbose),
  },
  program.args[0],
)

async function main(options: Options, language: string) {
  if (!options.packs.length) {
    throw new Error("no packs specified, use '--pack code-scanning' or '--pack security-extended'")
  }

  if (options.verbose && options.outputFile === 'stdout') {
    console.warn(chalk.yellow('Verbose mode is on but output is going to stdout'))
  }

  if (!testCodeQLPath(options)) {
    process.exit(1)
  }

  const queries: {
    [id: string]: Query
  } = {}

  for (const pack of options.packs) {
    const languagePack = `${language}-${pack}.qls`
    if (options.verbose) console.log(chalk.dim(`Searching for queries in ${languagePack}`))
    const res = execFileSync(
      options.codeqlPath,
      ['resolve', 'queries', `--search-path=${options.codeqlDir}`, languagePack],
      {
        encoding: 'utf-8',
      },
    )
    for (const line of res.split('\n')) {
      if (line.trim()) {
        if (options.verbose) console.log('found', line)
        const metadata = getMetadata(options, line)
        const { id, name, tags } = metadata
        if (id && name) {
          const cwes = getCWEs(tags || '')
          const url = getDocsLink(language, id)

          // Only include queries that have CWEs, since the other queries deal with code scanning
          // metadata and metrics (e.g. counting lines of code or number of files) and have no docs link
          if (cwes.length) {
            if (!(id in queries)) {
              queries[id] = { url, name, packs: [], cwes }
            }
            queries[id].packs.push(pack)
          } else {
            if (options.verbose) {
              console.log(chalk.dim(`Skipping ${id} because it has no CWEs`))
            }
          }
        }
      }
    }
  }

  const entries = Object.values(queries)
  entries.sort((a, b) => a.name.localeCompare(b.name))
  printQueries(options, entries)
}

function printQueries(options: Options, queries: Query[]) {
  const markdown = []
  markdown.push('{% rowheaders %}')
  markdown.push('') // blank line
  const header = ['Query name', 'Related CWEs', 'Default', 'Extended']
  markdown.push(`| ${header.join(' | ')} |`)
  markdown.push(`| ${header.map(() => '---').join(' | ')} |`)

  const notIncludedOcticon = '{% octicon "x" aria-label="Not included" %}'
  const includedOcticon = '{% octicon "check" aria-label="Included" %}'

  for (const query of queries) {
    const markdownLink = `[${query.name}](${query.url})`
    let defaultIcon = notIncludedOcticon
    let extendedIcon = notIncludedOcticon
    if (query.packs.includes('code-scanning')) {
      defaultIcon = includedOcticon
    }
    if (query.packs.includes('security-extended')) {
      extendedIcon = includedOcticon
    }
    markdown.push(
      `| ${markdownLink} | ${query.cwes.join(', ')} | ${defaultIcon} | ${extendedIcon} |`,
    )
  }
  markdown.push('') // blank line
  markdown.push('{% endrowheaders %}')
  markdown.push('') // always end with a blank line

  if (options.outputFile === 'stdout') {
    console.log(markdown.join('\n'))
  } else {
    fs.writeFileSync(options.outputFile, markdown.join('\n'), 'utf-8')
  }
}

function getMetadata(options: Options, queryFile: string): QueryMetadata {
  const metadataJson = execFileSync(options.codeqlPath, ['resolve', 'metadata', queryFile], {
    encoding: 'utf-8',
  })
  const parsed = JSON.parse(metadataJson)
  return parsed
}

/**
 *
 * @param language 'cpp'
 * @param queryId 'external-entity-expansion'
 * @returns https://codeql.github.com/codeql-query-help/cpp/cpp-external-entity-expansion/
 */
function getDocsLink(language: string, queryId: string) {
  return `https://codeql.github.com/codeql-query-help/${language}/${queryId.replaceAll('/', '-')}/`
}

/**
 *
 * @param tags 'maintainability readability external/cwe/cwe-1078 external/cwe/cwe-670 security'
 * @returns ['1078', '670']
 */
function getCWEs(tags: string) {
  const cwes: string[] = []
  for (const tag of tags.split(/\s+/g)) {
    if (tag.startsWith('external/cwe/cwe-')) {
      const cwe = tag.split('-').pop() || ''
      if (cwe) cwes.push(cwe)
    }
  }
  return cwes
}

function testCodeQLPath(options: Options) {
  try {
    const output = execFileSync(options.codeqlPath, ['--version'], { encoding: 'utf-8' })
    if (options.verbose) {
      const matched = output.match(/CodeQL command-line toolchain release ([\d.+]+)/)
      if (matched) {
        console.log('codeql version', chalk.green(matched[0]))
        return true
      }
    }
    return true
  } catch (error) {
    console.error('Could not find codeql executable at', options.codeqlPath)
    if (options.verbose) {
      throw error
    } else {
      console.log(chalk.yellow(`${options.codeqlPath} --version`), 'failed')
      return false
    }
  }
}
