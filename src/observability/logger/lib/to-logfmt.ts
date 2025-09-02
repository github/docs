/* 
 Flattens a JSON object and converts it to a logfmt string
 Nested objects are flattened with a dot separator, e.g. requestContext.path=/en
 This is because Splunk doesn't support nested JSON objects.

 Example
 {
   "a": 1,
   "b": {
     "c": 2
    }
 }
 becomes
 a=1 b.c=2
*/

/**
 * Custom logfmt stringify implementation
 * Based on the original node-logfmt library behavior
 */
function stringify(data: Record<string, any>): string {
  let line = ''

  for (const key in data) {
    const value = data[key]
    let is_null = false
    let stringValue: string

    if (value == null) {
      is_null = true
      stringValue = ''
    } else {
      stringValue = value.toString()
    }

    const needs_quoting = stringValue.indexOf(' ') > -1 || stringValue.indexOf('=') > -1
    const needs_escaping = stringValue.indexOf('"') > -1 || stringValue.indexOf('\\') > -1

    if (needs_escaping) {
      stringValue = stringValue.replace(/["\\]/g, '\\$&')
    }
    if (needs_quoting || needs_escaping) {
      stringValue = '"' + stringValue + '"'
    }
    if (stringValue === '' && !is_null) {
      stringValue = '""'
    }

    line += key + '=' + stringValue + ' '
  }

  // trim trailing space
  return line.substring(0, line.length - 1)
}

export function toLogfmt(jsonString: Record<string, any>): string {
  // Helper function to flatten nested objects
  const flattenObject = (
    obj: any,
    parentKey: string = '',
    result: Record<string, any> = {},
    seen: WeakSet<object> = new WeakSet(),
  ): Record<string, any> => {
    Object.keys(obj).forEach((key) => {
      const newKey = parentKey ? `${parentKey}.${key}` : key
      const value = obj[key]

      if (value && typeof value === 'object') {
        // Handle circular references
        if (seen.has(value)) {
          result[newKey] = '[Circular]'
          return
        }

        // Handle Date objects specially
        if (value instanceof Date) {
          result[newKey] = value.toISOString()
          return
        }

        // Handle arrays
        if (Array.isArray(value)) {
          result[newKey] = value.join(',')
          return
        }

        // Handle other objects - only flatten if not empty
        const valueKeys = Object.keys(value)
        if (valueKeys.length > 0) {
          seen.add(value)
          flattenObject(value, newKey, result, seen)
          seen.delete(value)
        }
      } else {
        // Convert undefined values to null, as they are not supported by logfmt
        result[newKey] =
          value === undefined || (typeof value === 'string' && value === '') ? null : value
      }
    })
    return result
  }

  const flattened = flattenObject(jsonString)

  return stringify(flattened)
}
