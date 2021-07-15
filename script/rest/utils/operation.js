#!/usr/bin/env node
import { get, flatten, isPlainObject } from 'lodash-es'
import { sentenceCase } from 'change-case'
import GitHubSlugger from 'github-slugger'
import httpStatusCodes from 'http-status-code'
import renderContent from '../../../lib/render-content/index.js'
import createCodeSamples from './create-code-samples.js'
import Ajv from 'ajv'
import operationSchema from './operation-schema.js'
const slugger = new GitHubSlugger()

// titles that can't be derived by sentence-casing the ID
const categoryTitles = { scim: 'SCIM' }

export default class Operation {
  constructor(verb, requestPath, props, serverUrl) {
    const defaultProps = {
      parameters: [],
      'x-codeSamples': [],
      responses: {},
    }

    Object.assign(this, { verb, requestPath, serverUrl }, defaultProps, props)

    slugger.reset()
    this.slug = slugger.slug(this.summary)

    // Add category
    // workaround for misnamed `code-scanning.` category bug
    // https://github.com/github/rest-api-description/issues/38
    this['x-github'].category = this['x-github'].category.replace('.', '')
    this.category = this['x-github'].category
    this.categoryLabel = categoryTitles[this.category] || sentenceCase(this.category)

    // Add subcategory
    if (this['x-github'].subcategory) {
      this.subcategory = this['x-github'].subcategory
      this.subcategoryLabel = sentenceCase(this.subcategory)
    }

    // Add content type. We only display one example and default
    // to the first example defined.
    const contentTypes = Object.keys(get(this, 'requestBody.content', []))
    this.contentType = contentTypes[0]

    return this
  }

  get schema() {
    return operationSchema
  }

  async process() {
    this['x-codeSamples'] = createCodeSamples(this)

    await Promise.all([
      this.renderDescription(),
      this.renderCodeSamples(),
      this.renderResponses(),
      this.renderParameterDescriptions(),
      this.renderBodyParameterDescriptions(),
      this.renderPreviewNotes(),
      this.renderNotes(),
    ])

    const ajv = new Ajv()
    const valid = ajv.validate(this.schema, this)
    if (!valid) {
      console.error(JSON.stringify(ajv.errors, null, 2))
      throw new Error('Invalid operation found')
    }
  }

  async renderDescription() {
    this.descriptionHTML = await renderContent(this.description)
    return this
  }

  async renderCodeSamples() {
    return Promise.all(
      this['x-codeSamples'].map(async (sample) => {
        const markdown = createCodeBlock(sample.source, sample.lang.toLowerCase())
        sample.html = await renderContent(markdown)
        return sample
      })
    )
  }

  async renderResponses() {
    // clone and delete this.responses so we can turn it into a clean array of objects
    const rawResponses = JSON.parse(JSON.stringify(this.responses))
    delete this.responses

    this.responses = await Promise.all(
      Object.keys(rawResponses).map(async (responseCode) => {
        const rawResponse = rawResponses[responseCode]
        const httpStatusCode = responseCode
        const httpStatusMessage = httpStatusCodes.getMessage(Number(responseCode))
        const responseDescription = rawResponse.description

        const cleanResponses = []

        /* Responses can have zero, one, or multiple examples. The `examples`
         * property often only contains one example object. Both the `example`
         * and `examples` properties can be used in the OpenAPI but `example`
         * doesn't work with `$ref`.
         * This works:
         * schema:
         *  '$ref': '../../components/schemas/foo.yaml'
         * example:
         *  id: 10
         *  description: This is a summary
         *  foo: bar
         *
         * This doesn't
         * schema:
         *  '$ref': '../../components/schemas/foo.yaml'
         * example:
         *  '$ref': '../../components/examples/bar.yaml'
         */
        const examplesProperty = get(rawResponse, 'content.application/json.examples')
        const exampleProperty = get(rawResponse, 'content.application/json.example')

        // Return early if the response doesn't have an example payload
        if (!exampleProperty && !examplesProperty) {
          return [
            {
              httpStatusCode,
              httpStatusMessage,
              description: responseDescription,
            },
          ]
        }

        // Use the same format for `example` as `examples` property so that all
        // examples can be handled the same way.
        const normalizedExampleProperty = {
          default: {
            value: exampleProperty,
          },
        }

        const rawExamples = examplesProperty || normalizedExampleProperty
        const rawExampleKeys = Object.keys(rawExamples)

        for (const exampleKey of rawExampleKeys) {
          const exampleValue = rawExamples[exampleKey].value
          const exampleSummary = rawExamples[exampleKey].summary
          const cleanResponse = {
            httpStatusCode,
            httpStatusMessage,
          }

          // If there is only one example, use the response description
          // property. For cases with more than one example, some don't have
          // summary properties with a description, so we can sentence case
          // the property name as a fallback
          cleanResponse.description =
            rawExampleKeys.length === 1
              ? exampleSummary || responseDescription
              : exampleSummary || sentenceCase(exampleKey)

          const payloadMarkdown = createCodeBlock(exampleValue, 'json')
          cleanResponse.payload = await renderContent(payloadMarkdown)

          cleanResponses.push(cleanResponse)
        }
        return cleanResponses
      })
    )

    // flatten child arrays
    this.responses = flatten(this.responses)
  }

  async renderParameterDescriptions() {
    return Promise.all(
      this.parameters.map(async (param) => {
        param.descriptionHTML = await renderContent(param.description)
        return param
      })
    )
  }

  async renderBodyParameterDescriptions() {
    let bodyParamsObject = get(
      this,
      `requestBody.content.${this.contentType}.schema.properties`,
      {}
    )
    let requiredParams = get(this, `requestBody.content.${this.contentType}.schema.required`, [])
    const oneOfObject = get(this, `requestBody.content.${this.contentType}.schema.oneOf`, undefined)

    // oneOf is an array of input parameter options, so we need to either
    //  use the first option or munge the options together.
    if (oneOfObject) {
      const firstOneOfObject = oneOfObject[0]
      const allOneOfAreObjects =
        oneOfObject.filter((elem) => elem.type === 'object').length === oneOfObject.length

      // TODO: Remove this check
      // This operation shouldn't have a oneOf in this case, it needs to be
      // removed from the schema in the github/github repo.
      if (this.operationId === 'checks/create') {
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
    const previews = get(this, 'x-github.previews', []).filter((preview) => preview.note)

    return Promise.all(
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
        preview.html = await renderContent(note)
      })
    )
  }

  // add additional notes to this array whenever we want
  async renderNotes() {
    this.notes = []

    return Promise.all(this.notes.map(async (note) => renderContent(note)))
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
      if (param.type === 'array') {
        if (param.items.type) paramArray.push(`array of ${param.items.type}s`)
        if (param.items.oneOf) {
          paramArray.push(param.items.oneOf.map((elem) => `array of ${elem.type}s`))
        }
      } else if (param.type) {
        paramArray.push(param.type)
      }

      if (param.nullable) paramArray.push('nullable')

      param.type = paramArray.flat().join(' or ')
      param.description = param.description || ''
      const isRequired = requiredParams && requiredParams.includes(param.name)
      const requiredString = isRequired ? '**Required**. ' : ''
      param.description = await renderContent(requiredString + param.description)

      // there may be zero, one, or multiple object parameters that have children parameters
      param.childParamsGroups = []
      const childParamsGroup = await getChildParamsGroup(param)

      if (childParamsGroup && childParamsGroup.params.length) {
        param.childParamsGroups.push(childParamsGroup)
      }

      // if the param is an object, it may have child object params that have child params :/
      if (param.rawType === 'object') {
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
  // only objects, arrays of objects, anyOf, allOf, and oneOf have child params
  if (!(param.rawType === 'array' || param.rawType === 'object' || param.oneOf)) return
  if (
    param.oneOf &&
    !param.oneOf.filter((param) => param.type === 'object' || param.type === 'array')
  )
    return
  if (param.items && param.items.type !== 'object') return

  const childParamsObject = param.rawType === 'array' ? param.items.properties : param.properties
  const requiredParams = param.rawType === 'array' ? param.items.required : param.required
  const childParams = await getBodyParams(childParamsObject, requiredParams)

  // adjust the type for easier readability in the child table
  const parentType = param.rawType === 'array' ? 'items' : param.rawType

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

function createCodeBlock(input, language) {
  // stringify JSON if needed
  if (language === 'json' && typeof input !== 'string') {
    input = JSON.stringify(input, null, 2)
  }

  return ['```' + language, input, '```'].join('\n')
}
