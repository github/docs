import { describe, test, expect, vi, beforeEach, afterEach } from 'vitest'

import { fetchWithRetry, readBodyWithTimeout } from '@/frame/lib/fetch-utils'

const statsdIncrement = vi.fn()

vi.mock('@/observability/lib/statsd', () => ({
  default: {
    increment: (...args: unknown[]) => statsdIncrement(...args),
  },
}))

function timeoutError(): DOMException {
  return new DOMException('The operation timed out', 'TimeoutError')
}

function abortError(): DOMException {
  return new DOMException('The operation was aborted', 'AbortError')
}

describe('fetchWithRetry timeout', () => {
  const fetchMock = vi.fn()
  const originalFetch = globalThis.fetch

  beforeEach(() => {
    statsdIncrement.mockReset()
    fetchMock.mockReset()
    globalThis.fetch = fetchMock as unknown as typeof fetch
  })

  afterEach(() => {
    globalThis.fetch = originalFetch
  })

  test('returns the response when fetch succeeds', async () => {
    fetchMock.mockResolvedValue(new Response('ok', { status: 200 }))

    const response = await fetchWithRetry('https://example.test/ok', {}, { timeout: 1_000 })

    expect(response.status).toBe(200)
    expect(statsdIncrement).not.toHaveBeenCalled()
  })

  test('translates a time-to-first-byte timeout and emits the metric', async () => {
    fetchMock.mockRejectedValue(timeoutError())

    await expect(
      fetchWithRetry('https://example.test/slow', {}, { retries: 0, timeout: 1_000 }),
    ).rejects.toThrow('Request timed out after 1000ms')

    expect(statsdIncrement).toHaveBeenCalledWith('fetch.timeout', 1, ['host:example.test'])
  })

  test('does not treat a caller-initiated abort as a timeout', async () => {
    fetchMock.mockRejectedValue(abortError())

    await expect(
      fetchWithRetry('https://example.test/aborted', {}, { retries: 0, timeout: 1_000 }),
    ).rejects.toMatchObject({ name: 'AbortError' })

    expect(statsdIncrement).not.toHaveBeenCalled()
  })
})

describe('fetchWithRetry ttfb timeout mode', () => {
  const fetchMock = vi.fn()
  const originalFetch = globalThis.fetch

  beforeEach(() => {
    statsdIncrement.mockReset()
    fetchMock.mockReset()
    globalThis.fetch = fetchMock as unknown as typeof fetch
  })

  afterEach(() => {
    globalThis.fetch = originalFetch
  })

  test('clears the timer once the response resolves so body reads are unbounded', async () => {
    let capturedSignal: AbortSignal | undefined
    fetchMock.mockImplementation((_url: string, init?: RequestInit) => {
      capturedSignal = init?.signal ?? undefined
      return Promise.resolve(new Response('ok', { status: 200 }))
    })

    await fetchWithRetry('https://example.test/big', {}, { timeout: 10, timeoutMode: 'ttfb' })

    // Wait well past the TTFB deadline; the timer must have been cleared so the
    // signal stays unaborted and a subsequent body read wouldn't be cut off.
    await new Promise((resolve) => setTimeout(resolve, 40))
    expect(capturedSignal?.aborted).toBe(false)
    expect(statsdIncrement).not.toHaveBeenCalled()
  })

  test('translates a time-to-first-byte timeout and emits the metric', async () => {
    fetchMock.mockImplementation((_url: string, init?: RequestInit) => {
      return new Promise((_resolve, reject) => {
        const signal = init?.signal as AbortSignal
        signal.addEventListener('abort', () => reject(signal.reason))
      })
    })

    await expect(
      fetchWithRetry(
        'https://example.test/slow',
        {},
        { retries: 0, timeout: 10, timeoutMode: 'ttfb' },
      ),
    ).rejects.toThrow('Request timed out after 10ms')

    expect(statsdIncrement).toHaveBeenCalledWith('fetch.timeout', 1, ['host:example.test'])
  })

  test('does not treat a caller-initiated abort as a timeout', async () => {
    const callerController = new AbortController()
    fetchMock.mockImplementation((_url: string, init?: RequestInit) => {
      return new Promise((_resolve, reject) => {
        const signal = init?.signal as AbortSignal
        signal.addEventListener('abort', () => reject(signal.reason ?? abortError()))
      })
    })

    const promise = fetchWithRetry(
      'https://example.test/aborted',
      { signal: callerController.signal },
      { retries: 0, timeout: 10_000, timeoutMode: 'ttfb' },
    )
    callerController.abort(abortError())

    await expect(promise).rejects.toMatchObject({ name: 'AbortError' })
    expect(statsdIncrement).not.toHaveBeenCalled()
  })
})

describe('readBodyWithTimeout', () => {
  beforeEach(() => {
    statsdIncrement.mockReset()
  })

  test('returns the consumed body when the read succeeds', async () => {
    const response = new Response(JSON.stringify({ hello: 'world' }), {
      status: 200,
      headers: { 'content-type': 'application/json' },
    })

    const result = await readBodyWithTimeout(response, () => response.json(), 1_000)

    expect(result).toEqual({ hello: 'world' })
    expect(statsdIncrement).not.toHaveBeenCalled()
  })

  test('translates a body-transfer timeout and emits the metric', async () => {
    const response = new Response('', { status: 200 })
    Object.defineProperty(response, 'url', { value: 'https://example.test/big' })

    await expect(
      readBodyWithTimeout(response, () => Promise.reject(timeoutError()), 8_000),
    ).rejects.toThrow('Request timed out after 8000ms')

    expect(statsdIncrement).toHaveBeenCalledWith('fetch.timeout', 1, ['host:example.test'])
  })

  test('rethrows non-timeout errors untouched without emitting the metric', async () => {
    const response = new Response('', { status: 200 })
    const boom = new Error('boom')

    await expect(readBodyWithTimeout(response, () => Promise.reject(boom), 8_000)).rejects.toBe(
      boom,
    )

    expect(statsdIncrement).not.toHaveBeenCalled()
  })
})

describe('fetchStream timeout mode', () => {
  const fetchMock = vi.fn()
  const originalFetch = globalThis.fetch

  beforeEach(() => {
    statsdIncrement.mockReset()
    fetchMock.mockReset()
    globalThis.fetch = fetchMock as unknown as typeof fetch
  })

  afterEach(() => {
    globalThis.fetch = originalFetch
  })

  test('defaults to ttfb so the body stream is not aborted after the response resolves', async () => {
    const { fetchStream } = await import('@/frame/lib/fetch-utils')

    let capturedSignal: AbortSignal | undefined
    fetchMock.mockImplementation((_url: string, init?: RequestInit) => {
      capturedSignal = init?.signal ?? undefined
      return Promise.resolve(new Response('chunk', { status: 200 }))
    })

    await fetchStream('https://example.test/stream', {}, { timeout: 10, throwHttpErrors: false })

    // A streaming caller reads the body well past the connect deadline. With the
    // ttfb default the timer is cleared on response-resolve, so the signal stays
    // unaborted and a long-running reader.read() loop won't be cut off.
    await new Promise((resolve) => setTimeout(resolve, 40))
    expect(capturedSignal?.aborted).toBe(false)
    expect(statsdIncrement).not.toHaveBeenCalled()
  })
})
