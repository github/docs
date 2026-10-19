// The 70% threshold keeps singular/plural matches like "agent" to "agents" at 80%
// and "repository" to "repositories" at 73%.
// It rejects noisy matches like "billing" to "installing" and "pricing" to
// "writing pr descriptions", both 67%.
const BIGRAM_COVERAGE_THRESHOLD = 0.7

// Terms with 4 or fewer non-space characters need exact substring matches
// because they produce too few bigrams.
const SHORT_TERM_MAX_LENGTH = 4

// Only article text is cached because its keys come from content and stay bounded.
// Search terms come from the URL, so caching them would grow memory with every new query.
const bigramCache = new Map<string, Set<string>>()

// Bigrams are adjacent character pairs, so "agent" becomes "ag", "ge", "en", and "nt".
const computeBigrams = (lowercased: string): Set<string> => {
  const s = lowercased.replace(/\s+/g, '')
  const bigrams = new Set<string>()
  for (let i = 0; i < s.length - 1; i++) {
    bigrams.add(s.slice(i, i + 2))
  }
  return bigrams
}

const getTextBigrams = (str: string): Set<string> => {
  const key = str.toLowerCase()
  const cached = bigramCache.get(key)
  if (cached) return cached

  const bigrams = computeBigrams(key)
  bigramCache.set(key, bigrams)
  return bigrams
}

// One filter request scores the same query against every field, so keeping the
// latest query avoids rebuilding its bigrams without growing memory per query.
let lastSearch: { key: string; bigrams: Set<string> } | undefined

const getSearchBigrams = (str: string): Set<string> => {
  const key = str.toLowerCase()
  if (lastSearch?.key !== key) lastSearch = { key, bigrams: computeBigrams(key) }
  return lastSearch.bigrams
}

export const getBigramCacheSize = (): number => bigramCache.size

// Bigram coverage measures how many search bigrams appear in text.
// This works better than Jaccard for short queries against longer text.
export const bigramCoverage = (text: string, search: string): number => {
  const textBigrams = getTextBigrams(text)
  const searchBigrams = getSearchBigrams(search)

  if (searchBigrams.size === 0) return 0

  const found = [...searchBigrams].filter((b) => textBigrams.has(b)).length
  return found / searchBigrams.size
}

// Fuzzy scores stay below 1 so exact substring matches always rank first.
const MAX_FUZZY_SCORE = 0.99

const splitWords = (str: string): string[] => str.split(/\s+/).filter(Boolean)

// One-character words have no bigrams, so they need an exact substring match.
const wordScore = (lowerText: string, textWords: string[], searchWord: string): number =>
  searchWord.length === 1
    ? Number(lowerText.includes(searchWord))
    : Math.max(...textWords.map((textWord) => bigramCoverage(textWord, searchWord)))

// Returns 1 for a substring match, a fuzzy score at or above the threshold, or -1 otherwise.
// Each query word is scored against its closest single text word, because bigrams pooled
// across a long intro cover most common words by chance.
export const fuzzyMatchScore = (text: string, searchTerm: string): number => {
  const lowerText = text.toLowerCase()
  const lowerSearch = searchTerm.toLowerCase()

  if (lowerText.includes(lowerSearch)) return 1

  const compactSearch = lowerSearch.replace(/\s+/g, '')
  if (compactSearch.length <= SHORT_TERM_MAX_LENGTH) return -1

  // Joined queries like "vscode" span more than one text word.
  if (lowerText.replace(/\s+/g, '').includes(compactSearch)) return MAX_FUZZY_SCORE

  const textWords = splitWords(lowerText)
  const searchWords = splitWords(lowerSearch)
  if (textWords.length === 0 || searchWords.length === 0) return -1

  const scores = searchWords.map((searchWord) => wordScore(lowerText, textWords, searchWord))
  // A common word like "in" would otherwise carry an unrelated article past the threshold.
  if (scores.some((score) => score < BIGRAM_COVERAGE_THRESHOLD)) return -1

  const average = scores.reduce((sum, score) => sum + score, 0) / scores.length
  return Math.min(average, MAX_FUZZY_SCORE)
}

export const fuzzyMatch = (text: string, searchTerm: string): boolean => {
  return fuzzyMatchScore(text, searchTerm) >= 0
}

// Product-specific landing pages, such as /copilot, repeat the product name in nearly
// every article, so stop words keep the product name from drowning out the query.
export const stripStopWords = (text: string, stopWords: string[]): string =>
  text
    .split(/\s+/)
    .filter((w) => !stopWords.includes(w.toLowerCase()))
    .join(' ')
    .trim()
