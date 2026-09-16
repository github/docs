import { describe, expect, test } from 'vitest'

import {
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
