import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'
import { RequestError } from '@octokit/request-error'

import { octoSecondaryRatelimitRetry } from '@/workflows/secondary-ratelimit-retry'

const SECONDARY_MESSAGE = 'You have exceeded a secondary rate limit. Please wait a few minutes.'

function makeError(status: number, message: string, headers: Record<string, string> = {}) {
  return new RequestError(message, status, {
    request: { method: 'POST', url: 'https://api.github.com/x', headers: {} },
    response: { status, url: 'https://api.github.com/x', headers, data: { message } },
  })
}

function failOnceThen<T>(error: Error, value: T) {
  return vi.fn().mockRejectedValueOnce(error).mockResolvedValue(value)
}

describe('octoSecondaryRatelimitRetry', () => {
  beforeEach(() => {
    vi.spyOn(console, 'warn').mockImplementation(() => {})
  })

  afterEach(() => {
    vi.useRealTimers()
    vi.restoreAllMocks()
  })

  test.each([403, 429])('retries a %i secondary rate limit and resolves', async (status) => {
    const fn = failOnceThen(makeError(status, SECONDARY_MESSAGE), 'ok')
    await expect(octoSecondaryRatelimitRetry(fn, { attempts: 2, sleepTime: 0 })).resolves.toBe('ok')
    expect(fn).toHaveBeenCalledTimes(2)
  })

  test('retries a search API rate limit using x-ratelimit-reset', async () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-01-01T00:00:00Z'))
    const reset = String(Date.parse('2026-01-01T00:00:10Z') / 1000)
    const fn = failOnceThen(
      makeError(403, 'API rate limit exceeded for user ID 1.', { 'x-ratelimit-reset': reset }),
      'ok',
    )
    const promise = octoSecondaryRatelimitRetry(fn, { attempts: 2, sleepTime: 0 })

    await vi.advanceTimersByTimeAsync(10_999)
    expect(fn).toHaveBeenCalledTimes(1)
    await vi.advanceTimersByTimeAsync(1)
    expect(fn).toHaveBeenCalledTimes(2)
    await expect(promise).resolves.toBe('ok')
  })

  test('does not retry a 429 without the secondary rate limit message', async () => {
    const error = makeError(429, 'Too Many Requests')
    const fn = vi.fn().mockRejectedValue(error)
    await expect(octoSecondaryRatelimitRetry(fn, { attempts: 2, sleepTime: 0 })).rejects.toBe(error)
    expect(fn).toHaveBeenCalledTimes(1)
  })

  test('gives up after the configured number of attempts', async () => {
    const error = makeError(429, SECONDARY_MESSAGE)
    const fn = vi.fn().mockRejectedValue(error)
    await expect(octoSecondaryRatelimitRetry(fn, { attempts: 2, sleepTime: 0 })).rejects.toBe(error)
    expect(fn).toHaveBeenCalledTimes(3)
  })

  test('waits for the retry-after header instead of sleepTime', async () => {
    vi.useFakeTimers()
    const fn = failOnceThen(makeError(429, SECONDARY_MESSAGE, { 'retry-after': '5' }), 'ok')
    const promise = octoSecondaryRatelimitRetry(fn, { attempts: 2, sleepTime: 60_000 })

    await vi.advanceTimersByTimeAsync(4_999)
    expect(fn).toHaveBeenCalledTimes(1)
    await vi.advanceTimersByTimeAsync(1)
    expect(fn).toHaveBeenCalledTimes(2)
    await expect(promise).resolves.toBe('ok')
  })

  test('gives up without retrying when retry-after exceeds 120 seconds', async () => {
    const error = makeError(403, SECONDARY_MESSAGE, { 'retry-after': '3600' })
    const fn = vi.fn().mockRejectedValue(error)
    await expect(octoSecondaryRatelimitRetry(fn, { attempts: 2, sleepTime: 0 })).rejects.toBe(error)
    expect(fn).toHaveBeenCalledTimes(1)
  })

  test('waits the full retry-after at the 120 second limit', async () => {
    vi.useFakeTimers()
    const fn = failOnceThen(makeError(429, SECONDARY_MESSAGE, { 'retry-after': '120' }), 'ok')
    const promise = octoSecondaryRatelimitRetry(fn, { attempts: 2, sleepTime: 0 })

    await vi.advanceTimersByTimeAsync(119_999)
    expect(fn).toHaveBeenCalledTimes(1)
    await vi.advanceTimersByTimeAsync(1)
    expect(fn).toHaveBeenCalledTimes(2)
    await expect(promise).resolves.toBe('ok')
  })

  test('falls back to sleepTime when retry-after is not a number', async () => {
    vi.useFakeTimers()
    const fn = failOnceThen(makeError(429, SECONDARY_MESSAGE, { 'retry-after': 'soon' }), 'ok')
    const promise = octoSecondaryRatelimitRetry(fn, { attempts: 2, sleepTime: 1_000 })

    await vi.advanceTimersByTimeAsync(999)
    expect(fn).toHaveBeenCalledTimes(1)
    await vi.advanceTimersByTimeAsync(1)
    expect(fn).toHaveBeenCalledTimes(2)
    await expect(promise).resolves.toBe('ok')
  })
})
