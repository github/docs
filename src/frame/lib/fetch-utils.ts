// Fetch with retry and timeout, replacing what we used to get from `got`.
import statsd from '@/observability/lib/statsd'

const STATSD_FETCH_TIMEOUT = 'fetch.timeout'

export interface FetchWithRetryOptions {
  retries?: number
  retryDelay?: number
  timeout?: number
  throwHttpErrors?: boolean
  // How the `timeout` is enforced:
  //
  // 'full' (default) bounds the entire request, including body transfer.
  // The abort signal stays armed through body reads, so pair this with
  // `readBodyWithTimeout` to report body-phase timeouts consistently.
  //
  // 'ttfb' bounds only time-to-first-byte. The timer is cleared once the
  // response resolves, leaving body reads unbounded. Use it for large, trusted,
  // well-cached payloads such as the multi-MB archived `redirects.json`, where a
  // short deadline should fail fast on an unresponsive server but must not abort
  // a legitimately long download.
  timeoutMode?: 'full' | 'ttfb'
  // Note: Custom HTTPS agents are not supported in native fetch
  // Consider using undici or node-fetch if custom agent support is critical
}

// Matches got's default retry delay:
// sleep = 1000 * Math.pow(2, retry - 1) + Math.random() * 100
function calculateDefaultDelay(attempt: number): number {
  return 1000 * Math.pow(2, attempt - 1) + Math.random() * 100
}

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

// `timeoutMode` controls what the deadline bounds.
//
// 'full' (default) is enforced with `AbortSignal.timeout()`, whose signal stays
// armed after this function returns. Callers typically read the body
// (`r.json()`, `r.arrayBuffer()`) after the response resolves, and because the
// signal is never cleared, that body read is aborted by the same deadline. So
// the timeout bounds the full request, both time-to-first-byte AND body
// transfer. Use `readBodyWithTimeout` to consume the body, so a body-phase
// timeout reports the same way as a TTFB timeout.
//
// 'ttfb' is enforced with a manual `AbortController` whose timer is cleared as
// soon as the response resolves. Only time-to-first-byte is bounded, and the
// body read that follows is left unbounded. Use it for large, trusted,
// well-cached payloads where a short deadline should fail fast on an
// unresponsive server but not abort a legitimately long download.
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

// Reads a response body, reporting a timeout the same way `fetchWithTimeout`
// does for time-to-first-byte.
//
// The body read is already bounded by the deadline set on the originating
// `fetchWithRetry` or `fetchWithTimeout` call, because the abort signal stays
// armed through body transfer. This wrapper only translates the resulting
// `TimeoutError` into the friendly "Request timed out" error and emits the
// `fetch.timeout` metric, so body-phase timeouts are observable.
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

// Retries 5xx with an exponential delay modelled on `got`. A 429 also retries,
// but only when `throwHttpErrors` is on, since otherwise it is returned as-is.
// The rest of `got`'s retry rules are not reproduced: there is no method
// allowlist, and 408 and 413 never retry.
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

      if (response.status >= 500 && attempt < retries) {
        lastError = new Error(`HTTP ${response.status}: ${response.statusText}`)
        const delay = calculateDefaultDelay(attempt + 1)
        await sleep(delay)
        continue
      }

      if (throwHttpErrors && !response.ok && response.status >= 400) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }

      return response
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error))

      if (attempt === retries) {
        throw lastError
      }

      if (
        error instanceof Error &&
        error.message.includes('HTTP 4') &&
        !error.message.includes('HTTP 429')
      ) {
        throw lastError
      }

      const delay = calculateDefaultDelay(attempt + 1)
      await sleep(delay)
    }
  }

  throw lastError || new Error('Maximum retries exceeded')
}

// Replaces got.stream.
//
// Defaults to `timeoutMode: 'ttfb'` because streaming callers consume the body
// incrementally over a `reader.read()` loop that can legitimately run far longer
// than the connect deadline. A `'full'` default would keep `AbortSignal.timeout()`
// armed through that loop and abort a valid long answer mid-stream. Callers that
// want the deadline to bound the whole transfer can pass `timeoutMode: 'full'`.
export async function fetchStream(
  url: string | URL,
  init?: RequestInit,
  options: FetchWithRetryOptions = {},
): Promise<Response> {
  const { timeout, throwHttpErrors = true, timeoutMode = 'ttfb' } = options

  const response = await fetchWithTimeout(url, init, timeout, timeoutMode)

  if (throwHttpErrors && !response.ok && response.status >= 400) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`)
  }

  return response
}
