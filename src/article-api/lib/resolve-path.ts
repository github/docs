import type { Context, Page } from '@/types'

/**
 * Resolves an href to a Page object from the context
 *
 * This function handles various href formats:
 * - External URLs (http/https) - returns undefined
 * - Language-prefixed absolute paths (/en/copilot/...) - direct lookup
 * - Absolute paths without language (/copilot/...) - adds language prefix
 * - Relative paths (get-started) - resolved relative to pathname
 *
 * The function searches through context.pages using multiple strategies:
 * 1. Direct key lookup with language prefix
 * 2. Relative path joining with current pathname
 * 3. endsWith matching for versioned keys (e.g., /en/enterprise-cloud@latest/...)
 *
 * @param href - The href to resolve
 * @param languageCode - The language code (e.g., 'en')
 * @param pathname - The current page's pathname (e.g., '/en/copilot')
 * @param context - The rendering context containing all pages
 * @returns The resolved Page object, or undefined if not found
 *
 * @example
 * ```typescript
 * // Absolute path with language
 * resolvePath('/en/copilot/quickstart', 'en', '/en/copilot', context)
 *
 * // Absolute path without language (adds /en/)
 * resolvePath('/copilot/quickstart', 'en', '/en/copilot', context)
 *
 * // Relative path (resolves to /en/copilot/quickstart)
 * resolvePath('quickstart', 'en', '/en/copilot', context)
 *
 * // Relative path with leading slash (resolves relative to pathname)
 * resolvePath('/quickstart', 'en', '/en/copilot', context) // -> /en/copilot/quickstart
 * ```
 */
export function resolvePath(
  href: string,
  languageCode: string,
  pathname: string,
  context: Context,
): Page | undefined {
  // External URLs cannot be resolved
  if (href.startsWith('http://') || href.startsWith('https://')) {
    return undefined
  }

  if (!context.pages) {
    return undefined
  }

  // Normalize href to start with /
  const normalizedHref = href.startsWith('/') ? href : `/${href}`

  // Build full path with language prefix if needed
  let fullPath: string
  if (normalizedHref.startsWith(`/${languageCode}/`)) {
    // Already has language prefix
    fullPath = normalizedHref
  } else if (href.startsWith('/') && !href.startsWith(`/${languageCode}/`)) {
    // Path with leading slash but no language prefix - treat as relative to pathname
    // e.g., pathname='/en/copilot', href='/get-started' -> '/en/copilot/get-started'
    fullPath = pathname + href
  } else {
    // Relative path - add language prefix
    // e.g., href='quickstart' -> '/en/quickstart'
    fullPath = `/${languageCode}${normalizedHref}`
  }

  // Clean up trailing slashes
  const cleanPath = fullPath.replace(/\/$/, '')

  // Strategy 1: Direct lookup
  if (context.pages[cleanPath]) {
    return context.pages[cleanPath]
  }

  // Strategy 2: Try relative to current pathname
  const currentPath = pathname.replace(/\/$/, '')
  const relativeHref = href.startsWith('/') ? href.slice(1) : href
  const joinedPath = `${currentPath}/${relativeHref}`

  if (context.pages[joinedPath]) {
    return context.pages[joinedPath]
  }

  // Strategy 3: Search for keys that end with the path (handles versioned keys)
  // e.g., key='/en/enterprise-cloud@latest/copilot' should match path='/en/copilot'
  for (const [key, page] of Object.entries(context.pages)) {
    if (key.endsWith(cleanPath) || key.endsWith(`${cleanPath}/`)) {
      return page
    }
  }

  // Strategy 4: If href started with /, try endsWith matching on that too
  if (href.startsWith('/')) {
    const hrefClean = href.replace(/\/$/, '')
    for (const [key, page] of Object.entries(context.pages)) {
      if (key.endsWith(hrefClean) || key.endsWith(`${hrefClean}/`)) {
        return page
      }
    }
  }

  return undefined
}
