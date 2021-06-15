const accept = require('@hapi/accept')

// Next.JS uses the @hapi/accept package to parse and detect languages. If the accept-language header is malformed
// it throws an error from within Next.JS, which results in a 500 response. This ends up being noisy because we
// track 500s. To counteract this, we'll try to catch the error first and make sure it doesn't happen
module.exports = function catchBadAcceptLanguage (req, res, next) {
  try {
    accept.language(req.headers['accept-language'])
  } catch (e) {
    // if there's a problem with parsing 'accept-language', just clear it out.
    req.headers['accept-language'] = ''
  }

  return next()
}
