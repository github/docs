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

// Docs Elasticsearch indexes have two categories: general search, populated
// from all Docs pages, and AI autocomplete, populated with human-readable
// questions from a GPT query in docs-internal-data.
//
// Index names take the form <test_prefix><prefix>_<type>_<version>_<language>,
// for example github-docs_general-search_fpt_en. Tests use tests_ as
// <test_prefix>.
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

  // free-pro-team maps to fpt in index names.
  let indexVersion = versionToIndexVersionMap[version]

  // AI autocomplete shares the latest GHES index across all supported GHES versions.
  if (type === 'aiSearchAutocomplete' && indexVersion.startsWith('ghes')) {
    indexVersion = versionToIndexVersionMap['enterprise-server']
  }

  // index-test-fixtures.sh expects the tests_ prefix.
  const testPrefix = process.env.NODE_ENV === 'test' ? 'tests_' : ''

  if (manualPrefix && !manualPrefix.endsWith('_')) {
    manualPrefix += '_'
  }

  const indexName = `${testPrefix || manualPrefix}${index.prefix}_${index.type}_${indexVersion}_${language}`
  const indexAlias = `${indexName}__${utcTimestamp()}`

  return { indexName, indexAlias }
}
