import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { createLogger } from '@/observability/logger'
import { initLoggerContext, updateLoggerContext } from '@/observability/logger/lib/logger-context'

// Integration tests that use real dependencies without mocks
describe('logger integration tests', () => {
  let originalConsoleLog: typeof console.log
  let originalConsoleError: typeof console.error
  let originalEnv: typeof process.env
  const consoleLogs: string[] = []
  const consoleErrors: any[] = []

  beforeEach(() => {
    // Store original console methods and environment
    originalConsoleLog = console.log
    originalConsoleError = console.error
    originalEnv = { ...process.env }

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
  })

  afterEach(() => {
    // Restore original console methods and environment
    console.log = originalConsoleLog
    console.error = originalConsoleError
    process.env = originalEnv

    // Clear all mocks
    vi.clearAllMocks()
  })

  describe('logger context integration', () => {
    it('should use empty context when no async local storage is set', () => {
      // Set production mode to see the context in the output
      vi.stubEnv('LOG_LIKE_PRODUCTION', 'true')
      vi.stubEnv('NODE_ENV', 'development')

      const logger = createLogger('file:///path/to/test.js')
      logger.info('Test without context')

      expect(consoleLogs).toHaveLength(1)
      const logOutput = consoleLogs[0]

      // Real getLoggerContext returns empty strings for fields when no context is set
      // The logfmt output should include the basic fields
      expect(logOutput).toContain('level=info')
      expect(logOutput).toContain('message="Test without context"')
      expect(logOutput).toContain('timestamp=')
      expect(logOutput).toContain('file=')
    })

    it('should use context from async local storage when available', async () => {
      // Set production mode to see the context in the output
      vi.stubEnv('LOG_LIKE_PRODUCTION', 'true')
      vi.stubEnv('NODE_ENV', 'development')

      // Clear console logs before running the async context
      consoleLogs.length = 0

      // Create mock request and response objects that match what Express would provide
      const mockReq = {
        path: '/real/path',
        method: 'POST',
        body: { key: 'value' },
        headers: {
          'user-agent': 'real-agent',
          host: 'example.com',
          'accept-language': 'en-US,en;q=0.9',
        },
        query: { filter: 'active' },
      } as any

      const mockRes = {} as any

      // Use a Promise to handle the async local storage execution
      const result = await new Promise<void>((resolve, reject) => {
        // Create a next function that will execute our test logic within the async context
        const mockNext = () => {
          try {
            // Update the context with additional values (simulating subsequent middleware)
            updateLoggerContext({
              language: 'es',
              userLanguage: 'es',
              pagePath: '/real/page',
              version: 'v1',
            })

            // Now create and use the logger within the async context
            const logger = createLogger('file:///path/to/test.js')
            logger.info('Test with real context')

            // Verify the output within the async context
            expect(consoleLogs).toHaveLength(1)
            const logOutput = consoleLogs[0]

            // Should have the actual context values
            // Check that requestUuid matches a crypto.randomUUID() format
            expect(logOutput).toMatch(
              /requestUuid=[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/,
            )
            expect(logOutput).toContain('path=/real/path')
            expect(logOutput).toContain('method=POST')
            expect(logOutput).toContain('language=es')
            expect(logOutput).toContain('message="Test with real context"')

            resolve()
          } catch (error) {
            reject(error)
          }
        }

        // Initialize the logger context and execute the test within the async context
        initLoggerContext(mockReq, mockRes, mockNext)
      })

      return result
    })
  })

  describe('log levels integration', () => {
    it('should use real log level filtering with explicit LOG_LEVEL=info', () => {
      // Clear console logs before each test
      consoleLogs.length = 0
      consoleErrors.length = 0

      // Set explicit log level to 'info' and development mode for readable logs
      vi.stubEnv('LOG_LEVEL', 'info')
      vi.stubEnv('NODE_ENV', 'development')
      vi.stubEnv('LOG_LIKE_PRODUCTION', '')

      const logger = createLogger('file:///path/to/test.js')

      logger.debug('Debug message')
      logger.info('Info message')
      logger.warn('Warn message')
      logger.error('Error message')

      // With 'info' level, debug should be filtered out (debug=3, info=2, so debug > info)
      expect(consoleLogs).not.toContain('[DEBUG] Debug message')
      expect(consoleLogs).toContain('[INFO] Info message')
      expect(consoleLogs).toContain('[WARN] Warn message')
      expect(consoleLogs).toContain('[ERROR] Error message')
    })

    it('should use real log level filtering with explicit LOG_LEVEL=error', () => {
      // Clear console logs before each test
      consoleLogs.length = 0
      consoleErrors.length = 0

      // Set explicit log level to 'error' and development mode for readable logs
      vi.stubEnv('LOG_LEVEL', 'error')
      vi.stubEnv('NODE_ENV', 'development')
      vi.stubEnv('LOG_LIKE_PRODUCTION', '')

      const logger = createLogger('file:///path/to/test.js')

      logger.debug('Debug message')
      logger.info('Info message')
      logger.warn('Warn message')
      logger.error('Error message')

      // With 'error' level (0), only error should be logged
      expect(consoleLogs).not.toContain('[DEBUG] Debug message')
      expect(consoleLogs).not.toContain('[INFO] Info message')
      expect(consoleLogs).not.toContain('[WARN] Warn message')
      expect(consoleLogs).toContain('[ERROR] Error message')
    })

    it('should use real production logging detection with LOG_LIKE_PRODUCTION=true', () => {
      // Clear console logs before each test
      consoleLogs.length = 0
      consoleErrors.length = 0

      // Test LOG_LIKE_PRODUCTION=true
      vi.stubEnv('LOG_LIKE_PRODUCTION', 'true')
      vi.stubEnv('NODE_ENV', 'development')

      const logger = createLogger('file:///path/to/test.js')
      logger.info('Production-like logging test')

      expect(consoleLogs).toHaveLength(1)
      const logOutput = consoleLogs[0]

      // Should be in logfmt format (production-like)
      expect(logOutput).toContain('level=info')
      expect(logOutput).toContain('message="Production-like logging test"')
      expect(logOutput).toContain('timestamp=')
    })

    it('should use real production logging in production environment', () => {
      // Clear console logs before each test
      consoleLogs.length = 0
      consoleErrors.length = 0

      // Test NODE_ENV=production (but not in CI)
      vi.stubEnv('NODE_ENV', 'production')
      vi.stubEnv('CI', '') // Ensure CI is not set
      vi.stubEnv('LOG_LIKE_PRODUCTION', '') // Clear this to test production detection

      const logger = createLogger('file:///path/to/test.js')
      logger.info('Real production logging test')

      expect(consoleLogs).toHaveLength(1)
      const logOutput = consoleLogs[0]

      // Should be in logfmt format (production)
      expect(logOutput).toContain('level=info')
      expect(logOutput).toContain('message="Real production logging test"')
      expect(logOutput).toContain('timestamp=')
    })

    it('should use development logging format when production logging is disabled', () => {
      // Clear console logs before each test
      consoleLogs.length = 0
      consoleErrors.length = 0

      // Test development environment without LOG_LIKE_PRODUCTION
      vi.stubEnv('NODE_ENV', 'development')
      vi.stubEnv('LOG_LIKE_PRODUCTION', '')
      vi.stubEnv('CI', '')

      const logger = createLogger('file:///path/to/test.js')
      logger.info('Development logging test')

      expect(consoleLogs).toHaveLength(1)
      const logOutput = consoleLogs[0]

      // Should be in development format (not logfmt)
      expect(logOutput).toBe('[INFO] Development logging test')
      expect(logOutput).not.toContain('level=info')
      expect(logOutput).not.toContain('timestamp=')
    })
  })
})
