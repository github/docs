import { describe, it, expect } from 'vitest'
import { toLogfmt } from '@/observability/logger/lib/to-logfmt'

describe('toLogfmt', () => {
  describe('basic stringify functionality', () => {
    it('should handle simple key value pairs', () => {
      const data = { foo: 'bar', a: 14 }
      expect(toLogfmt(data)).toBe('foo=bar a=14')
    })

    it('should handle true and false', () => {
      const data = { foo: true, bar: false }
      expect(toLogfmt(data)).toBe('foo=true bar=false')
    })

    it('should quote strings with spaces in them', () => {
      const data = { foo: 'hello kitty' }
      expect(toLogfmt(data)).toBe('foo="hello kitty"')
    })

    it('should quote strings with equals in them', () => {
      const data = { foo: 'hello=kitty' }
      expect(toLogfmt(data)).toBe('foo="hello=kitty"')
    })

    it('should quote strings with quotes in them', () => {
      const data = { foo: JSON.stringify({ bar: 'baz' }) }
      expect(toLogfmt(data)).toBe('foo="{\\"bar\\":\\"baz\\"}"')
    })

    it('should escape quotes within strings with spaces in them', () => {
      const data = { foo: 'hello my "friend"' }
      expect(toLogfmt(data)).toBe('foo="hello my \\"friend\\""')

      const data2 = { foo: 'hello my "friend" whom I "love"' }
      expect(toLogfmt(data2)).toBe('foo="hello my \\"friend\\" whom I \\"love\\""')
    })

    it('should escape backslashes within strings', () => {
      const data = { foo: 'why would you use \\LaTeX?' }
      expect(toLogfmt(data)).toBe('foo="why would you use \\\\LaTeX?"')
    })

    it('should handle undefined as empty', () => {
      const data = { foo: undefined }
      expect(toLogfmt(data)).toBe('foo=')
    })

    it('should handle null as empty', () => {
      const data = { foo: null }
      expect(toLogfmt(data)).toBe('foo=')
    })

    it('should handle empty string with quotes', () => {
      const data = { foo: '' }
      expect(toLogfmt(data)).toBe('foo=')
    })

    it('should handle numbers', () => {
      const data = { count: 42, pi: 3.14159 }
      expect(toLogfmt(data)).toBe('count=42 pi=3.14159')
    })

    it('should handle arrays as strings', () => {
      const data = { tags: ['web', 'api', 'rest'] }
      expect(toLogfmt(data)).toBe('tags=web,api,rest')
    })
  })

  describe('object flattening functionality', () => {
    it('should flatten nested objects with dot notation', () => {
      const data = {
        a: 1,
        b: {
          c: 2,
          d: 'test',
        },
      }
      expect(toLogfmt(data)).toBe('a=1 b.c=2 b.d=test')
    })

    it('should flatten deeply nested objects', () => {
      const data = {
        level1: {
          level2: {
            level3: {
              value: 'deep',
            },
          },
        },
      }
      expect(toLogfmt(data)).toBe('level1.level2.level3.value=deep')
    })

    it('should handle mixed flat and nested properties', () => {
      const data = {
        simple: 'value',
        nested: {
          prop: 'nested-value',
        },
        another: 42,
      }
      expect(toLogfmt(data)).toBe('simple=value nested.prop=nested-value another=42')
    })

    it('should handle arrays within nested objects', () => {
      const data = {
        config: {
          tags: ['tag1', 'tag2'],
          enabled: true,
        },
      }
      expect(toLogfmt(data)).toBe('config.tags=tag1,tag2 config.enabled=true')
    })

    it('should handle null and undefined in nested objects', () => {
      const data = {
        user: {
          name: 'john',
          email: null,
          phone: undefined,
        },
      }
      expect(toLogfmt(data)).toBe('user.name=john user.email= user.phone=')
    })
  })

  describe('real-world logging scenarios', () => {
    it('should handle typical request logging data', () => {
      const data = {
        level: 'info',
        message: 'Request completed',
        timestamp: '2023-01-01T00:00:00.000Z',
        requestUuid: '123e4567-e89b-12d3-a456-426614174000',
        method: 'GET',
        path: '/api/users',
        status: 200,
        responseTime: '125 ms',
      }

      const result = toLogfmt(data)
      expect(result).toContain('level=info')
      expect(result).toContain('message="Request completed"')
      expect(result).toContain('method=GET')
      expect(result).toContain('path=/api/users')
      expect(result).toContain('status=200')
      expect(result).toContain('responseTime="125 ms"')
    })

    it('should handle logger context data with nested objects', () => {
      const data = {
        level: 'error',
        message: 'Database connection failed',
        timestamp: '2023-01-01T00:00:00.000Z',
        requestContext: {
          path: '/api/users',
          method: 'POST',
          headers: {
            'user-agent': 'Mozilla/5.0',
          },
        },
        error: {
          name: 'ConnectionError',
          message: 'Connection timeout',
        },
      }

      const result = toLogfmt(data)
      expect(result).toContain('level=error')
      expect(result).toContain('message="Database connection failed"')
      expect(result).toContain('requestContext.path=/api/users')
      expect(result).toContain('requestContext.method=POST')
      expect(result).toContain('requestContext.headers.user-agent=Mozilla/5.0')
      expect(result).toContain('error.name=ConnectionError')
      expect(result).toContain('error.message="Connection timeout"')
    })

    it('should handle special characters that need escaping', () => {
      const data = {
        message: 'User said: "Hello world!" with \\backslash',
        path: '/search?q=hello world&sort=date',
      }

      const result = toLogfmt(data)
      expect(result).toContain('message="User said: \\"Hello world!\\" with \\\\backslash"')
      expect(result).toContain('path="/search?q=hello world&sort=date"')
    })
  })

  describe('edge cases', () => {
    it('should handle empty object', () => {
      expect(toLogfmt({})).toBe('')
    })

    it('should handle object with only null/undefined values', () => {
      const data = { a: null, b: undefined }
      expect(toLogfmt(data)).toBe('a= b=')
    })

    it('should handle nested object with empty nested object', () => {
      const data = { config: {} }
      // Empty nested objects should not produce any keys
      expect(toLogfmt(data)).toBe('')
    })

    it('should handle circular references gracefully by treating them as strings', () => {
      const obj: any = { name: 'test' }
      obj.self = obj

      // The circular reference should be converted to a string representation
      const result = toLogfmt(obj)
      expect(result).toContain('name=test')
      expect(result).toContain('self=[Circular]') // Our implementation marks circular refs
    })

    it('should handle Date objects', () => {
      const data = { timestamp: new Date('2023-01-01T00:00:00.000Z') }
      expect(toLogfmt(data)).toBe('timestamp=2023-01-01T00:00:00.000Z')
    })

    it('should handle very long strings', () => {
      const longString = 'a'.repeat(1000)
      const data = { longField: longString }
      const result = toLogfmt(data)
      expect(result).toBe(`longField=${longString}`)
    })
  })
})
