import got, { type OptionsOfTextResponseBody, type Method } from 'got'
import { Failbot, HTTPBackend } from '@github/failbot'
import { getLoggerContext } from '@/observability/logger/lib/logger-context'

const HAYSTACK_APP = 'docs'

async function retryingGot(input: RequestInfo | URL, init?: RequestInit): Promise<Response> {
  const url = typeof input === 'string' ? input : input.toString()

  // Extract body from fetch init for got options
  const gotOptions: OptionsOfTextResponseBody = {
    method: (init?.method as Method) || 'GET',
    body: typeof init?.body === 'string' ? init.body : undefined,
    headers: init?.headers as Record<string, string> | undefined,
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
  }

  const gotResponse = await got(url, gotOptions)

  // Convert got response to fetch-compatible Response
  return new Response(gotResponse.body, {
    status: gotResponse.statusCode,
    statusText: gotResponse.statusMessage,
    headers: gotResponse.headers as HeadersInit,
  })
}

export function report(error: Error, metadata?: Record<string, unknown>) {
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

  // Add the request id from the logger context to the metadata
  // Per https://github.com/github/failbotg/blob/main/docs/api.md#additional-data
  // Metadata can only be a flat object with string & number values, so only add the requestUuid
  const loggerContext = getLoggerContext()

  return failbot.report(error, {
    ...metadata,
    requestUuid: loggerContext.requestUuid || 'unknown',
  })
}

// Kept for legacy so you can continue to do:
//
//  import FailBot from './lib/failbot'
//  ...
//  FailBot.report(myError)
//
export default {
  report,
}
