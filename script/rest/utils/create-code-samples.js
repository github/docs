module.exports = createCodeSamples

const { URL } = require('url')
const urlTemplate = require('url-template')
const { stringify } = require('javascript-stringify')
const { get, mapValues, snakeCase } = require('lodash')

const PARAMETER_EXAMPLES = {
  owner: 'octocat',
  repo: 'hello-world',
  email: 'octocat@github.com',
  emails: ['octocat@github.com']
}

function createCodeSamples (operation) {
  const route = {
    method: operation.verb.toUpperCase(),
    path: operation.requestPath,
    operation
  }
  const serverUrl = operation.serverUrl

  const codeSampleParams = { route, serverUrl }
  return [
    { lang: 'Shell', source: toShellExample(codeSampleParams) },
    { lang: 'JavaScript', source: toJsExample(codeSampleParams) }
  ]
}

function toShellExample ({ route, serverUrl }) {
  const pathParams = mapValues(getExamplePathParams(route), (value, paramName) =>
    PARAMETER_EXAMPLES[paramName] ? value : snakeCase(value).toUpperCase()
  )
  const path = urlTemplate.parse(route.path.replace(/:(\w+)/g, '{$1}')).expand(pathParams)
  const params = getExampleBodyParams(route)
  const { method } = route

  const requiredPreview = get(route, 'operation.x-github.previews', [])
    .find(preview => preview.required)

  const defaultAcceptHeader = requiredPreview
    ? `application/vnd.github.${requiredPreview.name}-preview+json`
    : 'application/vnd.github.v3+json'

  const args = [
    method !== 'GET' && `-X ${method}`,
    defaultAcceptHeader ? `-H "Accept: ${defaultAcceptHeader}"` : '',
    new URL(path, serverUrl).href,
    Object.keys(params).length && `-d '${JSON.stringify(params)}'`
  ].filter(Boolean)
  return `curl \\\n  ${args.join(' \\\n  ')}`
}

function toJsExample ({ route }) {
  const params = route.operation.parameters
    .filter(param => !param.deprecated)
    .filter(param => param.in !== 'header')
    .filter(param => param.required)
    .reduce(
      (_params, param) =>
        Object.assign(_params, {
          [param.name]: getExampleParamValue(param.name, param.schema)
        }),
      {}
    )
  Object.assign(params, getExampleBodyParams(route))

  // add any required preview headers to the params object
  const requiredPreviewNames = get(route.operation, 'x-github.previews', [])
    .filter(preview => preview.required)
    .map(preview => preview.name)

  if (requiredPreviewNames.length) {
    Object.assign(params, {
      mediaType: { previews: requiredPreviewNames }
    })
  }

  // add required content type header (presently only for `POST /markdown/raw`)
  const contentTypeHeader = route.operation.parameters.find(param => {
    return param.name.toLowerCase() === 'content-type' && get(param, 'schema.enum')
  })

  if (contentTypeHeader) {
    Object.assign(params, {
      headers: { 'content-type': contentTypeHeader.schema.enum[0] }
    })
  }

  const args = Object.keys(params).length ? ', ' + stringify(params, null, 2) : ''
  return `await octokit.request('${route.method} ${route.path}'${args})`
}

function getExamplePathParams ({ operation }) {
  const pathParams = operation.parameters.filter(param => param.in === 'path')
  if (pathParams.length === 0) {
    return {}
  }
  return pathParams.reduce((dict, param) => {
    dict[param.name] = getExampleParamValue(param.name, param.schema)
    return dict
  }, {})
}

function getExampleBodyParams ({ operation }) {
  let schema
  try {
    schema = operation.requestBody.content['application/json'].schema
  } catch (noRequestBody) {
    return {}
  }
  if (operation['x-github'].requestBodyParameterName) {
    const paramName = operation['x-github'].requestBodyParameterName
    return { [paramName]: getExampleParamValue(paramName, schema) }
  }

  if (schema.oneOf) {
    schema = schema.oneOf[0]
  }
  const props =
    schema.required && schema.required.length > 0
      ? schema.required
      : Object.keys(schema.properties).slice(0, 1)
  return props.reduce((dict, propName) => {
    const propSchema = schema.properties[propName]
    if (!propSchema.deprecated) {
      dict[propName] = getExampleParamValue(propName, propSchema)
    }
    return dict
  }, {})
}

function getExampleParamValue (name, schema) {
  const value = PARAMETER_EXAMPLES[name]
  if (value) {
    return value
  }

  // TODO: figure out the right behavior here
  if (schema.oneOf) return getExampleParamValue(name, schema.oneOf[0])
  if (schema.anyOf) return getExampleParamValue(name, schema.anyOf[0])

  switch (schema.type) {
    case 'string':
      return name
    case 'boolean':
      return true
    case 'integer':
      return 42
    case 'object':
      return mapValues(schema.properties, (propSchema, propName) =>
        getExampleParamValue(propName, propSchema)
      )
    case 'array':
      return [getExampleParamValue(name, schema.items)]
  }
  throw new Error(`Unknown data type in schema:, ${JSON.stringify(schema, null, 2)}`)
}
