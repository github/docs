const { FEATURE_NEXTJS } = process.env

export default function isNextRequest(req, res, next) {
  req.renderWithNextjs = false

  if (FEATURE_NEXTJS) {
    req.renderWithNextjs = true
  }

  return next()
}
