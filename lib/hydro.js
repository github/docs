import crypto from 'crypto'
import { Agent } from 'https'

import got from 'got'

import statsd from '../lib/statsd.js'
import FailBot from '../lib/failbot.js'

const TIME_OUT_TEXT = 'ms has passed since batch creation'

const MOCK_HYDRO_POST =
  process.env.NODE_ENV === 'test' || JSON.parse(process.env.MOCK_HYDRO_POST || 'false')

// If the request to Hydro took an age, it could be either our
// network or that Hydro is just slow to respond. (Event possibly
// too slow to respond with a 422 code)
// If this happens, we'd rather kill it now rather than let it
// linger within the thread.
const POST_TIMEOUT_MS = 3000

let _agent
function getHttpsAgent() {
  if (!_agent) {
    const agentOptions = {
      // The most important option. This is false by default.
      keepAlive: true,
      // 32 because it's what's recommended here
      // https://docs.microsoft.com/en-us/azure/app-service/app-service-web-nodejs-best-practices-and-troubleshoot-guide#my-node-application-is-making-excessive-outbound-calls
      maxSockets: 32,
    }
    _agent = new Agent(agentOptions)
  }
  return _agent
}

export default class Hydro {
  constructor({ secret, endpoint, forceDisableMock } = {}) {
    // When mocking, the secret isn't important because nothing's actually
    // password protected in terms of HTTP authorization. But, the
    // secret is used for creating an HMAC payload so it has to be
    // a string.
    this.secret = secret || process.env.HYDRO_SECRET || (MOCK_HYDRO_POST && '')
    this.endpoint = endpoint || process.env.HYDRO_ENDPOINT
    // This class is involved in 2 types of jest tests:
    //  1. end-to-end tests where jest talks to localhost:4000 (with NODE_ENV===test)
    //  2. literal unit tests that might mock the socket stuff
    // Because `MOCK_HYDRO_POST = process.env.NODE_ENV === 'test'` gets set
    // for either type of jest tests, this additional setting makes it
    // possible to override `process.env.NODE_ENV === 'test'` from
    // mocking the HTTP calls.
    this.forceDisableMock = forceDisableMock
  }

  /**
   * Can check if it can actually send to Hydro
   */
  maySend() {
    return Boolean(this.secret && this.endpoint) || MOCK_HYDRO_POST
  }

  /**
   * Generate a SHA256 hash of the payload using the secret
   * to authenticate with Hydro
   * @param {string} body
   */
  generatePayloadHmac(body) {
    return crypto.createHmac('sha256', this.secret).update(body).digest('hex')
  }

  /**
   * Publish a single event to Hydro
   * @param {string} schema
   * @param {any} value
   */
  async publish(schema, value) {
    const body = JSON.stringify({
      events: [
        {
          schema,
          value: JSON.stringify(value), // We must double-encode the value property
          cluster: 'potomac', // We only have ability to publish externally to potomac cluster
        },
      ],
    })
    const token = this.generatePayloadHmac(body)

    const agent = getHttpsAgent()

    const doPost = async () => {
      // We *could* exit early on this whole `publish()` method if we know
      // we're going to "mock" Hydro anyway, but injecting here, before
      // the actual network operation, we make most of this method's code
      // execute without actually depending on real network. This is
      // good for any functional tests that depend on this, e.g. jest tests.
      if (MOCK_HYDRO_POST && !this.forceDisableMock) {
        return { statusCode: 200 }
      }
      return got(this.endpoint, {
        method: 'POST',
        body,
        headers: {
          Authorization: `Hydro ${token}`,
          'Content-Type': 'application/json',
          'X-Hydro-App': 'docs-production',
        },
        // Because we prefer to handle the status code manually below
        throwHttpErrors: false,
        // The default is no timeout.
        timeout: {
          response: POST_TIMEOUT_MS,
        },
        agent: {
          // Deliberately not setting up a `http` or `http2` agent
          // because it won't be used for this particular `got` request.
          https: agent,
        },
      })
    }

    const res = await statsd.asyncTimer(doPost, 'hydro.response_time')()

    const statTags = [`response_code:${res.statusCode}`]
    statsd.increment(`hydro.response_code.${res.statusCode}`, 1, statTags)
    statsd.increment('hydro.response_code.all', 1, statTags)

    // Track hydro exceptions in Sentry,
    // but don't track 5xx because we can't do anything about service availability
    if (res.statusCode !== 200 && res.statusCode < 500) {
      const hydroText = await res.text()
      const err = new Error(
        `Hydro request failed: (${res.statusCode}) ${res.statusMessage} - ${hydroText}`
      )
      err.status = res.statusCode

      // If the Hydro request failed as an "Unprocessable Entity":
      //  - If it was a timeout, don't log it to Sentry
      //  - If not, log it to Sentry for diagnostics
      const hydroFailures = []
      if (res.statusCode === 422) {
        let failureResponse
        try {
          failureResponse = JSON.parse(hydroText)
        } catch (error) {
          // Not JSON... ignore it
        }

        if (failureResponse) {
          const { failures } = failureResponse
          if (Array.isArray(failures) && failures.length > 0) {
            // IMPORTANT: Although these timeouts typically contain a `retriable: true` property,
            // our discussions with the Hydro team left us deciding we did NOT want to retry
            // sending them. The timeout response does NOT guarantee that the original message
            // failed to make it through. As such, if we resend, we may create duplicate events;
            // if we don't, we may drop events.

            // Find the timeouts, if any
            const timeoutFailures = failures.filter(({ error }) => error.includes(TIME_OUT_TEXT))

            // If there were ONLY timeouts, throw the error to avoid logging to Sentry
            if (timeoutFailures.length === failures.length) {
              err.message = `Hydro timed out: ${failures}`
              err.status = 503 // Give it a more accurate error code
              throw err
            }

            // Compile list of the other failures for logging
            hydroFailures.push(...failures.filter(({ error }) => !error.includes(TIME_OUT_TEXT)))
          }
        }

        console.error(
          `Hydro schema validation failed:\n - Request: ${body}\n - Failure: (${res.statusCode}) ${hydroText}`
        )
      }

      FailBot.report(err, {
        hydroStatus: res.statusCode,
        hydroText,
        hydroFailures,
      })

      throw err
    }

    return res
  }
}
