import { Client } from '@elastic/elasticsearch'

export const POSSIBLE_HIGHLIGHT_FIELDS = ['title', 'content']
// This needs to match what we *use* in the `<SearchResults>` component.
// For example, if we don't display "headings" we shouldn't request
// highlights for it either.
export const DEFAULT_HIGHLIGHT_FIELDS = ['title', 'content']

const ELASTICSEARCH_URL = process.env.ELASTICSEARCH_URL

const isDevMode = process.env.NODE_ENV !== 'production'

function getClient() {
  if (!ELASTICSEARCH_URL) {
    // If this was mistakenly not set, it will eventually fail
    // when you use the Client. But `new Client({node: undefined})`
    // won't throw. And the error you get when you actually do try
    // to use that Client instance is cryptic compared to this
    // plain and simple thrown error.
    throw new Error(`$ELASTICSEARCH_URL is not set`)
  }
  return new Client({
    node: ELASTICSEARCH_URL,
    // The default is 30,000ms but we noticed that the median time is about
    // 100-150ms with some occasional searches taking multiple seconds.
    // The default `maxRetries` is 3 which is a sensible number.
    // If a query gets stuck, it's better to (relatively) quickly give up
    // and retry. So if it takes longer than this time here, we're banking on
    // that it was just bad luck and that it'll work if we simply try again.
    // See internal issue #2318.
    requestTimeout: 1900,
    // It's important that requestTimeout * maxRetries is less than 10 seconds.
    maxRetries: 5,
  })
}

// The true work horse that actually performs the Elasticsearch query
export async function getSearchResults({
  indexName,
  query,
  page,
  size,
  debug,
  sort,
  topics,
  includeTopics,
  usePrefixSearch,
  highlights,
  include,
}) {
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
  const t0 = new Date()
  const client = getClient()
  const from = size * (page - 1)

  const matchQueries = getMatchQueries(query.trim(), {
    usePrefixSearch,
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

  const topicsFilter = (topics || []).map((topic) => {
    return {
      term: {
        // Remember, 'topics' is a keyword field, meaning you need
        // to filter by "Webhooks", not "webhooks"
        topics: topic,
      },
    }
  })
  if (topicsFilter.length) {
    matchQuery.bool.filter = topicsFilter
  }

  const highlightFields = Array.from(highlights || DEFAULT_HIGHLIGHT_FIELDS)
  // These acts as an alias convenience
  if (highlightFields.includes('content')) {
    highlightFields.push('content_explicit')
  }
  const highlight = getHighlightConfiguration(query, highlightFields)

  const searchQuery = {
    index: indexName,
    highlight,
    from,
    size,

    // Since we know exactly which fields from the source we're going
    // need we can specify that here. It's an inclusion list.
    // We can save precious network by not having to transmit fields
    // stored in Elasticsearch to here if it's not going to be needed
    // anyway.
    _source_includes: ['title', 'url', 'breadcrumbs', 'popularity'],
  }

  if (includeTopics) {
    searchQuery._source_includes.push('topics')
  }

  for (const key of ['intro', 'headings']) {
    if (include.includes(key)) {
      searchQuery._source_includes.push(key)
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
  const t1 = new Date()

  const meta = {
    found: hitsAll.total,
    took: {
      query_msec: result.took,
      total_msec: t1.getTime() - t0.getTime(),
    },
    page,
    size,
  }

  return { meta, hits }
}

export async function getAutocompleteSearchResults({ indexName, query, size }) {
  const client = getClient()

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
  const result = await client.search(searchQuery)

  const hitsAll = result.hits
  const hits = hitsAll.hits.map((hit) => {
    return {
      term: hit._source.term,
      highlights: (hit.highlight && hit.highlight.term) || [],
    }
  })

  const meta = {
    found: hitsAll.total,
  }

  return { meta, hits }
}

function getMatchQueries(query, { usePrefixSearch, fuzzy }) {
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

  const matchQueries = []

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
      let pathname
      try {
        pathname = new URL(query).pathname
      } catch {
        // If it failed, it can't be initialized with the `URL` constructor
        // we so we can deem it *not* a valid URL.
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

function getAutocompleteMatchQueries(query, { fuzzy }) {
  const BOOST_PHRASE = 4.0
  const BOOST_REGULAR = 2.0
  const BOOST_FUZZY = 0.1 // make it always last in ranking
  const matchQueries = []

  // If the query input is multiple words, it's good to know because you can
  // make the query do `match_phrase` and you can make `match` query
  // with the `AND` operator (`OR` is the default).
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

function getHits(hits, { indexName, debug, includeTopics, highlightFields, include }) {
  return hits.map((hit) => {
    // Return `hit.highlights[...]` based on the highlight fields requested.
    // So if you searched with `&highlights=headings&highlights=content`
    // this will become:
    //   {
    //      content: [...],
    //      headings: [...]
    //   }
    // even if there was a match on 'title'.
    const hitHighlights = Object.fromEntries(
      highlightFields.map((key) => [key, (hit.highlight && hit.highlight[key]) || []]),
    )

    const result = {
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
      result.score = hit._score || 0.0
      result.popularity = hit._source.popularity || 0.0
      if (isDevMode) {
        result.es_url = `http://localhost:9200/${indexName}/_doc/${hit._id}`
      }
    }
    for (const field of include || []) {
      result[field] = hit._source[field]
    }
    return result
  })
}

// The highlight configuration is dependent on how we use the content
// in the UI. For example, we feel we need about 3 lines (max)
// of highlights of content under each title. If we feel it shows too
// many highlights in the search result UI, we can come back here
// and change it to something more appropriate.
function getHighlightConfiguration(query, highlights) {
  const fields = {}
  if (highlights.includes('title')) {
    fields.title = {
      // Fast Vector Highlighter
      // Using this requires that you first index these fields
      // with {term_vector: 'with_positions_offsets'}
      type: 'fvh',
      fragment_size: 200,
      number_of_fragments: 1,
    }
  }
  if (highlights.includes('content')) {
    // The 'no_match_size' is so we can display *something* for the
    // preview if there was no highlight match at all within the content.
    fields.content = {
      // Fast Vector Highlighter
      // Using this requires that you first index these fields
      // with {term_vector: 'with_positions_offsets'}
      type: 'fvh',
      fragment_size: 150,
      number_of_fragments: 1,
      no_match_size: 150,

      highlight_query: {
        match_phrase_prefix: {
          content: {
            query,
          },
        },
      },
    }
    fields.content_explicit = {
      // Fast Vector Highlighter
      // Using this requires that you first index these fields
      // with {term_vector: 'with_positions_offsets'}
      type: 'fvh',
      fragment_size: 150,
      number_of_fragments: 1,
      no_match_size: 0,

      highlight_query: {
        match_phrase_prefix: {
          content_explicit: {
            query,
          },
        },
      },
    }
  }
  if (highlights.includes('term')) {
    fields.term = {
      // Fast Vector Highlighter
      // Using this requires that you first index these fields
      // with {term_vector: 'with_positions_offsets'}
      type: 'fvh',
      // fragment_size: 200,
      // number_of_fragments: 1,
    }
  }
  return {
    pre_tags: ['<mark>'],
    post_tags: ['</mark>'],
    fields,
  }
}
