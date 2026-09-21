import type { ErrorObject } from 'ajv'

// lightly format the schema errors object returned from ajv to connect the
// error message to where the problem is -- for example, if a top level 'date'
// property isn't correctly formatted as a date we return:
//
//   at 'date': must match format "date"
//
// if sections > features has an array of objects that must have a 'notes'
// property and we misspell the property name in the first item:
//
//   at 'sections > features > item 0': must have required property 'notes'
export const formatAjvErrors = (errors: ErrorObject[] = []): string => {
  return errors
    .map((errorObj) => {
      // ajv instancePath tells us in the data we're checking where there was a
      // schema error -- for release notes looks like this for example
      // `/sections/features/0` if the error is in the first feature under sections.
      const split = errorObj.instancePath.split('/')
      split.shift()

      // handle additional properties error specifically since we can call out
      // which property shouldn't be there
      let additionalProperties = ''

      if (errorObj.keyword === 'additionalProperties') {
        additionalProperties = `: additional property is '${errorObj.params.additionalProperty}'`
      }

      // ajv's enum message is "must be equal to one of the allowed values" but
      // does not name them, which is not actionable when the schema lives in a
      // different file than the data being validated
      let allowedValues = ''

      if (errorObj.keyword === 'enum' && Array.isArray(errorObj.params.allowedValues)) {
        const values = errorObj.params.allowedValues.map((value) => `'${value}'`).join(', ')
        allowedValues = `: allowed values are ${values}`
      }

      if (split.length === 0) {
        return `at '/' (top-level): ${errorObj.message}${additionalProperties}${allowedValues}`
      }

      const schemaErrorPath = split
        .map((item) => {
          if (!isNaN(Number(item))) {
            return `item ${item}`
          } else {
            return item
          }
        })
        .join(' > ')

      return `at '${schemaErrorPath}': ${errorObj.message}${additionalProperties}${allowedValues}`
    })
    .join('\n  ')
}
