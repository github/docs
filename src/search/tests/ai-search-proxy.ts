import { describe, test, expect, vi, beforeEach } from 'vitest'

import statsd from '@/observability/lib/statsd'
import { fetchStream } from '@/frame/lib/fetch-utils'
import { aiSearchProxy } from '@/search/lib/ai-search-proxy'
import { RAI_CONTENT_FILTER_CODE } from '@/search/lib/ai-search-constants'
import type { ExtendedRequest } from '@/types'

vi.mock('@/observability/lib/statsd', () => ({
  default: { increment: vi.fn(), gauge: vi.fn() },
}))

vi.mock('@/frame/lib/fetch-utils', () => ({
  fetchStream: vi.fn(),
}))

vi.mock('@/search/lib/helpers/get-cse-copilot-auth', () => ({
  getHmacWithEpoch: () => 'test-auth',
}))

vi.mock('@/search/lib/helpers/cse-copilot-docs-versions', () => ({
  getCSECopilotSource: () => 'docs',
}))

vi.mock('@/search/lib/helpers/external-search-analytics', () => ({
  handleExternalSearchAnalytics: async () => null,
}))

const incrementedMetrics = () =>
  (statsd.increment as ReturnType<typeof vi.fn>).mock.calls.map((call) => call[0])

function buildResponse() {
  const res = {
    statusCode: 0,
    body: null as unknown,
    status(code: number) {
      this.statusCode = code
      return this
    },
    json(payload: unknown) {
      this.body = payload
      return this
    },
    setHeader: vi.fn(),
    flushHeaders: vi.fn(),
    write: vi.fn(),
    end: vi.fn(),
    headersSent: false,
  }
  return res
}

function buildRequest(): ExtendedRequest {
  return {
    body: { query: 'a disallowed query', version: 'dotcom' },
    language: 'en',
  } as unknown as ExtendedRequest
}

function mockUpstream(
  status: number,
  jsonBody: unknown | (() => never),
  contentType = 'application/json',
) {
  const json = vi.fn(async () => {
    if (typeof jsonBody === 'function') {
      return (jsonBody as () => never)()
    }
    return jsonBody
  })
  ;(fetchStream as ReturnType<typeof vi.fn>).mockResolvedValue({
    ok: status < 400,
    status,
    headers: {
      get: (name: string) => (name.toLowerCase() === 'content-type' ? contentType : null),
    },
    json,
  })
  return json
}

describe('aiSearchProxy upstream 400 handling', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  test('RAI content filter 400 increments content_filtered, not stream_response_error', async () => {
    mockUpstream(400, {
      code: 400,
      message: 'Responsible AI input content policy breach',
      detail: { code: RAI_CONTENT_FILTER_CODE },
    })
    const res = buildResponse()

    await aiSearchProxy(buildRequest(), res as never)

    const metrics = incrementedMetrics()
    expect(metrics).toContain('ai-search.content_filtered')
    expect(metrics).not.toContain('ai-search.stream_response_error')
    expect(metrics).toContain('ai-search.call')
    expect(res.statusCode).toBe(400)
  })

  test('non-RAI 400 increments stream_response_error', async () => {
    mockUpstream(400, { code: 400, message: 'some other bad request' })
    const res = buildResponse()

    await aiSearchProxy(buildRequest(), res as never)

    const metrics = incrementedMetrics()
    expect(metrics).toContain('ai-search.stream_response_error')
    expect(metrics).not.toContain('ai-search.content_filtered')
    expect(res.statusCode).toBe(400)
  })

  test('malformed 400 body increments stream_response_error', async () => {
    mockUpstream(400, () => {
      throw new Error('invalid json')
    })
    const res = buildResponse()

    await aiSearchProxy(buildRequest(), res as never)

    const metrics = incrementedMetrics()
    expect(metrics).toContain('ai-search.stream_response_error')
    expect(metrics).not.toContain('ai-search.content_filtered')
    expect(res.statusCode).toBe(400)
  })

  test('non-JSON 400 body increments stream_response_error without parsing', async () => {
    const json = mockUpstream(
      400,
      () => {
        throw new Error('should not be parsed')
      },
      'text/html',
    )
    const res = buildResponse()

    await aiSearchProxy(buildRequest(), res as never)

    const metrics = incrementedMetrics()
    expect(json).not.toHaveBeenCalled()
    expect(metrics).toContain('ai-search.stream_response_error')
    expect(metrics).not.toContain('ai-search.content_filtered')
    expect(res.statusCode).toBe(400)
  })
})
