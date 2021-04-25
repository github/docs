const { URL } = require('url')
const patterns = require('../../lib/patterns')

// redirect help.github.com requests to docs.github.com

module.exports = function helpToDocs (req, res, next) {
  if (req.hostname === 'help.github.com') {
    // prevent open redirect security vulnerability
    const path = req.originalUrl.replace(patterns.multipleSlashes, '/')

    const url = new URL(path, 'https://docs.github.com')
    const newURL = url.toString()

    return res.redirect(301, newURL)
  } else {
    return next()
  }
}
