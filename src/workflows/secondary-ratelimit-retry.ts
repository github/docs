import { RequestError } from '@octokit/request-error'

const DEFAULT_SLEEPTIME = parseInt(process.env.SECONDARY_RATELIMIT_RETRY_SLEEPTIME || '30000', 10)
const DEFAULT_ATTEMPTS = parseInt(process.env.SECONDARY_RATELIMIT_RETRY_ATTEMPTS || '5', 10)

// Secondary rate limits are responded with a 403. The message will contain
// "You have exceeded a secondary rate limit".
// More info about what they are here:
// https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api?apiVersion=2022-11-28#about-secondary-rate-limits
export async function octoSecondaryRatelimitRetry(
  fn: Function,
  { attempts = DEFAULT_ATTEMPTS, sleepTime = DEFAULT_SLEEPTIME } = {},
) {
  let tries = 0
  while (true) {
    try {
      return await fn()
    } catch (error) {
      if (
        error instanceof RequestError &&
        error.status === 403 &&
        /You have exceeded a secondary rate limit/.test(error.message)
      ) {
        if (tries < attempts) {
          console.warn(
            `Sleeping for ${(sleepTime / 1000).toFixed(1)}s before retrying after ${tries + 1} try`,
          )
          await sleep(sleepTime)
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

async function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}
