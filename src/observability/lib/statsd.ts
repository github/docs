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

// Moda deploys set MODA_APP_NAME for tagging.
const modaApp = MODA_APP_NAME ? `moda_app_name:${MODA_APP_NAME}` : false

const tagCandidates = ['app:docs', modaApp]
export const tags: string[] = tagCandidates.filter((tag): tag is string => Boolean(tag))

const statsd = new StatsD({
  // hot-shots falls back to localhost:8125 when neither host variable is set.
  // Moda sets only DD_DOGSTATSD_PORT, so use KUBE_NODE_HOSTNAME as the DogStatsD host.
  host: DD_AGENT_HOST || KUBE_NODE_HOSTNAME,
  port: DD_DOGSTATSD_PORT ? parseInt(DD_DOGSTATSD_PORT, 10) : undefined,
  prefix: 'docs.',
  mock,
  globalTags: tags,
})

export default statsd

// hot-shots asyncTimer and timer append TimerContext to wrapped functions.
// This adapter preserves callers' original signatures by dropping that extra argument.
export function adaptForTimer<P extends unknown[], R>(
  fn: (...args: P) => Promise<R>,
): (...args: [...P, TimerContext]) => Promise<R> {
  return (...args) => {
    const original = args.slice(0, -1) as P
    return fn(...original)
  }
}
