const { FEATURE_NEXTJS } = process.env

module.exports = function isNextRequest (req, res, next) {
  req.renderWithNextjs = false

  if (FEATURE_NEXTJS) {
    req.renderWithNextjs = true
  }

  return next()
}
