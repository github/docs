import StatsD from 'hot-shots'

const mock = Boolean(process.env.NODE_ENV === 'test' || !process.env.DD_API_KEY)

/**
 * @type {import('hot-shots').StatsD}
 */
export default new StatsD({
  prefix: 'docs.',
  mock,
  globalTags: {
    app: 'docs',
    heroku_app: process.env.HEROKU_APP_NAME,
  },
})
