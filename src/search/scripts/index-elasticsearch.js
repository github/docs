#!/usr/bin/env node

// [start-readme]
//
// Creates Elasticsearch index, populates from records,
// moves the index alias, deletes old indexes.
//
// [end-readme]

import fs from 'fs/promises'
import path from 'path'

import { Client, errors } from '@elastic/elasticsearch'
import { program, Option, InvalidArgumentError } from 'commander'
import chalk from 'chalk'
import dotenv from 'dotenv'

import { retryOnErrorTest } from '../../../script/helpers/retry-on-error-test.js'
import { languageKeys } from '#src/languages/lib/languages.js'
import { allVersions } from '#src/versions/lib/all-versions.js'
import statsd from '#src/observability/lib/statsd.js'

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
  .description('Creates Elasticsearch index from records')
  .option('-v, --verbose', 'Verbose outputs')
  .addOption(new Option('-V, --version [VERSION...]', 'Specific versions').choices(allVersionKeys))
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
  .argument('<source-directory>', 'where the indexable files are')
  .parse(process.argv)

main(program.opts(), program.args)

async function main(opts, args) {
  if (!args.length) {
    throw new Error('Must pass the source as the first argument')
  }

  const { verbose, language, notLanguage, elasticsearchUrl } = opts

  if (!elasticsearchUrl && !process.env.ELASTICSEARCH_URL) {
    throw new Error(
      'Must passed the elasticsearch URL option or ' +
        'set the environment variable ELASTICSEARCH_URL',
    )
  }
  let node = elasticsearchUrl || process.env.ELASTICSEARCH_URL

  // Allow the user to lazily set it to `localhost:9200` for example.
  if (!node.startsWith('http') && !node.startsWith('://') && node.split(':').length === 2) {
    node = `http://${node}`
  }

  try {
    const parsed = new URL(node)
    if (!parsed.hostname) throw new Error('no valid hostname')
  } catch (err) {
    console.error(chalk.bold('URL for Elasticsearch not a valid URL', err))
    throw err
  }

  // The notLanguage is useful you want to, for example, index all languages
  // *except* English.
  if (language && notLanguage) {
    throw new Error("Can't combine --language and --not-language")
  }

  if (verbose) {
    console.log(`Connecting to ${chalk.bold(safeUrlDisplay(node))}`)
  }
  const sourceDirectory = args[0]
  try {
    await fs.stat(sourceDirectory)
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error(`The specified directory '${sourceDirectory}' does not exist.`)
    }
    throw error
  }

  try {
    await indexAll(node, sourceDirectory, opts)
  } catch (error) {
    // If any error is thrown from within the SDK, that error object will
    // contain a `Connection` object which, when printed, can reveal the
    // username/password or the base64 Basic auth credentials.
    // So we want to carefully re-throw it so it only contains the minimal
    // information for debugging without exposing the Connection credentials
    // in Actions logs.
    if (error instanceof errors.ElasticsearchClientError) {
      // All ElasticsearchClientError error subclasses have a `name` and
      // `message` but only some have a `meta`.
      if (error.meta) {
        console.error('Error meta: %O', error.meta)
      }
      throw new Error(error.message)
    }
    // If any other error happens that isn't from the elasticsearch SDK,
    // let it bubble up.
    throw error
  }
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

async function indexAll(node, sourceDirectory, opts) {
  const client = new Client({ node })

  const { language, verbose, notLanguage, indexPrefix, staggerSeconds } = opts

  let version
  if ('version' in opts) {
    version = opts.version
    if (process.env.VERSION) {
      console.warn(
        `'version' specified as argument ('${version}') AND environment variable ('${process.env.VERSION}')`,
      )
    }
  } else {
    if (process.env.VERSION && process.env.VERSION !== 'all') {
      version = process.env.VERSION
      if (!allVersionKeys.includes(version)) {
        throw new Error(
          `Environment variable 'VERSION' (${version}) is not recognized. Must be one of ${allVersionKeys}`,
        )
      }
    }
  }
  let versionKeys = allVersionKeys
  // If it came from the `--version` argument parsing, it might be a string
  // or an array of strings because it uses `--version [VERSION...]`.
  if (version) {
    if (Array.isArray(version)) {
      versionKeys = version
    } else {
      versionKeys = [version]
    }
  }

  // This will throw if it can't ping
  await client.ping()

  const languages =
    language || languageKeys.filter((lang) => !notLanguage || !notLanguage.includes(lang))
  if (verbose) {
    console.log(`Indexing on languages ${chalk.bold(languages.join(', '))}`)
  }

  const prefix = indexPrefix ? `${indexPrefix}_` : ''

  for (const language of languages) {
    for (const versionKey of versionKeys) {
      console.log(chalk.yellow(`Indexing ${chalk.bold(versionKey)} in ${chalk.bold(language)}`))
      const indexName = `${prefix}github-docs-${versionKey}-${language}`

      console.time(`Indexing ${indexName}`)
      await indexVersion(client, indexName, versionKey, language, sourceDirectory, verbose)
      console.timeEnd(`Indexing ${indexName}`)
      if (verbose) {
        console.log(`To view index: ${safeUrlDisplay(node + `/${indexName}`)}`)
        console.log(`To search index: ${safeUrlDisplay(node + `/${indexName}/_search`)}`)
      }
      if (staggerSeconds) {
        console.log(`Sleeping for ${staggerSeconds} seconds...`)
        await sleep(1000 * staggerSeconds)
      }
    }
  }
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

// Return '20220719012012' if the current date is
// 2022-07-19T01:20:12.172Z. Note how the 6th month (July) becomes
// '07'. All numbers become 2 character zero-padding strings individually.
function utcTimestamp() {
  const d = new Date()

  return (
    [
      `${d.getUTCFullYear()}`,
      d.getUTCMonth() + 1,
      d.getUTCDate(),
      d.getUTCHours(),
      d.getUTCMinutes(),
      d.getUTCSeconds(),
    ]
      // If it's a number make it a zero-padding 2 character string
      .map((x) => (typeof x === 'number' ? ('0' + x).slice(-2) : x))
      .join('')
  )
}

// Consider moving this to lib
async function indexVersion(
  client,
  indexName,
  version,
  language,
  sourceDirectory,
  verbose = false,
) {
  // Note, it's a bit "weird" that numbered releases versions are
  // called the number but that's the convention the previous
  // search backend used
  const indexVersion = shortNames[version].hasNumberedReleases
    ? shortNames[version].currentRelease
    : shortNames[version].miscBaseName
  const recordsName = `github-docs-${indexVersion}-${language}`

  const records = await loadRecords(recordsName, sourceDirectory)

  const thisAlias = `${indexName}__${utcTimestamp()}`

  // CREATE INDEX
  const settings = {
    analysis: {
      analyzer: {
        // We defined to analyzers. Both based on a "common core" with the
        // `standard` tokenizer. But the second one adds Snowball filter.
        // That means the tokenization of "Dependency naming" becomes
        // `[dependency, naming]` in the explicit one and `[depend, name]`
        // in the Snowball one.
        // We do this to give a chance to boost the more exact spelling a
        // bit higher with the assumption that if the user knew exactly
        // what it was called, we should show that higher.
        // A great use-case of this when users search for keywords that are
        // code words like `dependency-name`.
        text_analyzer_explicit: {
          filter: ['lowercase', 'stop', 'asciifolding'],
          tokenizer: 'standard',
          type: 'custom',
        },
        text_analyzer: {
          filter: ['lowercase', 'stop', 'asciifolding'],
          tokenizer: 'standard',
          type: 'custom',
        },
      },
      filter: {
        // Will later, conditionally, put the snowball configuration here.
      },
    },
  }
  const snowballLanguage = getSnowballLanguage(language)
  if (snowballLanguage) {
    settings.analysis.analyzer.text_analyzer.filter.push('languaged_snowball')
    settings.analysis.filter.languaged_snowball = {
      type: 'snowball',
      language: snowballLanguage,
    }
  } else {
    if (verbose) {
      console.warn(`No snowball language for '${language}'`)
    }
  }

  await client.indices.create({
    index: thisAlias,
    body: {
      mappings: {
        properties: {
          url: { type: 'keyword' },
          title: { type: 'text', analyzer: 'text_analyzer', norms: false },
          title_explicit: { type: 'text', analyzer: 'text_analyzer_explicit', norms: false },
          content: { type: 'text', analyzer: 'text_analyzer' },
          content_explicit: { type: 'text', analyzer: 'text_analyzer_explicit' },
          headings: { type: 'text', analyzer: 'text_analyzer', norms: false },
          headings_explicit: { type: 'text', analyzer: 'text_analyzer_explicit', norms: false },
          breadcrumbs: { type: 'text' },
          popularity: { type: 'float' },
          intro: { type: 'text' },
        },
      },
      settings,
    },
  })

  // POPULATE
  const allRecords = Object.values(records).sort((a, b) => b.popularity - a.popularity)
  const operations = allRecords.flatMap((doc) => {
    const { title, objectID, content, breadcrumbs, headings, intro } = doc
    const contentEscaped = escapeHTML(content)
    const record = {
      url: objectID,
      title,
      title_explicit: title,
      content: contentEscaped,
      content_explicit: contentEscaped,
      breadcrumbs,
      headings,
      headings_explicit: headings,
      // This makes sure the popularities are always greater than 1.
      // Generally the 'popularity' is a ratio where the most popular
      // one of all is 1.0.
      // By making it >=1.0 when we multiply a relevance score,
      // you never get a product of 0.0.
      popularity: doc.popularity + 1,
      intro,
    }
    return [{ index: { _index: thisAlias } }, record]
  })

  // It's important to use `client.bulk.bind(client)` here because
  // `client.bulk` is a meta-function that is attached to the Client
  // class. Internally, it depends on `this.` even though it's a
  // free-standing function. So if called indirectly by the `statsd.asyncTimer`
  // the `this` becomes undefined.
  const timed = statsd.asyncTimer(client.bulk.bind(client), 'search.bulk_index', [
    `version:${version}`,
    `language:${language}`,
  ])
  const bulkOptions = {
    // Default is 'false'.
    // It means that the index is NOT refreshed as documents are inserted.
    // Which makes sense in our case because we do not intend to search on
    // this index until after we've pointed the alias to this new index.
    refresh: false,
    // Default is '1m' but we have no reason *not* to be patient. It's run
    // by a bot on a schedeule (GitHub Actions).
    timeout: '5m',
  }
  const bulkResponse = await timed({ body: operations, ...bulkOptions })

  if (bulkResponse.errors) {
    // Some day, when we're more confident how and why this might happen
    // we can rewrite this code to "massage" the errors better.
    // For now, if it fails, it's "OK". It means we won't be proceeding,
    // an error is thrown in Actions and we don't have to worry about
    // an incompletion index.
    console.error(`Bulk response errors: ${bulkResponse.errors}`)
    throw new Error('Bulk errors happened.')
  }

  const {
    body: { count },
  } = await client.count({ index: thisAlias })
  console.log(`Documents now in ${chalk.bold(thisAlias)}: ${chalk.bold(count.toLocaleString())}`)

  // To perform an atomic operation that creates the new alias and removes
  // the old indexes, we can use the updateAliases API with a body that
  // includes an "actions" array. The array includes the added alias
  // and the removed indexes. If any of the actions fail, none of the operations
  // are performed.
  // https://www.elastic.co/guide/en/elasticsearch/reference/master/indices-aliases.html
  const aliasUpdates = [
    {
      add: {
        index: thisAlias,
        alias: indexName,
      },
    },
  ]
  console.log(`Alias ${indexName} -> ${thisAlias}`)

  // const indices = await client.cat.indices({ format: 'json' })
  const { body: indices } = await retryOnErrorTest(
    (error) => {
      return error instanceof errors.ResponseError && error.statusCode === 404
    },
    () => client.cat.indices({ format: 'json' }),
    {
      // Combined, this is a total of 30 seconds which is not long
      // for an Action that runs based on automation.
      attempts: 10,
      sleepTime: 3000,
      onError: (error, attempts) => {
        console.warn(
          chalk.yellow(
            `Failed to get a list of indexes for '${indexName}' (${error.message}). Will attempt ${attempts} more times.`,
          ),
        )
      },
    },
  )
  for (const index of indices) {
    if (index.index !== thisAlias && index.index.startsWith(indexName)) {
      aliasUpdates.push({ remove_index: { index: index.index } })
      console.log('Deleting index', index.index)
    }
  }
  if (verbose) console.log('Updating alias actions:', aliasUpdates)
  await client.indices.updateAliases({ body: { actions: aliasUpdates } })
}

function escapeHTML(content) {
  return content.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

async function loadRecords(indexName, sourceDirectory) {
  const filePath = path.join(sourceDirectory, `${indexName}-records.json`)
  const payload = await fs.readFile(filePath)
  return JSON.parse(payload)
}

function getSnowballLanguage(language) {
  // Based on https://www.elastic.co/guide/en/elasticsearch/reference/current/analysis-snowball-tokenfilter.html
  // Note, not all languages are supported. So this function might return
  // undefined. That implies that you can't use snowballing.
  return {
    en: 'English',
    fr: 'French',
    es: 'Spanish',
    ru: 'Russian',
    it: 'Italian',
    de: 'German',
    pt: 'Portuguese',
  }[language]
}
