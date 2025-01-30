import StatsD from 'hot-shots'

const {
  NODE_ENV,
  MODA_APP_NAME,
  MODA_PROD_SERVICE_ENV,
  KUBE_NODE_HOSTNAME,
  DD_DOGSTATSD_PORT,
  DD_AGENT_HOST,
} = process.env

const mock = NODE_ENV === 'test' || MODA_PROD_SERVICE_ENV !== 'true'

// MODA_APP_NAME gets set when the deploy target is Moda
const modaApp = MODA_APP_NAME ? `moda_app_name:${MODA_APP_NAME}` : false

export const tags = ['app:docs', modaApp].filter(Boolean)

/**
 * @type {import('hot-shots').StatsD}
 */
export default new StatsD({
  // When host and port are not set, hot-shots will default to the
  // DD_AGENT_HOST and DD_DOGSTATSD_PORT environment variables.
  // If undefined, the host will default to 'localhost' and the port
  // will default to 8125.
  // Moda configuration defines DD_DOGSTATSD_PORT but not DD_AGENT_HOST.
  // For Moda, the host must be set to the Kubernetes node name, which is
  // set in KUBE_NODE_HOSTNAME.
  host: DD_AGENT_HOST || KUBE_NODE_HOSTNAME,
  port: DD_DOGSTATSD_PORT,
  prefix: 'docs.',
  mock,
  globalTags: tags,
})
