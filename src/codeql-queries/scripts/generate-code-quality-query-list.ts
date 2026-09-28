// Generates reusable Markdown listing code quality queries for one language, with categories.
// Requires a local github/codeql clone and a CodeQL CLI executable.
// Set up the clone with git clone git@github.com:github/codeql.git /tmp/codeql.
// Install the CLI with gh extension install github/gh-codeql, then gh codeql set-channel nightly.
// Run gh codeql version to find the installed codeql path.
// Example:
//   npm run generate-code-quality-query-list -- \
//     --codeql-path ~/.local/share/gh/extensions/gh-codeql/dist/nightly/codeql-bundle-*/codeql \
//     --codeql-dir /tmp/codeql python | tee /tmp/python.md
// Inspect the generated Markdown with less /tmp/python.md.

import fs from 'fs'
import { execFileSync } from 'child_process'

import chalk from 'chalk'
import { program } from 'commander'

program
  .description('Generate a reusable Markdown for code quality queries by language')
  .option('--verbose', 'Verbose outputs')
  .option('--codeql-path <path>', 'path to the codeql executable', 'codeql')
  .option('--codeql-dir <path>', 'path to the codeql executable', '.codeql/')
  .option('-o, --output-file <path>', 'output file path (default: stdout)', 'stdout')
  .argument('<language>', 'for example java')
  .parse(process.argv)

type Options = {
  codeqlPath: string
  codeqlDir: string
  outputFile: string
  verbose: boolean
}

type QueryMetadata = {
  id?: string
  name?: string
  tags?: string
  severity?: string
  problem?: {
    severity?: string
  }
}

type Query = {
  name: string
  url: string
  categories: string[]
  severity: string
}

type QueryExtended = Query & {
  primaryCategory: string
}

const opts = program.opts()
main(
  {
    codeqlPath: opts.codeqlPath,
    codeqlDir: opts.codeqlDir,
    outputFile: opts.outputFile,
    verbose: Boolean(opts.verbose),
  },
  program.args[0],
)

async function main(options: Options, language: string) {
  if (options.verbose && options.outputFile === 'stdout') {
    console.warn(chalk.yellow('Verbose mode is on but output is going to stdout'))
  }

  if (!testCodeQLPath(options)) {
    process.exit(1)
  }

  const queries: {
    [id: string]: Query
  } = {}

  const languagePack = `${language}-code-quality.qls`
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
      const { id, name, tags, severity } = metadata
      if (id && name) {
        const categories = getCategories(tags || '')
        const url = getDocsLink(language, id)

        // Category-less queries have no code quality docs row.
        if (categories.length) {
          queries[id] = { url, name, categories, severity: severity || 'N/A' }
        } else {
          if (options.verbose) {
            console.log(chalk.dim(`Skipping ${id} because it has no categories`))
          }
        }
      }
    }
  }

  function decorate(query: Query): QueryExtended {
    // Maintainability outranks reliability for table sorting.
    const primaryCategory = query.categories.includes('maintainability')
      ? 'maintainability'
      : query.categories.includes('reliability')
        ? 'reliability'
        : query.categories[0] || ''

    return {
      ...query,
      primaryCategory,
    }
  }

  const entries = Object.values(queries).map(decorate)

  // Sort by primary category, then alphabetically by name.
  entries.sort((a, b) => {
    if (a.primaryCategory === 'maintainability' && b.primaryCategory !== 'maintainability')
      return -1
    else if (a.primaryCategory !== 'maintainability' && b.primaryCategory === 'maintainability')
      return 1

    if (a.primaryCategory === 'reliability' && b.primaryCategory !== 'reliability') return -1
    else if (a.primaryCategory !== 'reliability' && b.primaryCategory === 'reliability') return 1

    return a.name.localeCompare(b.name)
  })

  printQueries(options, entries)
}

function printQueries(options: Options, queries: QueryExtended[]) {
  const markdown: string[] = []
  markdown.push('{% rowheaders %}')
  markdown.push('')
  const header = ['Query name', 'Category', 'Severity']
  markdown.push(`| ${header.join(' | ')} |`)
  markdown.push(`| ${header.map(() => '---').join(' | ')} |`)

  for (const query of queries) {
    const markdownLink = `[${query.name}](${query.url})`
    const categoryDisplay = query.categories
      .map((cat) => cat.charAt(0).toUpperCase() + cat.slice(1))
      .join(', ')
    const severityDisplay = query.severity.charAt(0).toUpperCase() + query.severity.slice(1)
    const row = [markdownLink, categoryDisplay, severityDisplay]
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

  // CodeQL emits severity through several metadata shapes, depending on the query source.
  const severity =
    parsed.problem?.severity || // Nested: { problem: { severity: "error" } }
    parsed['@problem']?.severity || // Nested with @: { "@problem": { severity: "error" } }
    parsed['@problem.severity'] || // Direct key: { "@problem.severity": "error" }
    parsed['problem.severity'] || // Direct key without @: { "problem.severity": "error" }
    parsed.severity || // Simple: { severity: "error" }
    parsed['@severity'] // With @: { "@severity": "error" }

  if (options.verbose) {
    // Verbose mode logs metadata keys once to avoid noisy output.
    if (!getMetadata.shownKeys) {
      console.log(chalk.yellow('Available metadata keys:'), Object.keys(parsed))
      if (parsed.problem) {
        console.log(chalk.yellow('Available problem keys:'), Object.keys(parsed.problem))
      }
      if (parsed['@problem']) {
        console.log(chalk.yellow('Available @problem keys:'), Object.keys(parsed['@problem']))
      }
      getMetadata.shownKeys = true
    }
    if (severity) {
      console.log(chalk.dim(`Query ${parsed.id} has severity: ${severity}`))
    } else {
      console.log(chalk.red(`Query ${parsed.id} has NO severity found`))
      console.log(chalk.red('Available keys for this query:'), Object.keys(parsed))
    }
  }

  return {
    ...parsed,
    severity,
  }
}

getMetadata.shownKeys = false

// Example: cpp and external-entity-expansion become
// https://codeql.github.com/codeql-query-help/cpp/cpp-external-entity-expansion/
function getDocsLink(language: string, queryId: string) {
  return `https://codeql.github.com/codeql-query-help/${language}/${queryId.replaceAll('/', '-')}/`
}

// Example tags with maintainability and reliability return those categories in source order.
function getCategories(tags: string) {
  const categories: string[] = []
  for (const tag of tags.split(/\s+/g)) {
    if (tag === 'maintainability' || tag === 'reliability') {
      categories.push(tag)
    }
  }
  return categories
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
