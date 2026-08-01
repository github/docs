export function parseDebug(debug: string | Array<string> | undefined) {
  if (debug === '') {
    // E.g. `?query=foo&debug` should be treated as truthy
    return true
  }

  if (!debug) {
    return false
  }

  // Now `router.query.debug` is either string or any array of strings
  if (Array.isArray(debug)) {
    debug = debug[0]
  }

  try {
    debug = JSON.parse(debug)
    return Boolean(debug)
  } catch {}

  return false
}
