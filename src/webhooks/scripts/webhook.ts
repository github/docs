#!/usr/bin/env node
import { get, isPlainObject } from 'lodash-es'
import { getJsonValidator } from '@/tests/lib/validate-json-schema'
import { renderContent } from '@/content-render/index'
import webhookSchema from './webhook-schema'
import { getBodyParams, TransformedParam } from '../../rest/scripts/utils/get-body-params'

const NO_CHILD_PROPERTIES = [
  'action',
  'enterprise',
  'installation',
  'organization',
  'repository',
  'sender',
]

const validate = getJsonValidator(webhookSchema)

export interface WebhookSchema {
  description: string
  summary: string
  requestBody?: {
    content: {
      'application/json': {
        schema: Record<string, any>
      }
    }
  }
  'x-github': {
    'supported-webhook-types': string[]
    subcategory: string
  }
}

interface WebhookInterface {
  descriptionHtml: string
  summaryHtml: string
  bodyParameters: TransformedParam[]
  availability: string[]
  action: string | null
  category: string
  process(): Promise<void>
  renderDescription(): Promise<this>
  renderBodyParameterDescriptions(): Promise<void>
}

export default class Webhook implements WebhookInterface {
  #webhook: WebhookSchema
  descriptionHtml: string = ''
  summaryHtml: string = ''
  bodyParameters: TransformedParam[] = []
  availability: string[]
  action: string | null
  category: string

  constructor(webhook: WebhookSchema) {
    this.#webhook = webhook
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
    this.category = webhook['x-github'].subcategory.replace(/-/g, '_')
  }

  async process(): Promise<void> {
    await Promise.all([this.renderDescription(), this.renderBodyParameterDescriptions()])

    const isValid = validate(this as WebhookInterface) // Add type assertion here
    if (!isValid) {
      console.error(JSON.stringify(validate.errors, null, 2))
      throw new Error(`Invalid OpenAPI webhook found: ${this.category}`)
    }
  }

  async renderDescription(): Promise<this> {
    this.descriptionHtml = await renderContent(this.#webhook.description)
    this.summaryHtml = await renderContent(this.#webhook.summary)
    return this
  }

  async renderBodyParameterDescriptions(): Promise<void> {
    if (!this.#webhook.requestBody) return
    const schema = get(this.#webhook, `requestBody.content['application/json'].schema`, {})
    this.bodyParameters = isPlainObject(schema) ? await getBodyParams(schema, true) : []

    // Removes the children of the common properties
    this.bodyParameters.forEach((param) => {
      if (NO_CHILD_PROPERTIES.includes(param.name)) {
        param.childParamsGroups = []
      }
    })
  }
}
