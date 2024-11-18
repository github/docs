import { pick, snakeCase } from 'lodash-es'
import { randomUUID } from 'crypto'

// https://ajv.js.org/api.html#error-objects
const errorKeys = [
  'keyword',
  'instancePath',
  'schemaPath',
  'params',
  'propertyName',
  'message',
  'schema',
  'parentSchema',
  'data',
]

export function formatErrors(errors, body) {
  return errors.map((error) => ({
    event_id: randomUUID(),
    version: '1.0.0',
    created: new Date().toISOString(),
    raw: makeString(body),

    // We convert to snake_case because dealing with case in SQL is unfortunate.
    // Ensure the result is a string or undefined
    ...Object.fromEntries(
      Object.entries(pick(error, errorKeys)).map(([key, value]) => [
        snakeCase(key),
        makeString(value),
      ]),
    ),
  }))
}

// Leave strings alone, otherwise convert to either string or undefined
function makeString(value) {
  return typeof value === 'string' ? value : JSON.stringify(value)
}
