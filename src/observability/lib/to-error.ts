// Safely convert an unknown thrown value to an Error, avoiding JSON.stringify
// which can throw on circular references.
export function toError(value: Error | unknown): Error {
  if (value instanceof Error) return value
  try {
    return new Error(JSON.stringify(value))
  } catch {
    return new Error(String(value))
  }
}
