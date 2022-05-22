import crypto from 'crypto'
import fetch from 'node-fetch'
import statsd from '../lib/statsd.js'
import FailBot from '../lib/failbot.js'

const TIME_OUT_TEXT = 'ms has passed since batch creation'

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

    const doFetch = () =>
      fetch(this.endpoint, {
        method: 'POST',
        body,
        headers: {
          Authorization: `Hydro ${token}`,
          'Content-Type': 'application/json',
          'X-Hydro-App': 'docs-production',
        },
      })

    const res = await statsd.asyncTimer(doFetch, 'hydro.response_time')()

    const statTags = [`response_code:${res.status}`]
    statsd.increment(`hydro.response_code.${res.status}`, 1, statTags)
    statsd.increment('hydro.response_code.all', 1, statTags)

    // Track hydro exceptions in Sentry,
    // but don't track 5xx because we can't do anything about service availability
    if (!res.ok && res.status < 500) {
      const err = new Error(`Hydro request failed: ${res.statusText}`)
      err.status = res.status

      const failures = await res.text()

      // If Hydro just took too long, ignore it
      if (failures.includes(TIME_OUT_TEXT)) throw new Error(`Hydro timed out (${failures})`)

      FailBot.report(err, {
        hydroStatus: res.status,
        hydroText: res.statusText,
        hydroFailures: failures,
      })

      // If the Hydro request failed as an "Unprocessable Entity", log it for diagnostics
      if (res.status === 422) {
        console.error(
          `Hydro schema validation failed:\n - Request: ${body}\n - Failures: ${failures}`
        )
      }

      throw err
    }

    return res
  }
}
