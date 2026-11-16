import { describe, expect, test } from 'vitest'

import { applyQueryParams, buildParamsUrl } from '@/search/components/hooks/useMultiQueryParams'
import type { QueryParams } from '@/search/components/hooks/useMultiQueryParams'

const emptyParams: QueryParams = {
  'search-overlay-input': '',
  'search-overlay-ask-ai': '',
  debug: '',
  'articles-category': '',
  'articles-filter': '',
  'articles-page': '',
}

describe('applyQueryParams', () => {
  test('search overlay updates keep the article grid params', () => {
    const query = 'articles-category=Tutorials&articles-page=2&articles-filter=foo'
    const params = { ...emptyParams, 'search-overlay-input': 'a' }
    const result = applyQueryParams(`${query}&search-overlay-open=true`, params, [
      'search-overlay-input',
      'search-overlay-ask-ai',
    ])
    expect(result.toString()).toBe(`${query}&search-overlay-open=true&search-overlay-input=a`)
  })

  test('article grid updates keep the search overlay params', () => {
    const params = { ...emptyParams, 'articles-category': 'Agents' }
    const result = applyQueryParams(
      'search-overlay-open=true&search-overlay-input=a&search-overlay-ask-ai=true',
      params,
      ['articles-category', 'articles-page'],
    )
    expect(result.toString()).toBe(
      'search-overlay-open=true&search-overlay-input=a&search-overlay-ask-ai=true&articles-category=Agents',
    )
  })

  test('empty values delete only the given keys', () => {
    const result = applyQueryParams('articles-category=Agents&articles-page=2', emptyParams, [
      'articles-page',
    ])
    expect(result.toString()).toBe('articles-category=Agents')
  })

  test('writes search-overlay-ask-ai only when it is true', () => {
    const keys: (keyof QueryParams)[] = ['search-overlay-ask-ai']
    const askAI = { ...emptyParams, 'search-overlay-ask-ai': 'true' }
    expect(applyQueryParams('', askAI, keys).toString()).toBe('search-overlay-ask-ai=true')
    const other = { ...emptyParams, 'search-overlay-ask-ai': 'yes' }
    expect(applyQueryParams('search-overlay-ask-ai=true', other, keys).toString()).toBe('')
  })
})

describe('buildParamsUrl', () => {
  test('a header update keeps a category written while it waited', () => {
    // The header scheduled its update before the grid's category push landed in the URL.
    const scheduledAsPath = '/copilot?search-overlay-open=true'
    const liveQuery = '?search-overlay-open=true&articles-category=Testing'
    const params = { ...emptyParams, 'search-overlay-input': 'a' }
    const { url, as } = buildParamsUrl(scheduledAsPath, liveQuery, 'en', params, [
      'search-overlay-input',
    ])
    const expected =
      '/en/copilot?search-overlay-open=true&articles-category=Testing&search-overlay-input=a'
    expect(url).toBe(expected)
    expect(as).toBe(expected)
  })

  test('drops the hash and keeps the home page locale only in `as`', () => {
    const params = { ...emptyParams, 'articles-page': '2' }
    expect(buildParamsUrl('/#top', '', 'en', params, ['articles-page'])).toEqual({
      url: '/?articles-page=2',
      as: '/en?articles-page=2',
    })
    expect(
      buildParamsUrl('/copilot#top', '?articles-page=2', 'en', emptyParams, ['articles-page']),
    ).toEqual({ url: '/en/copilot', as: '/en/copilot' })
  })
})
