import { getElasticsearchClient } from '@/search/lib/helpers/get-client'
import { DEFAULT_HIGHLIGHT_FIELDS } from '@/search/lib/search-request-params/search-params-objects'
import { getHighlightConfiguration } from '@/search/lib/get-elasticsearch-results/helpers/elasticsearch-highlight-config'

import type { estypes } from '@elastic/elasticsearch'
import type {
  AdditionalIncludes,
  ComputedSearchQueryParamsMap,
} from '@/search/lib/search-request-params/types'
import type { SearchAggregation, GeneralSearchHit, GeneralSearchResponse } from '@/search/types'

const MAX_AGGREGATE_SIZE = 30

const isDevMode: boolean = process.env.NODE_ENV !== 'production'

type getGeneralSearchResultsParams = {
  indexName: string
  searchParams: ComputedSearchQueryParamsMap['generalSearch']
}

export async function getGeneralSearchResults(
  args: getGeneralSearchResultsParams,
): Promise<GeneralSearchResponse> {
  const {
    indexName,
    searchParams: {
      highlights,
      include,
      toplevel,
      aggregate,
      autocomplete,
      query,
      page,
      size,
      debug,
      sort,
    },
  } = args

  if (include) {
    if (!Array.isArray(include)) {
      throw new Error("'include' has to be an array")
    }
    if (!include.every((value) => typeof value === 'string')) {
      throw new Error("Every entry in the 'include' must be a string")
    }
  }
  if (toplevel) {
    if (!Array.isArray(toplevel)) {
      throw new Error("'toplevel' has to be an array")
    }
    if (!toplevel.every((value) => typeof value === 'string')) {
      throw new Error("Every entry in the 'toplevel' must be a string")
    }
  }
  const t0 = Date.now()
  const usePrefixSearch = autocomplete
  const client = getElasticsearchClient()
  const from = size * (page - 1)

  const matchQueries = getMatchQueries(query.trim(), {
    usePrefixSearch,
    fuzzy: {
      minLength: 3,
      maxLength: 20,
    },
  })

  const matchBool: estypes.QueryDslBoolQuery = {
    should: matchQueries,
    // Filters make should clauses optional, so require a match before toplevel filters apply.
    minimum_should_match: 1,
  }
  const matchQuery: estypes.QueryDslQueryContainer = {
    bool: matchBool,
  }

  const toplevelArray = toplevel || []
  if (toplevelArray.length) {
    const filters = Array.isArray(matchBool.filter) ? matchBool.filter : []
    filters.push({
      terms: {
        toplevel: toplevelArray,
      },
    })
    matchBool.filter = filters
  }

  const highlightFields = Array.from(highlights || DEFAULT_HIGHLIGHT_FIELDS)
  // content_explicit mirrors content highlight requests.
  if (highlightFields.includes('content')) {
    highlightFields.push('content_explicit')
  }
  const highlight = getHighlightConfiguration(query, highlightFields)

  const aggs = getAggregations(aggregate)

  const searchQuery: estypes.SearchRequest = {
    index: indexName,
    highlight,
    from,
    size,
    aggs,
    // Only requested source fields cross the network.
    _source_includes: ['title', 'url', 'breadcrumbs', 'popularity', 'toplevel'],
  }

  for (const key of ['intro', 'headings'] as const) {
    if (include.includes(key) && Array.isArray(searchQuery._source_includes)) {
      searchQuery._source_includes?.push(key)
    }
  }

  if (sort === 'best') {
    // function_score multiplies relevance by popularity for best-first ranking.
    searchQuery.query = {
      bool: {
        must: [
          {
            function_score: {
              boost_mode: 'multiply',
              query: matchQuery,
              boost: 1.0,
              functions: [
                {
                  field_value_factor: {
                    field: 'popularity',
                    factor: 1.0,
                    missing: 1.0,
                  },
                },
              ],
            },
          },
        ],
      },
    }
  } else if (sort === 'relevance') {
    // Relevance sort skips popularity because near-unique scores make it ineffective.
    searchQuery.query = matchQuery
  } else {
    throw new Error(`Unrecognized sort enum '${sort}'`)
  }

  const result = await client.search<GeneralSearchSource>(searchQuery)

  const hitsAll = result.hits
  const hits = getHits(hitsAll.hits, {
    indexName,
    debug,
    highlightFields,
    include,
  })
  const aggregationsResult = getAggregationsResult(aggregate, result.aggregations)
  const t1 = Date.now()

  const meta = {
    found: hitsAll.total as estypes.SearchTotalHits,
    took: {
      query_msec: result.took,
      total_msec: t1 - t0,
    },
    page,
    size,
  }

  return { meta, hits, aggregations: aggregationsResult }
}

function getAggregations(
  aggregate?: string[],
): Record<string, estypes.AggregationsAggregationContainer> | undefined {
  if (!aggregate || !aggregate.length) return undefined

  const aggs: Record<string, estypes.AggregationsAggregationContainer> = {}
  for (const key of aggregate) {
    aggs[key] = {
      terms: {
        field: key,
        size: MAX_AGGREGATE_SIZE,
      },
    }
  }
  return aggs
}

function getAggregationsResult(
  aggregate?: string[],
  result?: Record<string, estypes.AggregationsAggregate>,
): Record<string, SearchAggregation[]> | undefined {
  if (!aggregate || !aggregate.length || !result) return undefined
  const aggregations: Record<string, SearchAggregation[]> = {}
  for (const key of aggregate) {
    const agg = result[key] as { buckets?: Array<{ key: string; doc_count: number }> } | undefined
    if (agg?.buckets) {
      aggregations[key] = agg.buckets
        .map((bucket) => ({
          key: bucket.key as string,
          count: bucket.doc_count as number,
        }))
        .sort((a, b) => a.key.localeCompare(b.key))
    }
  }
  return aggregations
}

interface GetMatchQueriesOptions {
  usePrefixSearch: boolean
  fuzzy: {
    minLength: number
    maxLength: number
  }
}

// For autocomplete, getMatchQueries skips match_phrase_prefix on content.
// match_phrase_prefix matches preceding terms and expands the last word, so
// short category pages that list titles over-rank:
// https://www.elastic.co/guide/en/elasticsearch/reference/7.17/query-dsl-match-query-phrase-prefix.html#match-phrase-prefix-query-notes
function getMatchQueries(
  query: string,
  { usePrefixSearch, fuzzy }: GetMatchQueriesOptions,
): estypes.QueryDslQueryContainer[] {
  const BOOST_PHRASE = 10.0
  const BOOST_TITLE = 4.0
  const BOOST_HEADINGS = 3.0
  const BOOST_CONTENT = 1.0
  const BOOST_AND = 2.5
  const BOOST_EXPLICIT = 6.5
  // Fuzzy title matches get a low boost so exact and phrase matches dominate ranking.
  const BOOST_FUZZY = 0.1

  const matchQueries: estypes.QueryDslQueryContainer[] = []

  // Spaces or hyphens enable phrase and AND-operator matching.
  const isMultiWordQuery = query.includes(' ') || query.includes('-')

  if (isMultiWordQuery) {
    // Ordinary title word matches beat ordinary content phrase matches.
    const matchPhraseStrategy = usePrefixSearch ? 'match_phrase_prefix' : 'match_phrase'
    matchQueries.push(
      ...[
        {
          [matchPhraseStrategy]: {
            title_explicit: { boost: BOOST_EXPLICIT * BOOST_PHRASE * BOOST_TITLE, query },
          },
        },
        { [matchPhraseStrategy]: { title: { boost: BOOST_PHRASE * BOOST_TITLE, query } } },
        {
          [matchPhraseStrategy]: {
            headings_explicit: { boost: BOOST_EXPLICIT * BOOST_PHRASE * BOOST_HEADINGS, query },
          },
        },
        { [matchPhraseStrategy]: { headings: { boost: BOOST_PHRASE * BOOST_HEADINGS, query } } },
      ],
    )
    if (!usePrefixSearch) {
      matchQueries.push(
        ...[
          { [matchPhraseStrategy]: { content: { boost: BOOST_PHRASE, query } } },
          {
            [matchPhraseStrategy]: {
              content_explicit: { boost: BOOST_EXPLICIT * BOOST_PHRASE, query },
            },
          },
        ],
      )
    }
  }

  // Quoted multi-word queries skip per-word matching so phrase search stays strict.
  if (!(isMultiWordQuery && query.startsWith('"') && query.endsWith('"'))) {
    const matchStrategy = usePrefixSearch ? 'match_bool_prefix' : 'match'
    if (isMultiWordQuery) {
      matchQueries.push(
        ...[
          {
            [matchStrategy]: {
              title_explicit: {
                boost: BOOST_EXPLICIT * BOOST_TITLE * BOOST_AND,
                query,
                operator: 'AND',
              },
            },
          },
          {
            [matchStrategy]: {
              headings_explicit: {
                boost: BOOST_EXPLICIT * BOOST_HEADINGS * BOOST_AND,
                query,
                operator: 'AND',
              },
            },
          },
          {
            [matchStrategy]: {
              content_explicit: {
                boost: BOOST_EXPLICIT * BOOST_CONTENT * BOOST_AND,
                query,
                operator: 'AND',
              },
            },
          },
          {
            [matchStrategy]: {
              title: { boost: BOOST_TITLE * BOOST_AND, query, operator: 'AND' },
            },
          },
          {
            [matchStrategy]: {
              headings: { boost: BOOST_HEADINGS * BOOST_AND, query, operator: 'AND' },
            },
          },
          {
            [matchStrategy]: {
              content: { boost: BOOST_CONTENT * BOOST_AND, query, operator: 'AND' },
            },
          },
        ],
      )
    }
    matchQueries.push(
      ...[
        { [matchStrategy]: { title_explicit: { boost: BOOST_EXPLICIT * BOOST_TITLE, query } } },
        {
          [matchStrategy]: {
            headings_explicit: { boost: BOOST_EXPLICIT * BOOST_HEADINGS, query },
          },
        },
        {
          [matchStrategy]: { content_explicit: { boost: BOOST_EXPLICIT * BOOST_CONTENT, query } },
        },
        { [matchStrategy]: { title: { boost: BOOST_TITLE, query } } },
        { [matchStrategy]: { headings: { boost: BOOST_HEADINGS, query } } },
        { [matchStrategy]: { content: { boost: BOOST_CONTENT, query } } },
      ],
    )
  }

  // Fuzzy matching applies only within the configured length bounds.
  if (query.length > fuzzy.minLength && query.length < fuzzy.maxLength) {
    matchQueries.push({
      fuzzy: {
        title: { value: query, boost: BOOST_FUZZY },
      },
    })
  }

  // Single-token URL searches also match page paths.
  if (query.split(/\s/g).length === 1) {
    // A path query such as /en/site-policy/github-company-policies matches url.
    if (query.startsWith('/')) {
      matchQueries.push({
        match: { url: query.split('?')[0].split('#')[0] },
      })
    } else if (query.startsWith('http')) {
      // Full docs.github.com URLs match their pathname, such as /en/some/page.
      let pathname: string | undefined
      try {
        pathname = new URL(query).pathname
      } catch {
        // Invalid URL strings do not add a url match.
      }
      if (pathname) {
        matchQueries.push({
          match: { url: pathname },
        })
      }
    }
  }

  return matchQueries
}

interface GetHitsOptions {
  indexName: string
  debug?: boolean
  highlightFields: string[]
  include: AdditionalIncludes[]
}

interface GeneralSearchSource {
  url: string
  title: string
  breadcrumbs: string
  popularity?: number
  [key: string]: unknown
}

function getHits(
  hits: estypes.SearchHit<GeneralSearchSource>[],
  { indexName, debug = false, highlightFields, include }: GetHitsOptions,
): GeneralSearchHit[] {
  return hits.map((hit) => {
    // Requested highlight fields get keys even when empty, so the response matches the request.
    const hitHighlights: Record<string, string[]> = {}
    for (const key of highlightFields) {
      hitHighlights[key] = (hit.highlight && hit.highlight[key]) || []
    }

    const source = hit._source!
    const result: GeneralSearchHit = {
      id: hit._id!,
      url: source.url,
      title: source.title,
      breadcrumbs: source.breadcrumbs,
      highlights: hitHighlights,
    }
    if (debug) {
      result.score = hit._score ?? 0.0
      result.popularity = source.popularity ?? 0.0
      if (isDevMode) {
        result.es_url = `http://localhost:9200/${indexName}/_doc/${hit._id}`
      }
    }
    for (const field of include) {
      result[field] = source[field] as string
    }
    return result
  })
}
