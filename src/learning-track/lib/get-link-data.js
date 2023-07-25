import path from 'path'
import findPage from '../../../lib/find-page.js'
import nonEnterpriseDefaultVersion from '../../../lib/non-enterprise-default-version.js'
import removeFPTFromPath from '../../../lib/remove-fpt-from-path.js'
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

  const links = (await Promise.all(rawLinks.map((link) => processLink(link, context, option))))
    .filter(Boolean)
    .slice(0, maxLinks)

  return links
}

async function processLink(link, context, option) {
  const opts = { textOnly: true }
  // Parse the link in case it includes Liquid conditionals
  const linkPath = await renderContent(link.href || link, context, opts)
  if (!linkPath) return null

  const version =
    context.currentVersion === 'homepage' ? nonEnterpriseDefaultVersion : context.currentVersion
  const href = removeFPTFromPath(path.join('/', context.currentLanguage, version, linkPath))

  const linkedPage = findPage(href, context.pages, context.redirects)
  if (!linkedPage) return null

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
