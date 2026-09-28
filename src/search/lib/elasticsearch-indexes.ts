import languages from '@/languages/lib/languages-server'
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

// The source of truth for Docs Elasticsearch indexes.
//
// There are two top-level categories:
//   1. General search, populated from all of our Docs pages.
//   2. AI autocomplete, populated with human-readable questions from a GPT
//      query in docs-internal-data.
//
// Index names take the form <test_prefix><prefix>_<type>_<version>_<language>,
// e.g. github-docs_general-search_fpt_en. <test_prefix> is "tests_" in tests.
const prefix = 'github-docs'
const indexes: SearchIndexes = {
  generalSearch: {
    prefix,
    type: 'general-search',
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

  if (!(language in languages)) {
    throw new Error(
      `Language ${language} not found in languages for getElasticSearchIndex function.`,
    )
  }

  if (!allIndexVersionKeys.includes(version)) {
    throw new Error(
      `Version '${version}' does not map to a valid version for getElasticSearchIndex function.`,
    )
  }

  // e.g. free-pro-team becomes fpt for the index name
  let indexVersion = versionToIndexVersionMap[version]

  // For AI Search autocomplete, we use the latest GHES version for all GHES versions.
  // This provides AI search functionality across all supported GHES versions without
  // requiring separate indexes for each version.
  if (type === 'aiSearchAutocomplete' && indexVersion.startsWith('ghes')) {
    indexVersion = versionToIndexVersionMap['enterprise-server']
  }

  // In the index-test-fixtures.sh script, we use the tests_ prefix index for testing
  const testPrefix = process.env.NODE_ENV === 'test' ? 'tests_' : ''

  if (manualPrefix && !manualPrefix.endsWith('_')) {
    manualPrefix += '_'
  }

  const indexName = `${testPrefix || manualPrefix}${index.prefix}_${index.type}_${indexVersion}_${language}`
  const indexAlias = `${indexName}__${utcTimestamp()}`

  return { indexName, indexAlias }
}
