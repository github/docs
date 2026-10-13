import type { Context, Page } from '@/types'
import type { LinkData } from '@/article-api/transformers/types'

export async function getLinkData(
  href: string,
  languageCode: string,
  pathname: string,
  context: Context,
  resolvePath: (
    href: string,
    languageCode: string,
    pathname: string,
    context: Context,
  ) => Page | undefined,
): Promise<LinkData> {
  const linkedPage = resolvePath(href, languageCode, pathname, context)
  if (!linkedPage) return { href, title: href }

  const title = await linkedPage.renderTitle(context, { unwrap: true })
  const intro = linkedPage.intro
    ? await linkedPage.renderProp('intro', context, { textOnly: true })
    : ''

  const permalink = linkedPage.permalinks.find(
    (p) => p.languageCode === languageCode && p.pageVersion === context.currentVersion,
  )
  const resolvedHref = permalink ? permalink.href : href

  return {
    href: resolvedHref,
    title,
    intro,
  }
}
