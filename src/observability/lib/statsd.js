import StatsD from 'hot-shots'

const {
  HEROKU_APP_NAME,
  NODE_ENV,
  DD_API_KEY,
  MODA_APP_NAME,
  MODA_PROD_SERVICE_ENV,
  KUBE_NODE_HOSTNAME,
  DD_DOGSTATSD_PORT,
  DD_AGENT_HOST,
} = process.env

// This DD_API_KEY is only being used to determine if the target
// deployment environment is production. The key is not actually
// used for sending data. Afer migrating to Moda, we can remove
// the DD_API_KEY.
const isServiceEnvProduction = DD_API_KEY || MODA_PROD_SERVICE_ENV
const mock = NODE_ENV === 'test' || !isServiceEnvProduction

// MODA_APP_NAME gets set when the deploy target is Moda
const modaApp = MODA_APP_NAME ? `moda_app_name:${MODA_APP_NAME}` : false
// HEROKU_APP_NAME gets set when the deploy target is Azure
const herokuApp = HEROKU_APP_NAME ? `heroku_app:${HEROKU_APP_NAME}` : false

export const tags = ['app:docs', modaApp, herokuApp].filter(Boolean)

/**
 * @type {import('hot-shots').StatsD}
 */
export default new StatsD({
  // When host and port are not set, hot-shots will default to the
  // DD_AGENT_HOST and DD_DOGSTATSD_PORT environment variables.
  // If undefined, the host will default to 'localhost' and the port
  // will default to 8125.
  // Azure docker templates configure DD_AGENT_HOST but not DD_DOGSTATSD_PORT.
  // Moda configuration defines DD_DOGSTATSD_PORT but not DD_AGENT_HOST.
  // For Moda, the host must be set to the Kubernetes node name, which is
  // set in KUBE_NODE_HOSTNAME.
  host: DD_AGENT_HOST || KUBE_NODE_HOSTNAME,
  port: DD_DOGSTATSD_PORT,
  prefix: 'docs.',
  mock,
  globalTags: tags,
})
