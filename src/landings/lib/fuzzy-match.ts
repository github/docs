// The 70% threshold keeps singular/plural matches like "agent" to "agents" at 80%
// and "repository" to "repositories" at 73%.
// It rejects noisy matches like "billing" to "installing" and "pricing" to
// "writing pr descriptions", both 67%.
const BIGRAM_COVERAGE_THRESHOLD = 0.7

// Terms with 4 or fewer non-space characters need exact substring matches
// because they produce too few bigrams.
const SHORT_TERM_MAX_LENGTH = 4

const bigramCache = new Map<string, Set<string>>()

// Bigrams are adjacent character pairs, so "agent" becomes "ag", "ge", "en", and "nt".
const getBigrams = (str: string): Set<string> => {
  const key = str.toLowerCase()
  if (bigramCache.has(key)) {
    return bigramCache.get(key)!
  }

  const s = key.replace(/\s+/g, '')
  const bigrams = new Set<string>()
  for (let i = 0; i < s.length - 1; i++) {
    bigrams.add(s.slice(i, i + 2))
  }

  bigramCache.set(key, bigrams)
  return bigrams
}

// Bigram coverage measures how many search bigrams appear in text.
// This works better than Jaccard for short queries against longer text.
export const bigramCoverage = (text: string, search: string): number => {
  const textBigrams = getBigrams(text)
  const searchBigrams = getBigrams(search)

  if (searchBigrams.size === 0) return 0

  const found = [...searchBigrams].filter((b) => textBigrams.has(b)).length
  return found / searchBigrams.size
}

// Returns 1 for a substring match, bigram coverage at or above the threshold, or -1 otherwise.
export const fuzzyMatchScore = (text: string, searchTerm: string): number => {
  const lowerText = text.toLowerCase()
  const lowerSearch = searchTerm.toLowerCase()

  if (lowerText.includes(lowerSearch)) return 1

  if (lowerSearch.replace(/\s+/g, '').length <= SHORT_TERM_MAX_LENGTH) return -1

  const score = bigramCoverage(text, searchTerm)
  return score >= BIGRAM_COVERAGE_THRESHOLD ? score : -1
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
