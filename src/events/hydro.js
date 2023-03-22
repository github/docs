import { createHmac } from 'crypto'
import { Agent } from 'node:https'
import got from 'got'
import statsd from '../../lib/statsd.js'
import { report } from '../../lib/failbot.js'
import { MAX_REQUEST_TIMEOUT } from '../../lib/constants.js'

const TIME_OUT_TEXT = 'ms has passed since batch creation'
const X_HYDRO_APP = 'docs-production'
const CLUSTER = 'potomac' // We only have ability to publish externally to potomac cluster
const TIMEOUT = MAX_REQUEST_TIMEOUT - 1000 // Limit because Express will terminate at MAX_REQUEST_TIMEOUT
const RETRIES = 0 // We care about aggregate statistics; a few dropped events isn't a big deal
const httpsAgent = new Agent({ keepAlive: true, maxSockets: 32 }) // keepAlive: https://gh.io/AAk2qio -- 32: https://bit.ly/3Tywd1U
const isProd = process.env.NODE_ENV === 'production'

/*
`events` can be either like:
    {schema, value}
  or
    [{schema, value}, {schema, value}, ...]
*/
async function _publish(
  events,
  { secret, endpoint } = {
    secret: process.env.HYDRO_SECRET,
    endpoint: process.env.HYDRO_ENDPOINT,
  }
) {
  if (!secret || !endpoint) {
    if (isProd) throw new Error('Configure Hydro')
    return { statusCode: 200 }
  }

  events = Array.isArray(events) ? events : [events]
  const requestBody = JSON.stringify({
    events: events.map(({ schema, value }) => ({
      cluster: CLUSTER,
      schema,
      value: JSON.stringify(value), // We must double-encode the value property
    })),
  })
  const token = createHmac('sha256', secret).update(requestBody).digest('hex')

  const response = await got.post(endpoint, {
    body: requestBody,
    agent: { https: httpsAgent },
    headers: {
      Authorization: `Hydro ${token}`,
      'Content-Type': 'application/json',
      'X-Hydro-App': X_HYDRO_APP,
    },
    throwHttpErrors: false,
    retry: { limit: RETRIES },
    timeout: { request: TIMEOUT },
  })
  const { statusCode, body } = response

  statsd.increment('hydro.response_code.all', 1, [`response_code:${statusCode}`])

  // Track 3xx and 4xx in Sentry; 5xx is tracked separately from the Docs project
  if (statusCode >= 300 && statusCode < 500 && !body.includes(TIME_OUT_TEXT)) {
    report(new Error(`Failed to send event to Hydro (${statusCode})`), { statusCode, body })
  }

  return response
}

export const publish = statsd.asyncTimer(_publish, 'hydro.response_time')
