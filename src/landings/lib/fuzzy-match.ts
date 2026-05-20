// 70% threshold: Raised from 60% to reduce false positives from short queries.
// At 60%, "billing" matched "installing" and "pricing" matched "writing pr descriptions".
// 70% still captures singular/plural ("agent"→"agents" = 80%, "repository"→"repositories" = 73%)
// while filtering the worst noise (both of those false positives were at 67%).
const BIGRAM_COVERAGE_THRESHOLD = 0.7

// Short search terms produce very few bigrams, making spurious matches likely.
// Require exact substring match for terms with 4 or fewer non-space characters.
const SHORT_TERM_MAX_LENGTH = 4

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

  // Short search terms (e.g., "mcp", "pr", "test") produce too few bigrams
  // for reliable fuzzy matching, so require exact substring only.
  if (lowerSearch.replace(/\s+/g, '').length <= SHORT_TERM_MAX_LENGTH) return -1

  // Bigram coverage: what % of search bigrams appear in text
  // This works better than Jaccard when text is much longer than search
  const score = bigramCoverage(text, searchTerm)
  return score >= BIGRAM_COVERAGE_THRESHOLD ? score : -1
}

// Check if searchTerm matches text (for filtering)
export const fuzzyMatch = (text: string, searchTerm: string): boolean => {
  return fuzzyMatchScore(text, searchTerm) >= 0
}

// Strip stop words from a string, preserving other words.
// On product-specific landing pages (e.g. /copilot), the product name appears
// in nearly every article, drowning out the actual query.
export const stripStopWords = (text: string, stopWords: string[]): string =>
  text
    .split(/\s+/)
    .filter((w) => !stopWords.includes(w.toLowerCase()))
    .join(' ')
    .trim()
