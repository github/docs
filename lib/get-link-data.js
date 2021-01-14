const findPageInVersion = require('../lib/find-page-in-version')
const { getVersionedPathWithLanguage } = require('../lib/path-utils')

// rawLinks is an array of paths: [ '/foo' ]
// we need to convert it to an array of localized objects: [ { href: '/en/foo', title: 'Foo', intro: 'Description here' } ]
module.exports = async (rawLinks, context, additionalProperties = []) => {
  if (!rawLinks) return

  const links = []

  for (const link of rawLinks) {
    const href = link.href
      ? getVersionedPathWithLanguage(link.href, context.currentVersion, context.currentLanguage)
      : getVersionedPathWithLanguage(link, context.currentVersion, context.currentLanguage)

    const linkedPage = findPageInVersion(href, context.pages, context.redirects, context.currentLanguage, context.currentVersion)
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
