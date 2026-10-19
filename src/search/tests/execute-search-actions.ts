import { afterEach, describe, expect, test, vi } from 'vitest'
import type { NextRouter } from 'next/router'

import { executeGeneralSearch } from '@/search/components/helpers/execute-search-actions'
import { DEFAULT_VERSION } from '@/versions/components/useVersion'

vi.mock('@/events/components/events', () => ({ sendEvent: vi.fn() }))

function setup(search: string) {
  vi.stubGlobal('window', { location: { search } })
  const push = vi.fn()
  const router = { locale: 'en', push } as unknown as NextRouter
  return { router, push }
}

function pushedUrl(push: ReturnType<typeof vi.fn>) {
  expect(push).toHaveBeenCalledTimes(1)
  return new URL(push.mock.calls[0][0] as string, 'http://localhost')
}

afterEach(() => {
  vi.unstubAllGlobals()
})

describe('executeGeneralSearch', () => {
  test('starts a new query on page 1 of all results', () => {
    const { router, push } = setup(
      '?query=git&toplevel=Get+started&page=4&tool=cli&search-overlay-open=true',
    )
    executeGeneralSearch(router, DEFAULT_VERSION, 'codespaces')
    const url = pushedUrl(push)
    expect(url.pathname).toBe('/en/search')
    expect(url.searchParams.get('query')).toBe('codespaces')
    expect(url.searchParams.get('tool')).toBe('cli')
    expect(url.searchParams.has('page')).toBe(false)
    expect(url.searchParams.has('toplevel')).toBe(false)
    expect(url.searchParams.has('search-overlay-open')).toBe(false)
  })

  test('includes a non-default version in the path', () => {
    const { router, push } = setup('?page=2')
    executeGeneralSearch(router, 'enterprise-cloud@latest', 'actions')
    const url = pushedUrl(push)
    expect(url.pathname).toBe('/en/enterprise-cloud@latest/search')
    expect(url.searchParams.get('query')).toBe('actions')
    expect(url.searchParams.has('page')).toBe(false)
  })
})
