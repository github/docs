import { Client } from '@elastic/elasticsearch'
import { getElasticsearchClient } from '@/search/lib/helpers/get-client'
import { getHighlightConfiguration } from '@/search/lib/get-elasticsearch-results/helpers/elasticsearch-highlight-config'

import type { QueryDslQueryContainer, SearchTotalHits } from '@elastic/elasticsearch/lib/api/types'
import type { AutocompleteSearchResponse } from '@/search/types'
import type {
  AutocompleteMatchQueriesOptions,
  AutocompleteResultsArgs,
  AutocompleteElasticsearchItem,
} from '@/search/lib/get-elasticsearch-results/types'

// Query Elasticsearch for general autocomplete results
export async function getAutocompleteSearchResults({
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
  // When the query is empty, return no results
  if (trimmedQuery === '') {
    return {
      meta: {
        found: {
          value: 0,
          relation: 'eq',
        },
        took: { query_msec: 0, total_msec: new Date().getTime() - t0.getTime() },
        size,
      },
      hits: [],
    }
  } else {
    const matchQueries = getAutocompleteMatchQueries(trimmedQuery, {
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

  const result = await client.search<AutocompleteElasticsearchItem>(searchQuery)

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

function getAutocompleteMatchQueries(query: string, { fuzzy }: AutocompleteMatchQueriesOptions) {
  const BOOST_PHRASE = 4.0
  const BOOST_REGULAR = 2.0
  const BOOST_FUZZY = 0.1

  const matchQueries: QueryDslQueryContainer[] = []
  const isMultiWordQuery = query.includes(' ') || query.includes('-')

  if (isMultiWordQuery) {
    matchQueries.push({
      match_phrase_prefix: {
        term: {
          query,
          boost: BOOST_PHRASE,
        },
      },
    })
  }

  matchQueries.push({
    match_bool_prefix: {
      term: {
        query,
        boost: BOOST_REGULAR,
      },
    },
  })

  if (query.length > fuzzy.minLength && query.length < fuzzy.maxLength) {
    matchQueries.push({
      fuzzy: {
        term: { value: query, boost: BOOST_FUZZY, fuzziness: 'AUTO' },
      },
    })
  }

  return matchQueries
}
