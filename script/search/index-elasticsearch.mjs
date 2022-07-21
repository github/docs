#!/usr/bin/env node

// [start-readme]
//
// Creates Elasticsearch index, populates from records,
// moves the index alias, deletes old indexes.
//
// [end-readme]

import fs from 'fs/promises'
import path from 'path'

import { Client } from '@elastic/elasticsearch'
import { program, Option } from 'commander'
import chalk from 'chalk'

import { languageKeys } from '../../lib/languages.js'
import { allVersions } from '../../lib/all-versions.js'
import { decompress } from '../../lib/search/compress.js'

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
  })
)

const allVersionKeys = Object.keys(shortNames)

const DEFAULT_SOURCE_DIRECTORY = path.join('lib', 'search', 'indexes')

program
  .description('Creates Elasticsearch index from records')
  .option('-v, --verbose', 'Verbose outputs')
  .addOption(new Option('-V, --version <VERSION...>', 'Specific versions').choices(allVersionKeys))
  .addOption(
    new Option('-l, --language <LANGUAGE...>', 'Which languages to focus on').choices(languageKeys)
  )
  .addOption(
    new Option('--not-language <LANGUAGE...>', 'Specific language to omit').choices(languageKeys)
  )
  .option('-u, --elasticsearch-url <url>', 'If different from $ELASTICSEARCH_URL')
  .option(
    '-s, --source-directory <DIRECTORY>',
    `Directory where records files are (default ${DEFAULT_SOURCE_DIRECTORY})`
  )
  .parse(process.argv)

main(program.opts())

async function main(opts) {
  if (!opts.elasticsearchUrl && !process.env.ELASTICSEARCH_URL) {
    throw new Error(
      'Must passed the elasticsearch URL option or ' +
        'set the environment variable ELASTICSEARCH_URL'
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
  const sourceDirectory = opts.sourceDirectory || DEFAULT_SOURCE_DIRECTORY
  try {
    await fs.stat(sourceDirectory)
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error(`The specified directory '${sourceDirectory}' does not exist.`)
    }
    throw error
  }

  const client = new Client({
    node,
    sniffOnStart: true,
  })

  // This will throw if it can't ping
  await client.ping()

  const versionKeys = opts.version || allVersionKeys
  const languages =
    opts.language || languageKeys.filter((lang) => !notLanguage || !notLanguage.includes(lang))
  if (verbose) {
    console.log(`Indexing on languages ${chalk.bold(languages.join(', '))}`)
  }

  for (const language of languages) {
    for (const versionKey of versionKeys) {
      console.log(chalk.yellow(`Indexing ${chalk.bold(versionKey)} in ${chalk.bold(language)}`))
      const indexName = `github-docs-${versionKey}-${language}`

      console.time(`Indexing ${indexName}`)
      await indexVersion(client, indexName, versionKey, language, sourceDirectory, verbose)
      console.timeEnd(`Indexing ${indexName}`)
      if (verbose) {
        console.log(`To view index: ${safeUrlDisplay(node + `/${indexName}`)}`)
        console.log(`To search index: ${safeUrlDisplay(node + `/${indexName}/_search`)}`)
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
  verbose = false
) {
  // Note, it's a bit "weird" that numbered releases versions are
  // called the number but that's how the lib/search/indexes
  // files are named at the moment.
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
    mappings: {
      properties: {
        url: { type: 'keyword' },
        title: { type: 'text', analyzer: 'text_analyzer', norms: false },
        title_autocomplete: {
          type: 'search_as_you_type',
          doc_values: false,
          max_shingle_size: 3,
        },
        content: { type: 'text', analyzer: 'text_analyzer' },
        headings: { type: 'text' },
        breadcrumbs: { type: 'text' },
        topics: { type: 'text' },
        popularity: { type: 'float' },
      },
    },
    settings,
  })

  // POPULATE
  const operations = Object.values(records).flatMap((doc) => {
    const { title, objectID, content, breadcrumbs, headings, topics } = doc
    const record = {
      url: objectID,
      title,
      title_autocomplete: title,
      content,
      breadcrumbs,
      headings,
      topics: topics.filter(Boolean),
      // This makes sure the popularities are always greater than 1.
      // Generally the 'popularity' is a ratio where the most popular
      // one of all is 1.0.
      // By making it >=1.0 when we multiply a relevance score,
      // you never get a product of 0.0.
      popularity: doc.popularity + 1,
    }
    return [{ index: { _index: thisAlias } }, record]
  })

  const bulkResponse = await client.bulk({ refresh: true, operations })

  if (bulkResponse.errors) {
    // Some day, when we're more confident how and why this might happen
    // we can rewrite this code to "massage" the errors better.
    // For now, if it fails, it's "OK". It means we won't be proceeding,
    // an error is thrown in Actions and we don't have to worry about
    // an incompletion index.
    console.error(bulkResponse.errors)
    throw new Error('Bulk errors happened.')
  }

  const { count } = await client.count({ index: thisAlias })
  console.log(`Documents now in ${chalk.bold(thisAlias)}: ${chalk.bold(count.toLocaleString())}`)

  // POINT THE ALIAS
  await client.indices.putAlias({
    index: thisAlias,
    name: indexName,
  })
  console.log(`Alias ${indexName} -> ${thisAlias}`)

  // DELETE ALL OTHER OLDER INDEXES
  const indices = await client.cat.indices({ format: 'json' })
  for (const index of indices) {
    if (index.index !== thisAlias && index.index.startsWith(indexName)) {
      await client.indices.delete({ index: index.index })
      console.log('Deleted', index.index)
    }
  }
}

async function loadRecords(indexName, sourceDirectory) {
  // First try looking for the `$indexName-records.json.br` file.
  // If that doens't work, look for the `$indexName-records.json` one.
  try {
    const filePath = path.join(sourceDirectory, `${indexName}-records.json.br`)
    // Do not set to 'utf8' on file reads
    const payload = await fs.readFile(filePath).then(decompress)
    return JSON.parse(payload)
  } catch (error) {
    if (error.code === 'ENOENT') {
      const filePath = path.join(sourceDirectory, `${indexName}-records.json`)
      const payload = await fs.readFile(filePath)
      return JSON.parse(payload)
    }
    throw error
  }
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
