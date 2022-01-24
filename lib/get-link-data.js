import path from 'path'
import findPage from './find-page.js'
import nonEnterpriseDefaultVersion from './non-enterprise-default-version.js'
import removeFPTFromPath from './remove-fpt-from-path.js'
import renderContent from './render-content/index.js'

// rawLinks is an array of paths: [ '/foo' ]
// we need to convert it to an array of localized objects: [ { href: '/en/foo', title: 'Foo', intro: 'Description here' } ]
export default async (rawLinks, context, option = { title: true, intro: true }) => {
  if (!rawLinks) return

  if (typeof rawLinks === 'string') {
    return await processLink(rawLinks, context, option)
  }

  const links = []

  for (const link of rawLinks) {
    const linkObj = await processLink(link, context, option)
    if (!linkObj) {
      continue
    } else {
      links.push(linkObj)
    }
  }

  return links
}

const processLink = async (link, context, option) => {
  const opts = { textOnly: true, encodeEntities: true }
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

  if (option.intro) {
    result.intro = await linkedPage.renderProp('intro', context, opts)
  }
  return result
}
