import { describe, expect, test } from 'vitest'

import { buildShallowQueryUrls } from '@/frame/components/lib/shallow-query-url'

describe('buildShallowQueryUrls', () => {
  test('keeps the locale in `as` on the home page and out of `url`', () => {
    expect(buildShallowQueryUrls('/', '?search-overlay-open=true', 'en')).toEqual({
      url: '/?search-overlay-open=true',
      as: '/en?search-overlay-open=true',
    })
    expect(buildShallowQueryUrls('/', '', 'en')).toEqual({ url: '/', as: '/en' })
    expect(buildShallowQueryUrls('/', '?a=b', 'ja')).toEqual({ url: '/?a=b', as: '/ja?a=b' })
    expect(buildShallowQueryUrls('/', '', 'ja')).toEqual({ url: '/', as: '/ja' })
  })

  test('prefixes other pages with the locale', () => {
    expect(buildShallowQueryUrls('/get-started', '?a=b', 'en')).toEqual({
      url: '/en/get-started?a=b',
      as: '/en/get-started?a=b',
    })
    expect(buildShallowQueryUrls('/enterprise-cloud@latest', '', 'en')).toEqual({
      url: '/en/enterprise-cloud@latest',
      as: '/en/enterprise-cloud@latest',
    })
  })

  test('leaves the path alone without a locale', () => {
    expect(buildShallowQueryUrls('/', '?a=b', undefined)).toEqual({ url: '/?a=b', as: '/?a=b' })
    expect(buildShallowQueryUrls('/get-started', '', undefined)).toEqual({
      url: '/get-started',
      as: '/get-started',
    })
  })
})
