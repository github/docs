#!/usr/bin/env node
import Ajv from 'ajv'
import GitHubSlugger from 'github-slugger'
import httpStatusCodes from 'http-status-code'
import { readFile } from 'fs/promises'
import { get, flatten, isPlainObject } from 'lodash-es'
import { parseTemplate } from 'url-template'

import renderContent from '../../../lib/render-content/index.js'
import getCodeSamples from './create-rest-examples.js'
import operationSchema from './operation-schema.js'

const { operationUrls } = JSON.parse(
  await readFile('script/rest/utils/rest-api-overrides.json', 'utf8')
)
const slugger = new GitHubSlugger()

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
    this.serverUrlOverride()

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

  serverUrlOverride() {
    // TODO - remove this once github pull #214649
    // lands in this repo's lib/rest/static/dereferenced directory
    if (
      this.#operation['x-github'].subcategory &&
      this.#operation['x-github'].subcategory === 'management-console'
    ) {
      this.serverUrl = this.serverUrl.replace('/api/v3', '')
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
    const contentType = Object.keys(this.#operation.requestBody.content)[0]
    let bodyParamsObject = get(
      this.#operation,
      `requestBody.content.${contentType}.schema.properties`,
      {}
    )
    let requiredParams = get(
      this.#operation,
      `requestBody.content.${contentType}.schema.required`,
      []
    )
    const oneOfObject = get(
      this.#operation,
      `requestBody.content.${contentType}.schema.oneOf`,
      undefined
    )

    // oneOf is an array of input parameter options, so we need to either
    //  use the first option or munge the options together.
    if (oneOfObject) {
      const firstOneOfObject = oneOfObject[0]
      const allOneOfAreObjects =
        oneOfObject.filter((elem) => elem.type === 'object').length === oneOfObject.length

      // TODO: Remove this check
      // This operation shouldn't have a oneOf in this case, it needs to be
      // removed from the schema in the openapi schema repo.
      if (this.#operation.operationId === 'checks/create') {
        delete bodyParamsObject.oneOf
      } else if (allOneOfAreObjects) {
        // When all of the oneOf objects have the `type: object` we
        // need to display all of the parameters.
        // This merges all of the properties and required values into the
        // first requestBody object.
        for (let i = 1; i < oneOfObject.length; i++) {
          Object.assign(firstOneOfObject.properties, oneOfObject[i].properties)
          requiredParams = firstOneOfObject.required.concat(oneOfObject[i].required)
        }
        bodyParamsObject = firstOneOfObject.properties
      } else if (oneOfObject) {
        // When a oneOf exists but the `type` differs, the case has historically
        // been that the alternate option is an array, where the first option
        // is the array as a property of the object. We need to ensure that the
        // first option listed is the most comprehensive and preferred option.
        bodyParamsObject = firstOneOfObject.properties
        requiredParams = firstOneOfObject.required
      }
    }
    this.bodyParameters = await getBodyParams(bodyParamsObject, requiredParams)
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

// need to use this function recursively to get child and grandchild params
async function getBodyParams(paramsObject, requiredParams) {
  if (!isPlainObject(paramsObject)) return []

  return Promise.all(
    Object.keys(paramsObject).map(async (paramKey) => {
      const param = paramsObject[paramKey]
      param.name = paramKey
      param.in = 'body'
      param.rawType = param.type
      // OpenAPI 3.0 only had a single value for `type`. OpenAPI 3.1
      // will either be a single value or an array of values.
      // This makes type an array regardless of how many values the array
      // includes. This allows us to support 3.1 while remaining backwards
      // compatible with 3.0.
      if (!Array.isArray(param.type)) param.type = [param.type]
      param.rawDescription = param.description

      // Stores the types listed under the `Type` column in the `Parameters`
      // table in the REST API docs. When the parameter contains oneOf
      // there are multiple acceptable parameters that we should list.
      const paramArray = []

      const oneOfArray = param.oneOf
      const isOneOfObjectOrArray = oneOfArray
        ? oneOfArray.filter((elem) => elem.type !== 'object' || elem.type !== 'array')
        : false

      // When oneOf has the type array or object, the type is defined
      // in a child object
      if (oneOfArray && isOneOfObjectOrArray.length > 0) {
        // Store the defined types
        paramArray.push(oneOfArray.filter((elem) => elem.type).map((elem) => elem.type))

        // If an object doesn't have a description, it is invalid
        const oneOfArrayWithDescription = oneOfArray.filter((elem) => elem.description)

        // Use the parent description when set, otherwise enumerate each
        // description in the `Description` column of the `Parameters` table.
        if (!param.description && oneOfArrayWithDescription.length > 1) {
          param.description = oneOfArray
            .filter((elem) => elem.description)
            .map((elem) => `**Type ${elem.type}** - ${elem.description}`)
            .join('\n\n')
        } else if (!param.description && oneOfArrayWithDescription.length === 1) {
          // When there is only on valid description, use that one.
          param.description = oneOfArrayWithDescription[0].description
        }
      }

      // Arrays require modifying the displayed type (e.g., array of strings)
      if (param.type.includes('array')) {
        if (param.items.type) paramArray.push(`array of ${param.items.type}s`)
        if (param.items.oneOf) {
          paramArray.push(param.items.oneOf.map((elem) => `array of ${elem.type}s`))
        }
        // push the remaining types in the param.type array
        // that aren't type array
        const remainingItems = [...param.type]
        const indexOfArrayType = remainingItems.indexOf('array')
        remainingItems.splice(indexOfArrayType, 1)
        paramArray.push(...remainingItems)
      } else if (param.type) {
        paramArray.push(...param.type)
      }
      // Supports backwards compatibility for OpenAPI 3.0
      // In 3.1 a nullable type is part of the param.type array and
      // the property param.nullable does not exist.
      if (param.nullable) paramArray.push('null')

      param.type = paramArray.flat().join(' or ')
      param.description = param.description || ''
      const isRequired = requiredParams && requiredParams.includes(param.name)
      param.isRequired = isRequired
      param.description = await renderContent(param.description)
      // there may be zero, one, or multiple object parameters that have children parameters
      param.childParamsGroups = []
      const childParamsGroup = await getChildParamsGroup(param)

      if (childParamsGroup && childParamsGroup.params.length) {
        param.childParamsGroups.push(childParamsGroup)
      }

      // If the param is an object, it may have child object params that have child params :/
      // Objects can potentially be null where the rawType is [ 'object', 'null' ].
      if (
        param.rawType === 'object' ||
        (Array.isArray(param.rawType) && param.rawType.includes('object'))
      ) {
        param.childParamsGroups.push(
          ...flatten(
            childParamsGroup.params
              .filter((param) => param.childParamsGroups.length)
              .map((param) => param.childParamsGroups)
          )
        )
      }

      return param
    })
  )
}

async function getChildParamsGroup(param) {
  // Only objects, arrays of objects, anyOf, allOf, and oneOf have child params.
  // Objects can potentially be null where the rawType is [ 'object', 'null' ].
  if (
    !(
      param.rawType === 'array' ||
      (Array.isArray(param.rawType) && param.rawType.includes('array')) ||
      param.rawType === 'object' ||
      (Array.isArray(param.rawType) && param.rawType.includes('object')) ||
      param.oneOf
    )
  )
    return
  if (
    param.oneOf &&
    !param.oneOf.filter((param) => param.type === 'object' || param.type === 'array')
  )
    return
  if (param.items && param.items.type !== 'object') return

  const childParamsObject =
    param.rawType === 'array' || (Array.isArray(param.rawType) && param.rawType.includes('array'))
      ? param.items.properties
      : param.properties
  const requiredParams =
    param.rawType === 'array' || (Array.isArray(param.rawType) && param.rawType.includes('array'))
      ? param.items.required
      : param.required
  const childParams = await getBodyParams(childParamsObject, requiredParams)

  // adjust the type for easier readability in the child table
  let parentType

  if (param.rawType === 'array') {
    parentType = 'items'
  } else if (Array.isArray(param.rawType) && param.rawType.includes('array')) {
    // handle the case where rawType is [ 'array', 'null' ]
    parentType = 'items'
  } else if (Array.isArray(param.rawType) && param.rawType.includes('object')) {
    // handle the case where rawType is [ 'object', 'null' ]
    parentType = 'object'
  } else {
    parentType = param.rawType
  }

  // add an ID to the child table so they can be linked to
  slugger.reset()
  const id = slugger.slug(`${param.name}-${parentType}`)

  return {
    parentName: param.name,
    parentType,
    id,
    params: childParams,
  }
}
