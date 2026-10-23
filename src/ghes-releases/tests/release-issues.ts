import { describe, expect, test } from 'vitest'

import {
  CHANGELOG_PR_LIMIT,
  buildChangelogPrListArgs,
  buildReleaseIssueListArgs,
  isExcludedReleaseIssue,
  parseIssueState,
  type IssueState,
} from '@/ghes-releases/lib/release-issues'

describe('parseIssueState', () => {
  test('defaults to all when not provided', () => {
    expect(parseIssueState()).toBe('all')
  })

  test('accepts valid values case-insensitively', () => {
    expect(parseIssueState('OPEN')).toBe('open')
    expect(parseIssueState('closed')).toBe('closed')
    expect(parseIssueState('All')).toBe('all')
  })

  test('throws on invalid values', () => {
    expect(() => parseIssueState('anything-else')).toThrow('Invalid issue state')
  })
})

describe('buildReleaseIssueListArgs', () => {
  test('builds gh issue list args with release label and state', () => {
    const args = buildReleaseIssueListArgs('3.20', 'closed' satisfies IssueState)

    expect(args).toEqual([
      'issue',
      'list',
      '--repo',
      'github/releases',
      '--label',
      'GHES 3.20',
      '--state',
      'closed',
      '--limit',
      '200',
      '--json',
      'number,title,url,body,labels',
    ])
  })
})

describe('buildChangelogPrListArgs', () => {
  test('builds gh pr list args for merged github/blog changelog PRs since a date', () => {
    const args = buildChangelogPrListArgs('2026-04-16')

    expect(args).toEqual([
      'pr',
      'list',
      '--repo',
      'github/blog',
      '--state',
      'merged',
      '--search',
      'Changelog in:title merged:>=2026-04-16',
      '--limit',
      String(CHANGELOG_PR_LIMIT),
      '--json',
      'number,body,url',
    ])
  })

  test('requests more than one page of 200 results', () => {
    expect(CHANGELOG_PR_LIMIT).toBeGreaterThan(200)
  })
})

describe('isExcludedReleaseIssue', () => {
  test('returns true for public roadmap label', () => {
    expect(isExcludedReleaseIssue({ labels: [{ name: 'public roadmap' }] })).toBe(true)
  })

  test('returns true for not planned label (case-insensitive)', () => {
    expect(isExcludedReleaseIssue({ labels: [{ name: 'Not Planned' }] })).toBe(true)
  })

  test('returns false when no excluded labels are present', () => {
    expect(isExcludedReleaseIssue({ labels: [{ name: 'GHES 3.20' }, { name: 'bug' }] })).toBe(false)
  })
})
