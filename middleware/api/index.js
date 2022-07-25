import express from 'express'
import session from './session.js'

const router = express.Router()

router.use('/session', session)

export default router
