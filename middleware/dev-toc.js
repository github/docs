const { liquid } = require('../lib/render-content')
const layouts = require('../lib/layouts')

module.exports = async function devToc (req, res, next) {
  if (process.env.NODE_ENV !== 'development') return next()
  if (!req.path.endsWith('/dev-toc')) return next()

  return res.send(await liquid.parseAndRender(layouts['dev-toc'], req.context))
}
