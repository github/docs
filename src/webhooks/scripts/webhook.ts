import { get, isPlainObject } from 'lodash-es'
import { getJsonValidator } from '@/tests/lib/validate-json-schema'
import { renderContent } from '@/content-render/index'
import { normalizeDocsUrls } from '../../rest/scripts/utils/normalize-docs-urls'
import webhookSchema from './webhook-schema'
import { getBodyParams, TransformedParam } from '../../rest/scripts/utils/get-body-params'

const NO_CHILD_PROPERTIES = [
  'action',
  'comment',
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
        schema: Record<string, unknown>
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

    // Some pull-request webhooks put the same action enum under the first oneOf schema.
    if (!this.action) {
      this.action = get(
        webhook,
        `requestBody.content['application/json'].schema.oneOf[0].properties.action.enum[0]`,
        null,
      )
    }

    // OpenAPI uses branch-protection-rule, but delivered webhooks use branch_protection_rule.
    this.category = webhook['x-github'].subcategory.replace(/-/g, '_')
  }

  async process(): Promise<void> {
    await Promise.all([this.renderDescription(), this.renderBodyParameterDescriptions()])

    const isValid = validate(this as WebhookInterface)
    if (!isValid) {
      console.error(JSON.stringify(validate.errors, null, 2))
      throw new Error(`Invalid OpenAPI webhook found: ${this.category}`)
    }
  }

  async renderDescription(): Promise<this> {
    this.descriptionHtml = normalizeDocsUrls(await renderContent(this.#webhook.description))
    this.summaryHtml = normalizeDocsUrls(await renderContent(this.#webhook.summary))
    return this
  }

  async renderBodyParameterDescriptions(): Promise<void> {
    if (!this.#webhook.requestBody) return
    const schema = get(this.#webhook, `requestBody.content['application/json'].schema`, {})
    this.bodyParameters = isPlainObject(schema) ? await getBodyParams(schema, true) : []

    // Common top-level properties do not need expanded child parameter groups.
    for (const param of this.bodyParameters) {
      if (NO_CHILD_PROPERTIES.includes(param.name)) {
        param.childParamsGroups = []
      }
    }
  }
}
