const { liquid } = require('../lib/render-content')
const layouts = require('../lib/layouts')
const nonEnterpriseDefaultVersion = require('../lib/non-enterprise-default-version')

module.exports = async function devToc (req, res, next) {
  if (process.env.NODE_ENV !== 'development') return next()
  if (!req.path.endsWith('/dev-toc')) return next()

  req.context.devTocVersion = req.path === '/dev-toc'
    ? nonEnterpriseDefaultVersion
    : req.context.currentVersion

  req.context.devTocTree = req.context.siteTree.en[req.context.devTocVersion]

  const body = await liquid.parseAndRender(layouts['dev-toc'], req.context)

  return res.status('200').send(body)
}
