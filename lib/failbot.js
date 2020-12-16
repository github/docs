const fetch = require('node-fetch')

module.exports = class FailBot {
  constructor ({ app, haystackURL, headers }) {
    this.app = app
    this.haystackURL = haystackURL
    this.headers = headers
  }

  /**
   * Report an error to Sentry
   * @param {Error} error
   * @param {any} metadata
   * @param {any} [headers]
   */
  static async report (error, metadata, headers = {}) {
    // If there's no HAYSTACK_URL set, bail early
    if (!process.env.HAYSTACK_URL) return

    const failbot = new FailBot({
      app: 'docs',
      haystackURL: process.env.HAYSTACK_URL,
      headers
    })

    return failbot.sendException(error, metadata)
  }

  /**
   * Create a rollup of this error by generating a base64 representation
   * @param {Error} error
   */
  createRollup (error) {
    const stackLine = error.stack && error.stack.split('\n')[1]
    const str = `${error.name}:${stackLine}`.replace(/=/g, '')
    return Buffer.from(str).toString('base64')
  }

  /**
   * Format the error to a plain JSON object with additional data
   * @param {Error} error
   * @param {any} metadata
   */
  formatJSON (error, metadata) {
    return Object.assign({}, metadata, {
      /* eslint-disable camelcase */
      created_at: new Date().toISOString(),
      rollup: this.createRollup(error),
      class: error.name,
      message: error.message,
      backtrace: error.stack || '',
      js_environment: `Node.js ${process.version}`
      /* eslint-enable camelcase */
    })
  }

  /**
   * Populate default context from settings. Since settings commonly comes from
   * ENV, this allows setting defaults for the context via the environment.
   */
  getFailbotContext () {
    const failbotKeys = {}

    for (const key in process.env) {
      if (key.startsWith('FAILBOT_CONTEXT_')) {
        const formattedKey = key.replace(/^FAILBOT_CONTEXT_/, '').toLowerCase()
        failbotKeys[formattedKey] = process.env[key]
      }
    }

    return failbotKeys
  }

  /**
   * Send the error to Sentry
   * @param {Error} error
   * @param {any} metadata
   */
  async sendException (error, metadata = {}) {
    const data = Object.assign({ app: this.app }, this.getFailbotContext(), metadata)
    const body = this.formatJSON(error, Object.assign({ app: this.app }, data))

    return fetch(this.haystackURL, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        ...this.headers,
        'Content-Type': 'application/json'
      }
    })
  }
}
