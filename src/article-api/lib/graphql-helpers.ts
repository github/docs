import type { Context, Page } from '@/types'
import { renderContent } from '@/content-render/index'

/**
 * Extract manual content from page markdown
 * Used by GraphQL transformers to get content before the auto-generated marker
 */
export async function extractManualContent(page: Page, context: Context): Promise<string> {
  if (!page.markdown) return ''

  const markerIndex = page.markdown.indexOf(
    '<!-- Content after this section is automatically generated -->',
  )

  if (markerIndex <= 0) return ''

  const rawManualContent = page.markdown.substring(0, markerIndex).trim()
  if (!rawManualContent) return ''

  return await renderContent(rawManualContent, {
    ...context,
    markdownRequested: true,
  })
}
