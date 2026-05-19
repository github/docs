import type { Context, Page } from '@/types'
import { renderContent } from '@/content-render/index'
import matter from '@gr2m/gray-matter'

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

  const { content } = matter(page.markdown)
  const manualContentMarkerIndex = content.indexOf(
    '<!-- Content after this section is automatically generated -->',
  )

  if (manualContentMarkerIndex <= 0) return ''

  const rawManualContent = content.substring(0, manualContentMarkerIndex).trim()
  if (!rawManualContent) return ''

  return await renderContent(rawManualContent, {
    ...context,
    markdownRequested: true,
  })
}
