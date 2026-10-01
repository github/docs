import { ExtendedRequest } from '@/types'
import { publish } from '@/events/lib/hydro'
import { hydroNames } from '@/events/lib/schema'
import { createLogger } from '@/observability/logger'

const logger = createLogger(import.meta.url)

// Return null to continue; return an error object when client_name validation fails.
export async function handleExternalSearchAnalytics(
  req: ExtendedRequest,
  searchContext: string,
): Promise<{ error: string; status: number } | null> {
  const host = req.headers['x-host'] || req.headers.host
  const normalizedHost = stripPort(host as string)

  const isLikelyExternalAPI = isExternalAPIRequest(req)

  let client_name = req.query.client_name || req.body?.client_name

  // Skip analytics for docs.github.com frontend browser requests.
  if (!isLikelyExternalAPI && client_name === 'docs.github.com-client') {
    return null
  }

  // Partner APIs and other external clients send analytics with their client_name.
  if (client_name && client_name !== 'docs.github.com-client') {
    // Later code sends analytics for external client_name values.
  } else if (!client_name) {
    if (isLikelyExternalAPI) {
      return {
        status: 400,
        error: "Missing required parameter 'client_name' for external requests",
      }
    }
    // Internal browser hosts without client_name skip analytics.
    else if (normalizedHost.endsWith('.github.net') || normalizedHost.endsWith('.githubapp.com')) {
      return null
    }
  }

  // localhost gets a synthetic client_name so analytics records a client identifier.
  if (normalizedHost === 'localhost' && !client_name) {
    client_name = 'localhost'
  }

  if (client_name && client_name !== 'docs.github.com-client') {
    logger.info('External search analytics: Sending analytics for external client', {
      client_name,
      searchContext,
      isLikelyExternalAPI,
      normalizedHost,
      userAgent: sanitizeUserAgent(req.headers['user-agent']),
    })
  }

  try {
    const analyticsPayload = {
      schema: hydroNames.search,
      value: {
        context: {
          event_id: crypto.randomUUID(),
          user: 'server-side',
          version: '1.0.0',
          created: new Date().toISOString(),
          hostname: normalizedHost,
          path: req?.context?.path || '',
          search: 'REDACTED',
          hash: '',
          path_language: req?.context?.language || 'en',
          path_version: req?.context?.version || '',
          path_product: req?.context?.product || '',
          path_article: '',
        },
        search_query: 'REDACTED',
        search_context: searchContext,
        search_client: client_name as string,
      },
    }

    await publish(analyticsPayload)
  } catch (error) {
    // Don't fail the request if analytics fails
    logger.error('Failed to send search analytics:', { error })
  }

  return null
}

// Reduces a user agent down to its primary client identifier.
function sanitizeUserAgent(userAgent: string | undefined): string {
  if (!userAgent) return 'unknown'

  const patterns = [
    { regex: /^curl/i, name: 'curl' },
    { regex: /^wget/i, name: 'wget' },
    { regex: /python-requests/i, name: 'python-requests' },
    { regex: /axios/i, name: 'axios' },
    { regex: /node-fetch/i, name: 'node-fetch' },
    { regex: /Go-http-client/i, name: 'go-http-client' },
    { regex: /okhttp/i, name: 'okhttp' },
    { regex: /Mozilla/i, name: 'browser' },
  ]

  for (const pattern of patterns) {
    if (pattern.regex.test(userAgent)) {
      return pattern.name
    }
  }

  return 'other'
}

function stripPort(host: string): string {
  const [hostname] = host.split(':')
  return hostname
}

// Heuristics for telling a programmatic request from a browser one.
const userAgentRegex = /^(curl|wget|python-requests|axios|node-fetch|Go-http-client|okhttp)/i
function isExternalAPIRequest(req: ExtendedRequest): boolean {
  const headers = req.headers

  // Browser security headers that APIs typically don't send
  const hasSecFetchHeaders = headers['sec-fetch-site'] || headers['sec-fetch-mode']
  const hasClientHints = headers['sec-ch-ua'] || headers['sec-ch-ua-mobile']

  // Browsers typically request HTML, APIs typically request JSON
  const acceptHeader = headers.accept || ''
  const prefersJson =
    acceptHeader.includes('application/json') && !acceptHeader.includes('text/html')

  // Common API user agents cover common cases, not every client.
  const userAgent = headers['user-agent'] || ''
  const hasAPIUserAgent = userAgentRegex.test(userAgent)

  if (hasSecFetchHeaders || hasClientHints) {
    return false
  }

  if (prefersJson || hasAPIUserAgent) {
    return true
  }

  // Ambiguous requests default to browser handling to avoid false external-client errors.
  return false
}
