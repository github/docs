// This module serves requests to Early Access content from a hidden proxy host (EARLY_ACCESS_HOSTNAME).
// Paths to this content are fetched in the warmServer module at startup.

const got = require('got')
const isURL = require('is-url')

module.exports = async (req, res, next) => {
  if (
    isURL(process.env.EARLY_ACCESS_HOSTNAME) &&
    req.context &&
    req.context.earlyAccessPaths &&
    req.context.earlyAccessPaths.includes(req.path)
  ) {
    try {
      const proxyURL = `${process.env.EARLY_ACCESS_HOSTNAME}${req.path}`
      const proxiedRes = await got(proxyURL)
      res.set('content-type', proxiedRes.headers['content-type'])
      res.send(proxiedRes.body)
    } catch (err) {
      next()
    }
  } else {
    next()
  }
}
