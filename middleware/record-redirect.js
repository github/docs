const { v4: uuidv4 } = require('uuid')

module.exports = function recordRedirects (req, res, next) {
  if (!req.hydro.maySend()) return next()

  res.on('finish', async function recordRedirect () {
    // We definitely don't want 304
    if (![301, 302, 303, 307, 308].includes(res.statusCode)) return
    const schemaName = req.hydro.schemas.redirect
    const redirectEvent = {
      context: {
        user: req.cookies['_docs-events'] || uuidv4(),
        event_id: uuidv4(),
        version: '1.0.0',
        created: new Date().toISOString(),
        path: req.path,
        referrer: req.get('referer')
      },
      redirect_from: req.originalUrl,
      redirect_to: res.get('location')
    }
    const hydroRes = await req.hydro.publish(schemaName, redirectEvent)
    if (!hydroRes.ok) console.log('Failed to record redirect to Hydro')
  })

  return next()
}
