import got from 'got'

// Will try for 20 minutes, (15 * 80) seconds / 60 [seconds]
const RETRIES = 80
const DELAY_SECONDS = 15

/*
 * Promise resolves once url is healthy or fails if timeout has passed
 * @param {string} url - health url, e.g. docs.com/healthz
 */
export async function waitUntilUrlIsHealthy(url) {
  try {
    await got.head(url, {
      retry: {
        limit: RETRIES,
        calculateDelay: ({ computedValue }) => Math.min(computedValue, DELAY_SECONDS * 1000),
      },
    })
    return true
  } catch {}
  return false
}
