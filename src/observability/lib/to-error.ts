// JSON.stringify can throw on circular references, so fall back to String().
export function toError(value: Error | unknown): Error {
  if (value instanceof Error) return value
  try {
    return new Error(JSON.stringify(value))
  } catch {
    return new Error(String(value))
  }
}
