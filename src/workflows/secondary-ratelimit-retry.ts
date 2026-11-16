import { isRequestError } from '@/workflows/github'

const DEFAULT_SLEEPTIME = parseInt(process.env.SECONDARY_RATELIMIT_RETRY_SLEEPTIME || '30000', 10)
const DEFAULT_ATTEMPTS = parseInt(process.env.SECONDARY_RATELIMIT_RETRY_ATTEMPTS || '5', 10)
// Keeps a single wait well inside the 5 minute step timeout in notify-about-deployment.
// Retrying before retry-after elapses risks more throttling, so longer waits give up instead.
const MAX_RETRY_AFTER_MS = 120_000

// Secondary rate limits return 403 or 429 with "You have exceeded a secondary rate limit."
// When a retry-after header is present, GitHub asks clients to wait that many seconds.
// https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api?apiVersion=2022-11-28#about-secondary-rate-limits
export async function octoSecondaryRatelimitRetry<T>(
  fn: () => Promise<T>,
  { attempts = DEFAULT_ATTEMPTS, sleepTime = DEFAULT_SLEEPTIME } = {},
): Promise<T> {
  let tries = 0
  while (true) {
    try {
      return await fn()
    } catch (error) {
      if (
        (isRequestError(error, 403) || isRequestError(error, 429)) &&
        /You have exceeded a secondary rate limit|API rate limit exceeded/.test(error.message)
      ) {
        const retryAfterMs = getRetryAfterMs(error)
        if (retryAfterMs !== null && retryAfterMs > MAX_RETRY_AFTER_MS) {
          console.warn(
            `Not retrying because retry-after of ${(retryAfterMs / 1000).toFixed(1)}s exceeds the wait limit`,
          )
        } else if (tries < attempts) {
          const waitTime = retryAfterMs ?? sleepTime
          console.warn(
            `Sleeping for ${(waitTime / 1000).toFixed(1)}s before retrying after ${tries + 1} try`,
          )
          await sleep(waitTime)
          tries++
          continue
        } else {
          console.warn(`Giving up on retries after ${tries + 1} attempts`)
        }
      }
      throw error
    }
  }
}

function getRetryAfterMs(error: object): number | null {
  const headers = (error as { response?: { headers?: Record<string, unknown> } }).response?.headers
  let value = headers?.['retry-after']
  if (value === undefined) {
    // The code search API's 30 requests/minute limit only sends a reset time.
    const reset = Number(headers?.['x-ratelimit-reset'])
    if (Number.isFinite(reset) && reset > 0) {
      value = String(Math.max(0, Math.ceil(reset - Date.now() / 1000)) + 1)
    }
  }
  if (typeof value !== 'string' && typeof value !== 'number') return null
  const seconds = Number(value)
  if (String(value).trim() === '' || !Number.isFinite(seconds) || seconds < 0) return null
  return seconds * 1000
}

async function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}
