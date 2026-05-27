import { describe, expect, test } from 'vitest'

import {
  parseSourceNotes,
  buildCommentBody,
  buildMarker,
} from '@/ghes-releases/scripts/notify-release-pms'
import type { SourceNote } from '@/ghes-releases/scripts/notify-release-pms'

// ─── parseSourceNotes ────────────────────────────────────────────────────────

describe('parseSourceNotes', () => {
  test('extracts issue URLs from YAML comments', () => {
    const content = `date: '2026-04-01'
sections:
  features:
    # https://github.com/github/releases/issues/1234
    - heading: GitHub Actions
      notes:
        - Some note text.
    # https://github.com/github/releases/issues/5678
    - heading: Repositories
      notes:
        - Another note.`

    const notes = parseSourceNotes(content)
    expect(notes).toEqual([
      { issueUrl: 'https://github.com/github/releases/issues/1234', issueNumber: 1234 },
      { issueUrl: 'https://github.com/github/releases/issues/5678', issueNumber: 5678 },
    ])
  })

  test('deduplicates issues that appear multiple times', () => {
    const content = `sections:
  features:
    # https://github.com/github/releases/issues/1234
    - heading: GitHub Actions
      notes:
        - Feature note.
  changes:
    # https://github.com/github/releases/issues/1234
    - heading: GitHub Actions
      notes:
        - Change note.`

    const notes = parseSourceNotes(content)
    expect(notes).toHaveLength(1)
    expect(notes[0].issueNumber).toBe(1234)
  })

  test('returns empty array when there are no issue comments', () => {
    const content = `date: '2026-04-01'
sections:
  features:
    - heading: GitHub Actions
      notes:
        - Some note without a source issue.`

    expect(parseSourceNotes(content)).toEqual([])
  })

  test('handles indented comments', () => {
    const content = `    # https://github.com/github/releases/issues/999`
    const notes = parseSourceNotes(content)
    expect(notes).toHaveLength(1)
    expect(notes[0].issueNumber).toBe(999)
  })
})

// ─── buildMarker ─────────────────────────────────────────────────────────────

describe('buildMarker', () => {
  test('produces a stable HTML comment marker for RC', () => {
    expect(buildMarker('3.21', 'rc')).toBe('<!-- ghes-release-note-review: 3.21-rc -->')
  })

  test('produces a stable HTML comment marker for GA', () => {
    expect(buildMarker('3.21', 'ga')).toBe('<!-- ghes-release-note-review: 3.21-ga -->')
  })

  test('RC and GA markers for the same version are different', () => {
    expect(buildMarker('3.21', 'rc')).not.toBe(buildMarker('3.21', 'ga'))
  })
})

// ─── buildCommentBody ────────────────────────────────────────────────────────

describe('buildCommentBody', () => {
  test('includes the marker in the comment body', () => {
    const body = buildCommentBody(
      '3.21',
      true,
      100,
      'data/release-notes/enterprise-server/3-21/0-rc1.yml',
      '2026-05-01',
    )
    const marker = buildMarker('3.21', 'rc')
    expect(body).toContain(marker)
  })

  test('RC and GA comments have different markers', () => {
    const rcBody = buildCommentBody('3.21', true, 100, 'file.yml', '2026-05-01')
    const gaBody = buildCommentBody('3.21', false, 100, 'file.yml', '2026-05-01')
    expect(rcBody).toContain('3.21-rc')
    expect(gaBody).toContain('3.21-ga')
  })

  test('includes the PR files link', () => {
    const body = buildCommentBody('3.21', true, 12345, 'file.yml', '2026-05-01')
    expect(body).toContain('https://github.com/github/docs-internal/pull/12345/files')
  })
})

// ─── Duplicate-prevention logic ──────────────────────────────────────────────

describe('duplicate-prevention filtering', () => {
  // This tests the core filtering logic used in the CLI action:
  //   const toNotify = sourceNotes.filter((n) => !alreadyCommented.has(n.issueNumber))

  const sourceNotes: SourceNote[] = [
    { issueUrl: 'https://github.com/github/releases/issues/100', issueNumber: 100 },
    { issueUrl: 'https://github.com/github/releases/issues/200', issueNumber: 200 },
    { issueUrl: 'https://github.com/github/releases/issues/300', issueNumber: 300 },
  ]

  test('excludes issues that already have a notification comment', () => {
    const alreadyCommented = new Set([100, 300])
    const toNotify = sourceNotes.filter((n) => !alreadyCommented.has(n.issueNumber))
    expect(toNotify).toEqual([
      { issueUrl: 'https://github.com/github/releases/issues/200', issueNumber: 200 },
    ])
  })

  test('includes all issues when none have been commented on', () => {
    const alreadyCommented = new Set<number>()
    const toNotify = sourceNotes.filter((n) => !alreadyCommented.has(n.issueNumber))
    expect(toNotify).toEqual(sourceNotes)
  })

  test('excludes all issues when all have been commented on', () => {
    const alreadyCommented = new Set([100, 200, 300])
    const toNotify = sourceNotes.filter((n) => !alreadyCommented.has(n.issueNumber))
    expect(toNotify).toEqual([])
  })

  test('marker is detected within a comment body', () => {
    const marker = buildMarker('3.21', 'rc')
    const commentBody = buildCommentBody('3.21', true, 100, 'file.yml', '2026-05-01')

    // Simulates the duplicate-check logic: comments.includes(marker)
    expect(commentBody.includes(marker)).toBe(true)
  })

  test('GA marker is not detected in an RC comment', () => {
    const gaMarker = buildMarker('3.21', 'ga')
    const rcCommentBody = buildCommentBody('3.21', true, 100, 'file.yml', '2026-05-01')

    expect(rcCommentBody.includes(gaMarker)).toBe(false)
  })

  test('new issues added after initial run are not excluded', () => {
    // Simulates: ran script once for issues 100+200, then re-run after adding 300
    const alreadyCommented = new Set([100, 200])
    const updatedSourceNotes: SourceNote[] = [
      ...sourceNotes,
      { issueUrl: 'https://github.com/github/releases/issues/400', issueNumber: 400 },
    ]
    const toNotify = updatedSourceNotes.filter((n) => !alreadyCommented.has(n.issueNumber))
    expect(toNotify).toEqual([
      { issueUrl: 'https://github.com/github/releases/issues/300', issueNumber: 300 },
      { issueUrl: 'https://github.com/github/releases/issues/400', issueNumber: 400 },
    ])
  })
})
