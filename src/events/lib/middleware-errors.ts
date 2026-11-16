import { pick, snakeCase } from 'lodash-es'
import { randomUUID } from 'crypto'
import { ErrorObject } from 'ajv'

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

export function formatErrors(errors: ErrorObject[], body: unknown) {
  return errors.map((error) => ({
    event_id: randomUUID(),
    version: '1.0.0',
    created: new Date().toISOString(),
    raw: makeString(body),

    // snake_case avoids quoted mixed-case column names in SQL.
    ...Object.fromEntries(
      Object.entries(pick(error, errorKeys)).map(([key, value]) => [
        snakeCase(key),
        makeString(value),
      ]),
    ),
  }))
}

function makeString(value: unknown) {
  return typeof value === 'string' ? value : JSON.stringify(value)
}
