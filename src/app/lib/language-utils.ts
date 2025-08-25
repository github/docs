import { clientLanguageKeys, type ClientLanguageCode } from '@/languages/lib/client-languages'

/**
 * Extract language from URL path
 * Handles paths like /en/something, /es/articles, etc.
 */
export function extractLanguageFromPath(path: string): ClientLanguageCode {
  try {
    const pathSegments = path.split('/')
    const firstSegment = pathSegments[1]

    if (firstSegment && clientLanguageKeys.includes(firstSegment)) {
      return firstSegment as ClientLanguageCode
    }
  } catch (error) {
    console.warn('Failed to extract language from path:', error)
  }
  return 'en'
}

/**
 * Check if a path contains a language prefix
 */
export function hasLanguagePrefix(path: string): boolean {
  const pathSegments = path.split('/')
  const firstSegment = pathSegments[1]
  return Boolean(firstSegment && clientLanguageKeys.includes(firstSegment))
}

/**
 * Remove language prefix from path
 * e.g., /es/articles/example -> /articles/example
 */
export function stripLanguagePrefix(path: string): string {
  if (hasLanguagePrefix(path)) {
    const pathSegments = path.split('/')
    return '/' + pathSegments.slice(2).join('/')
  }
  return path
}

/**
 * Add language prefix to path if it doesn't have one
 * e.g., /articles/example + 'es' -> /es/articles/example
 */
export function addLanguagePrefix(path: string, language: ClientLanguageCode): string {
  if (hasLanguagePrefix(path)) {
    return path
  }
  return `/${language}${path === '/' ? '' : path}`
}
