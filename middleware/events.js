import express from 'express'
import { omit } from 'lodash-es'
import Ajv from 'ajv'
import addFormats from 'ajv-formats'
import schema from '../lib/schema-event.js'

const OMIT_FIELDS = ['type']

const ajv = new Ajv()
addFormats(ajv)

const router = express.Router()

router.post('/', async function postEvents(req, res, next) {
  const isDev = process.env.NODE_ENV === 'development'
  const fields = omit(req.body, '_csrf')

  if (!ajv.validate(schema, fields)) {
    if (isDev) console.log(ajv.errorsText())
    return res.status(400).json({})
  }

  if (req.hydro.maySend()) {
    // intentionally don't await this async request
    // so that the http response afterwards is sent immediately
    req.hydro.publish(req.hydro.schemas[fields.type], omit(fields, OMIT_FIELDS)).catch((e) => {
      if (isDev) console.error(e)
    })
  }

  return res.status(200).json({})
})

export default router
