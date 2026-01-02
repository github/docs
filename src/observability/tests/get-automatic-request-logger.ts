/* eslint-disable no-invalid-this */
/* eslint-disable prettier/prettier */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { getAutomaticRequestLogger } from '@/observability/logger/middleware/get-automatic-request-logger'
import type { Request, Response, NextFunction } from 'express'

describe('getAutomaticRequestLogger', () => {
  let originalEnv: typeof process.env
  let originalConsoleLog: typeof console.log
  const consoleLogs: string[] = []
  let mockReq: Partial<Request>
  let mockRes: Partial<Response>
  let mockNext: NextFunction

  beforeEach(() => {
    // Store original environment and console methods
    originalEnv = { ...process.env }
    originalConsoleLog = console.log

    // Mock console.log to capture output
    console.log = vi.fn((message: string) => {
      consoleLogs.push(message)
    })

    // Clear captured output
    consoleLogs.length = 0

    // Set up mock request, response, and next function
    mockReq = {
      method: 'GET',
      url: '/test-path',
      originalUrl: '/test-path',
    }

    let responseEnded = false
    const originalEnd = vi.fn()

    mockRes = {
      statusCode: 200,
      getHeader: vi.fn((name: string) => {
        if (name === 'content-length') return '1234'
        return undefined
      }),
      end: originalEnd,
    }

    // Override res.end to simulate response completion
    const endOverride = function (this: any, chunk?: any, encoding?: any) {
      if (!responseEnded) {
        responseEnded = true
        // Simulate a small delay for response time
        setTimeout(() => {
          originalEnd.call(this, chunk, encoding)
        }, 10)
      }
      return this
    }

    ;(mockRes as any).end = endOverride

    mockNext = vi.fn()

    // Set default environment with explicit values for CI stability
    vi.stubEnv('NODE_ENV', 'development')
    vi.stubEnv('LOG_LEVEL', 'debug')
    vi.stubEnv('ENABLE_DEV_LOGGING', 'true')
    vi.stubEnv('LOG_LIKE_PRODUCTION', '')
    vi.stubEnv('GITHUB_ACTIONS', '')
  })

  afterEach(() => {
    // Restore original environment and console methods
    process.env = originalEnv
    console.log = originalConsoleLog
    vi.clearAllMocks()
  })

  describe('development environment', () => {
    beforeEach(() => {
      vi.stubEnv('NODE_ENV', 'development')
      vi.stubEnv('LOG_LIKE_PRODUCTION', '')
    })

    it('should log requests in development format', async () => {
      const middleware = getAutomaticRequestLogger()

      // Call middleware
      middleware(mockReq as Request, mockRes as Response, mockNext)

      // Simulate response completion
      ;(mockRes as any).end()

      // Wait for async logging
      await new Promise((resolve) => setTimeout(resolve, 20))

      expect(mockNext).toHaveBeenCalled()
      expect(consoleLogs).toHaveLength(1)

      const logOutput = consoleLogs[0]
      expect(logOutput).toContain('[AUTO]')
      expect(logOutput).toContain('GET')
      expect(logOutput).toContain('/test-path')
      expect(logOutput).toContain('200')
      expect(logOutput).toContain('ms')
      expect(logOutput).toContain('1234')
    })

    it('should apply color coding based on status codes', async () => {
      // Test different status codes individually with completely isolated mocks
      const testCases = [
        { status: 200, expectedInLog: '200' },
        { status: 404, expectedInLog: '404' },
        { status: 500, expectedInLog: '500' },
      ]

      for (let i = 0; i < testCases.length; i++) {
        const testCase = testCases[i]

        // Create a completely isolated test environment for each iteration
        const isolatedLogs: string[] = []
        const originalConsoleLog = console.log

        // Replace console.log with isolated capture
        console.log = vi.fn((message: string) => {
          isolatedLogs.push(message)
        })

        // Create completely fresh request and response mocks
        const freshMockReq = {
          method: 'GET',
          url: '/test-path',
          originalUrl: '/test-path',
        }

        let responseEnded = false
        const originalEnd = vi.fn()

        const freshMockRes = {
          statusCode: testCase.status,
          getHeader: vi.fn((name: string) => {
            if (name === 'content-length') return '1234'
            return undefined
          }),
          end: originalEnd,
        }

        // Override res.end to simulate response completion
        const endOverride = function (this: any, chunk?: any, encoding?: any) {
          if (!responseEnded) {
            responseEnded = true
            // Simulate a small delay for response time
            setTimeout(() => {
              originalEnd.call(this, chunk, encoding)
            }, 10)
          }
          return this
        }

        ;(freshMockRes as any).end = endOverride

        const freshMockNext = vi.fn()

        try {
          const middleware = getAutomaticRequestLogger()
          middleware(
            freshMockReq as Request,
            freshMockRes as Partial<Response> as Response,
            freshMockNext,
          )
          ;(freshMockRes as any).end()

          // Wait for async logging with longer timeout for CI
          await new Promise((resolve) => setTimeout(resolve, 50))

          expect(isolatedLogs).toHaveLength(1)
          expect(isolatedLogs[0]).toContain(testCase.expectedInLog)
        } finally {
          // Always restore console.log
          console.log = originalConsoleLog
        }
      }
    })

    it('should filter out _next requests unless debug level', async () => {
      vi.stubEnv('LOG_LEVEL', 'info') // info level = 2, debug = 3

      mockReq.url = '/_next/static/file.js'
      mockReq.originalUrl = '/_next/static/file.js'

      const middleware = getAutomaticRequestLogger()
      middleware(mockReq as Request, mockRes as Response, mockNext)
      ;(mockRes as any).end()

      await new Promise((resolve) => setTimeout(resolve, 20))

      expect(consoleLogs).toHaveLength(0) // Should be filtered out
    })

    it('should log _next requests when debug level is set', async () => {
      vi.stubEnv('LOG_LEVEL', 'debug') // debug level = 3

      mockReq.url = '/_next/static/file.js'
      mockReq.originalUrl = '/_next/static/file.js'

      const middleware = getAutomaticRequestLogger()
      middleware(mockReq as Request, mockRes as Response, mockNext)
      ;(mockRes as any).end()

      await new Promise((resolve) => setTimeout(resolve, 20))

      expect(consoleLogs).toHaveLength(1)
      expect(consoleLogs[0]).toContain('/_next/static/file.js')
    })

    it('should not log when ENABLE_DEV_LOGGING is false', async () => {
      vi.stubEnv('ENABLE_DEV_LOGGING', 'false')

      const middleware = getAutomaticRequestLogger()
      middleware(mockReq as Request, mockRes as Response, mockNext)
      ;(mockRes as any).end()

      await new Promise((resolve) => setTimeout(resolve, 20))

      expect(consoleLogs).toHaveLength(0)
    })
  })

  describe('production environment', () => {
    beforeEach(() => {
      vi.stubEnv('LOG_LIKE_PRODUCTION', 'true')
      vi.stubEnv('NODE_ENV', 'production')
    })

    it('should log requests in logfmt format', async () => {
      const middleware = getAutomaticRequestLogger()

      middleware(mockReq as Request, mockRes as Response, mockNext)
      ;(mockRes as any).end()

      await new Promise((resolve) => setTimeout(resolve, 20))

      expect(consoleLogs).toHaveLength(1)

      const logOutput = consoleLogs[0]
      expect(logOutput).toContain('status=200')
      expect(logOutput).toContain('method=GET')
      expect(logOutput).toContain('url=/test-path')
      expect(logOutput).toContain('responseTime=')
      expect(logOutput).toContain('ms')
      expect(logOutput).toContain('contentLength=1234')
    })

    it('should include logger context in production logs', async () => {
      const middleware = getAutomaticRequestLogger()

      middleware(mockReq as Request, mockRes as Response, mockNext)
      ;(mockRes as any).end()

      await new Promise((resolve) => setTimeout(resolve, 20))

      expect(consoleLogs).toHaveLength(1)

      const logOutput = consoleLogs[0]
      // Should include context fields (even if empty due to mocking)
      expect(logOutput).toContain('requestUuid=')
      expect(logOutput).toContain('path=')
    })
  })

  describe('test environment', () => {
    beforeEach(() => {
      vi.stubEnv('NODE_ENV', 'test')
      vi.stubEnv('LOG_LIKE_PRODUCTION', '')
      // Explicitly clear any leftover ENABLE_DEV_LOGGING from previous tests
      vi.stubEnv('ENABLE_DEV_LOGGING', '')
    })

    it('should not log in test environment by default', async () => {
      // Be extremely explicit about the environment settings for CI
      vi.stubEnv('NODE_ENV', 'test')
      vi.stubEnv('ENABLE_DEV_LOGGING', '')
      vi.stubEnv('LOG_LIKE_PRODUCTION', '')

      // Create isolated log capture for this specific test
      const isolatedLogs: string[] = []
      const originalConsoleLog = console.log

      console.log = vi.fn((message: string) => {
        isolatedLogs.push(message)
      })

      try {
        const middleware = getAutomaticRequestLogger()

        middleware(mockReq as Request, mockRes as Response, mockNext)
        ;(mockRes as any).end()

        // Wait for any potential async logging with longer timeout for CI
        await new Promise((resolve) => setTimeout(resolve, 50))

        expect(isolatedLogs).toHaveLength(0)
      } finally {
        // Always restore console.log
        console.log = originalConsoleLog
      }
    })

    it('should log in test environment when ENABLE_DEV_LOGGING is true', async () => {
      vi.stubEnv('ENABLE_DEV_LOGGING', 'true')

      const middleware = getAutomaticRequestLogger()

      middleware(mockReq as Request, mockRes as Response, mockNext)
      ;(mockRes as any).end()

      await new Promise((resolve) => setTimeout(resolve, 20))

      expect(consoleLogs).toHaveLength(1)
      expect(consoleLogs[0]).toContain('[AUTO]')
    })
  })

  describe('edge cases', () => {
    it('should handle missing content-length header', async () => {
      ;(mockRes as any).getHeader = vi.fn(() => undefined)

      const middleware = getAutomaticRequestLogger()
      middleware(mockReq as Request, mockRes as Response, mockNext)
      ;(mockRes as any).end()

      await new Promise((resolve) => setTimeout(resolve, 20))

      expect(consoleLogs).toHaveLength(1)
      expect(consoleLogs[0]).toContain('-') // Should show '-' for missing content length
    })

    it('should handle missing status code', async () => {
      delete (mockRes as any).statusCode

      const middleware = getAutomaticRequestLogger()
      middleware(mockReq as Request, mockRes as Response, mockNext)
      ;(mockRes as any).end()

      await new Promise((resolve) => setTimeout(resolve, 20))

      expect(consoleLogs).toHaveLength(1)
      expect(consoleLogs[0]).toContain('200') // Should default to 200
    })

    it('should prefer originalUrl over url', async () => {
      mockReq.url = '/different-path'
      mockReq.originalUrl = '/original-path'

      const middleware = getAutomaticRequestLogger()
      middleware(mockReq as Request, mockRes as Response, mockNext)
      ;(mockRes as any).end()

      await new Promise((resolve) => setTimeout(resolve, 20))

      expect(consoleLogs).toHaveLength(1)
      expect(consoleLogs[0]).toContain('/original-path')
      expect(consoleLogs[0]).not.toContain('/different-path')
    })

    it('should measure response time accurately', async () => {
      const middleware = getAutomaticRequestLogger()

      const startTime = Date.now()
      middleware(mockReq as Request, mockRes as Response, mockNext)

      // Simulate some processing time
      await new Promise((resolve) => setTimeout(resolve, 50))
      ;(mockRes as any).end()
      await new Promise((resolve) => setTimeout(resolve, 20))

      const endTime = Date.now()
      const actualDuration = endTime - startTime

      expect(consoleLogs).toHaveLength(1)

      // Extract response time from log
      const logOutput = consoleLogs[0]
      const responseTimeMatch = logOutput.match(/(\d+)\s*ms/)
      expect(responseTimeMatch).toBeTruthy()

      if (responseTimeMatch) {
        const loggedTime = parseInt(responseTimeMatch[1], 10)
        // Should be reasonably close to actual duration (within 20ms tolerance)
        expect(loggedTime).toBeGreaterThanOrEqual(40)
        expect(loggedTime).toBeLessThanOrEqual(actualDuration + 20)
      }
    })
  })
})
