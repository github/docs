import express from 'express'
import session from './session.js'
import events from './events.js'
import search from './search.js'

const router = express.Router()

router.use('/session', session)
router.use('/events', events)
router.use('/search', search)

export default router
