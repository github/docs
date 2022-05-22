import crypto from 'crypto'
import got from 'got'
import statsd from '../lib/statsd.js'
import FailBot from '../lib/failbot.js'

const TIME_OUT_TEXT = 'ms has passed since batch creation'

// If the request to Hydro took an age, it could be either our
// network or that Hydro is just slow to respond. (Event possibly
// too slow to respond with a 422 code)
// If this happens, we'd rather kill it now rather than let it
// linger within the thread.
const POST_TIMEOUT_MS = 3000

export default class Hydro {
  constructor({ secret, endpoint } = {}) {
    this.secret = secret || process.env.HYDRO_SECRET
    this.endpoint = endpoint || process.env.HYDRO_ENDPOINT
  }

  /**
   * Can check if it can actually send to Hydro
   */
  maySend() {
    return Boolean(this.secret && this.endpoint && process.env.NODE_ENV !== 'test')
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

    const doPost = () =>
      got(this.endpoint, {
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
        timeout: POST_TIMEOUT_MS,
      })

    const res = await statsd.asyncTimer(doPost, 'hydro.response_time')()

    const statTags = [`response_code:${res.statusCode}`]
    statsd.increment(`hydro.response_code.${res.statusCode}`, 1, statTags)
    statsd.increment('hydro.response_code.all', 1, statTags)

    // Track hydro exceptions in Sentry,
    // but don't track 5xx because we can't do anything about service availability
    if (res.statusCode !== 200 && res.statusCode < 500) {
      const err = new Error(
        `Hydro request failed: ${res.statusCode} ${res.statusMessage} ${res.body}`
      )
      err.status = res.statusCode

      const failures = res.body

      // If Hydro just took too long, ignore it
      if (failures.includes(TIME_OUT_TEXT)) throw new Error(`Hydro timed out (${failures})`)

      FailBot.report(err, {
        hydroStatus: res.statusCode,
        hydroText: res.body,
        hydroFailures: failures,
      })

      // If the Hydro request failed as an "Unprocessable Entity", log it for diagnostics
      if (res.statusCode === 422) {
        console.error(
          `Hydro schema validation failed:\n - Request: ${body}\n - Failures: ${failures}`
        )
      }

      throw err
    }

    return res
  }
}
