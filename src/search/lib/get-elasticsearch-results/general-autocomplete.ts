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
}: AutocompleteResultsArgs): Promise<AutocompleteSearchResponse> {
  const t0 = new Date()
  const client = getElasticsearchClient() as Client

  const matchQueries = getAutocompleteMatchQueries(query.trim(), {
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
    // Send absolutely minimal from Elasticsearch to here. Less data => faster.
    _source_includes: ['term'],
  }

  const result = await client.search<AutocompleteElasticsearchItem>(searchQuery)

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
