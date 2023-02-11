import { v4 as uuidv4 } from 'uuid'
import { hydroNames } from '../lib/schema-event.js'

export default function recordRedirects(req, res, next) {
  if (!req.hydro.maySend()) return next()

  res.on('finish', async function recordRedirect() {
    // Basically only the "permanent" ones
    if (![301, 308].includes(res.statusCode)) return
    const schemaName = hydroNames.redirect
    const redirectEvent = {
      context: {
        user: req.cookies['_docs-events'] || uuidv4(),
        event_id: uuidv4(),
        version: '1.0.0',
        created: new Date().toISOString(),
        path: req.path,
        referrer: req.get('referer'),
      },
      redirect_from: req.originalUrl,
      redirect_to: res.get('location'),
    }
    try {
      await req.hydro.publish(schemaName, redirectEvent)
    } catch (err) {
      console.error('Failed to record redirect to Hydro', err)
    }
  })

  return next()
}
