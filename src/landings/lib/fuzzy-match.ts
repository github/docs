// 60% threshold: Empirically chosen to balance precision vs recall.
// Lower values (e.g., 40%) match too loosely (e.g., "agent" matches "urgent").
// Higher values (e.g., 80%) miss reasonable matches like singular/plural variations.
// 60% captures most typo corrections and word form variations while filtering noise.
const BIGRAM_COVERAGE_THRESHOLD = 0.6

// Memoization cache for bigram computation
const bigramCache = new Map<string, Set<string>>()

// Extract character bigrams from a string (e.g., "agent" → ["ag", "ge", "en", "nt"])
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

// Coverage: what percentage of search bigrams are found in text
// Better for matching short queries against long text
export const bigramCoverage = (text: string, search: string): number => {
  const textBigrams = getBigrams(text)
  const searchBigrams = getBigrams(search)

  if (searchBigrams.size === 0) return 0

  const found = [...searchBigrams].filter((b) => textBigrams.has(b)).length
  return found / searchBigrams.size
}

// Returns a match score: 1 for exact match, 0-1 for bigram coverage, -1 for no match
export const fuzzyMatchScore = (text: string, searchTerm: string): number => {
  const lowerText = text.toLowerCase()
  const lowerSearch = searchTerm.toLowerCase()

  // Exact substring match gets highest score
  if (lowerText.includes(lowerSearch)) return 1

  // Bigram coverage: what % of search bigrams appear in text
  // This works better than Jaccard when text is much longer than search
  const score = bigramCoverage(text, searchTerm)
  return score >= BIGRAM_COVERAGE_THRESHOLD ? score : -1
}

// Check if searchTerm matches text (for filtering)
export const fuzzyMatch = (text: string, searchTerm: string): boolean => {
  return fuzzyMatchScore(text, searchTerm) >= 0
}
