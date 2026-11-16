import { describe, expect, test } from 'vitest'
import type { Request } from 'express'

import { getSearchFromRequestParams } from '@/search/lib/search-request-params/get-search-from-request-params'

function fakeRequest(query: Record<string, string>): Request {
  return { query } as unknown as Request
}

// Inherited Object.prototype names must fail validation instead of reaching
// getElasticSearchIndex, which throws a non-validation error.
const PROTOTYPE_KEYS = ['constructor', 'toString', '__proto__', 'hasOwnProperty', 'valueOf']

describe('getSearchFromRequestParams', () => {
  test('accepts a valid version', () => {
    const { indexName, validationErrors } = getSearchFromRequestParams(
      fakeRequest({ query: 'git', version: 'free-pro-team' }),
      'generalSearch',
    )
    expect(validationErrors).toEqual([])
    expect(indexName).toContain('_fpt_en')
  })

  for (const type of ['generalSearch', 'aiSearchAutocomplete'] as const) {
    for (const version of PROTOTYPE_KEYS) {
      test(`rejects version '${version}' for ${type}`, () => {
        const { indexName, validationErrors } = getSearchFromRequestParams(
          fakeRequest({ query: 'git', version }),
          type,
        )
        expect(validationErrors.length).toBe(1)
        expect(validationErrors[0].field).toBe('version')
        expect(indexName).toBe('')
      })
    }
  }

  for (const language of PROTOTYPE_KEYS) {
    test(`rejects language '${language}' for generalSearch`, () => {
      const { indexName, validationErrors } = getSearchFromRequestParams(
        fakeRequest({ query: 'git', language }),
        'generalSearch',
      )
      expect(validationErrors.length).toBe(1)
      expect(validationErrors[0].key).toBe('language')
      expect(indexName).toBe('')
    })
  }
})
