import path from 'path'

import type { Context, Page } from '@/types'
import type { LinkData } from '@/article-api/transformers/types'

// Match resolve-carousels and GHD056: try the content root first, then the landing page's directory.
export async function resolveCarouselLinks(
  rawPaths: string[],
  page: Page,
  context: Context,
): Promise<LinkData[]> {
  const { default: getPageLinkData } = await import('@/frame/lib/get-link-data')
  const options = { title: true, intro: true }
  const pageDir = page.relativePath ? path.posix.dirname(page.relativePath) : '.'

  const links: LinkData[] = []
  for (const rawPath of rawPaths) {
    let linkData = await getPageLinkData(rawPath, context, options)
    // Liquid can render to an empty path, which would resolve to the landing page itself.
    if (!linkData?.length && pageDir !== '.' && !rawPath.includes('{')) {
      linkData = await getPageLinkData(path.posix.join('/', pageDir, rawPath), context, options)
    }
    for (const item of linkData || []) {
      // Versionless redirects can resolve to a page that does not exist in the requested version.
      if (
        context.currentVersion &&
        !item.page.applicableVersions.includes(context.currentVersion)
      ) {
        continue
      }
      links.push({ href: item.href, title: item.title || '', intro: item.intro || '' })
    }
  }
  return links
}
