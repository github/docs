const patterns = require('../lib/patterns')

module.exports = (req, res, next) => {
  // prevent open redirect vulnerability
  if (req.path.match(patterns.multipleSlashes)) {
    return next(404)
  }

  // Prevent Express from blowing up with `URIError: Failed to decode param`
  // for paths like /%7B%
  try {
    decodeURIComponent(req.path)
    return next()
  } catch (err) {
    if (process.env.NODE_ENV !== 'test') {
      console.log('unable to decode path', req.path, err)
    }

    return res.sendStatus(400)
  }
}
