/**
 * Utility functions for fetch with retry and timeout functionality
 * to replace got library functionality
 */

export interface FetchWithRetryOptions {
  retries?: number
  retryDelay?: number
  timeout?: number
  throwHttpErrors?: boolean
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

/**
 * Fetch with timeout support
 */
async function fetchWithTimeout(
  url: string | URL,
  init?: RequestInit,
  timeout?: number,
): Promise<Response> {
  if (!timeout) {
    return fetch(url, init)
  }

  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), timeout)

  try {
    const response = await fetch(url, {
      ...init,
      signal: controller.signal,
    })
    clearTimeout(timeoutId)
    return response
  } catch (error) {
    clearTimeout(timeoutId)
    if (error instanceof Error && error.name === 'AbortError') {
      throw new Error(`Request timed out after ${timeout}ms`)
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
  const { retries = 0, timeout, throwHttpErrors = true } = options

  let lastError: Error | null = null

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const response = await fetchWithTimeout(url, init, timeout)

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
 */
export async function fetchStream(
  url: string | URL,
  init?: RequestInit,
  options: FetchWithRetryOptions = {},
): Promise<Response> {
  const { timeout, throwHttpErrors = true } = options

  const response = await fetchWithTimeout(url, init, timeout)

  // Check for HTTP errors if throwHttpErrors is enabled
  if (throwHttpErrors && !response.ok && response.status >= 400) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`)
  }

  return response
}
