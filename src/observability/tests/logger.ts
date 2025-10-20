import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { createLogger } from '@/observability/logger'

// Mock only the logger-context for most tests, but we'll test integration without mocks
vi.mock('@/observability/logger/lib/logger-context')

describe('createLogger', () => {
  let originalEnv: typeof process.env
  let originalConsoleLog: typeof console.log
  let originalConsoleError: typeof console.error
  const consoleLogs: string[] = []
  const consoleErrors: any[] = []

  beforeEach(() => {
    // Store original environment and console methods
    originalEnv = { ...process.env }
    originalConsoleLog = console.log
    originalConsoleError = console.error

    // Mock console methods to capture output
    console.log = vi.fn((message: string) => {
      consoleLogs.push(message)
    })
    console.error = vi.fn((error: any) => {
      consoleErrors.push(error)
    })

    // Clear captured output
    consoleLogs.length = 0
    consoleErrors.length = 0

    // Set default environment
    vi.stubEnv('NODE_ENV', 'development')
    vi.stubEnv('LOG_LEVEL', 'debug')
  })

  afterEach(() => {
    // Restore original environment and console methods
    process.env = originalEnv
    console.log = originalConsoleLog
    console.error = originalConsoleError
    vi.clearAllMocks()
  })

  describe('constructor validation', () => {
    it('should throw error when filePath is not provided', () => {
      expect(() => createLogger('')).toThrow(
        'createLogger must be called with the import.meta.url argument',
      )
    })

    it('should throw error when filePath is null or undefined', () => {
      expect(() => createLogger(null as any)).toThrow(
        'createLogger must be called with the import.meta.url argument',
      )
      expect(() => createLogger(undefined as any)).toThrow(
        'createLogger must be called with the import.meta.url argument',
      )
    })

    it('should create logger successfully with valid filePath', () => {
      const logger = createLogger('file:///path/to/test.js')
      expect(logger).toHaveProperty('error')
      expect(logger).toHaveProperty('warn')
      expect(logger).toHaveProperty('info')
      expect(logger).toHaveProperty('debug')
    })
  })

  describe('logging patterns in development mode', () => {
    let logger: ReturnType<typeof createLogger>

    beforeEach(() => {
      vi.stubEnv('NODE_ENV', 'development')
      logger = createLogger('file:///path/to/test.js')
    })

    it('should log simple messages (Pattern 1)', () => {
      logger.info('Hello world')
      expect(consoleLogs).toContain('[INFO] Hello world')
    })

    it('should log messages with extra data (Pattern 2)', () => {
      logger.info('User logged in', { userId: 123, email: 'test@example.com' })
      expect(consoleLogs).toContain('[INFO] User logged in')
    })

    it('should log multiple message parts (Pattern 3)', () => {
      logger.info('User', 'action', 123, true)
      expect(consoleLogs).toContain('[INFO] User action 123 true')
    })

    it('should log multiple message parts with extra data (Pattern 4)', () => {
      logger.info('User', 'login', 'success', { userId: 123 })
      expect(consoleLogs).toContain('[INFO] User login success')
    })

    it('should log messages with Error objects (Pattern 5)', () => {
      const error = new Error('Database connection failed')
      logger.error('Database error', error)
      expect(consoleLogs).toContain('[ERROR] Database error: Database connection failed')
      expect(consoleErrors).toContain(error)
    })

    it('should log messages with multiple errors and parts (Pattern 6)', () => {
      const error1 = new Error('First error')
      const error2 = new Error('Second error')
      logger.error('Multiple failures', error1, error2)
      expect(consoleLogs).toContain('[ERROR] Multiple failures: First error, Second error')
      expect(consoleErrors).toContain(error1)
      expect(consoleErrors).toContain(error2)
    })

    it('should handle mixed arguments with errors and extra data', () => {
      const error = new Error('Test error')
      logger.error('Operation failed', 'with code', 500, error, { operation: 'delete' })
      expect(consoleLogs).toContain('[ERROR] Operation failed with code 500: Test error')
      expect(consoleErrors).toContain(error)
    })

    it('should log all levels in development', () => {
      logger.debug('Debug message')
      logger.info('Info message')
      logger.warn('Warning message')
      logger.error('Error message')

      expect(consoleLogs).toContain('[DEBUG] Debug message')
      expect(consoleLogs).toContain('[INFO] Info message')
      expect(consoleLogs).toContain('[WARN] Warning message')
      expect(consoleLogs).toContain('[ERROR] Error message')
    })
  })

  describe('logging with mocked context', () => {
    let logger: ReturnType<typeof createLogger>

    beforeEach(() => {
      logger = createLogger('file:///path/to/test.js')
    })

    it('should use development format when context is mocked', () => {
      logger.info('Test message')

      // Check that a log was output in development format
      expect(consoleLogs).toHaveLength(1)
      const logOutput = consoleLogs[0]
      expect(logOutput).toBe('[INFO] Test message')
    })

    it('should include extra data in development logs', () => {
      logger.info('User action', { userId: 123, action: 'login' })

      expect(consoleLogs).toHaveLength(1)
      const logOutput = consoleLogs[0]
      expect(logOutput).toBe('[INFO] User action')
    })

    it('should format errors properly in development logs', () => {
      const error = new Error('Test error')
      error.stack = 'Error: Test error\n    at test.js:1:1'
      logger.error('Something failed', error)

      expect(consoleLogs).toHaveLength(1)
      expect(consoleErrors).toHaveLength(1)
      const logOutput = consoleLogs[0]
      expect(logOutput).toBe('[ERROR] Something failed: Test error')
      expect(consoleErrors[0]).toBe(error)
    })

    it('should handle multiple errors in development logs', () => {
      const error1 = new Error('First error')
      const error2 = new Error('Second error')
      error1.stack = 'Error: First error\n    at test.js:1:1'
      error2.stack = 'Error: Second error\n    at test.js:2:1'

      logger.error('Multiple errors', error1, error2)

      // In development mode, each error triggers a separate console.log + console.error
      expect(consoleLogs).toHaveLength(2)
      expect(consoleErrors).toHaveLength(2)

      // Both log entries should have the same message
      expect(consoleLogs[0]).toBe('[ERROR] Multiple errors: First error, Second error')
      expect(consoleLogs[1]).toBe('[ERROR] Multiple errors: First error, Second error')
      expect(consoleErrors[0]).toBe(error1)
      expect(consoleErrors[1]).toBe(error2)
    })
  })

  describe('log level filtering', () => {
    let logger: ReturnType<typeof createLogger>

    beforeEach(() => {
      // Clear console logs before each test
      consoleLogs.length = 0
      consoleErrors.length = 0
    })

    it('should respect LOG_LEVEL=error setting', () => {
      // Mock the function to return error level (0) and dynamically import logger
      vi.stubEnv('LOG_LEVEL', 'error')

      logger = createLogger('file:///path/to/test.js')
      logger.debug('Debug message')
      logger.info('Info message')
      logger.warn('Warn message')
      logger.error('Error message')

      expect(consoleLogs).not.toContain('[DEBUG] Debug message')
      expect(consoleLogs).not.toContain('[INFO] Info message')
      expect(consoleLogs).not.toContain('[WARN] Warn message')
      expect(consoleLogs).toContain('[ERROR] Error message')
    })

    it('should respect LOG_LEVEL=warn setting', () => {
      vi.stubEnv('LOG_LEVEL', 'warn')
      logger = createLogger('file:///path/to/test.js')

      logger.debug('Debug message')
      logger.info('Info message')
      logger.warn('Warn message')
      logger.error('Error message')

      expect(consoleLogs).not.toContain('[DEBUG] Debug message')
      expect(consoleLogs).not.toContain('[INFO] Info message')
      expect(consoleLogs).toContain('[WARN] Warn message')
      expect(consoleLogs).toContain('[ERROR] Error message')
    })

    it('should respect LOG_LEVEL=info setting', () => {
      vi.stubEnv('LOG_LEVEL', 'info')
      logger = createLogger('file:///path/to/test.js')

      logger.debug('Debug message')
      logger.info('Info message')
      logger.warn('Warn message')
      logger.error('Error message')

      expect(consoleLogs).not.toContain('[DEBUG] Debug message')
      expect(consoleLogs).toContain('[INFO] Info message')
      expect(consoleLogs).toContain('[WARN] Warn message')
      expect(consoleLogs).toContain('[ERROR] Error message')
    })
  })

  describe('edge cases and error handling', () => {
    let logger: ReturnType<typeof createLogger>

    beforeEach(() => {
      // Clear console logs before each test
      consoleLogs.length = 0
      consoleErrors.length = 0
      logger = createLogger('file:///path/to/test.js')
    })

    it('should handle null and undefined values in extra data', () => {
      logger.info('Test message', { nullValue: null, undefinedValue: undefined })
      expect(consoleLogs).toContain('[INFO] Test message')
    })

    it('should handle arrays in extra data', () => {
      logger.info('Test message', { items: [1, 2, 3] })
      expect(consoleLogs).toContain('[INFO] Test message')
    })

    it('should handle Date objects in extra data', () => {
      const date = new Date('2023-01-01T00:00:00.000Z')
      logger.info('Test message', { timestamp: date })
      expect(consoleLogs).toContain('[INFO] Test message')
    })

    it('should handle nested objects properly', () => {
      logger.info('Test message', {
        user: {
          id: 123,
          profile: { name: 'John', age: 30 },
        },
      })
      expect(consoleLogs).toContain('[INFO] Test message')
    })

    it('should distinguish between plain objects and class instances', () => {
      class CustomClass {
        constructor(public value: string) {}
      }
      const instance = new CustomClass('test')

      logger.info('Custom object', instance)
      expect(consoleLogs).toContain('[INFO] Custom object [object Object]')
    })

    it('should handle empty arguments gracefully', () => {
      logger.info('Just a message')
      expect(consoleLogs).toContain('[INFO] Just a message')
    })

    it('should handle boolean and number arguments', () => {
      logger.info('Values:', true, false, 42, 0, -1)
      expect(consoleLogs).toContain('[INFO] Values: true false 42 0 -1')
    })
  })

  describe('file path handling in development', () => {
    it('should log file paths in development format', () => {
      const logger = createLogger('file:///Users/test/project/src/test.js')
      logger.info('Test message')

      expect(consoleLogs).toHaveLength(1)
      const logOutput = consoleLogs[0]
      expect(logOutput).toBe('[INFO] Test message')
    })

    it('should handle relative paths in development logs', () => {
      const logger = createLogger('file:///absolute/path/to/src/component/test.ts')
      logger.info('Test message')

      expect(consoleLogs).toHaveLength(1)
      const logOutput = consoleLogs[0]
      expect(logOutput).toBe('[INFO] Test message')
    })
  })

  describe('logger context integration with mocks', () => {
    let logger: ReturnType<typeof createLogger>

    beforeEach(() => {
      logger = createLogger('file:///path/to/test.js')
    })

    it('should include logger context in production logs', () => {
      // TODO
    })

    it('should handle missing logger context gracefully in development', () => {
      logger.info('No context test')

      expect(consoleLogs).toHaveLength(1)
      const logOutput = consoleLogs[0]
      expect(logOutput).toBe('[INFO] No context test')
    })
  })

  describe('complex argument combinations', () => {
    let logger: ReturnType<typeof createLogger>

    beforeEach(() => {
      // Clear console logs before each test
      consoleLogs.length = 0
      consoleErrors.length = 0
      logger = createLogger('file:///path/to/test.js')
    })

    it('should handle error at the beginning of arguments', () => {
      const error = new Error('First error')
      logger.error('Error occurred', error, 'additional', 'info', { extra: 'data' })

      expect(consoleLogs).toContain('[ERROR] Error occurred additional info: First error')
      expect(consoleErrors).toContain(error)
    })

    it('should handle error in the middle of arguments', () => {
      const error = new Error('Middle error')
      logger.error('Error', 'in', error, 'middle', { context: 'test' })

      expect(consoleLogs).toContain('[ERROR] Error in middle: Middle error')
      expect(consoleErrors).toContain(error)
    })

    it('should handle multiple data types in arguments', () => {
      logger.info('Mixed', 123, true, 'string', { data: 'object' })
      expect(consoleLogs).toContain('[INFO] Mixed 123 true string')
    })

    it('should prioritize plain objects as extra data over other objects', () => {
      vi.stubEnv('LOG_LIKE_PRODUCTION', 'true')

      // Create new logger instance
      logger = createLogger('file:///path/to/test.js')

      const date = new Date()
      const plainObject = { key: 'value' }

      logger.info('Test', date, 'string', plainObject)

      expect(consoleLogs).toHaveLength(1)
      const logOutput = consoleLogs[0]

      // The message should contain the full string with date converted to string
      expect(logOutput).toContain('message="Test')
      expect(logOutput).toContain('string"')

      // The plain object should be in the included context
      expect(logOutput).toContain('included.key=value')
    })
  })
})
