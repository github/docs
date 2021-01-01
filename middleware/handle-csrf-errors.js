module.exports = async function handleCSRFError (error, req, res, next) {
  // If the CSRF token is bad
  if (error.code === 'EBADCSRFTOKEN') {
    return res.sendStatus(403)
  }

  return next(error)
}
