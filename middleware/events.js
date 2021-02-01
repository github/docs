const express = require('express')
const { omit } = require('lodash')
const Ajv = require('ajv')
const schema = require('../lib/schema-event')

const OMIT_FIELDS = ['type', 'token']

const ajv = new Ajv()

const router = express.Router()

router.post('/', async (req, res, next) => {
  const fields = omit(req.body, '_csrf')

  if (!ajv.validate(schema, fields)) {
    if (process.env.NODE_ENV === 'development') console.log(ajv.errorsText())
    return res.status(400).json({})
  }

  // Don't depend on Hydro on local development
  if (process.env.NODE_ENV === 'development' && !req.hydro.maySend()) {
    return res.status(200).json({})
  }

  try {
    const hydroRes = await req.hydro.publish(
      req.hydro.schemas[fields.type],
      omit(fields, OMIT_FIELDS)
    )
    if (!hydroRes.ok) return res.status(502).json({})
    return res.status(201).json(fields)
  } catch (err) {
    if (process.env.NODE_ENV === 'development') console.log(err)
    return res.status(502).json({})
  }
})

module.exports = router
