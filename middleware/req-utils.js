const Hydro = require('../lib/hydro')

module.exports = function reqUtils (req, res, next) {
  req.hydro = new Hydro()
  return next()
}
