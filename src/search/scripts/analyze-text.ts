// Shows how different analyzers tokenize text. Requires an Elasticsearch index.
// Usage: npm run analyze-text -- -V dotcom -l en "The name of the wind"

import { Client } from '@elastic/elasticsearch'
import { Command, Option } from 'commander'
import chalk from 'chalk'
import dotenv from 'dotenv'

import { languageKeys } from '@/languages/lib/languages-server'
import { allVersions } from '@/versions/lib/all-versions'

import type { estypes } from '@elastic/elasticsearch'

// Reads ELASTICSEARCH_URL from .env when the shell environment lacks it.
dotenv.config()

// Collects the supported short CLI version names so Commander can validate -V input.
const shortNames: Record<string, (typeof allVersions)[keyof typeof allVersions]> =
  Object.fromEntries(
    Object.values(allVersions).map((info) => {
      const shortName = info.hasNumberedReleases
        ? `${info.miscBaseName}${info.currentRelease}`
        : info.miscBaseName
      return [shortName, info]
    }),
  )

const allVersionKeys: string[] = Object.keys(shortNames)

interface Options {
  verbose?: boolean
  version?: string
  language?: string
  notLanguage?: string
  elasticsearchUrl?: string
  indexPrefix?: string
}

const program = new Command()

program
  .description('Analyze text into tokens')
  .option('-v, --verbose', 'Verbose outputs')
  .addOption(new Option('-V, --version <VERSION>', 'Specific version').choices(allVersionKeys))
  .addOption(
    new Option('-l, --language <LANGUAGE>', 'Which language to focus on').choices(languageKeys),
  )
  .option('--not-language <LANGUAGE>', 'Exclude a specific language')
  .option('-u, --elasticsearch-url <url>', 'If different from $ELASTICSEARCH_URL')
  .option('--index-prefix <PREFIX>', 'Prefix for the index name')
  .argument('<text>', 'text to tokenize')
  .parse(process.argv)

const options = program.opts<Options>()
const args: string[] = program.args

try {
  await main(options, args)
} catch (err) {
  console.error(chalk.red('Error:'), err)
  process.exit(1)
}

async function main(opts: Options, textArgs: string[]): Promise<void> {
  const texts = [textArgs.join(' ')]
  if (!opts.elasticsearchUrl && !process.env.ELASTICSEARCH_URL) {
    throw new Error(
      'Must pass the elasticsearch URL option or ' +
        'set the environment variable ELASTICSEARCH_URL',
    )
  }
  let node = opts.elasticsearchUrl || process.env.ELASTICSEARCH_URL!

  // Add http:// to host:port inputs such as localhost:9200.
  if (!node.startsWith('http') && !node.startsWith('://') && node.split(':').length === 2) {
    node = `http://${node}`
  }

  try {
    const parsed = new URL(node)
    if (!parsed.hostname) throw new Error('No valid hostname')
  } catch (err) {
    console.error(chalk.bold('URL for Elasticsearch not a valid URL'), err)
    return
  }

  const { verbose, language, notLanguage } = opts

  if (language && notLanguage) {
    throw new Error("Can't combine --language and --not-language")
  }

  if (verbose) {
    console.log(`Connecting to ${chalk.bold(safeUrlDisplay(node))}`)
  }

  const client = new Client({ node })

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
  await analyzeVersion(client, texts, indexName)
}

function safeUrlDisplay(url: string): string {
  const parsed = new URL(url)
  if (parsed.password) {
    parsed.password = '***'
  }
  if (parsed.username) {
    parsed.username = `${parsed.username.slice(0, 4)}***`
  }
  return parsed.toString()
}

async function analyzeVersion(client: Client, texts: string[], indexName: string): Promise<void> {
  for (const text of texts) {
    console.log(`RAW TEXT: 〝${chalk.italic(text)}〞`)
    for (const analyzer of ['text_analyzer_explicit', 'text_analyzer', 'standard']) {
      console.log('ANALYZER:', chalk.bold(analyzer))
      const response = await client.indices.analyze({
        index: indexName,
        body: { analyzer, text },
      })

      const tokens: estypes.IndicesAnalyzeAnalyzeToken[] | undefined = response.tokens
      const tokenWords: string[] = tokens?.map((token) => token.token) || []
      console.log(tokenWords)
    }
  }
}
