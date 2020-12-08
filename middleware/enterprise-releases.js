const { liquid } = require('../lib/render-content')
const layouts = require('../lib/layouts')

module.exports = async (req, res, next) => {
  if (!req.path.endsWith('/enterprise-server-releases')) return next()

  return res.send(await liquid.parseAndRender(layouts['enterprise-server-releases'], req.context))
}
