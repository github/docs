import { describe, expect, test } from 'vitest'

import { shouldPreserveUtm } from '@/frame/components/lib/utm'

describe('shouldPreserveUtm', () => {
  test('returns true for github.com and its subdomains', () => {
    expect(shouldPreserveUtm('https://github.com/features/copilot')).toBe(true)
    expect(shouldPreserveUtm('https://blog.github.com/x')).toBe(true)
    expect(shouldPreserveUtm('https://resources.github.com/y')).toBe(true)
    expect(shouldPreserveUtm('https://GitHub.com/x')).toBe(true)
    expect(shouldPreserveUtm('http://github.com/x')).toBe(true)
  })

  test('returns false for docs.github.com', () => {
    expect(shouldPreserveUtm('https://docs.github.com/en/x')).toBe(false)
  })

  test('returns false for other hosts with github.com in the path or query', () => {
    expect(
      shouldPreserveUtm(
        'https://htmlpreview.github.io/?https://github.com/newren/git-filter-repo/blob/docs/html/git-filter-repo.html',
      ),
    ).toBe(false)
    expect(
      shouldPreserveUtm('https://pkg.go.dev/github.com/actions/actions-runner-controller'),
    ).toBe(false)
    expect(shouldPreserveUtm('https://notgithub.com/x')).toBe(false)
  })

  test('returns false for relative, non-http, and invalid URLs', () => {
    expect(shouldPreserveUtm('/en/get-started')).toBe(false)
    expect(shouldPreserveUtm('mailto:someone@github.com')).toBe(false)
    expect(shouldPreserveUtm('not a url')).toBe(false)
  })
})
