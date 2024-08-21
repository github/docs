import express from 'express'
import { omit, without, mapValues } from 'lodash-es'
import QuickLRU from 'quick-lru'

import { schemas, hydroNames } from './lib/schema.js'
import catchMiddlewareError from '#src/observability/middleware/catch-middleware-error.js'
import { noCacheControl } from '#src/frame/middleware/cache-control.js'
import { getJsonValidator } from '#src/tests/lib/validate-json-schema.js'
import { formatErrors } from './lib/middleware-errors.js'
import { publish as _publish } from './lib/hydro.js'
import { analyzeComment, getGuessedLanguage } from './analyze-comment.js'

const router = express.Router()
const OMIT_FIELDS = ['type']
const allowedTypes = new Set(without(Object.keys(schemas), 'validation'))
const isProd = process.env.NODE_ENV === 'production'
const validators = mapValues(schemas, (schema) => getJsonValidator(schema))
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

const sentValidationErrors = new QuickLRU({
  maxSize: 10_000,
  maxAge: 1000 * 60,
})

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
    const validate = validators[type]
    if (!validate(req.body)) {
      const hash = `${req.ip}:${validate.errors
        .map((error) => error.message + error.instancePath)
        .join(':')}`
      // This protects so we don't bother sending the same validation
      // error, per user, more than once (per time interval).
      // This helps if we're bombarded with junk bot traffic. So it
      // protects our Hydro instance from being overloaded with things
      // that aren't helping anybody.
      if (!sentValidationErrors.has(hash)) {
        sentValidationErrors.set(hash, true)
        // Track validation errors in Hydro so that we can know if
        // there's a widespread problem in events.ts
        await publish(
          formatErrors(validate.errors, req.body).map((error) => ({
            schema: hydroNames.validation,
            value: error,
          })),
        )
      }
      // We aren't helping bots spam us :)
      return res.status(400).json(isProd ? {} : validate.errors)
    }

    if (type === 'survey' && req.body.survey_comment) {
      req.body.survey_rating = await getSurveyCommentRating({
        comment: req.body.survey_comment,
        language: req.body.context.path_language,
      })
      req.body.survey_comment_language = await getGuessedLanguage(req.body.survey_comment)
    }

    await publish({
      schema: hydroNames[type],
      value: omit(req.body, OMIT_FIELDS),
    })

    return res.json({})
  }),
)

async function getSurveyCommentRating({ comment, language }) {
  if (!comment || !comment.trim()) {
    return
  }

  const { rating } = await analyzeComment(comment, language)
  return rating
}

export default router
