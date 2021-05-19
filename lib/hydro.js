const crypto = require('crypto')
const fetch = require('node-fetch')
const statsd = require('../lib/statsd')
const FailBot = require('../lib/failbot')

const SCHEMAS = {
  page: 'docs.v0.PageEvent',
  exit: 'docs.v0.ExitEvent',
  link: 'docs.v0.LinkEvent',
  search: 'docs.v0.SearchEvent',
  navigate: 'docs.v0.NavigateEvent',
  survey: 'docs.v0.SurveyEvent',
  experiment: 'docs.v0.ExperimentEvent',
  redirect: 'docs.v0.RedirectEvent',
  clipboard: 'docs.v0.ClipboardEvent',
  print: 'docs.v0.PrintEvent'
}

module.exports = class Hydro {
  constructor ({ secret, endpoint } = {}) {
    this.secret = secret || process.env.HYDRO_SECRET
    this.endpoint = endpoint || process.env.HYDRO_ENDPOINT
    this.schemas = SCHEMAS
  }

  /**
   * Can check if it can actually send to Hydro
   */
  maySend () {
    return Boolean(this.secret && this.endpoint)
  }

  /**
   * Generate a SHA256 hash of the payload using the secret
   * to authenticate with Hydro
   * @param {string} body
   */
  generatePayloadHmac (body) {
    return crypto.createHmac('sha256', this.secret)
      .update(body)
      .digest('hex')
  }

  /**
   * Publish a single event to Hydro
   * @param {string} schema
   * @param {any} value
   */
  async publish (schema, value) {
    return this.publishMany([{ schema, value }])
  }

  /**
   * Publish multiple events to Hydro
   * @param {[{ schema: string, value: any }]} events
   */
  async publishMany (events) {
    const body = JSON.stringify({
      events: events.map(({ schema, value }) => ({
        schema,
        value: JSON.stringify(value), // We must double-encode the value property
        cluster: 'potomac' // We only have ability to publish externally to potomac cluster
      }))
    })
    const token = this.generatePayloadHmac(body)

    const doFetch = () => fetch(this.endpoint, {
      method: 'POST',
      body,
      headers: {
        Authorization: `Hydro ${token}`,
        'Content-Type': 'application/json',
        'X-Hydro-App': 'docs-production'
      }
    })

    const res = await statsd.asyncTimer(doFetch, 'hydro.response_time')()

    const statTags = [`response_code:${res.status}`]
    statsd.increment(`hydro.response_code.${res.status}`, 1, statTags)
    statsd.increment('hydro.response_code.all', 1, statTags)

    // Track hydro exceptions in Sentry, but don't track 503s because we can't do anything about service availability
    if (!res.ok && res.status !== 503) {
      const err = new Error(`Hydro request failed: ${res.statusText}`)
      err.status = res.status

      FailBot.report(err, {
        hydroStatus: res.status,
        hydroText: res.statusText
      })

      throw err
    }

    return res
  }
}
