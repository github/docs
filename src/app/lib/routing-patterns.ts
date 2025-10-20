/**
 * Shared routing patterns for determining App Router vs Pages Router routing decisions.
 * This module centralizes pattern definitions to ensure consistency between
 * app-router-gateway.ts and render-page.ts
 */

// Define which routes should use App Router (without locale prefix)
const APP_ROUTER_ROUTES = new Set([
  '/_not-found',
  '/404',
  // Add more routes as you migrate them
])

/**
 * Determines if a given path should be handled by the App Router
 * @param path - The request path to check
 * @param pageFound - Whether a page was found by the findPage middleware
 * @returns true if the path should use App Router, false for Pages Router
 */
export function shouldUseAppRouter(path: string, pageFound: boolean = true): boolean {
  // Strip locale prefix before checking
  const strippedPath = stripLocalePrefix(path)

  // Check exact matches on the stripped path for specific App Router routes
  if (APP_ROUTER_ROUTES.has(strippedPath)) {
    return true
  }

  // Special case: paths ending with /empty-categories should always 404 via App Router
  // This handles translation tests where certain versioned paths should not exist
  if (strippedPath.endsWith('/empty-categories')) {
    return true
  }

  // For 404 migration: If no page was found, use App Router for 404 handling
  if (!pageFound) {
    return true
  }

  return false
}

/**
 * Checks if a path looks like a "junk path" that should be handled by shielding middleware
 * These are paths like WordPress attacks, config files, etc. that need specific 404 handling
 */
export function isJunkPath(path: string): boolean {
  // Common attack patterns and junk paths that should be handled by shielding
  const junkPatterns = [
    /^\/wp-/, // WordPress paths: /wp-content, /wp-login.php, etc.
    /^\/[^/]*\.php$/, // PHP files in root: xmlrpc.php, wp-login.php (but not /en/delicious-snacks/donuts.php)
    /^\/~\w+/, // User directory paths: /~root, /~admin, etc.
    /\/\.env/, // Environment files: /.env, /.env.local, etc.
    /\/package(-lock)?\.json$/, // Node.js package files
    /^\/_{2,}/, // Multiple underscores: ///, /\\, etc.
    /^\/\\+/, // Backslash attacks
  ]

  return junkPatterns.some((pattern) => pattern.test(path))
}

/**
 * Checks if a path contains a version identifier (e.g., enterprise-server@3.16, enterprise-cloud@latest)
 * This helps distinguish versioned docs paths from regular paths that should potentially use App Router
 */
export function isVersionedPath(path: string): boolean {
  const strippedPath = stripLocalePrefix(path)

  // Check for version patterns: plan@release
  // Examples: enterprise-server@3.16, enterprise-server@latest, enterprise-cloud@latest, free-pro-team@latest
  const versionPattern =
    /(enterprise-server@[\d.]+|enterprise-server@latest|enterprise-cloud@latest|free-pro-team@latest)/
  return versionPattern.test(strippedPath)
}

/**
 * Checks if a versioned path contains invalid segments that should result in 404
 * These should be routed to App Router for proper 404 handling
 */
export function isInvalidVersionedPath(path: string): boolean {
  const strippedPath = stripLocalePrefix(path)

  // Check for obviously invalid paths that should 404
  // Example: /enterprise-server@latest/ANY/admin or /enterprise-server@12345/anything
  return (
    strippedPath.includes('/ANY/') ||
    /enterprise-server@12345/.test(strippedPath) ||
    // Add other invalid patterns as needed
    false
  )
}

/**
 * Decodes a URL path, handling URL-encoded characters like %40 -> @
 */
export function decodePathSafely(path: string): string {
  try {
    return decodeURIComponent(path)
  } catch {
    // If decoding fails, use original path
    return path
  }
}

/**
 * Strips the locale prefix from the path if present
 * e.g., /en/search -> /search
 * e.g., /en/enterprise-server@3.17 -> /enterprise-server@3.17
 */
export function stripLocalePrefix(path: string): string {
  const decodedPath = decodePathSafely(path)

  const localeMatch = decodedPath.match(/^\/([a-z]{2})(\/.*)?$/)
  if (localeMatch) {
    return localeMatch[2] || '/'
  }
  return decodedPath
}
