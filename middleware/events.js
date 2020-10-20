const express = require('express')
const { omit } = require('lodash')
const Ajv = require('ajv')
const schema = require('../lib/schema-event')

const OMIT_FIELDS = ['type', 'token']

const ajv = new Ajv()

const router = express.Router()

router.post('/', async (req, res, next) => {
  if (!ajv.validate(schema, req.body)) {
    if (process.env.NODE_ENV === 'development') console.log(ajv.errorsText())
    return res.status(400).json({})
  }
  const fields = omit(req.body, OMIT_FIELDS)
  try {
    const hydroRes = await req.hydro.publish(req.hydro.schemas[req.body.type], fields)
    if (!hydroRes.ok) return res.status(502).json({})
    return res.status(201).json(fields)
  } catch (err) {
    if (process.env.NODE_ENV === 'development') console.log(err)
    return res.status(502).json({})
  }
})

module.exports = router
