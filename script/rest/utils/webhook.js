#!/usr/bin/env node
import Ajv from 'ajv'
import { get, isPlainObject } from 'lodash-es'

import renderContent from '../../../lib/render-content/index.js'
import webhookSchema from './webhook-schema.js'
import { getBodyParams } from './get-body-params.js'

const NO_CHILD_PROPERTIES = [
  'action',
  'enterprise',
  'installation',
  'organization',
  'repository',
  'sender',
]

export default class Webhook {
  #webhook
  constructor(webhook) {
    this.#webhook = webhook
    this.descriptionHtml = ''
    this.summaryHtml = ''
    this.bodyParameters = []
    this.availability = webhook['x-github']['supported-webhook-types']
    this.action = get(
      webhook,
      `requestBody.content['application/json'].schema.properties.action.enum[0]`,
      null
    )
    this.category = webhook['x-github'].subcategory
    return this
  }

  async process() {
    await Promise.all([this.renderDescription(), this.renderBodyParameterDescriptions()])

    const ajv = new Ajv()
    const valid = ajv.validate(webhookSchema, this)
    if (!valid) {
      console.error(JSON.stringify(ajv.errors, null, 2))
      throw new Error(`Invalid OpenAPI webhook found: ${this.category}`)
    }
  }

  async renderDescription() {
    this.descriptionHtml = await renderContent(this.#webhook.description)
    this.summaryHtml = await renderContent(this.#webhook.summary)
    return this
  }

  async renderBodyParameterDescriptions() {
    if (!this.#webhook.requestBody) return []
    const schema = get(this.#webhook, `requestBody.content.['application/json'].schema`, {})
    this.bodyParameters = isPlainObject(schema) ? await getBodyParams(schema, true, this.title) : []

    // Removes the children of the common properties
    this.bodyParameters.forEach((param) => {
      if (NO_CHILD_PROPERTIES.includes(param.name)) {
        param.childParamsGroups = []
      }
    })
  }
}
