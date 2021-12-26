#!/usr/bin/env node
import urlTemplate from 'url-template'
import { stringify } from 'javascript-stringify'
import { get, mapValues, snakeCase } from 'lodash-es'
export default createCodeSamples

const PARAMETER_EXAMPLES = {
  owner: 'octocat',
  repo: 'hello-world',
  email: 'octocat@github.com',
  emails: ['octocat@github.com'],
}

function createCodeSamples(operation) {
  const route = {
    method: operation.verb.toUpperCase(),
    path: operation.requestPath,
    operation,
  }
  const serverUrl = operation.serverUrl

  const codeSampleParams = { route, serverUrl }
  return [
    { lang: 'Shell', source: toShellExample(codeSampleParams) },
    { lang: 'JavaScript', source: toJsExample(codeSampleParams) },
  ]
}

function toShellExample({ route, serverUrl }) {
  const pathParams = mapValues(getExamplePathParams(route), (value, paramName) =>
    PARAMETER_EXAMPLES[paramName] ? value : snakeCase(value).toUpperCase()
  )
  const path = urlTemplate.parse(route.path.replace(/:(\w+)/g, '{$1}')).expand(pathParams)
  const params = getExampleBodyParams(route)
  const { method } = route

  const requiredPreview = get(route, 'operation.x-github.previews', []).find(
    (preview) => preview.required
  )

  const defaultAcceptHeader = requiredPreview
    ? `application/vnd.github.${requiredPreview.name}-preview+json`
    : 'application/vnd.github.v3+json'

  let requestBodyParams = `-d '${JSON.stringify(params)}'`
  // If the content type is application/x-www-form-urlencoded the format of
  // the shell example is --data-urlencode param1=value1 --data-urlencode param2=value2
  if (route.operation.contentType === 'application/x-www-form-urlencoded') {
    requestBodyParams = ''
    const paramNames = Object.keys(params)
    paramNames.forEach((elem) => {
      requestBodyParams = `${requestBodyParams} --data-urlencode ${elem}=${params[elem]}`
    })
    requestBodyParams = requestBodyParams.trim()
  }

  const args = [
    method !== 'GET' && `-X ${method}`,
    defaultAcceptHeader ? `-H "Accept: ${defaultAcceptHeader}"` : '',
    `${serverUrl}${path}`,
    Object.keys(params).length && requestBodyParams,
  ].filter(Boolean)
  return `curl \\\n  ${args.join(' \\\n  ')}`
}

function toJsExample({ route }) {
  const params = route.operation.parameters
    .filter((param) => !param.deprecated)
    .filter((param) => param.in !== 'header')
    .filter((param) => param.required)
    .reduce(
      (_params, param) =>
        Object.assign(_params, {
          [param.name]: getExampleParamValue(param.name, param.schema),
        }),
      {}
    )
  Object.assign(params, getExampleBodyParams(route))

  // add any required preview headers to the params object
  const requiredPreviewNames = get(route.operation, 'x-github.previews', [])
    .filter((preview) => preview.required)
    .map((preview) => preview.name)

  if (requiredPreviewNames.length) {
    Object.assign(params, {
      mediaType: { previews: requiredPreviewNames },
    })
  }

  // add required content type header (presently only for `POST /markdown/raw`)
  const contentTypeHeader = route.operation.parameters.find((param) => {
    return param.name.toLowerCase() === 'content-type' && get(param, 'schema.enum')
  })

  if (contentTypeHeader) {
    Object.assign(params, {
      headers: { 'content-type': contentTypeHeader.schema.enum[0] },
    })
  }

  const args = Object.keys(params).length ? ', ' + stringify(params, null, 2) : ''
  return `await octokit.request('${route.method} ${route.path}'${args})`
}

function getExamplePathParams({ operation }) {
  const pathParams = operation.parameters.filter((param) => param.in === 'path')
  if (pathParams.length === 0) {
    return {}
  }
  return pathParams.reduce((dict, param) => {
    dict[param.name] = getExampleParamValue(param.name, param.schema)
    return dict
  }, {})
}

function getExampleBodyParams({ operation }) {
  const contentType = Object.keys(get(operation, 'requestBody.content', []))[0]
  let schema
  try {
    schema = operation.requestBody.content[contentType].schema
    if (!schema.properties) return {}
  } catch (noRequestBody) {
    return {}
  }
  if (operation['x-github'].requestBodyParameterName) {
    const paramName = operation['x-github'].requestBodyParameterName
    return { [paramName]: getExampleParamValue(paramName, schema) }
  }

  if (schema.oneOf && schema.oneOf[0].type) {
    schema = schema.oneOf[0]
  } else if (schema.anyOf && schema.anyOf[0].type) {
    schema = schema.anyOf[0]
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

function getExampleParamValue(name, schema) {
  const value = PARAMETER_EXAMPLES[name]
  if (value) {
    return value
  }

  // TODO: figure out the right behavior here
  if (schema.oneOf && schema.oneOf[0].type) return getExampleParamValue(name, schema.oneOf[0])
  if (schema.anyOf && schema.anyOf[0].type) return getExampleParamValue(name, schema.anyOf[0])

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
