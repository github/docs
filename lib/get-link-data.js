const path = require('path')
const findPage = require('./find-page')
const nonEnterpriseDefaultVersion = require('./non-enterprise-default-version')
const removeFPTFromPath = require('./remove-fpt-from-path')

// rawLinks is an array of paths: [ '/foo' ]
// we need to convert it to an array of localized objects: [ { href: '/en/foo', title: 'Foo', intro: 'Description here' } ]
module.exports = async (rawLinks, context, additionalProperties = []) => {
  if (!rawLinks) return

  const links = []

  for (const link of rawLinks) {
    const linkPath = link.href || link
    const version = context.currentVersion === 'homepage' ? nonEnterpriseDefaultVersion : context.currentVersion
    const href = removeFPTFromPath(path.join('/', context.currentLanguage, version, linkPath))

    const linkedPage = findPage(href, context.pages, context.redirects)
    if (!linkedPage) continue

    const opts = { textOnly: true, encodeEntities: true }

    const props = {}
    for (const propName of additionalProperties) {
      props[propName] = linkedPage[propName]
    }

    links.push({
      href,
      title: await linkedPage.renderTitle(context, opts),
      intro: await linkedPage.renderProp('intro', context, opts),
      page: linkedPage,
      ...props
    })
  }

  return links
}
