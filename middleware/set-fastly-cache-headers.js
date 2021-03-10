module.exports = (req, res, next) => {
  // Disallow both Fastly AND the browser from caching HTML pages
  res.set({
    'surrogate-control': 'private, no-store',
    'cache-control': 'private, no-store'
  })
  return next()
}
