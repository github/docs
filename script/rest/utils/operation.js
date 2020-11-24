const { get, flatten, isPlainObject } = require('lodash')
const { sentenceCase } = require('change-case')
const slugger = new (require('github-slugger'))()
const httpStatusCodes = require('http-status-code')
const renderContent = require('../../../lib/render-content')
const createCodeSamples = require('./create-code-samples')
const Ajv = require('ajv')

// titles that can't be derived by sentence-casing the ID
const categoryTitles = { scim: 'SCIM' }

module.exports = class Operation {
  constructor (verb, requestPath, props, serverUrl) {
    const defaultProps = {
      parameters: [],
      'x-codeSamples': [],
      responses: {}
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

    return this
  }

  get schema () {
    return require('./operation-schema')
  }

  async process () {
    this['x-codeSamples'] = createCodeSamples(this)

    await Promise.all([
      this.renderDescription(),
      this.renderCodeSamples(),
      this.renderResponses(),
      this.renderParameterDescriptions(),
      this.renderBodyParameterDescriptions(),
      this.renderPreviewNotes(),
      this.renderNotes()
    ])

    const ajv = new Ajv()
    const valid = ajv.validate(this.schema, this)
    if (!valid) {
      console.error(JSON.stringify(ajv.errors, null, 2))
      throw new Error('Invalid operation found')
    }
  }

  async renderDescription () {
    this.descriptionHTML = await renderContent(this.description)
    return this
  }

  async renderCodeSamples () {
    return Promise.all(this['x-codeSamples'].map(async (sample) => {
      const markdown = createCodeBlock(sample.source, sample.lang.toLowerCase())
      sample.html = await renderContent(markdown)
      return sample
    }))
  }

  async renderResponses () {
    // clone and delete this.responses so we can turn it into a clean array of objects
    const rawResponses = JSON.parse(JSON.stringify(this.responses))
    delete this.responses

    this.responses = await Promise.all(Object.keys(rawResponses).map(async (responseCode) => {
      const rawResponse = rawResponses[responseCode]
      const httpStatusCode = responseCode
      const httpStatusMessage = httpStatusCodes.getMessage(Number(responseCode))

      const cleanResponses = []

      // responses can have zero, one, or multiple examples
      const rawExample = get(rawResponse, 'content.application/json.example')
      const rawExamples = get(rawResponse, 'content.application/json.examples')

      // first handle responses with multiple examples
      if (rawExamples) {
        for (const rawExampleKey of Object.keys(rawExamples)) {
          const rawExample = rawExamples[rawExampleKey]
          const cleanResponse = {}

          cleanResponse.httpStatusCode = httpStatusCode
          cleanResponse.httpStatusMessage = httpStatusMessage

          // a handful of examples don't have summary properties with a description,
          // so we can sentence case the property name as a fallback
          cleanResponse.description = rawExample.summary || sentenceCase(rawExampleKey)

          const payloadMarkdown = createCodeBlock(rawExample.value, 'json')
          cleanResponse.payload = await renderContent(payloadMarkdown)

          cleanResponses.push(cleanResponse)
        }
      } else { // then handle responses with either one or zero examples
        const cleanResponse = {}

        cleanResponse.httpStatusCode = responseCode
        cleanResponse.httpStatusMessage = httpStatusCodes.getMessage(Number(responseCode))
        cleanResponse.description = sentenceCase(rawResponse.description)

        if (rawExample) {
          const payloadMarkdown = createCodeBlock(rawExample, 'json')
          cleanResponse.payload = await renderContent(payloadMarkdown)
        }

        cleanResponses.push(cleanResponse)
      }

      // tidy up descriptions
      return cleanResponses.map(response => {
        response.description = response.description
          .replace('Example of', 'Response for')
          .replace('Empty response', 'Default Response')
          .replace(/^Default$/, 'Default response')
        return response
      })
    }))

    // flatten child arrays
    this.responses = flatten(this.responses)
  }

  async renderParameterDescriptions () {
    return Promise.all(this.parameters.map(async (param) => {
      param.descriptionHTML = await renderContent(param.description)
      return param
    }))
  }

  async renderBodyParameterDescriptions () {
    const bodyParamsObject = get(this, 'requestBody.content.application/json.schema.properties', {})
    const requiredParams = get(this, 'requestBody.content.application/json.schema.required', [])

    this.bodyParameters = await getBodyParams(bodyParamsObject, requiredParams)
  }

  async renderPreviewNotes () {
    const previews = get(this, 'x-github.previews', [])
      .filter(preview => preview.note)

    return Promise.all(previews.map(async (preview) => {
      const note = preview.note
        // remove extra leading and trailing newlines
        .replace(/```\n\n\n/mg, '```\n')
        .replace(/```\n\n/mg, '```\n')
        .replace(/\n\n\n```/mg, '\n```')
        .replace(/\n\n```/mg, '\n```')

        // convert single-backtick code snippets to fully fenced triple-backtick blocks
        // example: This is the description.\n\n`application/vnd.github.machine-man-preview+json`
        .replace(/\n`application/, '\n```\napplication')
        .replace(/json`$/, 'json\n```')
      preview.html = await renderContent(note)
    }))
  }

  // add additional notes to this array whenever we want
  async renderNotes () {
    this.notes = []

    if (this['x-github'].enabledForGitHubApps) {
      this.notes.push('<a href="{{ restGitHubAppsLink }}">Works with GitHub Apps</a>')
    }

    return Promise.all(this.notes.map(async (note) => renderContent(note)))
  }
}

// need to use this function recursively to get child and grandchild params
async function getBodyParams (paramsObject, requiredParams) {
  if (!isPlainObject(paramsObject)) return []

  return Promise.all(Object.keys(paramsObject).map(async (paramKey) => {
    const param = paramsObject[paramKey]
    param.name = paramKey
    param.in = 'body'
    param.rawType = param.type
    param.rawDescription = param.description

    // e.g. array of strings
    param.type = param.type === 'array'
      ? `array of ${param.items.type}s`
      : param.type

    // e.g. object or null
    param.type = param.nullable
      ? `${param.type} or null`
      : param.type

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
      param.childParamsGroups.push(...flatten(childParamsGroup.params
        .filter(param => param.childParamsGroups.length)
        .map(param => param.childParamsGroups)))
    }

    return param
  }))
}

async function getChildParamsGroup (param) {
  // only objects and arrays of objects ever have child params
  if (!(param.rawType === 'array' || param.rawType === 'object')) return
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
    params: childParams
  }
}

function createCodeBlock (input, language) {
  // stringify JSON if needed
  if (language === 'json' && typeof input !== 'string') {
    input = JSON.stringify(input, null, 2)
  }

  return ['```' + language, input, '```'].join('\n')
}
