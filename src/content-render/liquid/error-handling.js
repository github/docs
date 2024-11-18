// If 'THROW_ON_EMPTY' is set and it's value is '0' or 'false' it becomes
// false. Or true if it's 'true' or '1'.
export const THROW_ON_EMPTY = Boolean(
  process.env.THROW_ON_EMPTY
    ? JSON.parse(process.env.THROW_ON_EMPTY)
    : JSON.parse(process.env.CI || process.env.NODE_ENV !== 'production'),
)

export class DataReferenceError extends Error {}
export class IndentedDataReferenceError extends DataReferenceError {}
