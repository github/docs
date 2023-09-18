#!/usr/bin/env node
import Ajv from 'ajv'
import { get, isPlainObject } from 'lodash-es'

import { renderContent } from '#src/content-render/index.js'
import webhookSchema from './webhook-schema.js'
import { getBodyParams } from '../../rest/scripts/utils/get-body-params.js'

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
      null,
    )

    // for some webhook action types (like some pull-request webhook types) the
    // schema properties are under a oneOf so we try and take the action from
    // the first one (the action will be the same across oneOf items)
    if (!this.action) {
      this.action = get(
        webhook,
        `requestBody.content['application/json'].schema.oneOf[0].properties.action.enum[0]`,
        null,
      )
    }

    // The OpenAPI uses hyphens for the webhook names, but the webhooks
    // are sent using underscores (e.g. `branch_protection_rule` instead
    // of `branch-protection-rule`)
    this.category = webhook['x-github'].subcategory.replaceAll('-', '_')
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
