// Generates reusable Markdown listing CodeQL code scanning queries for one language, with CWEs.
// Requires a local github/codeql clone and a CodeQL CLI executable.
// Set up the clone with git clone git@github.com:github/codeql.git /tmp/codeql.
// Install the CLI with gh extension install github/gh-codeql, then gh codeql set-channel nightly.
// Run gh codeql version to find the installed codeql path.
// Also requires @github/cocofix, installed locally with DOCS_BOT_PAT_BASE from the vault:
//   npm i --no-save '--@github:registry=https://npm.pkg.github.com' \
//     '--//npm.pkg.github.com/:_authToken=${DOCS_BOT_PAT_BASE}' @github/cocofix
// Example:
//   npm run generate-code-scanning-query-list -- \
//     --codeql-path ~/.local/share/gh/extensions/gh-codeql/dist/nightly/codeql-bundle-*/codeql \
//     --codeql-dir /tmp/codeql python | tee /tmp/python.md
// Inspect the generated Markdown with less /tmp/python.md.

import fs from 'fs'
import { execFileSync } from 'child_process'

import chalk from 'chalk'
import { program } from 'commander'
// eslint-disable-next-line import/no-unresolved -- @github/cocofix stays manual to avoid a global dependency
import { getSupportedQueries } from '@github/cocofix/dist/querySuites'
import type { Language } from 'codeql-ts'

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

          // CWE-less queries cover metadata or metrics and have no docs link.
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

  // Default-and-Extended queries sort before Extended-only queries; each group sorts by name.
  entries.sort((a, b) => {
    if (a.inDefault && !b.inDefault) return -1
    else if (!a.inDefault && b.inDefault) return 1

    if (a.inExtended && !b.inExtended) return -1
    else if (!a.inExtended && b.inExtended) return 1

    return a.name.localeCompare(b.name)
  })

  printQueries(options, entries)
}

function printQueries(options: Options, queries: QueryExtended[]) {
  const markdown: string[] = []
  markdown.push('{% rowheaders %}')
  markdown.push('')
  const header = [
    'Query name',
    'Related CWEs',
    'Default',
    'Extended',
    '{% data variables.copilot.copilot_autofix_short %}',
  ]
  markdown.push(`| ${header.join(' | ')} |`)
  markdown.push(`| ${header.map(() => '---').join(' | ')} |`)

  const notIncludedOcticon = '{% octicon "x" aria-label="Not included" %}'
  const includedOcticon = '{% octicon "check" aria-label="Included" %}'

  for (const query of queries) {
    const markdownLink = `[${query.name}](${query.url})`
    const defaultIcon = query.inDefault ? includedOcticon : notIncludedOcticon
    const extendedIcon = query.inExtended ? includedOcticon : notIncludedOcticon
    const autofixIcon = query.inAutofix ? includedOcticon : notIncludedOcticon
    const row = [markdownLink, query.cwes.join(', '), defaultIcon, extendedIcon, autofixIcon]
    markdown.push(`| ${row.join(' | ')} |`)
  }
  markdown.push('')
  markdown.push('{% endrowheaders %}')
  markdown.push('')

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

// Example: cpp and external-entity-expansion become
// https://codeql.github.com/codeql-query-help/cpp/cpp-external-entity-expansion/
function getDocsLink(language: string, queryId: string) {
  return `https://codeql.github.com/codeql-query-help/${language}/${queryId.replaceAll('/', '-')}/`
}

// Example tags with external/cwe/cwe-1078 and external/cwe/cwe-670 return 1078 and 670.
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
