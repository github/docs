const languages = require('../lib/languages')
const products = require('../lib/all-products')
const { deprecated } = require('../lib/enterprise-server-releases.js')

let defaultResponse = 'User-agent: *'

const disallowAll = `User-agent: *
Disallow: /`

module.exports = function (req, res, next) {
  if (req.path !== '/robots.txt') return next()

  res.type('text/plain')

  // remove subdomain from host
  // docs-internal-12345--branch-name.herokuapp.com -> herokuapp.com
  const rootDomain = req.hostname.split('.').slice(1).join('.')

  // prevent crawlers from indexing staging apps
  if (rootDomain === 'herokuapp.com') {
    return res.send(disallowAll)
  }

  // Disallow crawling of WIP localized content
  Object.values(languages)
    .filter(language => language.wip)
    .forEach(language => {
      defaultResponse = defaultResponse.concat(`\nDisallow: /${language.code}\nDisallow: /${language.code}/*\n`)
    })

  // Disallow crawling of WIP products
  Object.values(products)
    .filter(product => product.wip)
    .forEach(product => {
      defaultResponse = defaultResponse.concat(`\nDisallow: /*${product.href}\nDisallow: /*/enterprise/*/user${product.href}`)
    })

  // Disallow crawling of Deprecated enterprise versions
  deprecated
    .forEach(version => {
      defaultResponse = defaultResponse
        .concat(`\nDisallow: /*/enterprise-server@${version}/*`)
        .concat(`\nDisallow: /*/enterprise/${version}/*`)
    })

  return res.send(defaultResponse)
}
