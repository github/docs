import { describe, expect, test } from 'vitest'

import { contentUrlPath } from '@/workflows/lib/content-url-path'

describe('contentUrlPath', () => {
  test('maps the homepage to the root path', () => {
    expect(contentUrlPath('index.md')).toBe('')
  })

  test('drops index.md from category paths', () => {
    expect(contentUrlPath('actions/index.md')).toBe('actions')
  })

  test('drops the .md extension from article paths', () => {
    expect(contentUrlPath('actions/foo.md')).toBe('actions/foo')
  })

  test('keeps file names that end in index', () => {
    expect(contentUrlPath('foo/reindex.md')).toBe('foo/reindex')
  })
})
