import { parseTemplate } from 'url-template'
import { stringify } from 'javascript-stringify'

import type { CodeSample, Operation } from '@/rest/components/types'
import { type VersionItem } from '@/frame/components/context/MainContext'

function shouldOmitAuthentication(operation: Operation, currentVersion: string): boolean {
  // Only explicitly permissionless operations can omit auth.
  if (!operation?.progAccess?.allowPermissionlessAccess) {
    return false
  }

  // Dotcom versions can omit auth; GHES and other versions still require authentication.
  const isDotcomVersion =
    currentVersion.startsWith('free-pro-team') || currentVersion.startsWith('enterprise-cloud')

  return isDotcomVersion
}

// Escapes single quotes so a contraction like "there's" can't break out of the
// surrounding shell quoting.
function escapeShellValue(value: string): string {
  return value.replace(/'/g, "'\\''")
}

type CodeExamples = Record<string, unknown>

// Form-encoded shell examples use repeated --data-urlencode flags, such as
// param1=value1 and param2=value2. For example:
// https://docs.github.com/en/enterprise/rest/reference/enterprise-admin#enable-or-disable-maintenance-mode
const CURL_CONTENT_TYPE_MAPPING: { [key: string]: string } = {
  'application/x-www-form-urlencoded': '--data-urlencode',
  'multipart/form-data': '--form',
  'application/octet-stream': '--data-binary',
}
export function getShellExample(
  operation: Operation,
  codeSample: CodeSample,
  currentVersion: string,
  allVersions: Record<string, VersionItem>,
) {
  let contentTypeHeader = ''

  if (codeSample?.request?.contentType === 'application/octet-stream') {
    contentTypeHeader = '-H "Content-Type: application/octet-stream"'
  } else if (codeSample?.request?.contentType === 'multipart/form-data') {
    contentTypeHeader = '-H "Content-Type: multipart/form-data"'
  }

  const omitAuth = shouldOmitAuthentication(operation, currentVersion)

  // GHES Manage requests need special handling for multipart/form-data and JSON content types.
  if (operation.subcategory === 'manage-ghes') {
    // GHES Manage GET operations omit requestBody, so default the content type to JSON.
    if (operation.verb === 'get') {
      contentTypeHeader = '-H "Content-Type: application/json"'
    } else {
      contentTypeHeader = `-H "Content-Type: ${codeSample?.request?.contentType}"`
    }
  }

  if (operation.subcategory === 'inference') {
    contentTypeHeader = '-H "Content-Type: application/json"'
  }

  let requestPath = codeSample?.request?.parameters
    ? parseTemplate(operation.requestPath).expand(codeSample.request.parameters)
    : operation.requestPath

  const requiredQueryParams = getRequiredQueryParamsPath(operation, codeSample)
  requestPath += requiredQueryParams ? `?${requiredQueryParams}` : ''

  let requestBodyParams = ''
  if (codeSample?.request?.bodyParameters) {
    requestBodyParams = `-d '${JSON.stringify(codeSample.request.bodyParameters).replace(
      /'/g,
      "'\\''",
    )}'`

    const contentType = codeSample.request.contentType
    if (contentType in CURL_CONTENT_TYPE_MAPPING) {
      requestBodyParams = ''
      // Mapped content types can pass a single scalar body instead of named parameters.
      const { bodyParameters } = codeSample.request
      if (bodyParameters && typeof bodyParameters === 'object' && !Array.isArray(bodyParameters)) {
        const paramNames = Object.keys(bodyParameters)
        for (const elem of paramNames) {
          const escapedValue = escapeShellValue(String(bodyParameters[elem]))
          requestBodyParams = `${requestBodyParams} ${CURL_CONTENT_TYPE_MAPPING[contentType]} '${elem}=${escapedValue}'`
        }
      } else {
        const escapedValue = escapeShellValue(String(bodyParameters))
        requestBodyParams = `${CURL_CONTENT_TYPE_MAPPING[contentType]} "${escapedValue}"`
      }
    }
  }

  let authHeader = omitAuth ? '' : '-H "Authorization: Bearer <YOUR-TOKEN>"'
  let apiVersionHeader =
    allVersions[currentVersion].apiVersions.length > 0 &&
    allVersions[currentVersion].latestApiVersion
      ? `-H "X-GitHub-Api-Version: ${allVersions[currentVersion].latestApiVersion}"`
      : ''
  let acceptHeader = `-H "Accept: ${getAcceptHeader(codeSample)}"`
  let urlArg = `${operation.serverUrl}${requestPath}`
  // Quote URLs containing ? so shells don't expand it as a glob.
  if (requestPath.includes('?')) {
    urlArg = `"${urlArg}"`
  }

  // Management Console and GHES Manage APIs replace dotcom auth, API version, and Accept headers.
  if (operation.subcategory === 'management-console' || operation.subcategory === 'manage-ghes') {
    authHeader = '-u "api_key:your-password"'
    apiVersionHeader = ''
    acceptHeader = acceptHeader === `-H "Accept: application/vnd.github+json"` ? '' : acceptHeader
  }

  if (
    omitAuth &&
    operation.subcategory !== 'management-console' &&
    operation.subcategory !== 'manage-ghes'
  ) {
    authHeader = ''
  }

  if (operation?.progAccess?.basicAuth) {
    authHeader = '-u "<YOUR_CLIENT_ID>:<YOUR_CLIENT_SECRET>"'
  }

  const args = [
    operation.verb !== 'get' && `-X ${operation.verb.toUpperCase()}`,
    acceptHeader,
    authHeader,
    apiVersionHeader,
    contentTypeHeader,
    urlArg,
    requestBodyParams,
  ].filter(Boolean)
  return `curl -L \\\n  ${args.join(' \\\n  ')}`
}

// Return undefined when basicAuth is set because GitHub CLI does not support basic auth.
export function getGHExample(
  operation: Operation,
  codeSample: CodeSample,
  currentVersion: string,
  allVersions: Record<string, VersionItem>,
) {
  if (operation?.progAccess?.basicAuth) return

  const defaultAcceptHeader = getAcceptHeader(codeSample)
  const hostname = operation.serverUrl !== 'https://api.github.com' ? '--hostname HOSTNAME' : ''

  let requestPath = codeSample?.request?.parameters
    ? parseTemplate(operation.requestPath).expand(codeSample.request.parameters)
    : operation.requestPath

  const apiVersionHeader =
    allVersions[currentVersion].apiVersions.length > 0 &&
    allVersions[currentVersion].latestApiVersion
      ? `-H "X-GitHub-Api-Version: ${allVersions[currentVersion].latestApiVersion}"`
      : ''

  const requiredQueryParams = getRequiredQueryParamsPath(operation, codeSample)
  requestPath += requiredQueryParams ? `?${requiredQueryParams}` : ''

  let requestBodyParams = ''
  // Request bodies can be named object parameters or a single scalar value.
  const { bodyParameters } = codeSample.request
  if (bodyParameters) {
    if (typeof bodyParameters === 'object') {
      // Gist create and update examples use --input for nested file structures.
      const isGistEndpoint =
        !Array.isArray(bodyParameters) &&
        operation.requestPath.includes('/gists') &&
        (operation.title === 'Create a gist' || operation.title === 'Update a gist')

      // Use --input for top-level arrays or nested arrays because gh -f and -F cannot encode them.
      const hasArrays = hasNestedArrays(bodyParameters as NestedObjectParameter)
      if (hasArrays || isGistEndpoint) {
        const jsonBody = JSON.stringify(
          bodyParameters,
          (key: string, value: unknown) => {
            if (typeof value === 'string' && /^\d+$/.test(value)) {
              return parseInt(value, 10)
            }
            if (value === 'true') return true
            if (value === 'false') return false
            return value
          },
          2,
        ).replace(/'/g, "'\\''")
        requestBodyParams = `--input - <<< '${jsonBody}'`
      } else {
        requestBodyParams += handleObjectParameter(bodyParameters as NestedObjectParameter)
      }
    } else {
      requestBodyParams += handleSingleParameter('', bodyParameters as NestedObjectParameter)
    }
  }

  const args = [
    operation.verb !== 'get' && `--method ${operation.verb.toUpperCase()}`,
    `-H "Accept: ${defaultAcceptHeader}"`,
    apiVersionHeader,
    hostname,
    requestPath,
    requestBodyParams,
  ].filter(Boolean)
  return `# GitHub CLI api\n# https://cli.github.com/manual/gh_api\n\ngh api \\\n  ${args.join(
    ' \\\n  ',
  )}`
}

const startTransformKey = (currentKey: string): string => currentKey

type TypedItem = 'string' | 'number' | 'boolean'
type NestedObjectParameter =
  | TypedItem
  | { [key: string]: NestedObjectParameter }
  | NestedObjectParameter[]

function hasNestedArrays(obj: NestedObjectParameter): boolean {
  if (Array.isArray(obj)) {
    return true
  }
  if (typeof obj === 'object' && obj !== null) {
    for (const value of Object.values(obj)) {
      if (hasNestedArrays(value)) {
        return true
      }
    }
  }
  return false
}

function handleSingleParameter(
  key: string,
  value: NestedObjectParameter,
  transformKey = startTransformKey,
): string {
  let cliLine = ''
  const keyString = `${transformKey(key)}`
  // Scalar bodyParameters omit = because they have no key.
  let separator = '='
  if (!key) {
    separator = ''
  }
  if (typeof value === 'string') {
    const escapedValue = escapeShellValue(value)
    cliLine += ` -f '${keyString}${separator}${escapedValue}'`
  } else if (typeof value === 'number' || typeof value === 'boolean' || value === null) {
    cliLine += ` -F "${keyString}${separator}${value}"`
  } else if (Array.isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      const param = value[i]
      if (Array.isArray(param)) {
        throw new Error('Nested arrays are not valid in the bodyParameters')
      }

      if (typeof param === 'object' && param !== null) {
        cliLine += handleObjectParameter(
          param,
          (nextKey: string): string => `${keyString}[${i}]${nextKey}`,
        )
      } else {
        // The transform has to fold the array index into the passed-in key.
        const arrayTransform = () => `${transformKey(key)}[${i}]`
        cliLine += handleSingleParameter(key, param, arrayTransform)
      }
    }
  } else if (typeof value === 'object') {
    cliLine += handleObjectParameter(value, (nextKey) => `${keyString}[${nextKey}]`)
  }
  return cliLine
}

// handleObjectParameter rejects nested arrays because form-field encoding cannot represent them.
// It expands arrays of objects into separate -f or -F parameters.
function handleObjectParameter(
  objectParams: NestedObjectParameter,
  transformKey = startTransformKey,
) {
  let cliLine = ''
  for (const [key, value] of Object.entries(objectParams)) {
    if (Array.isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        const param = value[i]
        if (Array.isArray(param)) {
          throw new Error('Nested arrays are not valid in the bodyParameters')
        }

        if (typeof param === 'object' && param !== null) {
          for (const [nestedKey, nestedValue] of Object.entries(param)) {
            cliLine += handleSingleParameter(
              `${key}[${i}][${nestedKey}]`,
              nestedValue as NestedObjectParameter,
              transformKey,
            )
          }
        } else {
          cliLine += handleSingleParameter(
            key,
            param,
            (nextKey: string) => `${transformKey(nextKey)}[${i}]`,
          )
        }
      }
    } else if (typeof value === 'object' && value !== null) {
      cliLine += handleObjectParameter(
        value as NestedObjectParameter,
        (nextKey: string) => `${transformKey(key)}[${nextKey}]`,
      )
    } else {
      cliLine += handleSingleParameter(key, value, transformKey)
    }
  }
  return cliLine
}

// getJSExample appends query params to mutating URL templates because Octokit only
// auto-sends them for GET and HEAD, for example:
// POST /repos/{owner}/{repo}/releases/{release_id}/assets{?name,label}
export function getJSExample(
  operation: Operation,
  codeSample: CodeSample,
  currentVersion: string,
  allVersions: Record<string, VersionItem>,
) {
  const omitAuth = shouldOmitAuthentication(operation, currentVersion)
  const parameters: { [key: string]: string | object } = {}

  if (codeSample.request) {
    Object.assign(parameters, codeSample.request.parameters)
    // Octokit sends scalar bodies and top-level arrays through the data option.
    if (
      codeSample.request.bodyParameters &&
      (typeof codeSample.request.bodyParameters !== 'object' ||
        Array.isArray(codeSample.request.bodyParameters))
    ) {
      parameters.data = codeSample.request.bodyParameters
    } else {
      Object.assign(parameters, codeSample.request.bodyParameters)
    }
  }

  let queryParameters = ''

  if (
    operation.verb === 'delete' ||
    operation.verb === 'patch' ||
    operation.verb === 'post' ||
    operation.verb === 'put'
  ) {
    const queryParams = operation.parameters
      .filter((param) => {
        return param.in === 'query'
      })
      .map((param) => {
        return param.name
      })
    if (queryParams.length > 0) {
      queryParameters = `{?${queryParams.join(',')}}`
    }
  }

  if (
    allVersions[currentVersion].apiVersions.length > 0 &&
    allVersions[currentVersion].latestApiVersion
  ) {
    parameters.headers = {
      'X-GitHub-Api-Version': `${allVersions[currentVersion].latestApiVersion}`,
    }
  }

  const comment = `// Octokit.js\n// https://github.com/octokit/core.js#readme\n`
  const authOctokit = `const octokit = new Octokit(${stringify({ auth: 'YOUR-TOKEN' }, null, 2)})\n\n`
  const unauthenticatedOctokit = `const octokit = new Octokit()\n\n`
  const oauthOctokit = `import { createOAuthAppAuth } from "@octokit/auth-oauth-app"\n\nconst octokit = new Octokit({\n  authStrategy: createOAuthAppAuth,\n  auth:{\n    clientType: 'oauth-app',\n    clientId: '<YOUR_CLIENT ID>',\n    clientSecret: '<YOUR_CLIENT SECRET>'\n  }\n})\n\n`
  const isBasicAuth = operation?.progAccess?.basicAuth
  let authString = isBasicAuth ? oauthOctokit : authOctokit

  // Permissionless endpoints use unauthenticated Octokit.
  if (omitAuth) {
    authString = unauthenticatedOctokit
  }

  return `${comment}${authString}await octokit.request('${operation.verb.toUpperCase()} ${
    operation.requestPath
  }${queryParameters}', ${stringify(parameters, null, 2)})`
}

// Package responses can be arrays while Actions cache responses nest items under actions_caches.
// JSON.stringify traversal finds the matching required query key in either shape.
function findMatchingQueryKey(exampleObj: CodeExamples | CodeExamples[], matchKey: string) {
  let match: string | null = null
  JSON.stringify(exampleObj, (_, nestedValue) => {
    if (nestedValue && Object.prototype.hasOwnProperty.call(nestedValue, matchKey)) {
      match = nestedValue[matchKey]
    }

    return nestedValue
  })

  return match
}

function getRequiredQueryParamsPath(operation: Operation, codeSample: CodeSample) {
  const requiredQueryParams = new URLSearchParams()
  for (const param of operation.parameters) {
    if (param.in === 'query' && param.required === true) {
      const codeExamples = codeSample.response?.example
      const match = findMatchingQueryKey(codeExamples, param.name)
      requiredQueryParams.append(param.name, match || param.name.toUpperCase())
    }
  }

  return requiredQueryParams.toString()
}

function getAcceptHeader(codeSample: CodeSample) {
  const contentType = codeSample?.response?.contentType

  if (!contentType || contentType === 'application/json') {
    return 'application/vnd.github+json'
  }

  return contentType
}
