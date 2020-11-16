const StatsD = require('hot-shots')

const mock = Boolean(process.env.NODE_ENV === 'test' || !process.env.DD_API_KEY)

/**
 * @type {import('hot-shots').StatsD}
 */
module.exports = new StatsD({
  prefix: 'docs.',
  mock,
  globalTags: {
    app: 'docs'
  }
})
