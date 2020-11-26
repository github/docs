const patterns = require('../lib/patterns')
const allVersions = require('../lib/all-versions')

// Add `req.context.homepages` for building a list of product links in the
// header, bearing the current page's language and product in mind.

module.exports = async function addHomepagesToContext (req, res, next) {
  req.context.homepages = allVersions.map(version => {
    let href, title, active
    if (version === 'dotcom') {
      href = `/${req.language}`
      title = 'GitHub.com'
      active = !patterns.enterprise.test(req.path)
    } else {
      href = `/${req.language}/enterprise/${version}`
      title = `Enterprise Server ${version}`
      active = req.path.includes(`/enterprise/${version}`)
    }

    return { title, href, active }
  })

  req.context.currentHomepage = req.context.homepages.find(product => product.active) || req.context.homepages[0]

  return next()
}
