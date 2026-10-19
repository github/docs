// Native fetch needs wrappers to keep got's retry and timeout behavior.
import statsd from '@/observability/lib/statsd'

const STATSD_FETCH_TIMEOUT = 'fetch.timeout'

export interface FetchWithRetryOptions {
  retries?: number
  retryDelay?: number
  timeout?: number
  throwHttpErrors?: boolean
  // full is the default and bounds the whole request, including body transfer.
  // Pair full with readBodyWithTimeout so body-phase timeouts report consistently.
  // ttfb bounds only time to first byte. Use it for large, trusted, cached payloads
  // such as archived redirects.json, where a short deadline fails fast without
  // aborting a valid long download.
  timeoutMode?: 'full' | 'ttfb'
  // Native fetch has no custom HTTPS agent option; use undici or node-fetch if you need one.
}

// Match got's default retry delay.
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

// timeoutMode controls whether the deadline bounds the whole request or only
// time to first byte. full leaves AbortSignal.timeout armed after headers
// arrive, so body reads share the same deadline. Consume the body with
// readBodyWithTimeout so body-phase timeouts report consistently.
// ttfb clears a manual AbortController timer after headers arrive, so large
// trusted downloads can keep reading the body after a short time-to-first-byte deadline.
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
    // Clear the timer after headers arrive so the same deadline does not bound body reads.
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
      // Only our timer counts as a timeout, so caller aborts keep their own error.
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
  // Preserve caller cancellation instead of overwriting its signal.
  const signal = init?.signal ? AbortSignal.any([init.signal, timeoutSignal]) : timeoutSignal

  try {
    return await fetch(url, { ...init, signal })
  } catch (error) {
    // TimeoutError means our deadline fired; caller cancellations keep their own errors.
    if (error instanceof Error && error.name === 'TimeoutError') {
      statsd.increment(STATSD_FETCH_TIMEOUT, 1, [`host:${getHost(url)}`])
      throw new Error(`Request timed out after ${timeout}ms`)
    }
    throw error
  }
}

// Full-mode body reads share the deadline from fetchWithRetry or fetchWithTimeout
// because the abort signal stays armed through body transfer. This wrapper translates
// TimeoutError into the friendly "Request timed out" error and emits the
// fetch.timeout metric, so body-phase timeouts are observable.
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

// Retries 5xx with got's exponential delay. A 429 also retries when
// throwHttpErrors is on. Other got retry rules are omitted: no method allowlist,
// and 408 and 413 never retry.
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

// fetchStream replaces got.stream. It defaults timeoutMode to ttfb because
// streaming callers consume the body over a reader loop that can run longer than
// the time-to-first-byte deadline. A full default would keep AbortSignal.timeout
// armed through that loop and abort valid long answers mid-stream. Pass
// timeoutMode full to bound the whole transfer.
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
