const crypto = require('crypto')
const fetch = require('node-fetch')

module.exports = class Hydro {
  constructor ({ secret, endpoint }) {
    this.secret = secret || process.env.HYDRO_SECRET
    this.endpoint = endpoint || process.env.HYDRO_ENDPOINT
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
    const body = JSON.stringify({ events })
    const token = this.generatePayloadHmac(body)

    return fetch(this.endpoint, {
      method: 'POST',
      body,
      headers: {
        Authorization: `Hydro ${token}`,
        'Content-Type': 'application/json',
        'X-Hydro-App': 'docs'
      }
    })
  }
}
