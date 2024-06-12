import StatsD from 'hot-shots'

const { HEROKU_APP_NAME, NODE_ENV, DD_API_KEY } = process.env
const mock = Boolean(NODE_ENV === 'test' || !DD_API_KEY)

export const tags = ['app:docs', HEROKU_APP_NAME ? `heroku_app:${HEROKU_APP_NAME}` : false].filter(
  Boolean,
)
/**
 * @type {import('hot-shots').StatsD}
 */
export default new StatsD({
  prefix: 'docs.',
  mock,
  globalTags: tags,
})
