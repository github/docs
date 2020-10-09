const Hydro = require('../lib/hydro')

module.exports = (req, res, next) => {
  req.hydro = new Hydro()
  return next()
}
