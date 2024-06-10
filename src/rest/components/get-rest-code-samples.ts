import { parseTemplate } from 'url-template'
import { stringify } from 'javascript-stringify'

import type { CodeSample, Operation } from 'src/rest/components/types'
import { type VersionItem } from 'src/frame/components/context/MainContext'

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
          requestBodyParams = `${requestBodyParams} ${CURL_CONTENT_TYPE_MAPPING[contentType]} '${elem}=${bodyParameters[elem]}'`
        })
      } else {
        requestBodyParams = `${CURL_CONTENT_TYPE_MAPPING[contentType]} "${bodyParameters}"`
      }
    }
  }

  let authHeader = '-H "Authorization: Bearer <YOUR-TOKEN>"'
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
      requestBodyParams += handleObjectParameter(bodyParameters as NestedObjectParameter)
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
    cliLine += ` -f "${keyString}${separator}${value}"`
  } else if (typeof value === 'number' || typeof value === 'boolean' || value === null) {
    cliLine += ` -F "${keyString}${separator}${value}"`
  } else if (Array.isArray(value)) {
    for (const param of value) {
      if (Array.isArray(param)) {
        throw new Error('Nested arrays are not valid in the bodyParameters')
      }

      if (typeof param === 'object' && param !== null) {
        cliLine += handleObjectParameter(
          param,
          (nextKey: string): string => `${keyString}[]${nextKey}`,
        )
      } else {
        // Transform key in this case needs to account for the `key` being passed in
        cliLine += handleSingleParameter(key, param, (nextKey: string): string => `${nextKey}[]`)
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
      for (const param of value) {
        // This isn't valid in a REST context, our REST API should not be designed to take
        // something like { "letterSegments": [["a", "b", "c"], ["d", "e", "f"]] }
        // If this is a possibility, we can update the code to handle it
        if (Array.isArray(param)) {
          throw new Error('Nested arrays are not valid in the bodyParameters')
        }

        if (typeof param === 'object' && param !== null) {
          // When an array of objects, we want to display the key and value as two separate parameters
          // E.g. -F "properties[][property_name]=repo" -F "properties[][value]=docs-internal"
          for (const [nestedKey, nestedValue] of Object.entries(param)) {
            cliLine += handleSingleParameter(
              `${key}[][${nestedKey}]`,
              nestedValue as NestedObjectParameter,
              transformKey,
            )
          }
        } else {
          cliLine += handleSingleParameter(`${key}[]`, param, transformKey)
        }
      }
    } else if (typeof value === 'object' && value !== null) {
      cliLine += handleObjectParameter(
        value as NestedObjectParameter,
        (nextKey: string) => `${key}[${nextKey}]`,
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
  const oauthOctokit = `import { createOAuthAppAuth } from "@octokit/auth-oauth-app"\n\nconst octokit = new Octokit({\n  authStrategy: createOAuthAppAuth,\n  auth:{\n    clientType: 'oauth-app',\n    clientId: '<YOUR_CLIENT ID>',\n    clientSecret: '<YOUR_CLIENT SECRET>'\n  }\n})\n\n`
  const isBasicAuth = operation?.progAccess?.basicAuth
  const authString = isBasicAuth ? oauthOctokit : authOctokit

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
  // This allows us to display custom media types like application/sarif+json
  return codeSample?.response?.contentType?.includes('+json')
    ? codeSample.response.contentType
    : 'application/vnd.github+json'
}
