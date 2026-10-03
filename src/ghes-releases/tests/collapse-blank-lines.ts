import { describe, expect, test } from 'vitest'

import { collapse, parseChangedLines } from '@/ghes-releases/scripts/deprecate/collapse-blank-lines'

const noChanges = { added: new Set<number>(), deletedAfter: new Set<number>() }

describe('parseChangedLines', () => {
  test('records added lines and deletion points', () => {
    const diff = [
      'diff --git a/file.md b/file.md',
      '@@ -3,2 +2,0 @@ heading',
      '-{% ifversion ghes < 3.18 %}',
      '-old text',
      '@@ -10 +8,2 @@',
      '-before',
      '+after',
      '+more',
    ].join('\n')

    const { added, deletedAfter } = parseChangedLines(diff)

    expect([...added]).toEqual([8, 9])
    expect([...deletedAfter]).toEqual([2])
  })
})

describe('collapse', () => {
  test('collapses a run next to a deletion', () => {
    const contents = 'one\n\n\ntwo'
    const changed = { added: new Set<number>(), deletedAfter: new Set([2]) }

    expect(collapse(contents, changed)).toBe('one\n\ntwo')
  })

  test('collapses a run that contains an added line', () => {
    const contents = 'one\n\n\ntwo'
    const changed = { added: new Set([3]), deletedAfter: new Set<number>() }

    expect(collapse(contents, changed)).toBe('one\n\ntwo')
  })

  test('keeps runs the diff did not touch', () => {
    const contents = 'import jwt\n\n\ndef main():'

    expect(collapse(contents, noChanges)).toBe(contents)
  })

  test('removes a touched blank run at the end of a file', () => {
    const contents = 'one\n\n'
    const changed = { added: new Set<number>(), deletedAfter: new Set([2]) }

    expect(collapse(contents, changed)).toBe('one\n')
  })

  test('keeps an untouched blank line at the end of a file', () => {
    const contents = 'one\n\n'

    expect(collapse(contents, noChanges)).toBe(contents)
  })

  test('keeps whitespace-only lines as they are', () => {
    const contents = 'one\n  \ntwo'
    const changed = { added: new Set([2]), deletedAfter: new Set<number>() }

    expect(collapse(contents, changed)).toBe(contents)
  })
})
