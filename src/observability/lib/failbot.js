import got from 'got'
import { Failbot, HTTPBackend } from '@github/failbot'

const HAYSTACK_APP = 'docs'

async function retryingGot(url, args) {
  return got(
    url,
    Object.assign({}, args, {
      // With the timeout at 3000 (milliseconds) and the retry.limit
      // at 4 (times), the total worst-case is:
      // 3000 * 4  + 1000 + 2000 + 3000 + 4000 + 8000 = 30 seconds
      timeout: {
        response: 3000,
      },
      retry: {
        // This means it will wait...
        // 1. 1000ms
        // 2. 2000ms
        // 3. 4000ms
        // 4. 8000ms
        // 5. give up!
        //
        // From the documentation:
        //
        //   Delays between retries counts with function
        //   1000 * Math.pow(2, retry - 1) + Math.random() * 100,
        //   where retry is attempt number (starts from 1).
        //
        limit: 4,
      },
    }),
  )
}

export function report(error, metadata) {
  // If there's no HAYSTACK_URL set, bail early
  if (!process.env.HAYSTACK_URL) {
    return
  }

  const backends = [
    new HTTPBackend({
      haystackURL: process.env.HAYSTACK_URL,
      fetchFn: retryingGot,
    }),
  ]
  const failbot = new Failbot({
    app: HAYSTACK_APP,
    backends,
  })

  return failbot.report(error, metadata)
}

// Kept for legacy so you can continue to do:
//
//  import FailBot from './lib/failbot.js'
//  ...
//  FailBot.report(myError)
//
export default {
  report,
}
