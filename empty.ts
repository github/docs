// Empty module to satisfy Turbopack resolveAlias fallback for Node.js modules
// See turbopack config in next.config.ts

// No-op function that returns itself for chaining
export const createLogger = () => ({
  info: () => {},
  warn: () => {},
  error: () => {},
  debug: () => {},
})

export default {}
