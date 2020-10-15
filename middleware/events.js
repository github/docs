const express = require('express')
const Airtable = require('airtable')
const { omit } = require('lodash')
const Ajv = require('ajv')
const schema = require('../lib/schema-event')
const schemaHydro = require('../lib/schema-event-2')

const TABLE_NAMES = {
  HELPFULNESS: 'Helpfulness Survey',
  EXPERIMENT: 'Experiment Events'
}

const OMIT_FIELDS = ['type', 'token']

const ajv = new Ajv()

const router = express.Router()

async function airtablePost (req, res, next) {
  const { AIRTABLE_API_KEY, AIRTABLE_BASE_KEY } = process.env
  if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_KEY) {
    return res.status(501).send({})
  }
  if (!ajv.validate(schema, req.body)) {
    if (process.env.NODE_ENV !== 'production') console.log(ajv.errorsText())
    return res.status(400).send({})
  }
  const fields = omit(req.body, OMIT_FIELDS)
  try {
    const base = new Airtable({ apiKey: AIRTABLE_API_KEY })
      .base(AIRTABLE_BASE_KEY)
    // TODO stop the test at T+C > N or T-C > 2*sqrt(N)
    const records = await base(TABLE_NAMES[req.body.type])
      .create([{ fields }])
    return res.status(201).send({ id: records[0].getId() })
  } catch (err) {
    console.error('unable to POST event', err)
    return res.status(502).send({})
  }
}

router.post('/', async (req, res, next) => {
  // All-caps type is an "Airtable" event
  if (req.body.type === 'HELPFULNESS' || req.body.type === 'EXPERIMENT') {
    return airtablePost(req, res, next)
  }
  // Remove the condition above when we are no longer sending to Airtable
  if (!ajv.validate(schemaHydro, req.body)) {
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

router.put('/:id', async (req, res, next) => {
  const { AIRTABLE_API_KEY, AIRTABLE_BASE_KEY } = process.env
  if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_KEY) {
    return res.status(501).send({})
  }
  // Most event types will not be update eligible
  if (!['HELPFULNESS'].includes(req.body.type)) {
    return res.status(400).send({})
  }
  if (!ajv.validate(schema, req.body)) {
    if (process.env.NODE_ENV !== 'production') console.log(ajv.errorsText())
    return res.status(400).send({})
  }
  const fields = omit(req.body, OMIT_FIELDS)
  try {
    const base = new Airtable({ apiKey: AIRTABLE_API_KEY })
      .base(AIRTABLE_BASE_KEY)
    await base(TABLE_NAMES[req.body.type])
      .update([{ id: req.params.id, fields }])
    return res.status(200).send({})
  } catch (err) {
    console.error('unable to PUT event', err)
    return res.status(502).send({})
  }
})

module.exports = router
