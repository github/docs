import express from 'express'
import { omit, without, mapValues } from 'lodash-es'
import Ajv from 'ajv'
import addFormats from 'ajv-formats'
import { schemas, hydroNames } from './schema.js'
import catchMiddlewareError from '../../middleware/catch-middleware-error.js'
import { noCacheControl } from '../../middleware/cache-control.js'
import { publish } from './hydro.js'

const router = express.Router()
const ajv = new Ajv()
addFormats(ajv)
const OMIT_FIELDS = ['type']
const allowedTypes = new Set(without(Object.keys(schemas), 'validation'))
const isDev = process.env.NODE_ENV === 'development'
const validations = mapValues(schemas, (schema) => ajv.compile(schema))

router.post(
  '/',
  catchMiddlewareError(async function postEvents(req, res) {
    noCacheControl(res)

    // Make sure the type is supported before continuing
    const { type } = req.body
    if (!type || !allowedTypes.has(type)) {
      return res.status(400).json({ message: 'Invalid type' })
    }

    // Validate the data matches the corresponding data schema
    if (!validations[type](req.body)) {
      return res.status(400).json(isDev ? ajv.errorsText() : {})
    }

    res.json({})
    try {
      await publish({
        schema: hydroNames[type],
        value: omit(req.body, OMIT_FIELDS),
      })
    } catch (err) {
      console.error('Failed to submit event to Hydro', err)
    }
  })
)
export default router
