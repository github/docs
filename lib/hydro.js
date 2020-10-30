const crypto = require('crypto')
const fetch = require('node-fetch')

const SCHEMAS = {
  page: 'docs.v0.PageEvent',
  exit: 'docs.v0.ExitEvent',
  link: 'docs.v0.LinkEvent',
  search: 'docs.v0.SearchEvent',
  navigate: 'docs.v0.NavigateEvent',
  survey: 'docs.v0.SurveyEvent',
  experiment: 'docs.v0.ExperimentEvent'
}

module.exports = class Hydro {
  constructor ({ secret, endpoint } = {}) {
    this.secret = secret || process.env.HYDRO_SECRET
    this.endpoint = endpoint || process.env.HYDRO_ENDPOINT
    this.schemas = SCHEMAS
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

    return fetch(this.endpoint, {
      method: 'POST',
      body,
      headers: {
        Authorization: `Hydro ${token}`,
        'Content-Type': 'application/json',
        'X-Hydro-App': 'docs-production'
      }
    })
  }
}
