import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { createLogger } from '@/observability/logger'

// Mock only the logger-context for most tests, but we'll test integration without mocks
vi.mock('@/observability/logger/lib/logger-context')

// Strip ANSI escape codes for easier assertion matching
function stripAnsi(s: string): string {
  // eslint-disable-next-line no-control-regex
  return s.replace(/\u001B\[\d+m/g, '')
}

// Check that a dev-mode log line contains the expected level and message
function expectDevLog(logs: string[], level: string, message: string): void {
  const match = logs.find((log) => {
    const clean = stripAnsi(log)
    return clean.includes(level) && clean.includes(message)
  })
  expect(match, `Expected a log containing "${level}" and "${message}"`).toBeDefined()
}

describe('createLogger', () => {
  let originalEnv: typeof process.env
  let originalConsoleLog: typeof console.log
  let originalConsoleError: typeof console.error
  const consoleLogs: string[] = []
  const consoleErrors: unknown[] = []

  beforeEach(() => {
    // Store original environment and console methods
    originalEnv = { ...process.env }
    originalConsoleLog = console.log
    originalConsoleError = console.error

    // Mock console methods to capture output
    console.log = vi.fn((message: string) => {
      consoleLogs.push(message)
    })
    console.error = vi.fn((error: unknown) => {
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
      expect(() => createLogger(null as unknown as string)).toThrow(
        'createLogger must be called with the import.meta.url argument',
      )
      expect(() => createLogger(undefined as unknown as string)).toThrow(
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
      expectDevLog(consoleLogs, 'INFO', 'Hello world')
    })

    it('should log messages with extra data (Pattern 2)', () => {
      logger.info('User logged in', { userId: 123, email: 'test@example.com' })
      expectDevLog(consoleLogs, 'INFO', 'User logged in')
      // Extra data should also be present in the log line
      const clean = stripAnsi(consoleLogs[0])
      expect(clean).toContain('userId=')
      expect(clean).toContain('email=')
    })

    it('should log multiple message parts (Pattern 3)', () => {
      logger.info('User', 'action', 123, true)
      expectDevLog(consoleLogs, 'INFO', 'User action 123 true')
    })

    it('should log multiple message parts with extra data (Pattern 4)', () => {
      logger.info('User', 'login', 'success', { userId: 123 })
      expectDevLog(consoleLogs, 'INFO', 'User login success')
    })

    it('should log messages with Error objects (Pattern 5)', () => {
      const error = new Error('Database connection failed')
      logger.error('Database error', error)
      expectDevLog(consoleLogs, 'ERROR', 'Database error: Database connection failed')
      expect(consoleErrors).toContain(error)
    })

    it('should log messages with multiple errors and parts (Pattern 6)', () => {
      const error1 = new Error('First error')
      const error2 = new Error('Second error')
      logger.error('Multiple failures', error1, error2)
      expectDevLog(consoleLogs, 'ERROR', 'Multiple failures: First error, Second error')
      expect(consoleErrors).toContain(error1)
      expect(consoleErrors).toContain(error2)
    })

    it('should handle mixed arguments with errors and extra data', () => {
      const error = new Error('Test error')
      logger.error('Operation failed', 'with code', 500, error, { operation: 'delete' })
      expectDevLog(consoleLogs, 'ERROR', 'Operation failed with code 500: Test error')
      expect(consoleErrors).toContain(error)
    })

    it('should log all levels in development', () => {
      logger.debug('Debug message')
      logger.info('Info message')
      logger.warn('Warning message')
      logger.error('Error message')

      expectDevLog(consoleLogs, 'DEBUG', 'Debug message')
      expectDevLog(consoleLogs, 'INFO', 'Info message')
      expectDevLog(consoleLogs, 'WARN', 'Warning message')
      expectDevLog(consoleLogs, 'ERROR', 'Error message')
    })
  })

  describe('dev-mode format includes timestamp, file, and context', () => {
    let logger: ReturnType<typeof createLogger>

    beforeEach(() => {
      vi.stubEnv('NODE_ENV', 'development')
      logger = createLogger('file:///path/to/test.js')
    })

    it('should include a timestamp in HH:MM:SS.mmm format', () => {
      logger.info('Timestamp test')
      const clean = stripAnsi(consoleLogs[0])
      expect(clean).toMatch(/^\d{2}:\d{2}:\d{2}\.\d{3}/)
    })

    it('should include the file path', () => {
      logger.info('File test')
      const clean = stripAnsi(consoleLogs[0])
      expect(clean).toContain('test.js')
    })

    it('should include structured context data inline', () => {
      logger.info('Structured', { count: 42, name: 'widget' })
      const clean = stripAnsi(consoleLogs[0])
      expect(clean).toContain('count=42')
      expect(clean).toContain('name=widget')
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
      expectDevLog(consoleLogs, 'INFO', 'Test message')
    })

    it('should include extra data in development logs', () => {
      logger.info('User action', { userId: 123, action: 'login' })

      expect(consoleLogs).toHaveLength(1)
      const clean = stripAnsi(consoleLogs[0])
      expect(clean).toContain('userId=123')
      expect(clean).toContain('action=login')
    })

    it('should format errors properly in development logs', () => {
      const error = new Error('Test error')
      error.stack = 'Error: Test error\n    at test.js:1:1'
      logger.error('Something failed', error)

      expect(consoleLogs).toHaveLength(1)
      expect(consoleErrors).toHaveLength(1)
      expectDevLog(consoleLogs, 'ERROR', 'Something failed: Test error')
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
      expectDevLog(consoleLogs, 'ERROR', 'Multiple errors: First error, Second error')
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

      const allClean = consoleLogs.map(stripAnsi).join('\n')
      expect(allClean).not.toContain('Debug message')
      expect(allClean).not.toContain('Info message')
      expect(allClean).not.toContain('Warn message')
      expectDevLog(consoleLogs, 'ERROR', 'Error message')
    })

    it('should respect LOG_LEVEL=warn setting', () => {
      vi.stubEnv('LOG_LEVEL', 'warn')
      logger = createLogger('file:///path/to/test.js')

      logger.debug('Debug message')
      logger.info('Info message')
      logger.warn('Warn message')
      logger.error('Error message')

      const allClean = consoleLogs.map(stripAnsi).join('\n')
      expect(allClean).not.toContain('Debug message')
      expect(allClean).not.toContain('Info message')
      expectDevLog(consoleLogs, 'WARN', 'Warn message')
      expectDevLog(consoleLogs, 'ERROR', 'Error message')
    })

    it('should respect LOG_LEVEL=info setting', () => {
      vi.stubEnv('LOG_LEVEL', 'info')
      logger = createLogger('file:///path/to/test.js')

      logger.debug('Debug message')
      logger.info('Info message')
      logger.warn('Warn message')
      logger.error('Error message')

      const allClean = consoleLogs.map(stripAnsi).join('\n')
      expect(allClean).not.toContain('Debug message')
      expectDevLog(consoleLogs, 'INFO', 'Info message')
      expectDevLog(consoleLogs, 'WARN', 'Warn message')
      expectDevLog(consoleLogs, 'ERROR', 'Error message')
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
      expectDevLog(consoleLogs, 'INFO', 'Test message')
    })

    it('should handle arrays in extra data', () => {
      logger.info('Test message', { items: [1, 2, 3] })
      expectDevLog(consoleLogs, 'INFO', 'Test message')
    })

    it('should handle Date objects in extra data', () => {
      const date = new Date('2023-01-01T00:00:00.000Z')
      logger.info('Test message', { timestamp: date })
      expectDevLog(consoleLogs, 'INFO', 'Test message')
    })

    it('should handle nested objects properly', () => {
      logger.info('Test message', {
        user: {
          id: 123,
          profile: { name: 'John', age: 30 },
        },
      })
      expectDevLog(consoleLogs, 'INFO', 'Test message')
    })

    it('should distinguish between plain objects and class instances', () => {
      class CustomClass {
        constructor(public value: string) {}
      }
      const instance = new CustomClass('test')

      logger.info('Custom object', instance)
      expectDevLog(consoleLogs, 'INFO', 'Custom object [object Object]')
    })

    it('should handle empty arguments gracefully', () => {
      logger.info('Just a message')
      expectDevLog(consoleLogs, 'INFO', 'Just a message')
    })

    it('should handle boolean and number arguments', () => {
      logger.info('Values:', true, false, 42, 0, -1)
      expectDevLog(consoleLogs, 'INFO', 'Values: true false 42 0 -1')
    })
  })

  describe('file path handling in development', () => {
    it('should include file path in development format', () => {
      const logger = createLogger('file:///Users/test/project/src/test.js')
      logger.info('Test message')

      expect(consoleLogs).toHaveLength(1)
      const clean = stripAnsi(consoleLogs[0])
      expect(clean).toContain('test.js')
      expect(clean).toContain('Test message')
    })

    it('should include relative path in development logs', () => {
      const logger = createLogger('file:///absolute/path/to/src/component/test.ts')
      logger.info('Test message')

      expect(consoleLogs).toHaveLength(1)
      const clean = stripAnsi(consoleLogs[0])
      expect(clean).toContain('test.ts')
      expect(clean).toContain('Test message')
    })
  })

  describe('logger context integration with mocks', () => {
    let logger: ReturnType<typeof createLogger>

    beforeEach(() => {
      logger = createLogger('file:///path/to/test.js')
    })

    it('should handle missing logger context gracefully in development', () => {
      logger.info('No context test')

      expect(consoleLogs).toHaveLength(1)
      expectDevLog(consoleLogs, 'INFO', 'No context test')
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

      expectDevLog(consoleLogs, 'ERROR', 'Error occurred additional info: First error')
      expect(consoleErrors).toContain(error)
    })

    it('should handle error in the middle of arguments', () => {
      const error = new Error('Middle error')
      logger.error('Error', 'in', error, 'middle', { context: 'test' })

      expectDevLog(consoleLogs, 'ERROR', 'Error in middle: Middle error')
      expect(consoleErrors).toContain(error)
    })

    it('should handle multiple data types in arguments', () => {
      logger.info('Mixed', 123, true, 'string', { data: 'object' })
      expectDevLog(consoleLogs, 'INFO', 'Mixed 123 true string')
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

  describe('pod identity fields in production logs', () => {
    it('should include podName, podNamespace, nodeHostname in logfmt output when env vars are set', async () => {
      vi.stubEnv('POD_NAME', 'webapp-abc123')
      vi.stubEnv('POD_NAMESPACE', 'docs-internal-staging-cedar')
      vi.stubEnv('KUBE_NODE_HOSTNAME', 'ghe-k8s-node-42')
      vi.stubEnv('LOG_LIKE_PRODUCTION', 'true')

      // Reset modules so pod-identity is re-evaluated with the new env vars
      vi.resetModules()
      const { createLogger: freshCreateLogger } = await import('@/observability/logger')

      const logger = freshCreateLogger('file:///path/to/test.js')
      logger.info('Pod identity test')

      expect(consoleLogs).toHaveLength(1)
      const logOutput = consoleLogs[0]
      expect(logOutput).toContain('podName=webapp-abc123')
      expect(logOutput).toContain('podNamespace=docs-internal-staging-cedar')
      expect(logOutput).toContain('nodeHostname=ghe-k8s-node-42')
    })

    it('should not include pod identity fields in logfmt output when env vars are absent', async () => {
      vi.stubEnv('LOG_LIKE_PRODUCTION', 'true')
      // Ensure pod env vars are absent
      delete process.env.POD_NAME
      delete process.env.POD_NAMESPACE
      delete process.env.KUBE_NODE_HOSTNAME

      vi.resetModules()
      const { createLogger: freshCreateLogger } = await import('@/observability/logger')

      const logger = freshCreateLogger('file:///path/to/test.js')
      logger.info('No pod identity test')

      expect(consoleLogs).toHaveLength(1)
      const logOutput = consoleLogs[0]
      expect(logOutput).not.toContain('podName=')
      expect(logOutput).not.toContain('podNamespace=')
      expect(logOutput).not.toContain('nodeHostname=')
    })
  })

  describe('BUILD_SHA in production logs', () => {
    it('should include build_sha in logfmt output when BUILD_SHA env var is set', async () => {
      vi.stubEnv('BUILD_SHA', 'abc123def456')
      vi.stubEnv('LOG_LIKE_PRODUCTION', 'true')

      vi.resetModules()
      const { createLogger: freshCreateLogger } = await import('@/observability/logger')

      const logger = freshCreateLogger('file:///path/to/test.js')
      logger.info('Build SHA test')

      expect(consoleLogs).toHaveLength(1)
      const logOutput = consoleLogs[0]
      expect(logOutput).toContain('build_sha=abc123def456')
    })

    it('should not include build_sha in logfmt output when BUILD_SHA env var is absent', async () => {
      vi.stubEnv('LOG_LIKE_PRODUCTION', 'true')
      delete process.env.BUILD_SHA

      vi.resetModules()
      const { createLogger: freshCreateLogger } = await import('@/observability/logger')

      const logger = freshCreateLogger('file:///path/to/test.js')
      logger.info('No build SHA test')

      expect(consoleLogs).toHaveLength(1)
      const logOutput = consoleLogs[0]
      expect(logOutput).not.toContain('build_sha=')
    })
  })

  describe('error serialization in production logs', () => {
    it('should include error_code and error_name when Error has a .code property', async () => {
      vi.stubEnv('LOG_LIKE_PRODUCTION', 'true')

      vi.resetModules()
      const { createLogger: freshCreateLogger } = await import('@/observability/logger')

      const logger = freshCreateLogger('file:///path/to/test.js')
      const error = new Error('Connection reset') as NodeJS.ErrnoException
      error.code = 'ECONNRESET'
      logger.error('Network failure', error)

      expect(consoleLogs).toHaveLength(1)
      const logOutput = consoleLogs[0]
      expect(logOutput).toContain('included.error="Connection reset"')
      expect(logOutput).toContain('included.error_code=ECONNRESET')
      expect(logOutput).toContain('included.error_name=Error')
      expect(logOutput).toContain('included.error_stack=')
    })

    it('should include error_name even when .code is undefined', async () => {
      vi.stubEnv('LOG_LIKE_PRODUCTION', 'true')

      vi.resetModules()
      const { createLogger: freshCreateLogger } = await import('@/observability/logger')

      const logger = freshCreateLogger('file:///path/to/test.js')
      const error = new TypeError('Cannot read property')
      logger.error('Type error occurred', error)

      expect(consoleLogs).toHaveLength(1)
      const logOutput = consoleLogs[0]
      expect(logOutput).toContain('included.error="Cannot read property"')
      expect(logOutput).toContain('included.error_name=TypeError')
      // When .code is undefined, error_code is present but empty
      expect(logOutput).toMatch(/included\.error_code= /)
      expect(logOutput).toContain('included.error_stack=')
    })

    it('should serialize multiple errors with indexed keys', async () => {
      vi.stubEnv('LOG_LIKE_PRODUCTION', 'true')

      vi.resetModules()
      const { createLogger: freshCreateLogger } = await import('@/observability/logger')

      const logger = freshCreateLogger('file:///path/to/test.js')
      const error1 = new Error('First') as NodeJS.ErrnoException
      error1.code = 'ERR_FIRST'
      const error2 = new Error('Second')
      logger.error('Multiple errors', error1, error2)

      expect(consoleLogs).toHaveLength(1)
      const logOutput = consoleLogs[0]
      expect(logOutput).toContain('included.error_1=First')
      expect(logOutput).toContain('included.error_1_code=ERR_FIRST')
      expect(logOutput).toContain('included.error_1_name=Error')
      expect(logOutput).toContain('included.error_2=Second')
      expect(logOutput).toContain('included.error_2_name=Error')
    })
  })
})
