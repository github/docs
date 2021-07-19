import { liquid } from '../lib/render-content/index.js'
import layouts from '../lib/layouts.js'
import nonEnterpriseDefaultVersion from '../lib/non-enterprise-default-version.js'

export default async function devToc(req, res, next) {
  if (process.env.NODE_ENV !== 'development') return next()
  if (!req.path.endsWith('/dev-toc')) return next()

  req.context.devTocVersion =
    req.path === '/dev-toc' ? nonEnterpriseDefaultVersion : req.context.currentVersion

  req.context.devTocTree = req.context.siteTree.en[req.context.devTocVersion]

  const body = await liquid.parseAndRender(layouts['dev-toc'], req.context)

  return res.status('200').send(body)
}
