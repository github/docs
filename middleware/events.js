const express = require('express')
const { omit } = require('lodash')
const Ajv = require('ajv')
const schema = require('../lib/schema-event')
const FailBot = require('../lib/failbot')

const OMIT_FIELDS = ['type', 'token']

const ajv = new Ajv()

const router = express.Router()

router.post('/', async (req, res, next) => {
  const isDev = process.env.NODE_ENV === 'development'
  const fields = omit(req.body, '_csrf')

  if (!ajv.validate(schema, fields)) {
    if (isDev) console.log(ajv.errorsText())
    return res.status(400).json({})
  }

  // Don't depend on Hydro on local development
  if (isDev && !req.hydro.maySend()) {
    return res.status(200).json({})
  }

  try {
    const hydroRes = await req.hydro.publish(
      req.hydro.schemas[fields.type],
      omit(fields, OMIT_FIELDS)
    )

    if (!hydroRes.ok) {
      const err = new Error('Hydro request failed')
      err.status = hydroRes.status
      err.path = fields.path

      await FailBot.report(err, {
        path: fields.path,
        hydroStatus: hydroRes.status,
        hydroText: await hydroRes.text()
      })

      throw err
    }

    return res.status(201).json(fields)
  } catch (err) {
    if (isDev) console.error(err)
    return res.status(502).json({})
  }
})

module.exports = router
