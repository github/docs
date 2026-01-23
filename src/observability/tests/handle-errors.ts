import { describe, expect, test } from 'vitest'

import { shouldLogException, type ErrorWithCode } from '../lib/should-log-exception'

// Helper function to create test errors with code property
function createError(message: string, name: string = 'Error', code: string = ''): ErrorWithCode {
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

  describe('TypeError: terminated filtering', () => {
    test('should not log TypeError with exact message "terminated"', () => {
      const error = createError('terminated', 'TypeError')

      expect(shouldLogException(error)).toBe(false)
    })

    test('should log TypeError with different message', () => {
      const error = createError('Cannot read property', 'TypeError')

      expect(shouldLogException(error)).toBe(true)
    })

    test('should log TypeError with partial "terminated" message', () => {
      const error = createError('connection terminated unexpectedly', 'TypeError')

      expect(shouldLogException(error)).toBe(true)
    })

    test('should log non-TypeError with "terminated" message', () => {
      const error = createError('terminated', 'Error')

      expect(shouldLogException(error)).toBe(true)
    })
  })

  describe('regular errors', () => {
    test('should log regular errors', () => {
      const error = createError('Something went wrong', 'Error')

      expect(shouldLogException(error)).toBe(true)
    })

    test('should log errors with no code', () => {
      const error = createError('Test error', 'Error')

      expect(shouldLogException(error)).toBe(true)
    })
  })
})
