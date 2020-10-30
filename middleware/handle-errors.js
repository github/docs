const { liquid } = require('../lib/render-content')
const layouts = require('../lib/layouts')
const FailBot = require('../lib/failbot')
const loadSiteData = require('../lib/site-data')

function shouldLogException (error) {
  const IGNORED_ERRORS = [
    // avoid sending CSRF token errors (from bad-actor POST requests)
    'EBADCSRFTOKEN'
  ]

  if (IGNORED_ERRORS.includes(error.code)) {
    return false
  }

  // We should log this exception
  return true
}

module.exports = async function handleError (error, req, res, next) {
  // if the error is thrown before req.context is created (say, in the Page class),
  // set req.context.site here so we can pass data/ui.yml text to the 500 layout
  if (!req.context) {
    const site = await loadSiteData()
    req.context = { site: site[req.language || 'en'].site }
  }

  // display error on the page in development, but not in production
  if (process.env.NODE_ENV !== 'production' && req.context) {
    req.context.error = error
  }

  // Special handling for when a middleware calls `next(404)`
  if (error === 404) {
    return res
      .status(404)
      .send(await liquid.parseAndRender(layouts['error-404'], req.context))
  }

  if (process.env.NODE_ENV !== 'test') {
    console.error('500 error!', req.path)
    console.error(error)

    if (shouldLogException(error)) {
      await FailBot.report(error, {
        path: req.path
      })
    }
  }

  // If the CSRF token is bad
  if (error.code === 'EBADCSRFTOKEN') {
    return res.sendStatus(403)
  }

  res.status(500).send(await liquid.parseAndRender(layouts['error-500'], req.context))
}
