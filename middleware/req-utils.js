import Hydro from '../src/events/hydro.js'

export default function reqUtils(req, res, next) {
  req.hydro = new Hydro()
  return next()
}
