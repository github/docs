import { fetchWithRetry } from '@/frame/lib/fetch-utils'
import { Failbot, HTTPBackend } from '@github/failbot'
import { getLoggerContext } from '@/observability/logger/lib/logger-context'

const HAYSTACK_APP = 'docs'

async function retryingFetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response> {
  const url = typeof input === 'string' ? input : input.toString()

  // Use fetchWithRetry with retry configuration matching got's behavior
  // With the timeout at 3000 (milliseconds) and the retry.limit
  // at 4 (times), the total worst-case is:
  // 3000 * 4  + 1000 + 2000 + 3000 + 4000 + 8000 = 30 seconds
  const response = await fetchWithRetry(
    url,
    {
      method: init?.method || 'GET',
      body: init?.body,
      headers: init?.headers,
    },
    {
      timeout: 3000,
      retries: 4,
      throwHttpErrors: false, // Let failbot handle HTTP errors
    },
  )

  return response
}

export function report(error: Error, metadata?: Record<string, unknown>) {
  // If there's no HAYSTACK_URL set, bail early
  if (!process.env.HAYSTACK_URL) {
    return
  }

  const backends = [
    new HTTPBackend({
      haystackURL: process.env.HAYSTACK_URL,
      fetchFn: retryingFetch,
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
