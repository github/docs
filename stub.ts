// Stub module to satisfy Turbopack resolveAlias fallback for Node.js modules
// See turbopack config in next.config.ts

// No-op function that returns itself for chaining
export const createLogger = () => ({
  info: () => {},
  warn: () => {},
  error: () => {},
  debug: () => {},
})

// Stub for fs.promises (used by server-only code that Turbopack traces into client bundles)
export const promises = {}

export default {}
