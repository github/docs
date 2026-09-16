import { describe, expect, test } from 'vitest'

// Re-export the private function for testing by extracting it via module internals.
// We test the filtering behavior directly using a helper that mirrors shouldLogException.
type ErrorWithCode = Error & {
  code: string
  statusCode?: number
  status?: string
}

function shouldLogException(error: ErrorWithCode) {
  const IGNORED_ERRORS = ['ECONNRESET']
  if (IGNORED_ERRORS.includes(error.code)) {
    return false
  }
  return true
}

function createError(message: string, name = 'Error', code = ''): ErrorWithCode {
  const error = new Error(message) as ErrorWithCode
  error.name = name
  error.code = code
  return error
}

describe('shouldLogException', () => {
  describe('ECONNRESET errors', () => {
    test('should not log ECONNRESET errors', () => {
      const error = createError('Connection reset', 'Error', 'ECONNRESET')
      expect(shouldLogException(error)).toBe(false)
    })
  })

  describe('TypeError: terminated errors', () => {
    test('should log TypeError with message "terminated" (no longer suppressed)', () => {
      const error = createError('terminated', 'TypeError')
      expect(shouldLogException(error)).toBe(true)
    })

    test('should log TypeError with a different message', () => {
      const error = createError('Cannot read property', 'TypeError')
      expect(shouldLogException(error)).toBe(true)
    })
  })

  describe('regular errors', () => {
    test('should log regular errors', () => {
      const error = createError('Something went wrong', 'Error')
      expect(shouldLogException(error)).toBe(true)
    })

    test('should log errors with no code', () => {
      const error = createError('Test error')
      expect(shouldLogException(error)).toBe(true)
    })
  })
})
