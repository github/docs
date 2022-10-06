import { fileURLToPath } from 'url'
import path from 'path'
import lunr from 'lunr'
import fs from 'fs/promises'
import lunrStemmerSupport from 'lunr-languages/lunr.stemmer.support.js'
import tinyseg from 'lunr-languages/tinyseg.js'
import lunrJa from 'lunr-languages/lunr.ja.js'
import lunrEs from 'lunr-languages/lunr.es.js'
import lunrPt from 'lunr-languages/lunr.pt.js'
import { get } from 'lodash-es'
import statsd from '../statsd.js'
import { namePrefix } from './config.js'
import { decompress } from './compress.js'
const __dirname = path.dirname(fileURLToPath(import.meta.url))

// By default Lunr considers the `-` character to be a word boundary.
// This allows hypens to be included in the query.
// If you change this, remember to make it match the indexing separator
// in script/search/lunr-search-index.js so the query is tokenized
// identically to the way it was indexed.
lunr.QueryLexer.termSeparator = /[\s]+/
lunrStemmerSupport(lunr)
tinyseg(lunr)
lunrJa(lunr)
lunrEs(lunr)
lunrPt(lunr)

const LUNR_DIR = './indexes'
const lunrIndexes = new Map()
const lunrRecords = new Map()

// Max size of the `.content` record included in the JSON payload that the
// middleware server will serve.
// The reason we're worrying about that here and not in the middleware
// is because what we're *ultimately* sending is HTML so we can't let
// the consumer of this module, slice it as a regular string because
// they might cut off an HTML tag in the middle.
// As of Oct 2021, with the way the CSS works inside components/Search.tsx
// roughly 450-650 characters is contained. Let's just make sure we're
// well within limit. So no visual difference, but smaller JSON payloads.
const MAX_CONTENT_LENGTH = 1000

export class QueryTermError extends Error {}
export class QueryPrefixError extends QueryTermError {}

export default async function loadLunrResults({ version, language, query, limit }) {
  const indexName = `${namePrefix}-${version}-${language}`
  if (!lunrIndexes.has(indexName) || !lunrRecords.has(indexName)) {
    lunrIndexes.set(indexName, await loadLunrIndex(indexName))
    lunrRecords.set(indexName, await loadLunrRecords(indexName))
    statsd.increment('middleware.lunr_cold_index', 1, [`index:${indexName}`])
    statsd.gauge('memory_heap_used', process.memoryUsage().heapUsed, ['event:lunr-index'])
  }
  const index = lunrIndexes.get(indexName)
  const records = lunrRecords.get(indexName)
  const queryLength = query.trim().length

  for (const word of query.trim().split(/\s+/g) || []) {
    // By splitting up the query into words, we can use ^ at the start
    // of the regex. That avoids "Polynomial regular expression used on
    // uncontrolled data" warning because the regex can be evalulated
    // from left to right quickly.
    for (const match of word.matchAll(/^(\w+):/g)) {
      const validPrefixes = ['topics', 'title']
      if (!validPrefixes.includes(match[1])) {
        throw new QueryPrefixError(
          `'${match[1]}' is not a valid prefix keyword. Must be one of (${validPrefixes})`
        )
      }
    }
  }

  // A search results /combined/ score is:
  //
  //    normalizedScore + POPULARITY_FACTOR * record.popularity
  //
  // where the "normalizedScore" is the ratio of its Lunr score divided
  // by the highest score of all found in Lunr. That means, that the record
  // Lunr thinks matches the most becomes 1.0.
  //
  // It's the number we sort on. The `record.popularity` is always a
  // number between (and including) 0-1.
  // If the Lunr score is, say, 5.0 and the popularity is 0.1, and
  // the POPULARITY_FACTOR is 10, the combined score is 5.0 + 10 * 0.1 = 6.0
  // If you make this too large, the Lunr score becomes insignificant and
  // any single match anywhere will always favor the popular documents.
  // The best way to adjust this number is to get a feeling for what
  // kinds of Lunr score numbers we're usually getting and adjust
  // accordingly.
  // Short queries are bound to be very ambigous and the more ambiguous
  // the more relevant the popularity is.
  const POPULARITY_FACTOR = queryLength <= 2 ? 25 : queryLength <= 6 ? 10 : 5

  // This number determines how much more we favor the title search first.
  // It's a multiplier. We do 2 searches: one on title, one on all other fields.
  // Then, we compare all scores. But the scores in the results from the title
  // we multiply that with this number.
  // The effect is that we favor matches in the title more than we favor
  // matches that were not in the title.
  // If you search for 'foobar' and it appears in the title of one
  // not-so-popular record, but also appears in the content of a
  // very popular record, you want to give the title-matching one a
  // leg up.
  // Note that the Lunr scores from the content is usually much higher
  // than scores on the title. E.g. the word `codespaces` might appear
  // 10 times on a page that is actually about something else. If there's
  // a record whose title includes `codespaces` it might get a very low
  // Lunr score but since title matches are generally a "better", we
  // want to make sure this number accounts for that.
  const TITLE_FIRST = queryLength <= 2 ? 45 : queryLength <= 6 ? 25 : 10

  // Multiplication bonus given to matches that were made on the
  // the search where ALL tokens are required.
  // E.g. you search for 'foo bar' and we have three records:
  //
  //  A)  "This foo is very special"
  //  B)  "With bar and foo you can't go wrong"
  //  C)  "Only bar can save you"
  //
  // What will happen is that it only finds record (B) when it's
  // requires to match both 'foo' *and* 'bar'. So you get these scores:
  //
  //  A) score = result.score + popularity
  //  B) score = MATCH_PHRASE * (result.score + popularity)
  //  C) score = result.score + popularity
  //
  // So it's very powerful multiplier. But that's fine because a
  // "phrase match" is a very accurate thing.
  const MATCH_PHRASE = 5

  // Imagine that we have 1,000 documents. 100 of them contain the word
  // 'foobar'. Of those 100, we want to display the top 10 "best".
  // But if we only do `lunrindex.search('foobar').slice(0, 10)` we
  // would slice prematurely. Instead, we do
  // `lunrindex.search('foobar').slice(0, 100)` first, sort those,
  // and in the final step, after any custom sorting, we `.slice(0, 10)`.
  // This number decides how many to extract from Lunr in the first place
  // that we're going to do our custom sorting on.
  // This number can be allowed to be pretty big because we're only ever
  // going to do the more time-consuming highlighting on the `limit`
  // records that we finally return.
  const PRE_LIMIT = 500

  const titleQuery = query.trim()

  let highestTitleScore = 0.0

  const andTitleResults = []

  // This will turn something like 'foo and bar' into:
  // [
  //   { str: 'foo', metadata: { position: [Array], index: 0 } },
  //   { str: 'bar', metadata: { position: [Array], index: 1 } }
  // ]
  // Note how the stopword gets omitted.
  // It's important to omit the stopwords because even if the record
  // actually contains the stopword, it won't match then.
  // E.g. you have a record called "Foo And Bar" and you search for
  // {foo AND and AND bar} it will actually not find anything.
  // But if you change it to {foo AND bar} it will match "Foo And Bar"
  // Same goes if any other stopwords were used like "Foo the Bar with for a".
  // That also needs to become an AND-search of {foo AND bar} ...only.
  const titleQueryTokenized = lunr.tokenizer(titleQuery).filter(lunr.stopWordFilter)

  if (titleQueryTokenized.length > 1) {
    andTitleResults.push(
      ...index
        .query((q) => {
          for (const { str } of titleQueryTokenized) {
            q.term(str, { fields: ['title'], presence: lunr.Query.presence.REQUIRED })
          }
        })
        .slice(0, PRE_LIMIT)
        .map((result) => {
          const { popularity } = records[result.ref]
          if (result.score > highestTitleScore) {
            highestTitleScore = result.score
          }
          const score = result.score / highestTitleScore
          return {
            result,
            _score: MATCH_PHRASE * TITLE_FIRST * (score + POPULARITY_FACTOR * (popularity || 0.0)),
          }
        })
    )
  }

  const titleResults = index
    .query((q) => {
      // The objective is to create an OR-query specifically for the 'title'
      // because *we* value matches on that much higher than any other
      // field in our records.
      // But we want to make sure that the last word is always treated
      // like a forward-tokenized token. I.e. you typed "google ku"
      // becomes a search for "google ku*".
      // Note that it's import that use the `lunr.tokenizer()` function when
      // using the `index.query()` function because, for starters, it will
      // normalize the input.
      // If you use `index.search()` is the higher abstraction of basically
      // doing this:
      // (pseudo code)
      //
      //    Index.prototype.search = function(input) {
      //       lunr.tokenize(input).forEach(token => {
      //          Index.query(callback => {
      //              callback(token)
      //          })
      //       })
      //    }
      //
      // If we didn't use the tokenized form, we'd get different results
      // for searching for "SSH agent" and "ssh AgenT" for example.
      titleQueryTokenized.forEach(({ str }, i) => {
        const isLastToken = i === titleQueryTokenized.length - 1
        const isShort = str.length <= 3
        q.term(str, {
          fields: ['title'],
          wildcard:
            isLastToken && isShort ? lunr.Query.wildcard.TRAILING : lunr.Query.wildcard.NONE,
        })
      })
    })
    .slice(0, PRE_LIMIT)
    .map((result) => {
      const { popularity } = records[result.ref]
      if (result.score > highestTitleScore) {
        highestTitleScore = result.score
      }
      const score = result.score / highestTitleScore
      return {
        result,
        _score: TITLE_FIRST * (score + POPULARITY_FACTOR * (popularity || 0.0)),
      }
    })

  let allQuery = query.trim()

  // Unfortunately, Lunr currently doesn't support phrase matching
  // so you always end up with 0 results if you search for `"foo bar"`.
  // In this case it's better to do a search for `foo` and `bar`.
  if (
    allQuery.startsWith('"') &&
    allQuery.endsWith('"') &&
    (allQuery.match(/"/g) || []).length === 2
  ) {
    allQuery = allQuery.slice(1, -1)
  }

  let highestAllScore = 0.0
  const allResults = index
    .search(allQuery)
    .slice(0, PRE_LIMIT)
    .map((result) => {
      const { popularity } = records[result.ref]
      if (result.score > highestAllScore) {
        highestAllScore = result.score
      }
      const score = result.score / highestAllScore
      return {
        result,
        score,
        _score: score + POPULARITY_FACTOR * (popularity || 0.0),
      }
    })

  const _unique = new Set()
  const combinedMatchData = {}
  const results = []
  for (const matches of [andTitleResults, titleResults, allResults]) {
    for (const match of matches) {
      const { result } = match
      // We need to loop over all results (both from title searches and
      // from all-field searches) but we can only keep one.
      // But before we do that filtering (i.e. omitting previous kept)
      // we need to merge all the matchData from each result.
      // That's because the `result.matchData` from the title search
      // will have Lunr match positions for 'title' but the `result.matchData`
      // from the all-field search, will have positions for other things
      // such as 'content' and 'breadcrumbs'.

      combinedMatchData[result.ref] = Object.assign(
        combinedMatchData[result.ref] || {},
        result.matchData
      )

      if (_unique.has(result.ref)) continue
      _unique.add(result.ref)

      results.push(match)
    }
  }

  // Highest score first
  results.sort((a, b) => b._score - a._score)

  // We might have found much more than `limit` number of matches and we've
  // taken them all out for our custom sorting. Now, once that's done,
  // of the ones we're going to return we apply the highlighting.
  // The reasonsing is that the highlighting work isn't free and it'd
  // be a waste to do it on results we're not going to return anyway.
  return results.slice(0, limit).map(({ result }) => {
    const record = records[result.ref]
    const matchData = combinedMatchData[result.ref]
    return {
      url: result.ref,
      breadcrumbs: field(matchData, record, 'breadcrumbs'),
      title: field(matchData, record, 'title'),
      content: smartSlice(field(matchData, record, 'content'), MAX_CONTENT_LENGTH),
      // don't highlight the topics array
      topics: record.topics,
      score: result.score,
      popularity: record.popularity || 0.0,
    }
  })
}

async function loadLunrIndex(indexName) {
  const filePath = path.posix.join(__dirname, LUNR_DIR, `${indexName}.json.br`)
  // Do not set to 'utf8' on file reads
  return fs.readFile(filePath).then(decompress).then(JSON.parse).then(lunr.Index.load)
}

async function loadLunrRecords(indexName) {
  const filePath = path.posix.join(__dirname, LUNR_DIR, `${indexName}-records.json.br`)
  // Do not set to 'utf8' on file reads
  return fs.readFile(filePath).then(decompress).then(JSON.parse)
}

// Highlight a match within an attribute field
function field(matchData, record, name) {
  const text = record[name]
  if (!text) return text

  // First, get a list of all the positions of the matching tokens
  const positions = Object.values(matchData.metadata)
    .map((fields) => get(fields, [name, 'position']))
    .filter(Boolean)
    .flat()
    .sort((a, b) => a[0] - b[0])
    .map(([start, length]) => [start, start + length])
    .map(([start, end], i, a) => [i && a[i - 1][1], start, end])

  // If this field has no token matches, no highlighting
  if (!positions.length) return text

  // Highlight the text
  const highlighted = positions
    .map(([prev, start, end], i) => [
      text.slice(prev, start),
      mark(text.slice(start, end)),
      i === positions.length - 1 && text.slice(end),
    ])
    .flat()
    .filter(Boolean)
    .join('')

  // We can't HTML escape the content until AFTER all the matchData positions
  // have been processed otherwise, the positions should shift.
  // The only HTML that is OK to keep is <mark> and </mark>.
  return highlighted
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/&lt;mark&gt;/g, '<mark>')
    .replace(/&lt;\/mark&gt;/g, '</mark>')
}

function mark(text) {
  return `<mark>${text}</mark>`
}

// Give a long string, "slice" it in a safe way so as to not chop any
// HTML tags in half.
// The resulting string will only be at *least* as long as the `length`
// provided. Possibly longer.
function smartSlice(text, length, needleTag = '<mark>') {
  // If the needleTag isn't present at all, we can dare to use a
  // very basic crude string slice because the text won't have any
  // other HTML tags we might cut in half.
  if (!text.includes(needleTag)) {
    return text.slice(0, length)
  }

  // The algorithm is simple, split the text by lines. Loop over them,
  // and only include them if we've encountered the first needleTag
  // and bail early if we've buffered enough in the array of lines.
  const lines = []
  let sum = 0
  let started = false
  for (const line of text.split('\n')) {
    if (line.indexOf(needleTag) > -1) started = true
    if (started) {
      lines.push(line)
      sum += line.length
      if (sum > length) {
        break
      }
    }
  }
  return lines.join('\n')
}
