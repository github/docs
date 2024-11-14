import { Client } from '@elastic/elasticsearch'
import { getElasticsearchClient } from '@/search/lib/helpers/get-client'
import { getHighlightConfiguration } from '@/search/lib/get-elasticsearch-results/helpers/elasticsearch-highlight-config'

import type { AutocompleteSearchResponse } from '@/search/types'
import type {
  AutocompleteMatchQueriesOptions,
  AutocompleteResultsArgs,
} from '@/search/lib/get-elasticsearch-results/types'
import type { QueryDslQueryContainer, SearchTotalHits } from '@elastic/elasticsearch/lib/api/types'

// Query Elasticsearch for AI Search autocomplete results
export async function getAISearchAutocompleteResults({
  indexName,
  query,
  size,
}: AutocompleteResultsArgs): Promise<AutocompleteSearchResponse> {
  const t0 = new Date()
  const client = getElasticsearchClient() as Client

  const matchQueries = getAISearchAutocompleteMatchQueries(query.trim(), {
    fuzzy: {
      minLength: 3,
      maxLength: 20,
    },
  })
  const matchQuery = {
    bool: {
      should: matchQueries,
    },
  }

  const highlight = getHighlightConfiguration(query, ['term'])

  const searchQuery = {
    index: indexName,
    highlight,
    size,
    query: matchQuery,
    _source_includes: ['term'],
  }

  const result = await client.search<{ term: string }>(searchQuery)

  const hitsAll = result.hits
  const hits = hitsAll.hits.map((hit) => ({
    term: hit._source?.term,
    highlights: (hit.highlight && hit.highlight.term) || [],
  }))

  return {
    meta: {
      found: hitsAll.total as SearchTotalHits,
      took: { query_msec: result.took, total_msec: new Date().getTime() - t0.getTime() },
      size,
    },
    hits,
  }
}

function getAISearchAutocompleteMatchQueries(
  query: string,
  { fuzzy }: AutocompleteMatchQueriesOptions,
) {
  const BOOST_PHRASE = 4.0
  const BOOST_REGULAR = 2.0
  const BOOST_PREFIX = 1.0
  const BOOST_FUZZY = 0.1

  const matchQueries: QueryDslQueryContainer[] = []

  // Use match_phrase for exact term matches
  matchQueries.push({
    match_phrase: {
      term: {
        query,
        boost: BOOST_PHRASE,
        slop: 1, // Allows minor word reordering
      },
    },
  })

  // Use match for general matching
  matchQueries.push({
    match: {
      term: {
        query,
        boost: BOOST_PREFIX,
      },
    },
  })

  // Match phrase prefix for partial term matches
  matchQueries.push({
    match_phrase_prefix: {
      term: {
        query,
        boost: BOOST_PREFIX,
      },
    },
  })
  matchQueries.push({
    match_bool_prefix: {
      term: {
        query,
        boost: BOOST_REGULAR,
      },
    },
  })

  // Add fuzzy matching for typos and variations
  if (query.length > fuzzy.minLength && query.length < fuzzy.maxLength) {
    matchQueries.push({
      fuzzy: {
        term: {
          value: query,
          boost: BOOST_FUZZY,
          fuzziness: 'AUTO',
        },
      },
    })
  }

  return matchQueries
}
