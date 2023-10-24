#!/usr/bin/env node

// [start-readme]
//
// See how a piece of text gets turned into tokens by the different
// analyzers.
// Requires that the index exists in Elasticsearch.
//
// Example:
//
//    ./src/search/scripts/analyze-text.js my words to tokenize
//
// [end-readme]

import { Client } from '@elastic/elasticsearch'
import { program, Option } from 'commander'
import chalk from 'chalk'
import dotenv from 'dotenv'

import { languageKeys } from '#src/languages/lib/languages.js'
import { allVersions } from '#src/versions/lib/all-versions.js'

// Now you can optionally have set the ELASTICSEARCH_URL in your .env file.
dotenv.config()

// Create an object that maps the "short name" of a version to
// all information about it. E.g
//
//   {
//    'ghes-3.5': {
//       hasNumberedReleases: true,
//       currentRelease: '3.5',
//       version: 'enterprise-server@3.5',
//       miscBaseName: 'ghes-'
//       ...
//    },
//    ...
//
// We need this later to be able to map CLI arguments to what the
// records are called when found on disk.
const shortNames = Object.fromEntries(
  Object.values(allVersions).map((info) => {
    const shortName = info.hasNumberedReleases
      ? info.miscBaseName + info.currentRelease
      : info.miscBaseName
    return [shortName, info]
  }),
)

const allVersionKeys = Object.keys(shortNames)

program
  .description('Analyze text into tokens')
  .option('-v, --verbose', 'Verbose outputs')
  .addOption(new Option('-V, --version <VERSION>', 'Specific version').choices(allVersionKeys))
  .addOption(
    new Option('-l, --language <LANGUAGE>', 'Which language to focus on').choices(languageKeys),
  )
  .option('-u, --elasticsearch-url <url>', 'If different from $ELASTICSEARCH_URL')
  .argument('<text>', 'text to tokenize')
  .parse(process.argv)

main(program.opts(), program.args)

async function main(opts, args) {
  const texts = [args.join(' ')]
  if (!opts.elasticsearchUrl && !process.env.ELASTICSEARCH_URL) {
    throw new Error(
      'Must passed the elasticsearch URL option or ' +
        'set the environment variable ELASTICSEARCH_URL',
    )
  }
  let node = opts.elasticsearchUrl || process.env.ELASTICSEARCH_URL

  // Allow the user to lazily set it to `localhost:9200` for example.
  if (!node.startsWith('http') && !node.startsWith('://') && node.split(':').length === 2) {
    node = `http://${node}`
  }

  try {
    const parsed = new URL(node)
    if (!parsed.hostname) throw new Error('no valid hostname')
  } catch (err) {
    console.error(chalk.bold('URL for Elasticsearch not a valid URL', err))
    return
  }

  const { verbose, language, notLanguage } = opts

  // The notLanguage is useful you want to, for example, index all languages
  // *except* English.
  if (language && notLanguage) {
    throw new Error("Can't combine --language and --not-language")
  }

  if (verbose) {
    console.log(`Connecting to ${chalk.bold(safeUrlDisplay(node))}`)
  }

  const client = new Client({ node })

  // This will throw if it can't ping
  await client.ping()

  const versionKey = opts.version || 'dotcom'
  if (verbose) {
    console.log(`Analyzing on version ${chalk.bold(versionKey)}`)
  }
  const languageKey = opts.language || 'en'
  if (verbose) {
    console.log(`Analyzing on language ${chalk.bold(languageKey)}`)
  }

  const { indexPrefix } = opts
  const prefix = indexPrefix ? `${indexPrefix}_` : ''

  const indexName = `${prefix}github-docs-${versionKey}-${languageKey}`
  console.log(chalk.yellow(`Analyzing in ${chalk.bold(indexName)}`))
  await analyzeVersion(client, texts, indexName, verbose)
}

function safeUrlDisplay(url) {
  const parsed = new URL(url)
  if (parsed.password) {
    parsed.password = '***'
  }
  if (parsed.username) {
    parsed.username = parsed.username.slice(0, 4) + '***'
  }
  return parsed.toString()
}
async function analyzeVersion(client, texts, indexName, verbose = false) {
  for (const text of texts) {
    console.log(`RAW TEXT: 〝${chalk.italic(text)}〞`)
    for (const analyzer of ['text_analyzer_explicit', 'text_analyzer', 'standard']) {
      console.log('ANALYZER:', chalk.bold(analyzer))
      const response = await client.indices.analyze({
        index: indexName,
        body: { analyzer, text },
      })
      if (response.statusCode !== 200) {
        console.warn(response)
        throw new Error(`${response.statusCode} on ${indexName}`)
      }
      const {
        body: { tokens },
      } = response
      const tokenWords = tokens.map((token) => token.token)
      console.log(tokenWords)
    }
  }
}
