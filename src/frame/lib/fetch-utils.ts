/**
 * Utility functions for fetch with retry and timeout functionality
 * to replace got library functionality
 */
import statsd from '@/observability/lib/statsd'

const STATSD_FETCH_TIMEOUT = 'fetch.timeout'

export interface FetchWithRetryOptions {
  retries?: number
  retryDelay?: number
  timeout?: number
  throwHttpErrors?: boolean
  /**
   * How the `timeout` is enforced:
   * - 'full' (default): bounds the entire request, including body transfer.
   *   The abort signal stays armed through body reads, so pair this with
   *   `readBodyWithTimeout` to report body-phase timeouts consistently.
   * - 'ttfb': bounds only time-to-first-byte. The timer is cleared once the
   *   response resolves, leaving body reads unbounded. Use for large, trusted,
   *   well-cached payloads (e.g. multi-MB archived `redirects.json`) where a
   *   short deadline should fail fast on an unresponsive server but must not
   *   abort a legitimately long download.
   */
  timeoutMode?: 'full' | 'ttfb'
  // Note: Custom HTTPS agents are not supported in native fetch
  // Consider using undici or node-fetch if custom agent support is critical
}

/**
 * Default retry delay calculation matching got's behavior:
 * sleep = 1000 * Math.pow(2, retry - 1) + Math.random() * 100
 */
function calculateDefaultDelay(attempt: number): number {
  return 1000 * Math.pow(2, attempt - 1) + Math.random() * 100
}

/**
 * Sleep for a given number of milliseconds
 */
function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function getHost(url: string | URL): string {
  try {
    return new URL(typeof url === 'string' ? url : url.toString()).host
  } catch {
    return 'unknown'
  }
}

/**
 * Fetch with timeout support.
 *
 * `timeoutMode` controls what the deadline bounds:
 *
 * - 'full' (default): enforced with `AbortSignal.timeout()`, whose signal
 *   stays armed after this function returns. Callers typically read the body
 *   (`r.json()`, `r.arrayBuffer()`) after the response resolves; because the
 *   signal is never cleared, that body read is aborted by the same deadline.
 *   So the timeout bounds the full request (time-to-first-byte AND body
 *   transfer). Use `readBodyWithTimeout` to consume the body so a body-phase
 *   timeout reports the same way as a TTFB timeout.
 *
 * - 'ttfb': enforced with a manual `AbortController` whose timer is cleared as
 *   soon as the response resolves. Only time-to-first-byte is bounded; the
 *   body read that follows is left unbounded. Use for large, trusted,
 *   well-cached payloads where a short deadline should fail fast on an
 *   unresponsive server but not abort a legitimately long download.
 */
async function fetchWithTimeout(
  url: string | URL,
  init?: RequestInit,
  timeout?: number,
  timeoutMode: 'full' | 'ttfb' = 'full',
): Promise<Response> {
  if (!timeout) {
    return fetch(url, init)
  }

  if (timeoutMode === 'ttfb') {
    // Abort if headers don't arrive in time, but clear the timer once the
    // response resolves so the subsequent body read isn't bounded by the same
    // deadline.
    const controller = new AbortController()
    const signal = init?.signal
      ? AbortSignal.any([init.signal, controller.signal])
      : controller.signal
    let timedOut = false
    const timer = setTimeout(() => {
      timedOut = true
      controller.abort()
    }, timeout)

    try {
      return await fetch(url, { ...init, signal })
    } catch (error) {
      // Only our own timer firing counts as a timeout; a caller-provided
      // signal aborting is left untouched so it isn't misreported.
      if (timedOut) {
        statsd.increment(STATSD_FETCH_TIMEOUT, 1, [`host:${getHost(url)}`])
        throw new Error(`Request timed out after ${timeout}ms`)
      }
      throw error
    } finally {
      clearTimeout(timer)
    }
  }

  const timeoutSignal = AbortSignal.timeout(timeout)
  // Honor a caller-provided signal too, rather than overwriting it.
  const signal = init?.signal ? AbortSignal.any([init.signal, timeoutSignal]) : timeoutSignal

  try {
    return await fetch(url, { ...init, signal })
  } catch (error) {
    // `AbortSignal.timeout()` aborts with a `TimeoutError`; a caller-provided
    // signal aborts with its own reason (e.g. `AbortError`), which we leave
    // untouched so caller cancellations aren't misreported as timeouts.
    if (error instanceof Error && error.name === 'TimeoutError') {
      statsd.increment(STATSD_FETCH_TIMEOUT, 1, [`host:${getHost(url)}`])
      throw new Error(`Request timed out after ${timeout}ms`)
    }
    throw error
  }
}

/**
 * Read a response body, reporting a timeout the same way `fetchWithTimeout`
 * does for time-to-first-byte.
 *
 * The body read is already bounded by the deadline set on the originating
 * `fetchWithRetry`/`fetchWithTimeout` call (the abort signal stays armed
 * through body transfer). This wrapper just translates the resulting
 * `TimeoutError` into the friendly "Request timed out" error and emits the
 * `fetch.timeout` metric, so body-phase timeouts are observable.
 *
 * @param response The response whose body to read (used for the metric host).
 * @param read A callback that performs the body read, e.g. `() => r.json()`.
 * @param timeout The deadline that bounded the request, for the error message.
 */
export async function readBodyWithTimeout<T>(
  response: Response,
  read: () => Promise<T>,
  timeout?: number,
): Promise<T> {
  try {
    return await read()
  } catch (error) {
    if (error instanceof Error && error.name === 'TimeoutError') {
      statsd.increment(STATSD_FETCH_TIMEOUT, 1, [`host:${getHost(response.url)}`])
      throw new Error(timeout ? `Request timed out after ${timeout}ms` : 'Request timed out')
    }
    throw error
  }
}

/**
 * Fetch with retry logic matching got's behavior
 */
export async function fetchWithRetry(
  url: string | URL,
  init?: RequestInit,
  options: FetchWithRetryOptions = {},
): Promise<Response> {
  const { retries = 0, timeout, throwHttpErrors = true, timeoutMode = 'full' } = options

  let lastError: Error | null = null

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const response = await fetchWithTimeout(url, init, timeout, timeoutMode)

      // Check if we should retry based on status code
      if (response.status >= 500 && attempt < retries) {
        lastError = new Error(`HTTP ${response.status}: ${response.statusText}`)
        const delay = calculateDefaultDelay(attempt + 1)
        await sleep(delay)
        continue
      }

      // If throwHttpErrors is true and status indicates an error
      if (throwHttpErrors && !response.ok && response.status >= 400) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }

      return response
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error))

      // Don't retry on the last attempt
      if (attempt === retries) {
        throw lastError
      }

      // Don't retry on client errors (4xx) unless it's specific ones
      if (
        error instanceof Error &&
        error.message.includes('HTTP 4') &&
        !error.message.includes('HTTP 429')
      ) {
        throw lastError
      }

      // Calculate delay and wait before retry
      const delay = calculateDefaultDelay(attempt + 1)
      await sleep(delay)
    }
  }

  throw lastError || new Error('Maximum retries exceeded')
}

/**
 * Create a streaming fetch request that returns a ReadableStream
 * This replaces got.stream functionality
 *
 * Defaults to `timeoutMode: 'ttfb'` because streaming callers consume the body
 * incrementally over a `reader.read()` loop that can legitimately run far longer
 * than the connect deadline. A `'full'` default would keep `AbortSignal.timeout()`
 * armed through that loop and abort a valid long answer mid-stream. Callers that
 * want the deadline to bound the whole transfer can pass `timeoutMode: 'full'`.
 */
export async function fetchStream(
  url: string | URL,
  init?: RequestInit,
  options: FetchWithRetryOptions = {},
): Promise<Response> {
  const { timeout, throwHttpErrors = true, timeoutMode = 'ttfb' } = options

  const response = await fetchWithTimeout(url, init, timeout, timeoutMode)

  // Check for HTTP errors if throwHttpErrors is enabled
  if (throwHttpErrors && !response.ok && response.status >= 400) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`)
  }

  return response
}
