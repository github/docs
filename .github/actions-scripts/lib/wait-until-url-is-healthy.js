import got from 'got'

// Will try for 20 minutes, (15 * 80) seconds / 60 [seconds]
const RETRIES = 80
const DELAY_SECONDS = 15

/*
 * Promise resolves once url is healthy or fails if timeout has passed
 * @param {string} url - path to server
 * @param {string} [healthPath] - endpoint to health check, e.g. "healthz"
 */
export async function waitUntilUrlIsHealthy(url, healthPath = 'healthz') {
  let attempt = 1
  while (attempt < RETRIES) {
    try {
      const res = await got.head(`${url}/${healthPath}`)
      if (res.statusCode === 200) {
        return true
      }
    } catch (err) {}
    // Delay before next attempt
    await sleep(DELAY_SECONDS)
    attempt++
  }
  return false
}

/*
 * Async-await sleep
 * @param {string} seconds - Seconds to sleep
 */
export async function sleep(seconds) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000))
}
