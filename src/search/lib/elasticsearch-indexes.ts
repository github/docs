import languages from '@/languages/lib/languages.js'
import { utcTimestamp } from '@/search/lib/helpers/time'
import { allIndexVersionKeys, versionToIndexVersionMap } from '@/search/lib/elasticsearch-versions'

import type { SearchTypes } from '@/search/types'

export type SearchIndexes = {
  [key in SearchTypes]: SearchIndex
}

export type SearchIndex = {
  prefix: string
  type: string
}

/* Elasticsearch uses indexes to group categories of data

  We currently have 3 top-level categories of indexes:
    1. General search: This is populated using data from all of our Docs pages
    2. General autocomplete: This is populated using analytics search history in docs-internal-data
    3. AI autocomplete: This is populated with human-readable questions using a GPT query in docs-internal-data

  This file is intended to be the source of truth for Docs Elasticsearch indexes.

  Indexes are in the form:
    <test_prefix><prefix>-<type>-<version>-<language>
    e.g. github-docs-general-search-fpt-en

  <test-prefix> might be "tests_" for tests
*/
const prefix = 'github-docs'
const indexes: SearchIndexes = {
  generalSearch: {
    prefix,
    type: 'general-search',
  },
  generalAutocomplete: {
    prefix,
    type: 'general-autocomplete',
  },
  aiSearchAutocomplete: {
    prefix,
    type: 'ai-search-autocomplete',
  },
}

// Source of truth for determining the index name for the Elastic Search index given a version and language
export function getElasticSearchIndex(
  type: SearchTypes,
  version: string,
  language: string,
  manualPrefix = '',
): {
  indexName: string
  indexAlias: string
} {
  if (!(type in indexes)) {
    throw new Error(`Type ${type} not found in indexes for getElasticSearchIndex function.`)
  }
  const index = indexes[type] as SearchIndex

  // Validate language
  if (!(language in languages)) {
    throw new Error(
      `Language ${language} not found in languages for getElasticSearchIndex function.`,
    )
  }

  // Validate version
  if (!allIndexVersionKeys.includes(version)) {
    throw new Error(
      `Version '${version}' does not map to a valid version for getElasticSearchIndex function.`,
    )
  }

  // e.g. free-pro-team becomes fpt for the index name
  const indexVersion = versionToIndexVersionMap[version]

  // In the index-test-fixtures.sh script, we use the tests_ prefix index for testing
  const testPrefix = process.env.NODE_ENV === 'test' ? 'tests_' : ''

  // If a manual prefix is provided, append an underscore to it
  if (manualPrefix && !manualPrefix.endsWith('_')) {
    manualPrefix += '_'
  }

  const indexName = `${testPrefix || manualPrefix}${index.prefix}_${index.type}_${indexVersion}_${language}`
  const indexAlias = `${indexName}__${utcTimestamp()}`

  return { indexName, indexAlias }
}
