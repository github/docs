import express from 'express'
import { omit, without, mapValues } from 'lodash-es'
import QuickLRU from 'quick-lru'
import { ErrorObject } from 'ajv'

import type { ExtendedRequest } from '@/types'
import type { Response } from 'express'

import { schemas, hydroNames } from './lib/schema'
import catchMiddlewareError from '@/observability/middleware/catch-middleware-error'
import { noCacheControl } from '@/frame/middleware/cache-control'
import { getJsonValidator } from '@/tests/lib/validate-json-schema'
import { formatErrors } from './lib/middleware-errors'
import { publish as _publish } from './lib/hydro'
import { analyzeComment, getGuessedLanguage } from './lib/analyze-comment'
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

// We use a LRU cache & a hash of the error message
// to prevent sending multiple validation errors that can spam requests to Hydro
const getValidationErrorHash = (validateErrors: ErrorObject[]) => {
  // limit to 10 second windows
  const window: Number = Math.floor(new Date().getTime() / 10000)
  return `${window}:${(validateErrors || [])
    .map((error: ErrorObject) => error.message + error.instancePath + JSON.stringify(error.params))
    .join(':')}`
}

router.post(
  '/',
  catchMiddlewareError(async function postEvents(req: ExtendedRequest, res: Response) {
    noCacheControl(res)

    const eventsToProcess = Array.isArray(req.body) ? req.body : [req.body]
    const validEvents: any[] = []
    const validationErrors: any[] = []

    for (const eventBody of eventsToProcess) {
      try {
        // Skip event if it doesn't have a type or if the type is not in the allowed types
        if (!eventBody.type || !allowedTypes.has(eventBody.type)) {
          continue
        }
        const type: EventType = eventBody.type
        const body: EventProps & EventPropsByType[EventType] = eventBody
        if (isSurvey(body) && body.survey_comment) {
          body.survey_rating = await getSurveyCommentRating({
            comment: body.survey_comment,
            language: body.context.path_language || 'en',
          })
          body.survey_comment_language = await getGuessedLanguage(body.survey_comment)
        }

        if (body.context) {
          // Add dotcom_user to the context if it's available
          // JSON.stringify removes `undefined` values but not `null`, and we don't want to send `null` to Hydro
          body.context.dotcom_user = req.cookies?.dotcom_user ? req.cookies.dotcom_user : undefined
          body.context.is_staff = Boolean(req.cookies?.staffonly)
        }
        const validate = validators[type]
        if (!validate(body)) {
          const hash = getValidationErrorHash(validate.errors || [])
          if (!sentValidationErrors.has(hash)) {
            sentValidationErrors.set(hash, true)
            formatErrors(validate.errors || [], body).map((error) => {
              validationErrors.push({ schema: hydroNames.validation, value: error })
            })
          }
          continue
        }
        validEvents.push({
          schema: hydroNames[type],
          value: omit(body, OMIT_FIELDS),
        })
      } catch (eventError) {
        console.error('Error validating event:', eventError)
      }
    }
    if (validEvents.length > 0) {
      await publish(validEvents)
    }

    if (validationErrors.length > 0) {
      await publish(validationErrors)
    }
    const statusCode = validationErrors.length > 0 ? 400 : 200

    return res.status(statusCode).json(
      isProd
        ? undefined
        : {
            success_count: validEvents.length,
            failure_count: validationErrors.length,
            details: validationErrors,
          },
    )
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
