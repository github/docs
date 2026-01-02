import { publish } from '@/events/lib/hydro'
import { hydroNames } from '@/events/lib/schema'

/**
 * Handles search analytics and client_name validation for external requests
 * Returns null if the request should continue, or an error response object if validation failed
 */
export async function handleExternalSearchAnalytics(
  req: any,
  searchContext: string,
): Promise<{ error: string; status: number } | null> {
  const host = req.headers['x-host'] || req.headers.host
  const normalizedHost = stripPort(host as string)

  // Skip analytics entirely for production and internal staging environments
  if (
    normalizedHost === 'docs.github.com' ||
    normalizedHost.endsWith('.github.net') ||
    normalizedHost.endsWith('.githubapp.com')
  ) {
    return null
  }

  // For localhost, send analytics but auto-set client_name if not provided
  let client_name = req.query.client_name || req.body?.client_name
  if (normalizedHost === 'localhost' && !client_name) {
    client_name = 'localhost'
  }

  // For all other external requests, require explicit client_name
  if (!client_name) {
    return {
      status: 400,
      error: "Missing required parameter 'client_name' for external requests",
    }
  }

  // Send search event with client identifier
  try {
    await publish({
      schema: hydroNames.search,
      value: {
        type: 'search',
        version: '1.0.0',
        context: {
          event_id: crypto.randomUUID(),
          user: 'server-side',
          version: '1.0.0',
          created: new Date().toISOString(),
          hostname: normalizedHost,
          path: '',
          search: '',
          hash: '',
          path_language: 'en',
          path_version: '',
          path_product: '',
          path_article: '',
        },
        search_query: 'REDACTED',
        search_context: searchContext,
        search_client: client_name as string,
      },
    })
  } catch (error) {
    // Don't fail the request if analytics fails
    console.error('Failed to send search analytics:', error)
  }

  return null
}

/**
 * Determines if a host should bypass client_name requirement for analytics
 * Returns true if the host is docs.github.com or ends with github.net or githubapp.com
 * (for production and internal staging environments)
 * Note: localhost is NOT included here as it should send analytics with auto-set client_name
 */
export function shouldBypassClientNameRequirement(host: string | undefined): boolean {
  if (!host) return false

  const normalizedHost = stripPort(host)
  return (
    normalizedHost === 'docs.github.com' ||
    normalizedHost.endsWith('.github.net') ||
    normalizedHost.endsWith('.githubapp.com')
  )
}

/**
 * Strips port number from host string
 */
function stripPort(host: string): string {
  const [hostname] = host.split(':')
  return hostname
}
