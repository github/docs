import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import type { Request, Response } from 'express'
import { createLogger } from '@/observability/logger'
import { initLoggerContext, updateLoggerContext } from '@/observability/logger/lib/logger-context'

function stripAnsi(s: string): string {
  // eslint-disable-next-line no-control-regex
  return s.replace(/\[\d+m/g, '')
}

function expectDevLog(logs: string[], level: string, message: string): void {
  const match = logs.find((log) => {
    const clean = stripAnsi(log)
    return clean.includes(level) && clean.includes(message)
  })
  expect(match, `Expected a log containing "${level}" and "${message}"`).toBeDefined()
}

describe('logger integration tests', () => {
  let originalConsoleLog: typeof console.log
  let originalConsoleError: typeof console.error
  let originalEnv: typeof process.env
  const consoleLogs: string[] = []
  const consoleErrors: unknown[] = []

  beforeEach(() => {
    originalConsoleLog = console.log
    originalConsoleError = console.error
    originalEnv = { ...process.env }

    console.log = vi.fn((message: string) => {
      consoleLogs.push(message)
    })
    console.error = vi.fn((error: unknown) => {
      consoleErrors.push(error)
    })

    consoleLogs.length = 0
    consoleErrors.length = 0
  })

  afterEach(() => {
    console.log = originalConsoleLog
    console.error = originalConsoleError
    process.env = originalEnv

    vi.clearAllMocks()
  })

  describe('logger context integration', () => {
    it('should use empty context when no async local storage is set', () => {
      vi.stubEnv('LOG_LIKE_PRODUCTION', 'true')
      vi.stubEnv('NODE_ENV', 'development')

      const logger = createLogger('file:///path/to/test.js')
      logger.info('Test without context')

      expect(consoleLogs).toHaveLength(1)
      const logOutput = consoleLogs[0]

      expect(logOutput).toContain('level=info')
      expect(logOutput).toContain('message="Test without context"')
      expect(logOutput).toContain('timestamp=')
      expect(logOutput).toContain('file=')
    })

    it('should use context from async local storage when available', async () => {
      vi.stubEnv('LOG_LIKE_PRODUCTION', 'true')
      vi.stubEnv('NODE_ENV', 'development')

      consoleLogs.length = 0

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
      } as unknown as Request

      const mockRes = {} as unknown as Response

      const result = await new Promise<void>((resolve, reject) => {
        const mockNext = () => {
          try {
            updateLoggerContext({
              language: 'es',
              userLanguage: 'es',
              pagePath: '/real/page',
              version: 'v1',
            })

            const logger = createLogger('file:///path/to/test.js')
            logger.info('Test with real context')

            expect(consoleLogs).toHaveLength(1)
            const logOutput = consoleLogs[0]

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

        initLoggerContext(mockReq, mockRes, mockNext)
      })

      return result
    })
  })

  describe('log levels integration', () => {
    it('should use real log level filtering with explicit LOG_LEVEL=info', () => {
      consoleLogs.length = 0
      consoleErrors.length = 0

      vi.stubEnv('LOG_LEVEL', 'info')
      vi.stubEnv('NODE_ENV', 'development')
      vi.stubEnv('LOG_LIKE_PRODUCTION', '')

      const logger = createLogger('file:///path/to/test.js')

      logger.debug('Debug message')
      logger.info('Info message')
      logger.warn('Warn message')
      logger.error('Error message')

      // LOG_LEVEL numbers increase with verbosity, so debug 3 is filtered by info 2.
      const allClean = consoleLogs.map(stripAnsi).join('\n')
      expect(allClean).not.toContain('Debug message')
      expectDevLog(consoleLogs, 'INFO', 'Info message')
      expectDevLog(consoleLogs, 'WARN', 'Warn message')
      expectDevLog(consoleLogs, 'ERROR', 'Error message')
    })

    it('should use real log level filtering with explicit LOG_LEVEL=error', () => {
      consoleLogs.length = 0
      consoleErrors.length = 0

      vi.stubEnv('LOG_LEVEL', 'error')
      vi.stubEnv('NODE_ENV', 'development')
      vi.stubEnv('LOG_LIKE_PRODUCTION', '')

      const logger = createLogger('file:///path/to/test.js')

      logger.debug('Debug message')
      logger.info('Info message')
      logger.warn('Warn message')
      logger.error('Error message')

      // error 0 filters every higher-verbosity level.
      const allClean = consoleLogs.map(stripAnsi).join('\n')
      expect(allClean).not.toContain('Debug message')
      expect(allClean).not.toContain('Info message')
      expect(allClean).not.toContain('Warn message')
      expectDevLog(consoleLogs, 'ERROR', 'Error message')
    })

    it('should use real production logging detection with LOG_LIKE_PRODUCTION=true', () => {
      consoleLogs.length = 0
      consoleErrors.length = 0

      vi.stubEnv('LOG_LIKE_PRODUCTION', 'true')
      vi.stubEnv('NODE_ENV', 'development')

      const logger = createLogger('file:///path/to/test.js')
      logger.info('Production-like logging test')

      expect(consoleLogs).toHaveLength(1)
      const logOutput = consoleLogs[0]

      expect(logOutput).toContain('level=info')
      expect(logOutput).toContain('message="Production-like logging test"')
      expect(logOutput).toContain('timestamp=')
    })

    it('should use real production logging in production environment', () => {
      consoleLogs.length = 0
      consoleErrors.length = 0

      // CI disables production logging unless LOG_LIKE_PRODUCTION is true.
      vi.stubEnv('NODE_ENV', 'production')
      vi.stubEnv('CI', '')
      vi.stubEnv('LOG_LIKE_PRODUCTION', '')

      const logger = createLogger('file:///path/to/test.js')
      logger.info('Real production logging test')

      expect(consoleLogs).toHaveLength(1)
      const logOutput = consoleLogs[0]

      expect(logOutput).toContain('level=info')
      expect(logOutput).toContain('message="Real production logging test"')
      expect(logOutput).toContain('timestamp=')
    })

    it('should use development logging format when production logging is disabled', () => {
      consoleLogs.length = 0
      consoleErrors.length = 0

      vi.stubEnv('NODE_ENV', 'development')
      vi.stubEnv('LOG_LIKE_PRODUCTION', '')
      vi.stubEnv('CI', '')

      const logger = createLogger('file:///path/to/test.js')
      logger.info('Development logging test')

      expect(consoleLogs).toHaveLength(1)

      expectDevLog(consoleLogs, 'INFO', 'Development logging test')
      const logOutput = stripAnsi(consoleLogs[0])
      expect(logOutput).not.toContain('level=info')
      expect(logOutput).not.toContain('timestamp=')
    })
  })
})
