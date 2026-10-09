import type { ErrorObject } from 'ajv'

// Format AJV errors with the path first, so data-file failures point at the bad value.
// Example: at 'sections > features > item 0': must have required property 'notes'
export const formatAjvErrors = (errors: ErrorObject[] = []): string => {
  return errors
    .map((errorObj) => {
      // instancePath points to the failing data path, such as /sections/features/0.
      const split = errorObj.instancePath.split('/')
      split.shift()

      // Call out the unexpected property name for additionalProperties errors.
      let additionalProperties = ''

      if (errorObj.keyword === 'additionalProperties') {
        additionalProperties = `: additional property is '${errorObj.params.additionalProperty}'`
      }

      // AJV omits enum values from its message, but schema-file lookups need actionable values.
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
