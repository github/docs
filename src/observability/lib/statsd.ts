import StatsD, { TimerContext } from 'hot-shots'

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

const tagCandidates = ['app:docs', modaApp]
export const tags: string[] = tagCandidates.filter((tag): tag is string => Boolean(tag))

const statsd = new StatsD({
  // When host and port are not set, hot-shots will default to the
  // DD_AGENT_HOST and DD_DOGSTATSD_PORT environment variables.
  // If undefined, the host will default to 'localhost' and the port
  // will default to 8125.
  // Moda configuration defines DD_DOGSTATSD_PORT but not DD_AGENT_HOST.
  // For Moda, the host must be set to the Kubernetes node name, which is
  // set in KUBE_NODE_HOSTNAME.
  host: DD_AGENT_HOST || KUBE_NODE_HOSTNAME,
  port: DD_DOGSTATSD_PORT ? parseInt(DD_DOGSTATSD_PORT, 10) : undefined,
  prefix: 'docs.',
  mock,
  globalTags: tags,
})

export default statsd

// hot-shots v14 changed asyncTimer/timer to inject a TimerContext as the
// final argument of the wrapped function. This adapter lets callers keep
// passing functions with their original signatures by appending an ignored
// TimerContext parameter.
export function adaptForTimer<P extends unknown[], R>(
  fn: (...args: P) => Promise<R>,
): (...args: [...P, TimerContext]) => Promise<R> {
  return (...args) => {
    const original = args.slice(0, -1) as P
    return fn(...original)
  }
}
