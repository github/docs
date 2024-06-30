import { Parameter, StatusCode, CodeSample, BodyParameter } from 'src/rest/components/types'

export interface WebhookT {
  actions: string[]
  webhookActions: WebhookAction[]
}

interface WebhookActionData {
  verb: string
  title: string
  descriptionHtml: string
  summaryHtml: string
  previews: Array<string>
  requestPath: string
  serverUrl: string
  statusCodes: Array<StatusCode>
  parameters: Array<Parameter>
  bodyParameters: Array<BodyParameter>
  category: string
  subcategory: string
  codeExamples: Array<CodeSample>
  availability: Array<string>
  action: string
  payloadExample?: Object
}
export interface WebhookAction {
  name: string
  actionTypes: string[]
  data: WebhookActionData
}

export type WebhookData = {
  [key: string]: WebhookActionData
}
