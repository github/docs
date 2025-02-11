import express from 'express'
import { omit, without, mapValues } from 'lodash-es'
import QuickLRU from 'quick-lru'
import { ErrorObject } from 'ajv'

import type { ExtendedRequest } from '@/types'
import type { Response } from 'express'

import { schemas, hydroNames } from './lib/schema.js'
import catchMiddlewareError from 'src/observability/middleware/catch-middleware-error'
import { noCacheControl } from 'src/frame/middleware/cache-control'
import { getJsonValidator } from 'src/tests/lib/validate-json-schema'
import { formatErrors } from './lib/middleware-errors.js'
import { publish as _publish } from './lib/hydro.js'
import { analyzeComment, getGuessedLanguage } from './lib/analyze-comment.js'
import { EventType, EventProps, EventPropsByType } from './types'

const router = express.Router()
const OMIT_FIELDS = ['type']
const allowedTypes = new Set(without(Object.keys(schemas), 'validation'))
const isProd = process.env.NODE_ENV === 'production'
const validators = mapValues(schemas, (schema) => getJsonValidator(schema))

// In production, fire and not wait to respond.
// _publish will send an error to failbot,
// so we don't get alerts but we still track it.
// This ends up being the same as try > await > catch > (do nothing).
async function publish(...args: Parameters<typeof _publish>) {
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
  catchMiddlewareError(async function postEvents(req: ExtendedRequest, res: Response) {
    noCacheControl(res)

    // Make sure the type is supported before continuing
    if (!req.body.type || !allowedTypes.has(req.body.type)) {
      return res.status(400).json({ message: 'Invalid type' })
    }
    const type: EventType = req.body.type
    const body: EventProps & EventPropsByType[EventType] = req.body

    // Validate the data matches the corresponding data schema
    const validate = validators[type]
    if (!validate(body)) {
      // This protects so we don't bother sending the same validation
      // error, per user, more than once (per time interval).
      // This helps if we're bombarded with junk bot traffic. So it
      // protects our Hydro instance from being overloaded with things
      // that aren't helping anybody.
      const hash = `${req.ip}:${(validate.errors || [])
        .map((error: ErrorObject) => error.message + error.instancePath)
        .join(':')}`
      if (!sentValidationErrors.has(hash)) {
        sentValidationErrors.set(hash, true)
        // Track validation errors in Hydro so that we can know if
        // there's a widespread problem in events.ts
        await publish(
          formatErrors(validate.errors || [], body).map((error) => ({
            schema: hydroNames.validation,
            value: error,
          })),
        )
      }
      // We aren't helping bots spam us :)
      return res.status(400).json(isProd ? {} : validate.errors)
    }

    if (isSurvey(body) && body.survey_comment) {
      body.survey_rating = await getSurveyCommentRating({
        comment: body.survey_comment,
        language: body.context.path_language || 'en',
      })
      body.survey_comment_language = await getGuessedLanguage(body.survey_comment)
    }

    // Add dotcom_user to the context if it's available
    // JSON.stringify removes `undefined` values but not `null`, and we don't want to send `null` to Hydro
    if (body.context) {
      body.context.dotcom_user = req.cookies?.dotcom_user ? req.cookies.dotcom_user : undefined
      // Add if the user is a staff, using the 'staffonly' cookie
      body.context.is_staff = Boolean(req.cookies?.staffonly)
    }

    await publish({
      schema: hydroNames[type],
      value: omit(body, OMIT_FIELDS),
    })

    return res.json({})
  }),
)

// https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates
function isSurvey(
  body: EventProps & EventPropsByType[EventType],
): body is EventProps & EventPropsByType[EventType.survey] {
  return body.type === EventType.survey
}

type GetSurveyCommentRatingArgs = {
  comment: string
  language: string
}
async function getSurveyCommentRating({ comment, language }: GetSurveyCommentRatingArgs) {
  if (!comment || !comment.trim()) return
  const { rating } = await analyzeComment(comment, language)
  return rating
}

export default router
