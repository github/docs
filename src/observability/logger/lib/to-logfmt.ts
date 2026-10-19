// Flattens nested context for Splunk, which cannot query nested JSON objects.
// Example: { requestContext: { path: "/en" } } becomes requestContext.path=/en.

const CONTROL_ESCAPES: Record<string, string> = { '\n': '\\n', '\r': '\\r', '\t': '\\t' }

// Matches the original node-logfmt library's quoting and escaping behavior, except that it
// also escapes line breaks and tabs in values and replaces separator characters in keys.
// Log shippers split records on newlines, so raw line breaks from request data or error
// stacks would split one record into several or let a value forge a new record.
function stringify(data: Record<string, unknown>): string {
  let line = ''

  for (const key in data) {
    const value = data[key]
    let is_null = false
    let stringValue: string

    if (value == null) {
      is_null = true
      stringValue = ''
    } else {
      stringValue = String(value)
    }

    const needs_quoting = stringValue.indexOf(' ') > -1 || stringValue.indexOf('=') > -1
    const needs_escaping = /["\\\n\r\t]/.test(stringValue)

    if (needs_escaping) {
      stringValue = stringValue
        .replace(/["\\]/g, '\\$&')
        .replace(/[\n\r\t]/g, (char) => CONTROL_ESCAPES[char])
    }
    if (needs_quoting || needs_escaping) {
      stringValue = `"${stringValue}"`
    }
    if (stringValue === '' && !is_null) {
      stringValue = '""'
    }

    line += `${key.replace(/[\s\p{Cc}="]/gu, '_')}=${stringValue} `
  }

  return line.substring(0, line.length - 1)
}

export function toLogfmt(jsonString: Record<string, unknown>): string {
  const flattenObject = (
    obj: Record<string, unknown>,
    parentKey: string = '',
    result: Record<string, unknown> = {},
    seen: WeakSet<object> = new WeakSet(),
  ): Record<string, unknown> => {
    for (const key of Object.keys(obj)) {
      const newKey = parentKey ? `${parentKey}.${key}` : key
      const value = obj[key]

      if (value && typeof value === 'object') {
        if (seen.has(value)) {
          result[newKey] = '[Circular]'
          continue
        }

        if (value instanceof Date) {
          result[newKey] = value.toISOString()
          continue
        }

        if (Array.isArray(value)) {
          result[newKey] = value.join(',')
          continue
        }

        const valueKeys = Object.keys(value as Record<string, unknown>)
        if (valueKeys.length > 0) {
          seen.add(value)
          flattenObject(value as Record<string, unknown>, newKey, result, seen)
          seen.delete(value)
        }
      } else {
        // undefined and empty strings become null, which logfmt can represent.
        result[newKey] =
          value === undefined || (typeof value === 'string' && value === '') ? null : value
      }
    }
    return result
  }

  const flattened = flattenObject(jsonString)

  return stringify(flattened)
}
