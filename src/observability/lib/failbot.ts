import { fetchWithRetry } from '@/frame/lib/fetch-utils'
import { Failbot, HTTPBackend } from '@github/failbot'
import { getLoggerContext } from '@/observability/logger/lib/logger-context'

const HAYSTACK_APP = 'docs'

// Five attempts at a 3000ms timeout, with backoff delays of 1, 2, 4, and 8 seconds,
// bound a failing report at roughly 30 seconds.
async function retryingFetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response> {
  const url = typeof input === 'string' ? input : input.toString()

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

  // Metadata can only be a flat object with string & number values,
  // so only add the requestUuid.
  // https://github.com/github/failbotg/blob/main/docs/api.md#additional-data
  const loggerContext = getLoggerContext()

  return failbot.report(error, {
    ...metadata,
    requestUuid: loggerContext.requestUuid || 'unknown',
  })
}

// Kept so legacy callers can keep doing `FailBot.report(myError)`.
export default {
  report,
}
