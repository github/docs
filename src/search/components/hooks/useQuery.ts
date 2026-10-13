export function parseDebug(debug: string | Array<string> | undefined) {
  if (debug === '') {
    // Treat /search?query=secret-scanning&debug as truthy.
    return true
  }

  if (!debug) {
    return false
  }

  if (Array.isArray(debug)) {
    debug = debug[0]
  }

  try {
    debug = JSON.parse(debug)
    return Boolean(debug)
  } catch {}

  return false
}
