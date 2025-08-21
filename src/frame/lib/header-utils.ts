/**
 * Utilities for safely serializing data for HTTP headers
 */

export interface MinimalUIData {
  header: {
    github_docs?: string
  }
  footer?: any
}

/**
 * Safely serialize data to a base64-encoded JSON string for HTTP headers
 * Handle encoding issues and provide fallbacks for serialization errors
 */
export function safeStringifyForHeader(data: any): string {
  try {
    const jsonString = JSON.stringify(data)
    // Encode to base64 to avoid header character issues
    return Buffer.from(jsonString, 'utf8').toString('base64')
  } catch (e) {
    console.warn('Failed to stringify data for header:', e)
    // Return minimal fallback as base64
    const fallback = JSON.stringify({
      header: { github_docs: 'GitHub Docs' },
      footer: {},
    })
    return Buffer.from(fallback, 'utf8').toString('base64')
  }
}

/**
 * Create minimal UI data from Express context
 * Provide consistent fallbacks for missing data
 */
export function createMinimalUIData(context?: any): MinimalUIData {
  if (!context?.site?.data?.ui) {
    return {
      header: { github_docs: 'GitHub Docs' },
      footer: {},
    }
  }

  return {
    header: context.site.data.ui.header || { github_docs: 'GitHub Docs' },
    footer: context.site.data.ui.footer || {},
  }
}

/**
 * Set context headers for App Router from Express context
 * Preserve headers from Fastly
 */
export function setAppRouterContextHeaders(
  req: any,
  res: any,
  preserveFastlyHeaders: boolean = true,
): void {
  if (req.context) {
    // Only set language header if Fastly hasn't already set it (or if not preserving)
    if (!preserveFastlyHeaders || !req.headers['x-docs-language']) {
      res.setHeader('x-docs-language', req.context.currentLanguage || 'en')
    }

    // Only set version header if Fastly hasn't already set it (or if not preserving)
    if (!preserveFastlyHeaders || !req.headers['x-docs-version']) {
      res.setHeader('x-docs-version', req.context.currentVersion || 'free-pro-team@latest')
    }

    const minimalUI = createMinimalUIData(req.context)
    res.setHeader('x-docs-ui-data', safeStringifyForHeader(minimalUI))
  } else {
    // Fallback when no Express context is available
    res.setHeader('x-docs-language', 'en')
    res.setHeader('x-docs-version', 'free-pro-team@latest')
    res.setHeader(
      'x-docs-ui-data',
      safeStringifyForHeader({
        header: { github_docs: 'GitHub Docs' },
        footer: {},
      }),
    )
  }
}
