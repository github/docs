import { getElasticsearchClient } from '@/search/lib/helpers/get-client'
import { DEFAULT_HIGHLIGHT_FIELDS } from '@/search/lib/search-request-params/search-params-objects'
import { getHighlightConfiguration } from '@/search/lib/get-elasticsearch-results/helpers/elasticsearch-highlight-config'

import type {
  SearchHit as ElasticsearchHit,
  QueryDslQueryContainer,
  SearchRequest,
  SearchTotalHits,
} from '@elastic/elasticsearch/lib/api/types'
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
  topics?: string[]
  includeTopics?: boolean
}

// Query Elasticsearch for general search results
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
    topics,
    includeTopics,
  } = args

  const usePrefixSearch = autocomplete

  if (topics && !Array.isArray(topics)) {
    throw new Error("'topics' has to be an array")
  }
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
  const client = getElasticsearchClient()
  const from = size * (page - 1)

  const matchQueries = getMatchQueries(query.trim(), {
    usePrefixSearch,
    fuzzy: {
      minLength: 3,
      maxLength: 20,
    },
  })

  const matchQuery: Record<string, any> = {
    bool: {
      should: matchQueries,
      // This allows filtering by toplevel later.
      minimum_should_match: 1,
    },
  }

  const topicsArray = Array.isArray(topics) ? topics : topics ? [topics] : []
  const topicsFilter = topicsArray.map((topic) => {
    return {
      term: {
        // Remember, 'topics' is a keyword field, meaning you need
        // to filter by "Webhooks", not "webhooks"
        topics: topic,
      },
    }
  })
  if (topicsFilter.length) {
    matchQuery.bool.filter = matchQuery.bool.filter || []
    matchQuery.bool.filter.push(...topicsFilter)
  }

  const toplevelArray = toplevel || []
  if (toplevelArray.length) {
    matchQuery.bool.filter = matchQuery.bool.filter || []
    matchQuery.bool.filter.push({
      terms: {
        toplevel: toplevelArray,
      },
    })
  }

  const highlightFields = Array.from(highlights || DEFAULT_HIGHLIGHT_FIELDS)
  // These acts as an alias convenience
  if (highlightFields.includes('content')) {
    highlightFields.push('content_explicit')
  }
  const highlight = getHighlightConfiguration(query, highlightFields)

  const aggs = getAggregations(aggregate)

  const searchQuery: SearchRequest = {
    index: indexName,
    highlight,
    from,
    size,
    aggs,

    // Since we know exactly which fields from the source we're going
    // need we can specify that here. It's an inclusion list.
    // We can save precious network by not having to transmit fields
    // stored in Elasticsearch to here if it's not going to be needed
    // anyway.
    _source_includes: ['title', 'url', 'breadcrumbs', 'popularity', 'toplevel'],
  }

  if (includeTopics && Array.isArray(searchQuery._source_includes)) {
    searchQuery._source_includes?.push('topics')
  }

  for (const key of ['intro', 'headings'] as const) {
    if (include.includes(key) && Array.isArray(searchQuery._source_includes)) {
      searchQuery._source_includes?.push(key)
    }
  }

  if (sort === 'best') {
    // To sort by a function score, you need to wrap the primary
    // match query into a bool operation.
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
                    // modifier: 'log1p',
                    factor: 1.0,
                    // missing: 0.0001,
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
    // Do nothing, it's the default.
    // We could have a secondary sort on the 'popularity' but the
    // chances of this ever doing anything is very weak because of the
    // floating point almost always being different.
    searchQuery.query = matchQuery
  } else {
    throw new Error(`Unrecognized sort enum '${sort}'`)
  }

  const result = await client.search(searchQuery)

  const hitsAll = result.hits
  const hits = getHits(hitsAll.hits, {
    indexName,
    debug,
    includeTopics,
    highlightFields,
    include,
  })
  const aggregationsResult = getAggregationsResult(aggregate, result.aggregations)
  const t1 = Date.now()

  const meta = {
    found: hitsAll.total as SearchTotalHits,
    took: {
      query_msec: result.took,
      total_msec: t1 - t0,
    },
    page,
    size,
  }

  return { meta, hits, aggregations: aggregationsResult }
}

function getAggregations(aggregate?: string[]): Record<string, any> | undefined {
  if (!aggregate || !aggregate.length) return undefined

  const aggs: Record<string, any> = {}
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
  result?: Record<string, any>,
): Record<string, SearchAggregation[]> | undefined {
  if (!aggregate || !aggregate.length || !result) return undefined
  const aggregations: Record<string, SearchAggregation[]> = {}
  for (const key of aggregate) {
    if (result[key]?.buckets) {
      aggregations[key] = result[key].buckets
        .map((bucket: any) => ({
          key: bucket.key as string,
          count: bucket.doc_count as number,
        }))
        .sort((a: { key: string }, b: { key: string }) => a.key.localeCompare(b.key))
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

function getMatchQueries(
  query: string,
  { usePrefixSearch, fuzzy }: GetMatchQueriesOptions,
): QueryDslQueryContainer[] {
  const BOOST_PHRASE = 10.0
  const BOOST_TITLE = 4.0
  const BOOST_HEADINGS = 3.0
  const BOOST_CONTENT = 1.0
  const BOOST_AND = 2.5
  const BOOST_EXPLICIT = 6.5
  // Number doesn't matter so much but just make sure it's
  // boosted low. Because we only really want this to come into
  // play if nothing else matches. E.g. a search for `AcIons`
  // which wouldn't find anything else anyway.
  const BOOST_FUZZY = 0.1

  const matchQueries: QueryDslQueryContainer[] = []

  // If the query input is multiple words, it's good to know because you can
  // make the query do `match_phrase` and you can make `match` query
  // with the `AND` operator (`OR` is the default).
  const isMultiWordQuery = query.includes(' ') || query.includes('-')

  if (isMultiWordQuery) {
    // If the query contains spaces, prioritize a "match phrase" query
    // beyond a regular "match" query.
    // Basically, that means if you search for 'foo bar' we'd rather
    // rank:
    //     "A common term is foo bar which is often used"
    // above:
    //     "Some people use foo"
    //     "Bar is also a common term"
    //
    // So that, when all are matched you get this rank:
    //     1. "A common term is foo bar which is often used"
    //     2. "Some people use foo"
    //     3. "Bar is also a common term"
    //
    // But note, a "match phrase" isn't the holy panacea of matches.
    // In particular, just because there exists a document whose *content*
    // contains the phrase "... foo bar ..." we might still prefer the
    // matches on title that contains the words *separately*. This
    // is why a 'match_phrase' on 'content' has a lesser boost
    // that a 'match' on 'title'.
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
    // If the content is short, it is given a disproportionate advantage
    // in search ranking. For example, our category and map-topic pages
    // often includes a list of other document titles but because it's so
    // short it thinks that content is really relevant. This only applies
    // when you use `match_phrase_prefix` which first makes a search
    // all preceeding terms and then manually appends matches on the last word.
    // See https://www.elastic.co/guide/en/elasticsearch/reference/7.17/query-dsl-match-query-phrase-prefix.html#match-phrase-prefix-query-notes
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

  // Unless the query was something like `"foo bar"` search on each word
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

  // Add a fuzzy query if it's not too short or too long.
  // Might consider only enabling this when there's no space in the query
  // because something like "githob actions" will overwhelmingly
  // match on the "actions" part with the regular 'match' query.
  if (query.length > fuzzy.minLength && query.length < fuzzy.maxLength) {
    matchQueries.push({
      fuzzy: {
        title: { value: query, boost: BOOST_FUZZY },
      },
    })
  }

  // If the query is just a single no-space word...
  if (query.split(/\s/g).length === 1) {
    // E.g. someone searched for `/en/site-policy/github-company-policies`
    if (query.startsWith('/')) {
      matchQueries.push({
        match: { url: query.split('?')[0].split('#')[0] },
      })
    } else if (query.startsWith('http')) {
      // E.g. `https://docs.github.com/en/some/page?foo=bar`
      // will become a search on `{url: '/en/some/page'}`
      let pathname: string | undefined
      try {
        pathname = new URL(query).pathname
      } catch {
        // If it failed, it can't be initialized with the `URL` constructor
        // so we can deem it *not* a valid URL.
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
  includeTopics?: boolean
  highlightFields: string[]
  include: AdditionalIncludes[]
}

function getHits(
  hits: ElasticsearchHit<any>[],
  { indexName, debug = false, includeTopics = false, highlightFields, include }: GetHitsOptions,
): GeneralSearchHit[] {
  return hits.map((hit) => {
    // Return `hit.highlights[...]` based on the highlight fields requested.
    // So if you searched with `&highlights=headings&highlights=content`
    // this will become:
    //   {
    //      content: [...],
    //      headings: [...]
    //   }
    // even if there was a match on 'title'.
    const hitHighlights: Record<string, string[]> = {}
    for (const key of highlightFields) {
      hitHighlights[key] = (hit.highlight && hit.highlight[key]) || []
    }

    const result: GeneralSearchHit = {
      id: hit._id,
      url: hit._source.url,
      title: hit._source.title,
      breadcrumbs: hit._source.breadcrumbs,
      highlights: hitHighlights,
    }
    if (includeTopics) {
      result.topics = hit._source.topics || []
    }
    if (debug) {
      result.score = hit._score ?? 0.0
      result.popularity = hit._source.popularity ?? 0.0
      if (isDevMode) {
        result.es_url = `http://localhost:9200/${indexName}/_doc/${hit._id}`
      }
    }
    for (const field of include) {
      result[field] = hit._source[field]
    }
    return result
  })
}
