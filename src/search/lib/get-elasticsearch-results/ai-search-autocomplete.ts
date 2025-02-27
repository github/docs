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
  debug = false,
}: AutocompleteResultsArgs): Promise<AutocompleteSearchResponse> {
  const t0 = new Date()
  const client = getElasticsearchClient() as Client

  let searchQuery: any = {
    index: indexName,
    size,
    // Send absolutely minimal from Elasticsearch to here. Less data => faster.
    _source_includes: ['term'],
  }

  const trimmedQuery = query.trim()
  // When the query is empty, we want to return the top `size` most popular terms
  if (trimmedQuery === '') {
    searchQuery.query = { match_all: {} }
    searchQuery.sort = [{ popularity: { order: 'desc' } }]
  } else {
    const matchQueries = getAISearchAutocompleteMatchQueries(trimmedQuery, {
      fuzzy: {
        minLength: 3,
        maxLength: 20,
      },
    })
    const matchQuery: QueryDslQueryContainer = {
      bool: {
        should: matchQueries,
      },
    }

    searchQuery.query = matchQuery
    searchQuery.highlight = getHighlightConfiguration(trimmedQuery, ['term'])
  }

  const result = await client.search<{ term: string }>(searchQuery)

  const hitsAll = result.hits
  const hits = hitsAll.hits.map((hit) => ({
    term: hit._source?.term,
    highlights: (hit.highlight && hit.highlight.term) || [],
    ...(debug && {
      score: hit._score ?? 0.0,
      es_url:
        process.env.NODE_ENV !== 'production'
          ? `http://localhost:9200/${indexName}/_doc/${hit._id}`
          : '',
    }),
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
