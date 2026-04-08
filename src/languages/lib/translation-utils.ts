import type { UIStrings } from '@/frame/components/context/MainContext'

class UngettableError extends Error {}

/**
 * Generic translation function that works with both client and server components
 * With error handling for missing namespaces in CJK/Cyrillic languages
 */
export function createTranslationFunctions(uiData: UIStrings, namespaces: string | Array<string>) {
  const namespacesArray = Array.isArray(namespaces) ? namespaces : [namespaces]

  const missingNamespaces: string[] = []
  for (const namespace of namespacesArray) {
    if (!(namespace in uiData)) {
      missingNamespaces.push(namespace)
    }
  }

  if (missingNamespaces.length > 0) {
    console.warn(
      `Missing namespaces [${missingNamespaces.join(', ')}] in UI data. ` +
        `Available namespaces: ${Object.keys(uiData).sort().join(', ')}`,
    )

    // For 404 pages, we can't afford to throw errors; create defensive fallbacks
    if (missingNamespaces.includes('meta')) {
      console.warn('Creating fallback meta namespace for 404 page rendering')
      uiData = {
        ...uiData,
        meta: {
          oops: 'Ooops!',
          ...(typeof uiData.meta === 'object' && uiData.meta !== null ? uiData.meta : {}),
        },
      } as UIStrings
    }

    // Still missing critical namespaces? Create minimal fallbacks
    for (const namespace of missingNamespaces) {
      if (!(namespace in uiData)) {
        uiData = {
          ...uiData,
          [namespace]: {} as UIStrings,
        } as UIStrings
      }
    }
  }

  function carefulGetWrapper(path: string, fallback?: string) {
    try {
      // Try each namespace in order
      for (const namespace of namespacesArray) {
        if (!(namespace in uiData)) {
          continue // Skip missing namespaces
        }
        const deeper = uiData[namespace]
        if (typeof deeper === 'string') {
          continue
        }
        try {
          return carefulGet(deeper, path)
        } catch (error) {
          if (!(error instanceof UngettableError)) {
            console.warn(`Translation error in namespace "${namespace}" for path "${path}":`, error)
          }
        }
      }

      // Fallback to searching the full UI data
      return carefulGet(uiData, path)
    } catch {
      // Never let translation failures break the app
      const finalFallback = fallback || path.split('.').pop() || 'Missing translation'
      console.warn(
        `Translation completely failed for "${path}", using fallback: "${finalFallback}"`,
      )
      return finalFallback
    }
  }

  return {
    tObject: (strings: TemplateStringsArray | string) => {
      const key = typeof strings === 'string' ? strings : String.raw(strings)
      try {
        return carefulGetWrapper(key) as UIStrings
      } catch (error) {
        console.warn(`tObject failed for "${key}":`, error)
        return {} as UIStrings
      }
    },
    t: (strings: TemplateStringsArray | string, ...values: Array<any>) => {
      const key = typeof strings === 'string' ? strings : String.raw(strings, ...values)
      // Provide specific fallbacks for common 404 page keys
      const commonFallbacks: Record<string, string> = {
        oops: 'Ooops!',
        github_docs: 'GitHub Docs',
      }
      const fallback = commonFallbacks[key] || commonFallbacks[key.split('.').pop() || '']
      return carefulGetWrapper(key, fallback) as string
    },
  }
}

/**
 * Server-side translation function for App Router pages
 * Enhanced with better error handling for missing keys and defensive fallbacks
 */
export function translate(uiData: UIStrings, key: string, fallback?: string): string {
  // Defensive check for completely missing data
  if (!uiData || typeof uiData !== 'object') {
    console.warn(`UI data is missing or corrupted for key "${key}", using fallback`)
    return getCommonFallback(key, fallback)
  }

  try {
    return carefulGet(uiData, key) as string
  } catch (error) {
    const finalFallback = getCommonFallback(key, fallback)

    // Only warn in development
    if (process.env.NODE_ENV === 'development') {
      console.warn(
        `Server translation failed for "${key}":`,
        error instanceof Error ? error.message : error,
        `Using fallback: "${finalFallback}"`,
      )
    }

    return finalFallback
  }
}

/**
 * Get common fallback values for essential UI keys
 */
function getCommonFallback(key: string, providedFallback?: string): string {
  const commonFallbacks: Record<string, string> = {
    'meta.oops': 'Ooops!',
    'header.github_docs': 'GitHub Docs',
    'meta.default_description': 'Get started, troubleshoot, and make the most of GitHub.',
    'footer.terms': 'Terms',
    'footer.privacy': 'Privacy',
    'footer.status': 'Status',
    'support.contact_support': 'Contact support',
  }

  return (
    commonFallbacks[key] ||
    providedFallback ||
    commonFallbacks[key.split('.').pop() || ''] ||
    key.split('.').pop() ||
    key
  )
}

function carefulGet(uiData: UIStrings, dottedPath: string) {
  const splitPath = dottedPath.split('.')
  const start = splitPath[0]
  if (!(start in uiData)) {
    throw new UngettableError(
      `Namespace "${start}" not found in loaded data (available: ${Object.keys(uiData).sort()})`,
    )
  }
  if (splitPath.length > 1) {
    const deeper = uiData[start]
    if (typeof deeper === 'string') {
      throw new Error(`Namespace "${start}" is a string, not an object`)
    }
    return carefulGet(deeper, splitPath.slice(1).join('.'))
  } else {
    if (!(start in uiData)) {
      throw new UngettableError(`Key "${start}" not found in loaded data`)
    }
    return uiData[start]
  }
}
