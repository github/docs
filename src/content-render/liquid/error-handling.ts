// THROW_ON_EMPTY is false for 0 or false and true for 1 or true.
// Without it, CI and non-production throw.
export const THROW_ON_EMPTY: boolean = Boolean(
  process.env.THROW_ON_EMPTY
    ? JSON.parse(process.env.THROW_ON_EMPTY)
    : JSON.parse(String(process.env.CI || process.env.NODE_ENV !== 'production')),
)

export class DataReferenceError extends Error {}
export class IndentedDataReferenceError extends DataReferenceError {}
