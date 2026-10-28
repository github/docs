import type { Context, Page } from '@/types'
import type { LinkData, Section } from '@/article-api/transformers/types'

interface PageWithIntroLinks extends Page {
  rawIntroLinks?: Record<string, string>
}

// Reads rawIntroLinks because Page.render overwrites introLinks on the Page that every version shares.
export async function getIntroLinksSection(page: Page, context: Context): Promise<Section | null> {
  const { rawIntroLinks } = page as PageWithIntroLinks
  if (!rawIntroLinks) return null

  const { default: getPageLinkData } = await import('@/frame/lib/get-link-data')
  const links: LinkData[] = []
  for (const rawHref of Object.values(rawIntroLinks)) {
    if (typeof rawHref !== 'string') continue
    const [item] = (await getPageLinkData(rawHref, context)) ?? []
    if (item?.href) {
      links.push({ href: item.href, title: item.title || '', intro: item.intro || '' })
    }
  }

  if (links.length === 0) return null
  return { title: 'Links', groups: [{ title: 'Getting started', links }] }
}
