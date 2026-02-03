import path from 'path'
import findPage from '@/frame/lib/find-page'
import nonEnterpriseDefaultVersion from '@/versions/lib/non-enterprise-default-version'
import removeFPTFromPath from '@/versions/lib/remove-fpt-from-path'
import { renderContent } from '@/content-render/index'
import { executeWithFallback } from '@/languages/lib/render-with-fallback'
import { Context, LinkOptions, ProcessedLink } from './types'

// rawLinks is an array of paths: [ '/foo' ]
// we need to convert it to an array of localized objects: [ { href: '/en/foo', title: 'Foo', intro: 'Description here' } ]
export default async function getLinkData(
  rawLinks: string[] | string | undefined,
  context: Context,
  options: LinkOptions = { title: true, intro: true, fullTitle: false },
  maxLinks = Infinity,
): Promise<ProcessedLink[] | undefined> {
  if (!rawLinks) return undefined

  if (typeof rawLinks === 'string') {
    const processedLink = await processLink(rawLinks, context, options)
    return processedLink ? [processedLink] : undefined
  }

  const links: ProcessedLink[] = []
  // Using a for loop here because the async work is not network or
  // disk bound. It's CPU bound.
  // And if we use a for-loop we can potentially bail early if
  // the `maxLinks` is reached. That's instead of computing them all,
  // and then slicing the array. So it avoids wasted processing.
  for (const link of rawLinks) {
    const processedLink = await processLink(link, context, options)
    if (processedLink) {
      links.push(processedLink)
      if (links.length >= maxLinks) {
        break
      }
    }
  }

  return links
}

async function processLink(
  link: string | { href: string },
  context: Context,
  options: LinkOptions,
): Promise<ProcessedLink | null> {
  const opts: { textOnly: boolean; preferShort?: boolean } = { textOnly: true }
  const linkHref = typeof link === 'string' ? link : link.href
  // Parse the link in case it includes Liquid conditionals
  const linkPath = linkHref.includes('{')
    ? await executeWithFallback(
        context,
        () => renderContent(linkHref, context, opts),
        (enContext: Context) => renderContent(linkHref, enContext, opts),
      )
    : linkHref
  // If the link was `{% ifversion ghes %}/admin/foo/bar{% endifversion %}`
  // the `context.currentVersion` was `enterprise-cloud`, the final
  // output would become '' (empty string).
  if (!linkPath) return null

  const version =
    (context.currentVersion === 'homepage'
      ? nonEnterpriseDefaultVersion
      : context.currentVersion) || 'free-pro-team@latest'
  const currentLanguage = context.currentLanguage || 'en'
  const href = removeFPTFromPath(path.join('/', currentLanguage, version, linkPath))

  const linkedPage = findPage(href, context.pages || {}, context.redirects || {})
  if (!linkedPage) {
    // This can happen when the link depends on Liquid conditionals,
    // like...
    //    - '{% ifversion ghes %}/admin/foo/bar{% endifversion %}'
    return null
  }

  const result: ProcessedLink = { href, page: linkedPage }

  if (options.title) {
    result.title = await linkedPage.renderTitle(context, opts)
  }

  if (options.fullTitle) {
    opts.preferShort = false
    result.fullTitle = await linkedPage.renderTitle(context, opts)
  }

  if (options.intro) {
    result.intro = await linkedPage.renderProp('intro', context, opts)
  }
  return result
}
