import express from 'express'
import { omit } from 'lodash-es'
import Ajv from 'ajv'
import addFormats from 'ajv-formats'
import { eventSchema, hydroNames } from '../../lib/schema-event.js'
import catchMiddlewareError from '../catch-middleware-error.js'
import { cacheControlFactory } from '../cache-control.js'

const router = express.Router()
const noCacheControl = cacheControlFactory(0)
const ajv = new Ajv()
addFormats(ajv)
const OMIT_FIELDS = ['type']

router.post(
  '/',
  catchMiddlewareError(async function postEvents(req, res) {
    const isDev = process.env.NODE_ENV === 'development'
    const fields = omit(req.body, '_csrf')
    noCacheControl(res)

    if (!ajv.validate(eventSchema, fields)) {
      return res.status(400).json(isDev ? ajv.errorsText() : {})
    }

    res.json({})

    if (req.hydro.maySend()) {
      try {
        await req.hydro.publish(hydroNames[fields.type], omit(fields, OMIT_FIELDS))
      } catch (err) {
        console.error('Failed to submit event to Hydro', err)
      }
    }
  })
)

export default router
