export default function disableCachingOnSafari(req, res, next) {
  const isSafari = /^((?!chrome|android).)*safari/i.test(req.headers['user-agent'])
  if (isSafari) {
    res.header('Last-Modified', new Date().toUTCString())
  }
  return next()
}
