import { Client } from '@elastic/elasticsearch'

const ELASTICSEARCH_URL = process.env.ELASTICSEARCH_URL || 'http://localhost:9200'

const isDevMode = process.env.NODE_ENV !== 'production'

function getClient() {
  return new Client({
    node: ELASTICSEARCH_URL,
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
}) {
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
  if (topics) {
    throw new Error('Not implemented yet')
  }

  const highlight = getHighlightConfiguration(query)

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
    _source_includes: [
      'title',
      'url',
      'breadcrumbs',
      // 'headings'
      'popularity',
    ],
  }

  if (includeTopics) {
    searchQuery._source_includes.push('topics')
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

  const hits = getHits(result.hits.hits, { indexName, debug, includeTopics })
  const t1 = new Date()

  const meta = {
    found: result.hits.total,
    took: {
      query_msec: result.took,
      total_msec: t1.getTime() - t0.getTime(),
    },
    page,
    size,
  }

  return { meta, hits }
}

function getMatchQueries(query, { usePrefixSearch, fuzzy }) {
  const BOOST_PHRASE = 10.0
  const BOOST_TITLE = 4.0
  const BOOST_HEADINGS = 3.0
  const BOOST_CONTENT = 1.0
  const BOOST_AND = 2.5
  // Number doesn't matter so much but just make sure it's
  // boosted low. Because we only really want this to come into
  // play if nothing else matches. E.g. a search for `Acions`
  // which wouldn't find anythig else anyway.
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
        { [matchPhraseStrategy]: { title: { boost: BOOST_PHRASE * BOOST_TITLE, query } } },
        { [matchPhraseStrategy]: { headings: { boost: BOOST_PHRASE * BOOST_HEADINGS, query } } },
        { [matchPhraseStrategy]: { content: { boost: BOOST_PHRASE, query } } },
      ]
    )
  }

  // Unless the query was something like `"foo bar"` search on each word
  if (!(isMultiWordQuery && query.startsWith('"') && query.endsWith('"'))) {
    if (usePrefixSearch && !isMultiWordQuery) {
      matchQueries.push(
        ...[
          { prefix: { title: { boost: BOOST_TITLE, value: query } } },
          { prefix: { headings: { boost: BOOST_HEADINGS, value: query } } },
          { prefix: { content: { boost: BOOST_CONTENT, value: query } } },
        ]
      )
    } else {
      if (isMultiWordQuery) {
        matchQueries.push(
          ...[
            { match: { title: { boost: BOOST_TITLE * BOOST_AND, query, operator: 'AND' } } },
            { match: { headings: { boost: BOOST_HEADINGS * BOOST_AND, query, operator: 'AND' } } },
            { match: { content: { boost: BOOST_CONTENT * BOOST_AND, query, operator: 'AND' } } },
          ]
        )
      }
      matchQueries.push(
        ...[
          { match: { title: { boost: BOOST_TITLE, query } } },
          { match: { headings: { boost: BOOST_HEADINGS, query } } },
          { match: { content: { boost: BOOST_CONTENT, query } } },
        ]
      )
    }
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

function getHits(hits, { indexName, debug, includeTopics }) {
  return hits.map((hit) => {
    const result = {
      id: hit._id,
      url: hit._source.url,
      title: hit._source.title,
      breadcrumbs: hit._source.breadcrumbs || [],
      highlights: hit.highlight || {},
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

    return result
  })
}

// The highlight configuration is dependent on how we use the content
// in the UI. For example, we feel we need about 3 lines (max)
// of highlights of content under each title. If we feel it shows too
// many highlights in the search result UI, we can come back here
// and change it to something more appropriate.
function getHighlightConfiguration(query) {
  return {
    pre_tags: ['<mark>'],
    post_tags: ['</mark>'],
    fields: {
      title: {
        fragment_size: 200,
        number_of_fragments: 1,
      },
      headings: { fragment_size: 150, number_of_fragments: 2 },
      // The 'no_match_size' is so we can display *something* for the
      // preview if there was no highlight match at all within the content.
      content: {
        fragment_size: 150,
        number_of_fragments: 3,
        no_match_size: 150,

        highlight_query: {
          match_phrase_prefix: {
            content: {
              query,
            },
          },
        },
      },
    },
  }
}
