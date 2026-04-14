import { describe, expect, test } from 'vitest'

import {
  fuzzyMatch,
  fuzzyMatchScore,
  bigramCoverage,
  stripStopWords,
} from '@/landings/lib/fuzzy-match'

describe('fuzzyMatch', () => {
  test('matches exact substrings', () => {
    expect(fuzzyMatch('GitHub Copilot agents', 'agent')).toBe(true)
    expect(fuzzyMatch('GitHub Copilot agents', 'copilot')).toBe(true)
  })

  test('matches singular vs plural via bigrams', () => {
    expect(fuzzyMatch('GitHub Copilot agent', 'agents')).toBe(true)
    // "repositories" vs "repository" = 73% coverage, above 70% threshold
    expect(fuzzyMatch('Managing your repository', 'repositories')).toBe(true)
  })

  test('is case insensitive', () => {
    expect(fuzzyMatch('GitHub Copilot', 'COPILOT')).toBe(true)
    expect(fuzzyMatch('AGENTS', 'agents')).toBe(true)
  })

  test('returns false for non-matching text', () => {
    expect(fuzzyMatch('GitHub Copilot', 'xyz')).toBe(false)
    expect(fuzzyMatch('Repository settings', 'workflow')).toBe(false)
  })

  test('short terms (<=4 chars) require exact substring match', () => {
    // "test" is 4 chars — exact substring only
    expect(fuzzyMatch('Writing tests', 'test')).toBe(true)
    expect(fuzzyMatch('Generating tables', 'test')).toBe(false)
    // "mcp" is 3 chars
    expect(fuzzyMatch('Using the GitHub MCP Server', 'mcp')).toBe(true)
    expect(fuzzyMatch('Coding agents', 'mcp')).toBe(false)
    // "pr" is 2 chars — exact substring only
    expect(fuzzyMatch('Writing PR descriptions', 'pr')).toBe(true)
    // "pr" is a substring of "enterprise", so this still matches (exact match)
    expect(fuzzyMatch('Enterprise setup', 'pr')).toBe(true)
  })

  test('rejects false positives from similar-looking words at 75% threshold', () => {
    // "billing" vs "installing" shared bigrams ll,li,in,ng = 4/6 = 67% (below 75%)
    expect(fuzzyMatch('Installing extensions', 'billing')).toBe(false)
    // "pricing" vs "writing pr" shared bigrams pr,ri,in,ng = 4/6 = 67% (below 75%)
    expect(fuzzyMatch('Writing PR descriptions', 'pricing')).toBe(false)
  })

  test('matches multi-word queries via bigram coverage', () => {
    expect(fuzzyMatch('About GitHub Copilot agent features', 'copilot agent')).toBe(true)
    expect(fuzzyMatch('Using agent in Copilot', 'copilot agent')).toBe(true)
  })

  test('multi-word queries require sufficient bigram overlap', () => {
    expect(fuzzyMatch('xyz abc', 'copilot agents')).toBe(false)
  })

  test('handles edge cases gracefully', () => {
    // Empty strings
    expect(fuzzyMatch('GitHub Copilot', '')).toBe(true) // empty search matches anything
    expect(fuzzyMatch('', 'copilot')).toBe(false)
    expect(fuzzyMatch('', '')).toBe(true)

    // Whitespace-only queries
    expect(fuzzyMatch('GitHub Copilot', '   ')).toBe(false)

    // Multiple consecutive spaces in query
    expect(fuzzyMatch('GitHub Copilot agent', 'copilot   agent')).toBe(true)
  })
})

describe('fuzzyMatchScore', () => {
  test('returns 1 for exact substring match', () => {
    expect(fuzzyMatchScore('GitHub Copilot agents', 'copilot')).toBe(1)
  })

  test('returns -1 for no match', () => {
    expect(fuzzyMatchScore('GitHub Copilot', 'xyz')).toBe(-1)
  })

  test('returns bigram coverage score for fuzzy matches', () => {
    // Bigram coverage should give a score between 0.7 and 1
    const score = fuzzyMatchScore('About Copilot memory features', 'memory copilot')
    expect(score).toBeGreaterThanOrEqual(0.7)
    expect(score).toBeLessThan(1)
  })

  test('matches singular vs plural via bigrams', () => {
    // "agents" bigrams: ag, ge, en, nt, ts (5)
    // "agent" in text has: ag, ge, en, nt (4)
    // Coverage: 4/5 = 0.8, which is > 0.7 threshold
    const score = fuzzyMatchScore('GitHub Copilot agent', 'agents')
    expect(score).toBeGreaterThanOrEqual(0.7)
  })

  test('rejects short terms that are not exact substrings', () => {
    expect(fuzzyMatchScore('Generating tables', 'test')).toBe(-1)
    expect(fuzzyMatchScore('Coding agents', 'mcp')).toBe(-1)
  })

  test('exact substring matches score higher than fuzzy matches', () => {
    const exactScore = fuzzyMatchScore('copilot agent guide', 'copilot agent')
    const fuzzyScore = fuzzyMatchScore('About Copilot memory features', 'memory copilot')
    expect(exactScore).toBe(1)
    expect(fuzzyScore).toBeLessThan(1)
  })
})

describe('bigramCoverage', () => {
  test('returns 1.0 when all search bigrams are found in text', () => {
    expect(bigramCoverage('copilot agent', 'agent')).toBe(1)
  })

  test('returns 0 for completely different texts', () => {
    expect(bigramCoverage('xyz', 'abc')).toBe(0)
  })

  test('returns 0 for empty search string', () => {
    expect(bigramCoverage('some text', '')).toBe(0)
  })

  test('handles singular vs plural with high coverage', () => {
    // "agents" bigrams: ag, ge, en, nt, ts (5)
    // "agent" in text has: ag, ge, en, nt (4)
    // Coverage: 4/5 = 0.8
    const coverage = bigramCoverage('agent', 'agents')
    expect(coverage).toBeCloseTo(4 / 5, 2)
  })

  test('calculates partial coverage correctly', () => {
    // Text "hello" has bigrams: he, el, ll, lo
    // Search "help" has bigrams: he, el, lp
    // Found: he, el (2 of 3) = 0.67
    const coverage = bigramCoverage('hello', 'help')
    expect(coverage).toBeCloseTo(2 / 3, 2)
  })

  test('is case insensitive', () => {
    expect(bigramCoverage('COPILOT', 'copilot')).toBe(1)
    expect(bigramCoverage('copilot', 'COPILOT')).toBe(1)
  })

  test('ignores whitespace in both text and search', () => {
    expect(bigramCoverage('co pi lot', 'copilot')).toBe(1)
    expect(bigramCoverage('copilot', 'co pi lot')).toBe(1)
  })
})

describe('stripStopWords', () => {
  test('removes specified stop words (case-insensitive)', () => {
    expect(stripStopWords('GitHub Copilot agents', ['copilot', 'github'])).toBe('agents')
    expect(stripStopWords('copilot trial', ['copilot', 'github'])).toBe('trial')
    expect(stripStopWords('start Copilot trial', ['copilot', 'github'])).toBe('start trial')
  })

  test('returns empty string when only stop words', () => {
    expect(stripStopWords('copilot', ['copilot', 'github'])).toBe('')
    expect(stripStopWords('GitHub Copilot', ['copilot', 'github'])).toBe('')
  })

  test('preserves other words unchanged', () => {
    expect(stripStopWords('billing plans', ['copilot', 'github'])).toBe('billing plans')
    expect(stripStopWords('code review', ['copilot', 'github'])).toBe('code review')
  })

  test('with empty stop words list, preserves all words', () => {
    expect(stripStopWords('GitHub Copilot agents', [])).toBe('GitHub Copilot agents')
  })
})
