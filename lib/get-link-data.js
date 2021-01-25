const path = require('path')
const findPage = require('./find-page')
const nonEnterpriseDefaultVersion = require('./non-enterprise-default-version')
const removeFPTFromPath = require('./remove-fpt-from-path')

// rawLinks is an array of paths: [ '/foo' ]
// we need to convert it to an array of localized objects: [ { href: '/en/foo', title: 'Foo', intro: 'Description here' } ]
module.exports = async (rawLinks, context, option = { title: true, intro: true }) => {
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
  const linkPath = link.href || link
  const version = context.currentVersion === 'homepage' ? nonEnterpriseDefaultVersion : context.currentVersion
  const href = removeFPTFromPath(path.join('/', context.currentLanguage, version, linkPath))

  const linkedPage = findPage(href, context.pages, context.redirects)
  if (!linkedPage) return null

  const opts = { textOnly: true, encodeEntities: true }

  const result = { href, page: linkedPage }

  if (option.title) {
    result.title = await linkedPage.renderTitle(context, opts)
  }

  if (option.intro) {
    result.intro = await linkedPage.renderProp('intro', context, opts)
  }
  return result
}
