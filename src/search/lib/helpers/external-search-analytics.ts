import { ExtendedRequest } from '@/types'
import { publish } from '@/events/lib/hydro'
import { hydroNames } from '@/events/lib/schema'
import { createLogger } from '@/observability/logger'

const logger = createLogger(import.meta.url)

/**
 * Handles search analytics and client_name validation for external requests
 * Returns null if the request should continue, or an error response object if validation failed
 */
export async function handleExternalSearchAnalytics(
  req: ExtendedRequest,
  searchContext: string,
): Promise<{ error: string; status: number } | null> {
  const host = req.headers['x-host'] || req.headers.host
  const normalizedHost = stripPort(host as string)

  // Check if this is likely an external API call rather than a browser request
  const isLikelyExternalAPI = isExternalAPIRequest(req)

  // Get client_name from query or body
  let client_name = req.query.client_name || req.body?.client_name

  // Rule 1: Skip analytics for browser requests from our own frontend
  if (!isLikelyExternalAPI && client_name === 'docs.github.com-client') {
    return null
  }

  // Rule 2: Send analytics for any request with a client_name that's not 'docs.github.com-client'
  // (This includes partner APIs and other external clients)
  if (client_name && client_name !== 'docs.github.com-client') {
    // Analytics will be sent at the end of this function
  }
  // Rule 3: For requests without client_name, require it for external API requests
  else if (!client_name) {
    if (isLikelyExternalAPI) {
      return {
        status: 400,
        error: "Missing required parameter 'client_name' for external requests",
      }
    }
    // For browser requests without client_name to internal environments, skip analytics
    else if (normalizedHost.endsWith('.github.net') || normalizedHost.endsWith('.githubapp.com')) {
      return null
    }
  }

  // For localhost, ensure we have a client_name for analytics
  if (normalizedHost === 'localhost' && !client_name) {
    client_name = 'localhost'
  }

  // Log when we detect an external request that we will send analytics for
  if (client_name && client_name !== 'docs.github.com-client') {
    logger.info('External search analytics: Sending analytics for external client', {
      client_name,
      searchContext,
      isLikelyExternalAPI,
      normalizedHost,
      userAgent: sanitizeUserAgent(req.headers['user-agent']),
    })
  }

  // Send search event with client identifier
  try {
    const analyticsPayload = {
      schema: hydroNames.search,
      value: {
        version: '1.0.0',
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

/**
 * Sanitizes user agent by extracting only the main client type
 * Returns a safe string with just the primary client identifier
 */
function sanitizeUserAgent(userAgent: string | undefined): string {
  if (!userAgent) return 'unknown'

  // Extract common client types while removing version numbers and detailed info
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

/**
 * Determines if a host should bypass client_name requirement for analytics
 * Returns true if the host ends with github.net or githubapp.com
 * (for internal staging environments)
 * Note: docs.github.com is removed since normalizedHost will always be docs.github.com in production
 * Note: localhost is NOT included here as it should send analytics with auto-set client_name
 */
export function shouldBypassClientNameRequirement(host: string | undefined): boolean {
  if (!host) return false

  const normalizedHost = stripPort(host)
  return normalizedHost.endsWith('.github.net') || normalizedHost.endsWith('.githubapp.com')
}

/**
 * Strips port number from host string
 */
function stripPort(host: string): string {
  const [hostname] = host.split(':')
  return hostname
}

/**
 * Determines if a request is likely from an external API client rather than a browser
 * Uses multiple heuristics to detect programmatic vs browser requests
 */
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

  // Common API user agents (not exhaustive, but catches common cases)
  const userAgent = headers['user-agent'] || ''
  const hasAPIUserAgent = userAgentRegex.test(userAgent)

  // If it has browser-specific headers, it's likely a browser
  if (hasSecFetchHeaders || hasClientHints) {
    return false
  }

  // If it prefers JSON or has a common API user agent, it's likely an API
  if (prefersJson || hasAPIUserAgent) {
    return true
  }

  // Default to treating it as a browser request to be conservative
  return false
}
