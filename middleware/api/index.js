import express from 'express'
import session from './session.js'
import events from './events.js'

const router = express.Router()

router.use('/session', session)
router.use('/events', events)

export default router
