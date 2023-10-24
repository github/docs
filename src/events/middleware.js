import express from 'express'
import { omit, without, mapValues } from 'lodash-es'
import Ajv from 'ajv'
import addFormats from 'ajv-formats'
import { schemas, hydroNames } from './lib/schema.js'
import catchMiddlewareError from '#src/observability/middleware/catch-middleware-error.js'
import { noCacheControl } from '../../middleware/cache-control.js'
import { formatErrors } from './lib/middleware-errors.js'
import { publish as _publish } from './lib/hydro.js'

const router = express.Router()
const ajv = new Ajv()
addFormats(ajv)
const OMIT_FIELDS = ['type']
const allowedTypes = new Set(without(Object.keys(schemas), 'validation'))
const isProd = process.env.NODE_ENV === 'production'
const validations = mapValues(schemas, (schema) => ajv.compile(schema))

// In production, fire and not wait to respond.
// _publish will send an error to failbot,
// so we don't get alerts but we still track it.
// This ends up being the same as try > await > catch > (do nothing).
async function publish(...args) {
  if (isProd) {
    _publish(...args)
    return
  }
  return await _publish(...args)
}

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
    const validate = validations[type]
    if (!validate(req.body)) {
      // Track validation errors in Hydro so that we can know if
      // there's a widespread problem in events.ts
      await publish(
        formatErrors(validate.errors, req.body).map((error) => ({
          schema: hydroNames.validation,
          value: error,
        })),
      )
      // We aren't helping bots spam us :)
      return res.status(400).json(isProd ? {} : validate.errors)
    }

    await publish({
      schema: hydroNames[type],
      value: omit(req.body, OMIT_FIELDS),
    })
    return res.json({})
  }),
)
export default router
