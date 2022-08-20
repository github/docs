import Hydro from '../lib/hydro.js'

export default function reqUtils(req, res, next) {
  req.hydro = new Hydro()
  return next()
}
