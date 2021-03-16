const InMemoryRedis = require('ioredis-mock')
const RedisAccessor = require('../../lib/redis-accessor')

describe('RedisAccessor', () => {
  test('is a constructor', async () => {
    expect(typeof RedisAccessor).toBe('function')

    const instance = new RedisAccessor()
    expect(instance).toBeInstanceOf(RedisAccessor)
  })

  test('has expected instance properties', async () => {
    const instance = new RedisAccessor()
    expect(Object.keys(instance).sort()).toEqual(['_allowSetFailures', '_client', '_prefix'])
  })

  test('has expected static methods', async () => {
    expect(typeof RedisAccessor.translateSetArguments).toBe('function')
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

  describe('constructor', () => {
    test('throws if databaseNumber is provided but is not a number', async () => {
      expect(() => new RedisAccessor({ databaseNumber: 'dbName' })).toThrowError(
        new TypeError('Redis database number must be an integer between 0 and 15 but was: "dbName"')
      )
    })

    test('throws if databaseNumber is provided but is not an integer', async () => {
      expect(() => new RedisAccessor({ databaseNumber: 1.5 })).toThrowError(
        new TypeError('Redis database number must be an integer between 0 and 15 but was: 1.5')
      )
    })

    test('throws if databaseNumber is provided but is less than 0', async () => {
      expect(() => new RedisAccessor({ databaseNumber: -1 })).toThrowError(
        new TypeError('Redis database number must be an integer between 0 and 15 but was: -1')
      )
    })

    test('throws if databaseNumber is provided but is greater than max allowed', async () => {
      expect(() => new RedisAccessor({ databaseNumber: 16 })).toThrowError(
        new TypeError('Redis database number must be an integer between 0 and 15 but was: 16')
      )
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
          expireIn: 20
        })
      ).toEqual(['NX', 'PX', 20])

      expect(
        RedisAccessor.translateSetArguments({
          existingOnly: true,
          expireIn: 20
        })
      ).toEqual(['XX', 'PX', 20])

      expect(
        RedisAccessor.translateSetArguments({
          existingOnly: true,
          expireIn: 20,
          rollingExpiration: false
        })
      ).toEqual(['XX', 'PX', 20, 'KEEPTTL'])

      expect(
        RedisAccessor.translateSetArguments({
          existingOnly: true,
          rollingExpiration: false
        })
      ).toEqual(['XX', 'KEEPTTL'])
    })

    test('throws a misconfiguration error if options `newOnly` and `existingOnly` are both set to true', async () => {
      expect(
        () => RedisAccessor.translateSetArguments({ newOnly: true, existingOnly: true })
      ).toThrowError(
        new TypeError('Misconfiguration: entry cannot be both new and existing')
      )
    })

    test('throws a misconfiguration error if option `expireIn` is set to a finite number that rounds to less than 1', async () => {
      const misconfigurationError = new TypeError('Misconfiguration: cannot set a TTL of less than 1 millisecond')

      expect(
        () => RedisAccessor.translateSetArguments({ expireIn: 0 })
      ).toThrowError(misconfigurationError)

      expect(
        () => RedisAccessor.translateSetArguments({ expireIn: -1 })
      ).toThrowError(misconfigurationError)

      expect(
        () => RedisAccessor.translateSetArguments({ expireIn: 0.4 })
      ).toThrowError(misconfigurationError)
    })

    test('throws a misconfiguration error if option `rollingExpiration` is set to false but `newOnly` is set to true', async () => {
      expect(
        () => RedisAccessor.translateSetArguments({ newOnly: true, rollingExpiration: false })
      ).toThrowError(
        new TypeError('Misconfiguration: cannot keep an existing TTL on a new entry')
      )
    })
  })

  describe('#set method', () => {
    test('resolves to true if value was successfully set', async () => {
      const instance = new RedisAccessor()
      expect(await instance.set('myKey', 'myValue')).toBe(true)
    })

    test('resolves to false if value was not set', async () => {
      const instance = new RedisAccessor()
      instance._client.set = jest.fn(async () => 'NOT_OK')

      expect(await instance.set('myKey', 'myValue')).toBe(false)
    })

    test('sends expected key/value to Redis with #_client.set', async () => {
      const instance = new RedisAccessor()
      const setSpy = jest.spyOn(instance._client, 'set')

      await instance.set('myKey', 'myValue')
      expect(setSpy).toBeCalledWith('myKey', 'myValue')
    })

    test('resolves to false if Redis replies with an error and `allowSetFailures` option is set to true', async () => {
      // Temporarily override `console.error`
      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation()

      const instance = new RedisAccessor({ prefix: 'myPrefix', allowSetFailures: true })
      instance._client.set = jest.fn(async () => { throw new Error('Redis ReplyError') })

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
      instance._client.set = jest.fn(async () => { throw new Error('Redis ReplyError') })

      await expect(instance.set('myKey', 'myValue')).rejects.toThrowError(
        new Error(`Failed to set value in Redis.
Key: myPrefix:myKey
Error: Redis ReplyError`
        )
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
      expect(setSpy).toBeCalledWith('myKey', 'myValue', 'PX', 20)

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
      const getSpy = jest.spyOn(instance._client, 'get')

      await instance.set('myKey', 'myValue')
      await instance.get('myKey')

      expect(getSpy).toBeCalledWith('myKey')
      expect(getSpy).toHaveReturnedWith(Promise.resolve('myValue'))
    })
  })

  describe('#exists method', () => {
    test('resolves to true if matching entry exists in Redis', async () => {
      const instance = new RedisAccessor()

      await instance.set('myKey', 'myValue')

      const result = await instance.exists('myKey')
      expect(result).toBe(true)
    })

    test('resolves to false if no matching entry exists in Redis', async () => {
      const instance = new RedisAccessor()

      const result = await instance.exists('fakeKey')
      expect(result).toBe(false)
    })

    test('checks for matching entry from Redis with #_client.exists', async () => {
      const instance = new RedisAccessor()
      const existsSpy = jest.spyOn(instance._client, 'exists')

      await instance.set('myKey', 'myValue')
      await instance.exists('myKey')

      expect(existsSpy).toBeCalledWith('myKey')
      expect(existsSpy).toHaveReturnedWith(Promise.resolve(true))
    })
  })
})
