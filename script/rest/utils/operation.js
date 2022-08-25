#!/usr/bin/env node
import Ajv from 'ajv'
import httpStatusCodes from 'http-status-code'
import { readFile } from 'fs/promises'
import { get, isPlainObject } from 'lodash-es'
import { parseTemplate } from 'url-template'

import renderContent from '../../../lib/render-content/index.js'
import getCodeSamples from './create-rest-examples.js'
import operationSchema from './operation-schema.js'

const { operationUrls } = JSON.parse(
  await readFile('script/rest/utils/rest-api-overrides.json', 'utf8')
)

export default class Operation {
  #operation
  constructor(verb, requestPath, operation, globalServers) {
    this.#operation = operation
    // The global server object sets metadata including the base url for
    // all operations in a version. Individual operations can override
    // the global server url at the operation level.
    this.serverUrl = operation.servers ? operation.servers[0].url : globalServers[0].url

    const serverVariables = operation.servers
      ? operation.servers[0].variables
      : globalServers[0].variables
    if (serverVariables) {
      const templateVariables = {}
      Object.keys(serverVariables).forEach(
        (key) => (templateVariables[key] = serverVariables[key].default)
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
    this.setCategories()
    this.parameters = operation.parameters || []
    this.bodyParameters = []
    this.enabledForGitHubApps = operation['x-github'].enabledForGitHubApps
    this.codeExamples = getCodeSamples(this.#operation)
    return this
  }

  setCategories() {
    const operationId = this.#operation.operationId
    const xGithub = this.#operation['x-github']
    // Set category
    // A temporary override file allows us to override the category defined in
    // the openapi schema. Without it, we'd have to update several
    // @documentation_urls in the api code every time we move
    // an endpoint to a new page.
    this.category = operationUrls[operationId]
      ? operationUrls[operationId].category
      : xGithub.category

    // Set subcategory
    // A temporary override file allows us to override the subcategory
    // defined in the openapi schema. Without it, we'd have to update several
    // @documentation_urls in the api code every time we move
    // an endpoint to a new page.
    if (operationUrls[operationId]) {
      if (operationUrls[operationId].subcategory) {
        this.subcategory = operationUrls[operationId].subcategory
      }
    } else if (xGithub.subcategory) {
      this.subcategory = xGithub.subcategory
    }
  }

  async process() {
    await Promise.all([
      this.renderDescription(),
      this.renderStatusCodes(),
      this.renderParameterDescriptions(),
      this.renderBodyParameterDescriptions(),
      this.renderExampleResponseDescriptions(),
      this.renderPreviewNotes(),
    ])

    const ajv = new Ajv()
    const valid = ajv.validate(operationSchema, this)
    if (!valid) {
      console.error(JSON.stringify(ajv.errors, null, 2))
      throw new Error('Invalid OpenAPI operation found')
    }
  }

  getExternalDocs() {
    return this.#operation.externalDocs
  }

  async renderDescription() {
    this.descriptionHTML = await renderContent(this.#operation.description)
    return this
  }

  async renderExampleResponseDescriptions() {
    return Promise.all(
      this.codeExamples.map(async (codeExample) => {
        codeExample.response.description = await renderContent(codeExample.response.description)
        return codeExample
      })
    )
  }

  async renderStatusCodes() {
    const responses = this.#operation.responses
    const responseKeys = Object.keys(responses)
    if (responseKeys.length === 0) return []

    this.statusCodes = await Promise.all(
      responseKeys.map(async (responseCode) => {
        const response = responses[responseCode]
        const httpStatusCode = responseCode
        const httpStatusMessage = httpStatusCodes.getMessage(Number(responseCode), 'HTTP/2')
        // The OpenAPI should be updated to provide better descriptions, but
        // until then, we can catch some known generic descriptions and replace
        // them with the default http status message.
        const responseDescription =
          response.description.toLowerCase() === 'response'
            ? await renderContent(httpStatusMessage)
            : await renderContent(response.description)

        return {
          httpStatusCode,
          description: responseDescription,
        }
      })
    )
  }

  async renderParameterDescriptions() {
    return Promise.all(
      this.parameters.map(async (param) => {
        param.description = await renderContent(param.description)
        return param
      })
    )
  }

  async renderBodyParameterDescriptions() {
    if (!this.#operation.requestBody) return []
    // There is currently only one operation with more than one content type
    // and the request body parameter types are the same for both.
    // Operation Id: markdown/render-raw
    const contentType = Object.keys(this.#operation.requestBody.content)[0]
    const schema = get(this.#operation, `requestBody.content.${contentType}.schema`, {})
    // TODO: Remove this check
    if (this.#operation.operationId === 'checks/create') {
      delete schema.oneOf
    }

    this.bodyParameters = isPlainObject(schema) ? await getBodyParams(schema, true) : []
  }

  async renderPreviewNotes() {
    const previews = get(this.#operation, 'x-github.previews', [])
    this.previews = await Promise.all(
      previews.map(async (preview) => {
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
      })
    )
  }
}

// If there is a oneOf at the top level, then we have to present just one
// in the docs. We don't currently have a convention for showing more than one
// set of input parameters in the docs. Having a top-level oneOf is also very
// uncommon.
// Currently there aren't very many operations that require this treatment.
// As an example, the 'Add status check contexts' and 'Set status check contexts'
// operations have a top-level oneOf.
async function getTopLevelOneOfProperty(schema) {
  if (!schema.oneOf) {
    throw new Error('Schema does not have a requestBody oneOf property defined')
  }
  if (!(Array.isArray(schema.oneOf) && schema.oneOf.length > 0)) {
    throw new Error('Schema requestBody oneOf property is not an array')
  }
  // When a oneOf exists but the `type` differs, the case has historically
  // been that the alternate option is an array, where the first option
  // is the array as a property of the object. We need to ensure that the
  // first option listed is the most comprehensive and preferred option.
  const firstOneOfObject = schema.oneOf[0]
  const allOneOfAreObjects = schema.oneOf.every((elem) => elem.type === 'object')
  let required = firstOneOfObject.required || []
  let properties = firstOneOfObject.properties || {}

  // When all of the oneOf objects have the `type: object` we
  // need to display all of the parameters.
  // This merges all of the properties and required values.
  if (allOneOfAreObjects) {
    for (const each of schema.oneOf.slice(1)) {
      Object.assign(firstOneOfObject.properties, each.properties)
      required = firstOneOfObject.required.concat(each.required)
    }
    properties = firstOneOfObject.properties
  }
  return { properties, required }
}

// Gets the body parameters for a given schema recursively.
async function getBodyParams(schema, topLevel = false) {
  const bodyParametersParsed = []
  const schemaObject = schema.oneOf && topLevel ? await getTopLevelOneOfProperty(schema) : schema
  const properties = schemaObject.properties || {}
  const required = schemaObject.required || []

  for (const [paramKey, param] of Object.entries(properties)) {
    const paramDecorated = {}

    // OpenAPI 3.0 only had a single value for `type`. OpenAPI 3.1
    // will either be a single value or an array of values.
    // This makes type an array regardless of how many values the array
    // includes. This allows us to support 3.1 while remaining backwards
    // compatible with 3.0.
    const paramType = Array.isArray(param.type) ? param.type : [param.type]
    const additionalPropertiesType = param.additionalProperties
      ? Array.isArray(param.additionalProperties.type)
        ? param.additionalProperties.type
        : [param.additionalProperties.type]
      : []
    const childParamsGroups = []

    // If the parameter is an array or object there may be child params
    // If the parameter has oneOf or additionalProperties, they need to be
    // recursively read too.

    // There are a couple operations with additionalProperties, which allows
    // the api to define input parameters with the type dictionary. These are the only
    // two operations (at the time of adding this code) that use additionalProperties
    // Create a snapshot of dependencies for a repository
    // Update a gist
    if (param.additionalProperties && additionalPropertiesType.includes('object')) {
      const keyParam = {
        type: 'object',
        name: 'key',
        description: `<p>A user-defined key to represent an item in <code>${paramKey}</code>.</p>`,
        isRequired: param.required,
        enum: param.enum,
        default: param.default,
        childParamsGroups: [],
      }
      keyParam.childParamsGroups.push(...(await getBodyParams(param.additionalProperties)))
      childParamsGroups.push(keyParam)
    } else if (paramType && paramType.includes('array')) {
      const arrayType = param.items.type
      if (arrayType) {
        paramType.splice(paramType.indexOf('array'), 1, `array of ${arrayType}s`)
      }
      if (arrayType === 'object') {
        childParamsGroups.push(...(await getBodyParams(param.items)))
      }
    } else if (paramType && paramType.includes('object')) {
      childParamsGroups.push(...(await getBodyParams(param)))
    } else if (param && param.oneOf) {
      // get concatenated description and type
      const descriptions = []
      for (const childParam of param.oneOf) {
        paramType.push(childParam.type)
        // If there is no parent description, create a description from
        // each type
        if (!param.description) {
          if (childParam.type === 'array') {
            if (childParam.items.description) {
              descriptions.push({
                type: childParam.type,
                description: childParam.items.description,
              })
            }
          } else {
            if (childParam.description) {
              descriptions.push({ type: childParam.type, description: childParam.description })
            }
          }
        }
      }
      // Occasionally, there is no parent description and the description
      // is in the first child parameter.
      const oneOfDescriptions = descriptions.length ? descriptions[0].description : ''
      if (!param.description) param.description = oneOfDescriptions
    }

    paramDecorated.type = paramType.filter(Boolean).join(' or ')
    paramDecorated.name = paramKey
    if (topLevel) {
      paramDecorated.in = 'body'
    }
    paramDecorated.description = await renderContent(param.description)
    if (required.includes(paramKey)) {
      paramDecorated.isRequired = true
    }
    if (childParamsGroups.length > 0) {
      paramDecorated.childParamsGroups = childParamsGroups
    }
    if (param.enum) {
      paramDecorated.enum = param.enum
    }
    if (param.default) {
      paramDecorated.default = param.default
    }
    // Supports backwards compatibility for OpenAPI 3.0
    // In 3.1 a nullable type is part of the param.type array and
    // the property param.nullable does not exist.
    if (param.nullable) paramDecorated.type('null')
    bodyParametersParsed.push(paramDecorated)
  }
  return bodyParametersParsed
}
