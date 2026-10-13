import { describe, test, expect, vi, beforeEach } from 'vitest'

import { publish } from '@/events/lib/hydro'
import { handleExternalSearchAnalytics } from '@/search/lib/helpers/external-search-analytics'
import type { ExtendedRequest } from '@/types'

vi.mock('@/events/lib/hydro', () => ({
  publish: vi.fn(),
}))

function buildRequest(headers: Record<string, string>, query: Record<string, string> = {}) {
  return { headers: { host: 'docs.github.com', ...headers }, query } as unknown as ExtendedRequest
}

function publishedClient() {
  const payload = (publish as ReturnType<typeof vi.fn>).mock.calls[0][0]
  return payload.value.search_client
}

describe('handleExternalSearchAnalytics', () => {
  beforeEach(() => {
    vi.mocked(publish).mockClear()
  })

  test('sends the client_name as search_client', async () => {
    await handleExternalSearchAnalytics(
      buildRequest({ 'user-agent': 'curl/8.0' }, { client_name: 'my-tool' }),
      'general-search',
    )
    expect(publishedClient()).toBe('my-tool')
  })

  test('sends unknown when a browser-like request has no client_name', async () => {
    await handleExternalSearchAnalytics(
      buildRequest({ 'user-agent': 'SomeAgent/1.0' }),
      'general-search',
    )
    expect(publishedClient()).toBe('unknown')
  })

  test('skips analytics for the docs.github.com frontend', async () => {
    await handleExternalSearchAnalytics(
      buildRequest({ 'sec-fetch-site': 'same-origin' }, { client_name: 'docs.github.com-client' }),
      'general-search',
    )
    expect(publish).not.toHaveBeenCalled()
  })
})
