// prove to loader.io that we own this site
// by responding to requests like `/loaderio-12345/` with `loaderio-12345`
module.exports = (req, res, next) => {
  if (!req.path.startsWith('/loaderio-')) return next()
  return res.send(req.path.replace(/\//g, ''))
}
