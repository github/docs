import path from 'path'
import findPage from '#src/frame/lib/find-page.js'
import nonEnterpriseDefaultVersion from '#src/versions/lib/non-enterprise-default-version.js'
import removeFPTFromPath from '#src/versions/lib/remove-fpt-from-path.js'
import { renderContent } from '#src/content-render/index.js'

// rawLinks is an array of paths: [ '/foo' ]
// we need to convert it to an array of localized objects: [ { href: '/en/foo', title: 'Foo', intro: 'Description here' } ]
export default async (
  rawLinks,
  context,
  option = { title: true, intro: true, fullTitle: false },
  maxLinks = Infinity,
) => {
  if (!rawLinks) return

  if (typeof rawLinks === 'string') {
    return await processLink(rawLinks, context, option)
  }

  const links = []
  // Using a for loop here because the async work is not network or
  // disk bound. It's CPU bound.
  // And if we use a for-loop we can potentially bail early if
  // the `maxLinks` is reached. That's instead of computing them all,
  // and then slicing the array. So it avoids wasted processing.
  for (const link of rawLinks) {
    const processedLink = await processLink(link, context, option)
    if (processedLink) {
      links.push(processedLink)
      if (links.length >= maxLinks) {
        break
      }
    }
  }

  return links
}

async function processLink(link, context, option) {
  const opts = { textOnly: true }
  const linkHref = link.href || link
  // Parse the link in case it includes Liquid conditionals
  const linkPath = linkHref.includes('{') ? await renderContent(linkHref, context, opts) : linkHref
  // If the link was `{% ifversion ghes %}/admin/foo/bar{% endifversion %}`
  // the `context.currentVersion` was `enterprise-cloud`, the final
  // output would become '' (empty string).
  if (!linkPath) return null

  const version =
    context.currentVersion === 'homepage' ? nonEnterpriseDefaultVersion : context.currentVersion
  const href = removeFPTFromPath(path.join('/', context.currentLanguage, version, linkPath))

  const linkedPage = findPage(href, context.pages, context.redirects)
  if (!linkedPage) {
    // This can happen when the link depends on Liquid conditionals,
    // like...
    //    - '{% ifversion ghes %}/admin/foo/bar{% endifversion %}'
    return null
  }

  const result = { href, page: linkedPage }

  if (option.title) {
    result.title = await linkedPage.renderTitle(context, opts)
  }

  if (option.fullTitle) {
    opts.preferShort = false
    result.fullTitle = await linkedPage.renderTitle(context, opts)
  }

  if (option.intro) {
    result.intro = await linkedPage.renderProp('intro', context, opts)
  }
  return result
}
