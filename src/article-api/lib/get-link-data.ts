import type { Context, Page } from '@/types'
import type { LinkData } from '@/article-api/transformers/types'

/**
 * Resolves link data (title, href, intro) for a given href and page
 *
 * This helper is used by landing page transformers to build link lists.
 * It resolves the page from an href, renders its title and intro, and
 * returns the canonical permalink.
 *
 * @param href - The href to resolve (can be relative or absolute)
 * @param languageCode - The language code for the current page
 * @param pathname - The current page's pathname (for relative resolution)
 * @param context - The rendering context
 * @param resolvePath - Function to resolve an href to a Page object
 * @returns LinkData with resolved title, href, and optional intro
 */
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
