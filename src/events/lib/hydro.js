import { createHmac } from 'crypto'
import { Agent } from 'node:https'
import got from 'got'
import { isNil } from 'lodash-es'
import statsd from '#src/observability/lib/statsd.js'
import { report } from '#src/observability/lib/failbot.js'
import { MAX_REQUEST_TIMEOUT } from '../../../lib/constants.js'

const TIME_OUT_TEXT = 'ms has passed since batch creation'
const SERVER_DISCONNECT_TEXT = 'The server disconnected before a response was received'
const X_HYDRO_APP = 'docs-production'
const CLUSTER = 'potomac' // We only have ability to publish externally to potomac cluster
const TIMEOUT = MAX_REQUEST_TIMEOUT - 1000 // Limit because Express will terminate at MAX_REQUEST_TIMEOUT
const RETRIES = 0 // We care about aggregate statistics; a few dropped events isn't a big deal
const httpsAgent = new Agent({ keepAlive: true, maxSockets: 32 }) // keepAlive: https://gh.io/AAk2qio -- 32: https://bit.ly/3Tywd1U
const { NODE_ENV, HYDRO_SECRET, HYDRO_ENDPOINT } = process.env
const inProd = NODE_ENV === 'production'

if (inProd && (isNil(HYDRO_SECRET) || isNil(HYDRO_ENDPOINT))) {
  console.warn(
    'Running in production but HYDRO_SECRET and HYDRO_ENDPOINT environment variables are not set.',
  )
}

/*
`events` can be either like:
    {schema, value}
  or
    [{schema, value}, {schema, value}, ...]
*/
async function _publish(
  events,
  { secret, endpoint } = { secret: HYDRO_SECRET, endpoint: HYDRO_ENDPOINT },
) {
  if (!secret || !endpoint) {
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
  if (
    statusCode >= 300 &&
    statusCode < 500 &&
    !body.includes(TIME_OUT_TEXT) &&
    !body.includes(SERVER_DISCONNECT_TEXT)
  ) {
    const error = new Error(`Failed to send event to Hydro (${statusCode})`)
    if (inProd) {
      report(error, { statusCode, body })
    } else {
      throw error
    }
  }

  return response
}

export const publish = statsd.asyncTimer(_publish, 'hydro.response_time')
