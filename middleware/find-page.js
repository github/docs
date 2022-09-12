export default function findPage(req, res, next) {
  const page = req.context.pages[req.pagePath]

  if (page) {
    req.context.page = page
    req.context.page.version = req.context.currentVersion
  }

  return next()
}
