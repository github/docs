import StatsD from 'hot-shots'

const { HEROKU_APP_NAME, NODE_ENV, DD_API_KEY, MODA_APP_NAME } = process.env
const mock = Boolean(NODE_ENV === 'test' || !DD_API_KEY)

// MODA_APP_NAME gets set when the deploy target is Moda
const modaApp = MODA_APP_NAME ? `moda_app_name:${MODA_APP_NAME}` : false
// HEROKU_APP_NAME gets set when the deploy target is Azure
const herokuApp = HEROKU_APP_NAME ? `heroku_app:${HEROKU_APP_NAME}` : false

export const tags = ['app:docs', modaApp, herokuApp].filter(Boolean)

/**
 * @type {import('hot-shots').StatsD}
 */
export default new StatsD({
  prefix: 'docs.',
  mock,
  globalTags: tags,
})
