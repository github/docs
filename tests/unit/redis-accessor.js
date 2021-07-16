import { jest } from '@jest/globals'
import redisMock from 'redis-mock'
import RedisAccessor from '../../lib/redis-accessor.js'

const { RedisClient: InMemoryRedis } = redisMock

describe('RedisAccessor', () => {
  test('is a constructor', async () => {
    expect(typeof RedisAccessor).toBe('function')

    const instance = new RedisAccessor()
    expect(instance).toBeInstanceOf(RedisAccessor)
  })

  test('has expected instance properties', async () => {
    const instance = new RedisAccessor()
    expect(Object.keys(instance).sort()).toEqual([
      '_allowGetFailures',
      '_allowSetFailures',
      '_client',
      '_prefix',
    ])
  })

  test('has expected static methods', async () => {
    expect(typeof RedisAccessor.translateSetArguments).toBe('function')
  })

  describe('#_allowGetFailures property', () => {
    test('defaults to false', async () => {
      const instance = new RedisAccessor()
      expect(instance._allowGetFailures).toBe(false)
    })

    test('is expected value', async () => {
      const instance = new RedisAccessor({ allowGetFailures: true })
      expect(instance._allowGetFailures).toBe(true)
    })
  })

  describe('#_allowSetFailures property', () => {
    test('defaults to false', async () => {
      const instance = new RedisAccessor()
      expect(instance._allowSetFailures).toBe(false)
    })

    test('is expected value', async () => {
      const instance = new RedisAccessor({ allowSetFailures: true })
      expect(instance._allowSetFailures).toBe(true)
    })
  })

  describe('#_client property', () => {
    test('is expected Redis client', async () => {
      const instance = new RedisAccessor()
      expect(instance._client).toBeInstanceOf(InMemoryRedis)
    })
  })

  describe('#_prefix property', () => {
    test('defaults to empty string', async () => {
      const instance = new RedisAccessor()
      expect(instance._prefix).toBe('')
    })

    test('is expected value', async () => {
      const instance = new RedisAccessor({ prefix: 'myPrefix' })
      expect(instance._prefix).toBe('myPrefix:')
    })

    test('removes a trailing colon', async () => {
      const instance = new RedisAccessor({ prefix: 'myPrefix:' })
      expect(instance._prefix).toBe('myPrefix:')
    })

    test('removes multiple trailing colons', async () => {
      const instance = new RedisAccessor({ prefix: 'myPrefix::' })
      expect(instance._prefix).toBe('myPrefix:')
    })
  })

  describe('#prefix method', () => {
    test('returns prefixed key', async () => {
      const prefix = 'myPrefix'
      const instance = new RedisAccessor({ prefix })
      expect(instance.prefix('myKey')).toBe('myPrefix:myKey')
    })

    test('returns original key if no prefix is configured', async () => {
      const instance = new RedisAccessor()
      expect(instance.prefix('myKey')).toBe('myKey')
    })

    test('throws if no key is provided', async () => {
      const instance = new RedisAccessor()
      expect(() => instance.prefix()).toThrow(
        new TypeError('Key must be a non-empty string but was: undefined')
      )
    })
  })

  describe('.translateSetArguments method', () => {
    test('defaults to an empty list of arguments if no options are given', async () => {
      expect(RedisAccessor.translateSetArguments()).toEqual([])
    })

    test('adds argument "NX" if option `newOnly` is set to true', async () => {
      expect(RedisAccessor.translateSetArguments({ newOnly: true })).toEqual(['NX'])
    })

    test('adds argument "XX" if option `existingOnly` is set to true', async () => {
      expect(RedisAccessor.translateSetArguments({ existingOnly: true })).toEqual(['XX'])
    })

    test('adds argument "PX n" if option `expireIn` is provided with a positive finite integer', async () => {
      expect(RedisAccessor.translateSetArguments({ expireIn: 20 })).toEqual(['PX', 20])
    })

    test('adds argument "PX n" with rounded integer if option `expireIn` is provided with a positive finite non-integer', async () => {
      expect(RedisAccessor.translateSetArguments({ expireIn: 20.5 })).toEqual(['PX', 21])
      expect(RedisAccessor.translateSetArguments({ expireIn: 29.1 })).toEqual(['PX', 29])
    })

    test('adds argument "KEEPTTL" if option `rollingExpiration` is set to false', async () => {
      expect(RedisAccessor.translateSetArguments({ rollingExpiration: false })).toEqual(['KEEPTTL'])
    })

    test('adds expected arguments if multiple options are configured', async () => {
      expect(
        RedisAccessor.translateSetArguments({
          newOnly: true,
          expireIn: 20,
        })
      ).toEqual(['NX', 'PX', 20])

      expect(
        RedisAccessor.translateSetArguments({
          existingOnly: true,
          expireIn: 20,
        })
      ).toEqual(['XX', 'PX', 20])

      expect(
        RedisAccessor.translateSetArguments({
          existingOnly: true,
          expireIn: 20,
          rollingExpiration: false,
        })
      ).toEqual(['XX', 'PX', 20, 'KEEPTTL'])

      expect(
        RedisAccessor.translateSetArguments({
          existingOnly: true,
          rollingExpiration: false,
        })
      ).toEqual(['XX', 'KEEPTTL'])
    })

    test('throws a misconfiguration error if options `newOnly` and `existingOnly` are both set to true', async () => {
      expect(() =>
        RedisAccessor.translateSetArguments({ newOnly: true, existingOnly: true })
      ).toThrowError(new TypeError('Misconfiguration: entry cannot be both new and existing'))
    })

    test('throws a misconfiguration error if option `expireIn` is set to a finite number that rounds to less than 1', async () => {
      const misconfigurationError = new TypeError(
        'Misconfiguration: cannot set a TTL of less than 1 millisecond'
      )

      expect(() => RedisAccessor.translateSetArguments({ expireIn: 0 })).toThrowError(
        misconfigurationError
      )

      expect(() => RedisAccessor.translateSetArguments({ expireIn: -1 })).toThrowError(
        misconfigurationError
      )

      expect(() => RedisAccessor.translateSetArguments({ expireIn: 0.4 })).toThrowError(
        misconfigurationError
      )
    })

    test('throws a misconfiguration error if option `rollingExpiration` is set to false but `newOnly` is set to true', async () => {
      expect(() =>
        RedisAccessor.translateSetArguments({ newOnly: true, rollingExpiration: false })
      ).toThrowError(new TypeError('Misconfiguration: cannot keep an existing TTL on a new entry'))
    })
  })

  describe('#set method', () => {
    test('resolves to true if value was successfully set', async () => {
      const instance = new RedisAccessor()
      expect(await instance.set('myKey', 'myValue')).toBe(true)
    })

    test('resolves to false if value was not set', async () => {
      const instance = new RedisAccessor()
      instance._client.set = jest.fn((...args) => args.pop()(null, 'NOT_OK'))

      expect(await instance.set('myKey', 'myValue')).toBe(false)
    })

    test('sends expected key/value to Redis with #_client.set', async () => {
      const instance = new RedisAccessor()
      const setSpy = jest.spyOn(instance._client, 'set')

      await instance.set('myKey', 'myValue')
      expect(setSpy.mock.calls.length).toBe(1)
      expect(setSpy.mock.calls[0].slice(0, 2)).toEqual(['myKey', 'myValue'])
    })

    test('resolves to false if Redis replies with an error and `allowSetFailures` option is set to true', async () => {
      // Temporarily override `console.error`
      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation()

      const instance = new RedisAccessor({ prefix: 'myPrefix', allowSetFailures: true })
      instance._client.set = jest.fn((...args) => args.pop()(new Error('Redis ReplyError')))

      const result = await instance.set('myKey', 'myValue')

      expect(result).toBe(false)
      expect(consoleErrorSpy).toBeCalledWith(
        `Failed to set value in Redis.
Key: myPrefix:myKey
Error: Redis ReplyError`
      )

      // Restore `console.error`
      consoleErrorSpy.mockRestore()
    })

    test('rejects if Redis replies with an error and `allowSetFailures` option is not set to true', async () => {
      // Temporarily override `console.error`
      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation()

      const instance = new RedisAccessor({ prefix: 'myPrefix' })
      instance._client.set = jest.fn((...args) => args.pop()(new Error('Redis ReplyError')))

      await expect(instance.set('myKey', 'myValue')).rejects.toThrowError(
        new Error(`Failed to set value in Redis.
Key: myPrefix:myKey
Error: Redis ReplyError`)
      )

      expect(consoleErrorSpy).not.toBeCalled()

      // Restore `console.error`
      consoleErrorSpy.mockRestore()
    })

    test('rejects if value is an empty string', async () => {
      const instance = new RedisAccessor()

      await expect(instance.set('myKey', '')).rejects.toThrow(
        new TypeError('Value must be a non-empty string but was: ""')
      )
    })

    test('rejects if value is a non-string value', async () => {
      const instance = new RedisAccessor()

      await expect(instance.set('myKey', true)).rejects.toThrow(
        new TypeError('Value must be a non-empty string but was: true')
      )
    })

    test('invokes .translateSetArguments before sending values to Redis', async () => {
      const argSpy = jest.spyOn(RedisAccessor, 'translateSetArguments')
      const instance = new RedisAccessor()
      const setSpy = jest.spyOn(instance._client, 'set')

      await instance.set('myKey', 'myValue', { expireIn: 20 })
      expect(argSpy).toBeCalled()
      expect(setSpy.mock.calls.length).toBe(1)
      expect(setSpy.mock.calls[0].slice(0, 4)).toEqual(['myKey', 'myValue', 'PX', 20])

      argSpy.mockRestore()
    })
  })

  describe('#get method', () => {
    test('resolves to expected value if matching entry exists in Redis', async () => {
      const instance = new RedisAccessor()

      await instance.set('myKey', 'myValue')

      const result = await instance.get('myKey')
      expect(result).toBe('myValue')
    })

    test('resolves to null if no matching entry exists in Redis', async () => {
      const instance = new RedisAccessor()

      const result = await instance.get('fakeKey')
      expect(result).toBe(null)
    })

    test('retrieves matching entry from Redis with #_client.get', async () => {
      const instance = new RedisAccessor()
      let callbackSpy
      const originalGet = instance._client.get.bind(instance._client)
      instance._client.get = jest.fn((...args) => {
        const realCallback = args.pop()
        callbackSpy = jest.fn((error, value) => {
          realCallback(error, value)
        })

        return originalGet(...args, callbackSpy)
      })

      await instance.set('myKey', 'myValue')
      await instance.get('myKey')

      expect(instance._client.get.mock.calls.length).toBe(1)
      expect(instance._client.get.mock.calls[0].slice(0, 1)).toEqual(['myKey'])

      expect(callbackSpy).toHaveBeenCalledWith(null, 'myValue')
    })

    test('resolves to null if Redis replies with an error and `allowGetFailures` option is set to true', async () => {
      // Temporarily override `console.error`
      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation()

      const instance = new RedisAccessor({ prefix: 'myPrefix', allowGetFailures: true })
      instance._client.get = jest.fn((...args) => args.pop()(new Error('Redis ReplyError')))

      const result = await instance.get('myKey', 'myValue')

      expect(result).toBe(null)
      expect(consoleErrorSpy).toBeCalledWith(
        `Failed to get value from Redis.
Key: myPrefix:myKey
Error: Redis ReplyError`
      )

      // Restore `console.error`
      consoleErrorSpy.mockRestore()
    })

    test('rejects if Redis replies with an error and `allowGetFailures` option is not set to true', async () => {
      // Temporarily override `console.error`
      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation()

      const instance = new RedisAccessor({ prefix: 'myPrefix' })
      instance._client.get = jest.fn((...args) => args.pop()(new Error('Redis ReplyError')))

      await expect(instance.get('myKey')).rejects.toThrowError(
        new Error(`Failed to get value from Redis.
Key: myPrefix:myKey
Error: Redis ReplyError`)
      )

      expect(consoleErrorSpy).not.toBeCalled()

      // Restore `console.error`
      consoleErrorSpy.mockRestore()
    })
  })
})
