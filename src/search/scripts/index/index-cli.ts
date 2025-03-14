import { program, Option, Command, InvalidArgumentError } from 'commander'
import { errors } from '@elastic/elasticsearch'
import dotenv from 'dotenv'

import { languageKeys } from '@/languages/lib/languages.js'
import { indexGeneralAutocomplete } from './lib/index-general-autocomplete'
import { indexGeneralSearch } from './lib/index-general-search'
import {
  allIndexVersionKeys,
  supportedAutocompletePlanVersions,
  versionToIndexVersionMap,
} from '@/search/lib/elasticsearch-versions'
import { indexAISearchAutocomplete } from './lib/index-ai-search-autocomplete'

// If you optionally have ELASTICSEARCH_URL set in your .env file.
dotenv.config()

program.name('index').description('CLI scripts for indexing Docs data into Elasticsearch')

const allVersionKeysWithAll = [...allIndexVersionKeys, 'all']

const generalAutoCompleteCommand = new Command('general-autocomplete')
  .description('Index for general search autocomplete')
  .addOption(
    new Option('-l, --language <language...>', 'Specific languages(s)').choices(languageKeys),
  )
  .addOption(
    new Option('-v, --version <version...>', 'Specific versions').choices(allVersionKeysWithAll),
  )
  .option('--verbose', 'Verbose output')
  .option('--index-prefix <prefix>', 'Prefix for the index names', '')
  .argument('<data-root>', 'path to the docs-internal-data repo')
  .action(async (dataRepoRoot: string, options) => {
    const languages = options.language ? options.language : languageKeys
    const indexPrefix = options.indexPrefix || ''
    if (!Array.isArray(options.version)) {
      if (typeof options.version === 'undefined') {
        options.version = ['all']
      } else {
        options.version = [options.version]
      }
    }
    let versions = options.version
    if (!versions.length || versions[0] === 'all') {
      versions = supportedAutocompletePlanVersions
    } else {
      versions = versions.map((version: string) => versionToIndexVersionMap[version])
    }
    try {
      await indexGeneralAutocomplete({
        dataRepoRoot,
        languages,
        versions,
        indexPrefix,
      })
    } catch (error: any) {
      if (error instanceof errors.ElasticsearchClientError) {
        if ((error as any)?.meta) {
          console.error('Error meta: %O', (error as any).meta)
        }
      }
      console.error('general-autocomplete indexing error:', error.message)
      process.exit(1)
    }
  })

const generalSearchCommand = new Command('general-search')
  .description(
    'Indexes records for general search. Records should be pre-scraped by the scrape script.',
  )
  .option('-v, --verbose', 'Verbose outputs')
  .addOption(
    new Option('-V, --version [VERSION...]', 'Specific versions').choices(allVersionKeysWithAll),
  )
  .addOption(
    new Option('-l, --language <LANGUAGE...>', 'Which languages to focus on').choices(languageKeys),
  )
  .addOption(
    new Option('--not-language <LANGUAGE...>', 'Specific language to omit').choices(languageKeys),
  )
  .option('-u, --elasticsearch-url <url>', 'If different from $ELASTICSEARCH_URL')
  .option('-p, --index-prefix <prefix>', 'Index string to put before index name')
  .option(
    '-s, --stagger-seconds <seconds>',
    'Number of seconds to sleep between each bulk operation',
    (value) => {
      const parsed = parseInt(value, 10)
      if (isNaN(parsed)) {
        throw new InvalidArgumentError('Not a number.')
      }
      return parsed
    },
  )
  .option(
    '-r, --retries <count>',
    'Number of retry attempts on recoverable network errors',
    (value) => {
      const parsed = parseInt(value, 10)
      if (isNaN(parsed)) {
        throw new InvalidArgumentError('Not a number.')
      }
      return parsed
    },
  )
  .option(
    '--sleep-time <seconds>',
    `Number of seconds to sleep between each retry attempt (defaults to 30)`,
    (value) => {
      const parsed = parseInt(value, 10)
      if (isNaN(parsed)) {
        throw new InvalidArgumentError('Not a number.')
      }
      return parsed
    },
    30,
  )
  .argument('<source-directory>', 'where the indexable files are')
  .action(async (sourceDirectory, options) => {
    try {
      await indexGeneralSearch(sourceDirectory, options)
    } catch (error: any) {
      if (error instanceof errors.ElasticsearchClientError) {
        if ((error as any)?.meta) {
          console.error('Error meta: %O', (error as any).meta)
        }
      }
      console.error('general-search indexing error:', error.message)
      process.exit(1)
    }
  })

const aiSearchAutocompleteCommand = new Command('ai-search-autocomplete')
  .description('Index for AI search autocomplete')
  .addOption(
    new Option(
      '-l, --language <language...>',
      'Specific languages(s). (NOTE: Only english, "en" is currently supported',
    ).choices(['en']),
  )
  .addOption(
    new Option('-v, --version <version...>', 'Specific versions').choices(allVersionKeysWithAll),
  )
  .option('--verbose', 'Verbose output')
  .option('--index-prefix <prefix>', 'Prefix for the index names', '')
  .argument('<data-root>', 'path to the docs-internal-data repo')
  .action(async (dataRepoRoot: string, options) => {
    // In the future, we may want to support multiple languages
    // Currently (since this is an experiment), we only support english
    const languages = ['en']
    const indexPrefix = options.indexPrefix || ''
    if (!Array.isArray(options.version)) {
      if (typeof options.version === 'undefined') {
        options.version = ['all']
      } else {
        options.version = [options.version]
      }
    }
    let versions = options.version
    if (!versions.length || versions[0] === 'all') {
      versions = supportedAutocompletePlanVersions
    } else {
      versions = versions.map((version: string) => versionToIndexVersionMap[version])
    }
    try {
      await indexAISearchAutocomplete({
        dataRepoRoot,
        languages,
        versions,
        indexPrefix,
      })
    } catch (error: any) {
      if (error instanceof errors.ElasticsearchClientError) {
        if ((error as any)?.meta) {
          console.error('Error meta: %O', (error as any).meta)
        }
      }
      console.error('ai-search-autocomplete indexing error:', error.message)
      process.exit(1)
    }
  })

program.addCommand(generalAutoCompleteCommand)
program.addCommand(generalSearchCommand)
program.addCommand(aiSearchAutocompleteCommand)

program.parse(process.argv)
