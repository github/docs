import createRedisClient from '../../../lib/redis/create-client.js'

const redisUrl = 'http://localhost:6379'

describe('create-client', () => {
  test('returns null if no URL is provided', async () => {
    expect(createRedisClient({})).toBe(null)
  })

  test('throws if database number is provided but is not a number', async () => {
    expect(() => createRedisClient({ url: redisUrl, db: 'dbName' })).toThrowError(
      new TypeError('Redis database number must be an integer between 0 and 15 but was: "dbName"')
    )
  })

  test('throws if database number is provided but is not an integer', async () => {
    expect(() => createRedisClient({ url: redisUrl, db: 1.5 })).toThrowError(
      new TypeError('Redis database number must be an integer between 0 and 15 but was: 1.5')
    )
  })

  test('throws if database number is provided but is less than 0', async () => {
    expect(() => createRedisClient({ url: redisUrl, db: -1 })).toThrowError(
      new TypeError('Redis database number must be an integer between 0 and 15 but was: -1')
    )
  })

  test('throws if database number is provided but is greater than max allowed', async () => {
    expect(() => createRedisClient({ url: redisUrl, db: 16 })).toThrowError(
      new TypeError('Redis database number must be an integer between 0 and 15 but was: 16')
    )
  })
})
