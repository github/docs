import express from 'express'
import events from './events.js'
import search from './search.js'

const router = express.Router()

router.use('/events', events)
router.use('/search', search)

export default router
