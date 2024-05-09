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
 * Finally, you need to install `@github/cocofix`. This is a private package,
 * so you first need to get the `DOCS_BOT_PAT_WORKFLOW` PAT from the vault and
 * store it in the environment variable `DOCS_BOT_PAT_WORKFLOW`.
 * Then run the following command from the root of this repo:
 *
 * ```sh
 * npm i --no-save '--@github:registry=https://npm.pkg.github.com' '--//npm.pkg.github.com/:_authToken=${DOCS_BOT_PAT_WORKFLOW}' @github/cocofix
 * ```
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
// We don't want to introduce a global dependency on @github/cocofix, so we install it by hand
// as described above and suppress the import warning.
import { getSupportedQueries } from '@github/cocofix/dist/querySuites' // eslint-disable-line import/no-extraneous-dependencies
import { type Language } from '@github/cocofix/dist/codeql' // eslint-disable-line import/no-extraneous-dependencies

/**
 * The list of languages for which autofix support has (publicly) shipped.
 *
 * We don't want to add documentation about autofix support for languages that have not shipped.
 *
 * Note that this is conceptually different from the list of languages for which we support autofix:
 * some languages are supported, but only staff-shipped internally (currently, `go` and `ruby`).
 *
 * Supporting a language is a technical decision, and reflected in the list of supported queries
 * returned by `getSupportedQueries`. Shipping a language, on the other hand, is a product decision,
 * and is implemented by a feature flag in the monolith, so we cannot easily check it here.
 *
 * Instead we hard-code the list of shipped languages here and manually keep it in sync with
 * https://docs.github.com/en/code-security/code-scanning/managing-code-scanning-alerts/about-autofix-for-codeql-code-scanning#supported-languages.
 * This sounds worse than it is, since CodeQL only supports a total of eight languages
 * and we are on track to ship autofix support for all of them in the next few months.
 *
 * Note that we never publicly ship a language for which we don't have autofix support, so if a language
 * has been shipped, we know for sure that it is supported.
 */
const AUTOFIX_SHIPPED_LANGUAGES = ['csharp', 'java', 'javascript', 'python', 'go', 'ruby']

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
  autofixSupport: 'none' | 'default'
}

type QueryExtended = Query & {
  inDefault: boolean
  inExtended: boolean
  inAutofix: boolean
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

  const autofixSupportedQueryIds = await getSupportedQueries(
    'default',
    language as Language,
    'CodeQL',
  )

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
          const autofixSupport = autofixSupportedQueryIds.includes(id) ? 'default' : 'none'

          // Only include queries that have CWEs, since the other queries deal with code scanning
          // metadata and metrics (e.g. counting lines of code or number of files) and have no docs link
          if (cwes.length) {
            if (!(id in queries)) {
              queries[id] = { url, name, packs: [], cwes, autofixSupport }
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

  function decorate(query: Query): QueryExtended {
    return {
      ...query,
      inDefault: query.packs.includes('code-scanning'),
      inExtended: query.packs.includes('security-extended'),
      inAutofix: query.autofixSupport === 'default',
    }
  }

  const entries = Object.values(queries).map(decorate)

  // Spec: "Queries that are both in Default and Extended should come first,
  // in alphabetical order. Followed by the queries that are in Extended only."
  entries.sort((a, b) => {
    if (a.inDefault && !b.inDefault) return -1
    else if (!a.inDefault && b.inDefault) return 1

    if (a.inExtended && !b.inExtended) return -1
    else if (!a.inExtended && b.inExtended) return 1

    return a.name.localeCompare(b.name)
  })

  // Omit the 'Autofix' column if the language has not been shipped
  const includeAutofix = AUTOFIX_SHIPPED_LANGUAGES.includes(language)
  console.warn(`${includeAutofix ? 'Including' : 'Excluding'} 'Autofix' column for ${language}`)
  printQueries(options, entries, includeAutofix)
}

function printQueries(options: Options, queries: QueryExtended[], includeAutofix: boolean) {
  const markdown: string[] = []
  markdown.push('{% rowheaders %}')
  markdown.push('') // blank line
  const header = ['Query name', 'Related CWEs', 'Default', 'Extended']
  if (includeAutofix) {
    header.push('Autofix')
  }
  markdown.push(`| ${header.join(' | ')} |`)
  markdown.push(`| ${header.map(() => '---').join(' | ')} |`)

  const notIncludedOcticon = '{% octicon "x" aria-label="Not included" %}'
  const includedOcticon = '{% octicon "check" aria-label="Included" %}'

  for (const query of queries) {
    const markdownLink = `[${query.name}](${query.url})`
    const defaultIcon = query.inDefault ? includedOcticon : notIncludedOcticon
    const extendedIcon = query.inExtended ? includedOcticon : notIncludedOcticon
    const autofixIcon = query.inAutofix ? includedOcticon : notIncludedOcticon
    const row = [markdownLink, query.cwes.join(', '), defaultIcon, extendedIcon]
    if (includeAutofix) {
      row.push(autofixIcon)
    }
    markdown.push(`| ${row.join(' | ')} |`)
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
