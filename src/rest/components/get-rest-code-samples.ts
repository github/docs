import { parseTemplate } from 'url-template'
import { stringify } from 'javascript-stringify'

import type { CodeSample, Operation } from '@/rest/components/types'
import { type VersionItem } from '@/frame/components/context/MainContext'

// Helper function to determine if authentication should be omitted
function shouldOmitAuthentication(operation: Operation, currentVersion: string): boolean {
  // Only omit auth for operations that explicitly allow permissionless access
  if (!operation?.progAccess?.allowPermissionlessAccess) {
    return false
  }

  // Only omit auth on dotcom versions (free-pro-team, enterprise-cloud)
  // GHES and other versions still require authentication
  const isDotcomVersion =
    currentVersion.startsWith('free-pro-team') || currentVersion.startsWith('enterprise-cloud')

  return isDotcomVersion
}

// Helper function to escape shell values containing single quotes (contractions)
// This prevents malformed shell commands when contractions like "there's" are used
function escapeShellValue(value: string): string {
  // Replace single quotes with '\'' to properly escape them in shell commands
  return value.replace(/'/g, "'\\''")
}

type CodeExamples = Record<string, any>

// If the content type is application/x-www-form-urlencoded the format of
// the shell example is --data-urlencode param1=value1 --data-urlencode param2=value2
// For example, this operation:
// https://docs.github.com/en/enterprise/rest/reference/enterprise-admin#enable-or-disable-maintenance-mode
const CURL_CONTENT_TYPE_MAPPING: { [key: string]: string } = {
  'application/x-www-form-urlencoded': '--data-urlencode',
  'multipart/form-data': '--form',
  'application/octet-stream': '--data-binary',
}
/*
  Generates a curl example

  For example:
  curl \
  -X POST \
  -H "Accept: application/vnd.github+json" \
  https://{hostname}/api/v3/repos/OWNER/REPO/deployments \
  -d '{"ref":"topic-branch","payload":"{ \"deploy\": \"migrate\" }","description":"Deploy request from hubot"}'
*/
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

  // Check if we should omit authentication for this operation
  const omitAuth = shouldOmitAuthentication(operation, currentVersion)

  // GHES Manage API requests differ from the dotcom API requests and make use of multipart/form-data and json content types
  if (operation.subcategory === 'manage-ghes') {
    // GET requests don't have a requestBody set, therefore let's default them to application/json
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
      // Most of the time the example body parameters have a name and value
      // and are included in an object. But, some cases are a single value
      // and the type is a string.
      const { bodyParameters } = codeSample.request
      if (bodyParameters && typeof bodyParameters === 'object' && !Array.isArray(bodyParameters)) {
        const paramNames = Object.keys(bodyParameters)
        paramNames.forEach((elem) => {
          const escapedValue = escapeShellValue(String(bodyParameters[elem]))
          requestBodyParams = `${requestBodyParams} ${CURL_CONTENT_TYPE_MAPPING[contentType]} '${elem}=${escapedValue}'`
        })
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
  // If the `requestPath` contains a `?` character, if you need to escape
  // the whole URL otherwise, when you paste it into your terminal, it
  // will fail because the `?` is a bash control character.
  if (requestPath.includes('?')) {
    urlArg = `"${urlArg}"`
  }

  // Overwrite curl examples since the github enterprise related apis are seperate from the dotcom api standards
  if (operation.subcategory === 'management-console' || operation.subcategory === 'manage-ghes') {
    authHeader = '-u "api_key:your-password"'
    apiVersionHeader = ''
    acceptHeader = acceptHeader === `-H "Accept: application/vnd.github+json"` ? '' : acceptHeader
  }

  // For unauthenticated endpoints, remove the auth header completely
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

/*
  Generates a GitHub CLI example

  For example:
   gh api \
    -X POST \
    -H "Accept: application/vnd.github+json" \
    /repos/OWNER/REPO/deployments \
    -f ref,topic-branch=0,payload,{ "deploy": "migrate" }=1,description,Deploy request from hubot=2
*/
export function getGHExample(
  operation: Operation,
  codeSample: CodeSample,
  currentVersion: string,
  allVersions: Record<string, VersionItem>,
) {
  // Basic authentication is not supported by GH CLI
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
  // Most of the time the example body parameters have a name and value
  // and are included in an object. But, some cases are a single value
  // and the type is a string.
  const { bodyParameters } = codeSample.request
  if (bodyParameters) {
    // There should not be a case in a REST API where only an array is sent
    if (Array.isArray(bodyParameters)) {
      throw new Error('Array of arrays found in body parameters')
    }

    if (typeof bodyParameters === 'object') {
      // For complex objects with arrays, use --input with JSON
      const hasArrays = hasNestedArrays(bodyParameters as NestedObjectParameter)
      if (hasArrays) {
        const jsonBody = JSON.stringify(
          bodyParameters,
          (key: string, value: any) => {
            // Convert numeric strings back to numbers for API compatibility
            if (typeof value === 'string' && /^\d+$/.test(value)) {
              return parseInt(value, 10)
            }
            // Convert boolean strings to actual booleans
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
      requestBodyParams += handleSingleParameter('', bodyParameters)
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

// Helper function to detect if an object has nested arrays
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
  // When only a value is passed to bodyParameters we don't show the '=' since there isn't a key
  let separator = '='
  if (!key) {
    separator = ''
  }
  if (typeof value === 'string') {
    // Escape single quotes in string values to prevent shell command issues with contractions
    const escapedValue = escapeShellValue(value)
    cliLine += ` -f '${keyString}${separator}${escapedValue}'`
  } else if (typeof value === 'number' || typeof value === 'boolean' || value === null) {
    cliLine += ` -F "${keyString}${separator}${value}"`
  } else if (Array.isArray(value)) {
    // For simple arrays, use individual parameters with indices
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
        // Transform key in this case needs to account for the `key` being passed in and use array index
        const arrayTransform = () => `${transformKey(key)}[${i}]`
        cliLine += handleSingleParameter(key, param, arrayTransform)
      }
    }
  } else if (typeof value === 'object') {
    cliLine += handleObjectParameter(value, (nextKey) => `${keyString}[${nextKey}]`)
  }
  return cliLine
}

function handleObjectParameter(
  objectParams: NestedObjectParameter,
  transformKey = startTransformKey,
) {
  let cliLine = ''
  for (const [key, value] of Object.entries(objectParams)) {
    if (Array.isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        const param = value[i]
        // This isn't valid in a REST context, our REST API should not be designed to take
        // something like { "letterSegments": [["a", "b", "c"], ["d", "e", "f"]] }
        // If this is a possibility, we can update the code to handle it
        if (Array.isArray(param)) {
          throw new Error('Nested arrays are not valid in the bodyParameters')
        }

        if (typeof param === 'object' && param !== null) {
          // When an array of objects, we want to display the key and value as two separate parameters
          // E.g. -F "properties[0][property_name]=repo" -F "properties[0][value]=docs-internal"
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

/*
  Generates an octokit.js example

  For example:
  await octokit.request('POST /repos/{owner}/{repo}/deployments'{
    "owner": "OWNER",
    "repo": "REPO",
    "ref": "topic-branch",
    "payload": "{ \"deploy\": \"migrate\" }",
    "description": "Deploy request from hubot"
  })

*/
export function getJSExample(
  operation: Operation,
  codeSample: CodeSample,
  currentVersion: string,
  allVersions: Record<string, VersionItem>,
) {
  // Check if we should omit authentication for this operation
  const omitAuth = shouldOmitAuthentication(operation, currentVersion)
  const parameters: { [key: string]: string | object } = {}

  if (codeSample.request) {
    Object.assign(parameters, codeSample.request.parameters)
    // Most of the time the example body parameters have a name and value
    // and are included in an object. But, some cases are a single value
    // and the type is a string.
    if (
      codeSample.request.bodyParameters &&
      typeof codeSample.request.bodyParameters !== 'object'
    ) {
      parameters.data = codeSample.request.bodyParameters
    } else {
      Object.assign(parameters, codeSample.request.bodyParameters)
    }
  }

  let queryParameters = ''

  // Query parameters are set automatically for GET and HEAD requests, we
  // otherwise have to handle it ourselves for other request methods by adding
  // the parameters to the request path in URL template format e.g.:
  //
  // 'POST /repos/{owner}/{repo}/releases/{release_id}/assets{?name,label}'
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

  // Use unauthenticated Octokit for endpoints that allow permissionless access
  if (omitAuth) {
    authString = unauthenticatedOctokit
  }

  return `${comment}${authString}await octokit.request('${operation.verb.toUpperCase()} ${
    operation.requestPath
  }${queryParameters}', ${stringify(parameters, null, 2)})`
}

// Every code example parameter object can be slightly different depending on the operation. For e.g. for Packages it's something like this:
// [
//  {
//    "id": 197,
//    "name": "hello_docker",
//    "package_type": "container",
//  },
//  {
//    "id": 198,
//    "name": "goodbye_docker",
//    "package_type": "container",
//  }
// ]
// But for Actions cache it's something like this:
// {
//  "total_count": 1,
//  "actions_caches": [
//      {
//          "id": 505,
//          "ref": "refs/heads/main",
//          "key": "Linux-node-958aff96db2d75d67787d1e634ae70b659de937b",
//      }
//  ]
// }
// We need to find the matching key so this is using JSON.stringify to handle the "recursion" to search for the matching key.
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
