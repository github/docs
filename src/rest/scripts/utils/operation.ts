// @ts-ignore - no types available
import httpStatusCodes from 'http-status-code'
import { get, isPlainObject } from 'lodash-es'
import { parseTemplate } from 'url-template'
// @ts-ignore - no types available
import mergeAllOf from 'json-schema-merge-allof'

import { renderContent } from './render-content'
import getCodeSamples from './create-rest-examples'
import operationSchema from './operation-schema'
import { validateJson } from '@/tests/lib/validate-json-schema'
import { getBodyParams } from './get-body-params'

export default class Operation {
  // OpenAPI operation object - schema is dynamic and varies by endpoint
  #operation: any
  serverUrl: string
  verb: string
  requestPath: string
  title: string
  category: string
  subcategory: string
  // OpenAPI parameters vary by endpoint, no fixed schema available
  parameters: any[]
  // Body parameters are dynamically generated from OpenAPI schema
  bodyParameters: any[]
  descriptionHTML?: string
  // Code examples structure varies by language and endpoint
  codeExamples?: any[]
  // Status codes are dynamically generated from OpenAPI responses
  statusCodes?: any[]
  previews?: any[]
  // Programmatic access data structure varies by operation
  progAccess?: any

  // OpenAPI operation and globalServers objects have dynamic schema
  constructor(verb: string, requestPath: string, operation: any, globalServers?: any[]) {
    this.#operation = operation
    // The global server object sets metadata including the base url for
    // all operations in a version. Individual operations can override
    // the global server url at the operation level.
    this.serverUrl = operation.servers ? operation.servers[0].url : globalServers?.[0]?.url

    const serverVariables = operation.servers
      ? operation.servers[0].variables
      : globalServers?.[0]?.variables
    if (serverVariables) {
      // Template variables structure comes from OpenAPI server variables
      const templateVariables: Record<string, any> = {}
      Object.keys(serverVariables).forEach(
        (key) => (templateVariables[key] = serverVariables[key].default),
      )
      this.serverUrl = parseTemplate(this.serverUrl).expand(templateVariables)
    }

    this.serverUrl = this.serverUrl.replace('http:', 'http(s):')

    // Attach some global properties to the operation object to use
    // during processing
    this.#operation.serverUrl = this.serverUrl
    this.#operation.requestPath = requestPath
    this.#operation.verb = verb

    this.verb = verb
    this.requestPath = requestPath
    this.title = operation.summary
    this.category = operation['x-github'].category
    this.subcategory = operation['x-github'].subcategory
    this.parameters = operation.parameters || []
    this.bodyParameters = []
    return this
  }

  // Programmatic access data structure varies by operation and is not strongly typed
  async process(progAccessData: any): Promise<void> {
    await Promise.all([
      this.renderCodeExamples(),
      this.renderDescription(),
      this.renderStatusCodes(),
      this.renderParameterDescriptions(),
      this.renderBodyParameterDescriptions(),
      this.renderPreviewNotes(),
      this.programmaticAccess(progAccessData),
    ])

    const { isValid, errors } = validateJson(operationSchema, this)
    if (!isValid) {
      console.error(JSON.stringify(errors, null, 2))
      throw new Error('Invalid OpenAPI operation found')
    }
  }

  async renderDescription(): Promise<this> {
    try {
      this.descriptionHTML = await renderContent(this.#operation.description)
      return this
    } catch (error) {
      console.error(error)
      throw new Error(`Error rendering description for ${this.verb} ${this.requestPath}`)
    }
  }

  async renderCodeExamples(): Promise<any[]> {
    const codeExamples = await getCodeSamples(this.#operation)
    try {
      this.codeExamples = await Promise.all(
        // Code example structure varies by endpoint and language
        codeExamples.map(async (codeExample: any) => {
          codeExample.response.description = await renderContent(codeExample.response.description)
          return codeExample
        }),
      )
      return this.codeExamples
    } catch (error) {
      console.error(error)
      throw new Error(`Error generating code examples for ${this.verb} ${this.requestPath}`)
    }
  }

  async renderStatusCodes(): Promise<void> {
    const responses = this.#operation.responses
    const responseKeys = Object.keys(responses)
    if (responseKeys.length === 0) return

    try {
      this.statusCodes = await Promise.all(
        responseKeys.map(async (responseCode) => {
          const response = responses[responseCode]
          const httpStatusCode = responseCode
          const httpStatusMessage = httpStatusCodes.getMessage(Number(responseCode), 'HTTP/2')
          // The OpenAPI should be updated to provide better descriptions, but
          // until then, we can catch some known generic descriptions and replace
          // them with the default http status message.
          const responseDescription =
            !response.description || response.description?.toLowerCase() === 'response'
              ? await renderContent(httpStatusMessage)
              : await renderContent(response.description)

          return {
            httpStatusCode,
            description: responseDescription,
          }
        }),
      )
    } catch (error) {
      console.error(error)
      throw new Error(`Error rendering status codes for ${this.verb} ${this.requestPath}`)
    }
  }

  async renderParameterDescriptions(): Promise<any[]> {
    try {
      return Promise.all(
        this.parameters.map(async (param) => {
          param.description = await renderContent(param.description)
          return param
        }),
      )
    } catch (error) {
      console.error(error)
      throw new Error(`Error rendering parameter descriptions for ${this.verb} ${this.requestPath}`)
    }
  }

  async renderBodyParameterDescriptions(): Promise<void> {
    if (!this.#operation.requestBody) return

    // There is currently only one operation with more than one content type
    // and the request body parameter types are the same for both.
    // Operation Id: markdown/render-raw
    const contentType = Object.keys(this.#operation.requestBody.content)[0]
    const schema = get(this.#operation, `requestBody.content.${contentType}.schema`, {})
    // TODO: Remove this check
    if (this.#operation.operationId === 'checks/create') {
      delete schema.oneOf
    }
    // Merges any instances of allOf in the schema using a deep merge
    const mergedAllofSchema = mergeAllOf(schema)
    try {
      this.bodyParameters = isPlainObject(schema)
        ? await getBodyParams(mergedAllofSchema, true)
        : []
    } catch (error) {
      console.error(error)
      throw new Error(
        `Error rendering body parameter descriptions for ${this.verb} ${this.requestPath}`,
      )
    }
  }

  async renderPreviewNotes(): Promise<void> {
    const previews = get(this.#operation, 'x-github.previews', [])
    try {
      this.previews = await Promise.all(
        // Preview note structure from OpenAPI x-github extension is dynamic
        previews.map(async (preview: any) => {
          const note = preview.note
            // remove extra leading and trailing newlines
            .replace(/```\n\n\n/gm, '```\n')
            .replace(/```\n\n/gm, '```\n')
            .replace(/\n\n\n```/gm, '\n```')
            .replace(/\n\n```/gm, '\n```')

            // convert single-backtick code snippets to fully fenced triple-backtick blocks
            // example: This is the description.\n\n`application/vnd.github.machine-man-preview+json`
            .replace(/\n`application/, '\n```\napplication')
            .replace(/json`$/, 'json\n```')
          return await renderContent(note)
        }),
      )
    } catch (error) {
      console.error(error)
      throw new Error(`Error rendering preview notes for ${this.verb} ${this.requestPath}`)
    }
  }

  // Programmatic access data structure varies by operation and is not strongly typed
  programmaticAccess(progAccessData: any): void {
    this.progAccess = progAccessData[this.#operation.operationId]
  }
}
