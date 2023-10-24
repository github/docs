import { parseTemplate } from 'url-template'
import { stringify } from 'javascript-stringify'

import type { CodeSample, Operation } from 'src/rest/components/types'
import { useVersion } from 'src/versions/components/useVersion'
import { useMainContext } from 'components/context/MainContext'

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
export function getShellExample(operation: Operation, codeSample: CodeSample) {
  const { currentVersion } = useVersion()
  const { allVersions } = useMainContext()
  const defaultAcceptHeader = getAcceptHeader(codeSample)

  // For operations that upload data using octet-stream, you need
  // to explicitly set the content-type header.
  const contentTypeHeader =
    codeSample?.request?.contentType === 'application/octet-stream'
      ? '-H "Content-Type: application/octet-stream"'
      : ''

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
          requestBodyParams = `${requestBodyParams} ${CURL_CONTENT_TYPE_MAPPING[contentType]} "${elem}=${bodyParameters[elem]}"`
        })
      } else {
        requestBodyParams = `${CURL_CONTENT_TYPE_MAPPING[contentType]} "${bodyParameters}"`
      }
    }
  }

  let authHeader
  let apiVersionHeader

  if (operation.subcategory === 'management-console' || operation.subcategory === 'manage-ghes') {
    authHeader = '-u "api_key:your-password"'
    apiVersionHeader = ''
  } else {
    authHeader = '-H "Authorization: Bearer <YOUR-TOKEN>"'

    apiVersionHeader =
      allVersions[currentVersion].apiVersions.length > 0 &&
      allVersions[currentVersion].latestApiVersion
        ? ` \\\n  -H "X-GitHub-Api-Version: ${allVersions[currentVersion].latestApiVersion}"`
        : ''
  }

  let urlArg = `${operation.serverUrl}${requestPath}`
  // If the `requestPath` contains a `?` character, if you need to escape
  // the whole URL otherwise, when you paste it into your terminal, it
  // will fail because the `?` is a bash control character.
  if (requestPath.includes('?')) {
    urlArg = `"${urlArg}"`
  }
  const args = [
    operation.verb !== 'get' && `-X ${operation.verb.toUpperCase()}`,
    `-H "Accept: ${defaultAcceptHeader}" \\\n  ${authHeader}${apiVersionHeader}`,
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
    -fref,topic-branch=0,payload,{ "deploy": "migrate" }=1,description,Deploy request from hubot=2
*/
export function getGHExample(operation: Operation, codeSample: CodeSample) {
  const defaultAcceptHeader = getAcceptHeader(codeSample)
  const hostname = operation.serverUrl !== 'https://api.github.com' ? '--hostname HOSTNAME' : ''
  const { currentVersion } = useVersion()
  const { allVersions } = useMainContext()

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
    if (typeof bodyParameters === 'object') {
      const bodyParamValues = Object.values(codeSample.request.bodyParameters)
      // GitHub CLI does not support sending Objects using the -F or
      // -f flags. That support may be added in the future. It is possible to
      // use gh api --input to take a JSON object from standard input
      // constructed by jq and piped to gh api. However, we'll hold off on adding
      // that complexity for now.
      if (bodyParamValues.some((elem) => typeof elem === 'object' && !Array.isArray(elem))) {
        return undefined
      }
      requestBodyParams = Object.keys(codeSample.request.bodyParameters)
        .map((key) => {
          if (typeof codeSample.request.bodyParameters[key] === 'string') {
            return `-f ${key}='${codeSample.request.bodyParameters[key]}' `
          } else if (Array.isArray(codeSample.request.bodyParameters[key])) {
            let cliLine = ''
            for (const value of codeSample.request.bodyParameters[key]) {
              cliLine += `${typeof value === 'string' ? '-f' : '-F'} "${key}[]=${value}" `
            }
            return cliLine
          } else {
            return `-F ${key}=${codeSample.request.bodyParameters[key]} `
          }
        })
        .join('\\\n ')
    } else {
      requestBodyParams = `-f '${codeSample.request.bodyParameters}'`
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
export function getJSExample(operation: Operation, codeSample: CodeSample) {
  const { currentVersion } = useVersion()
  const { allVersions } = useMainContext()
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
  const require = `const octokit = new Octokit(${stringify({ auth: 'YOUR-TOKEN' }, null, 2)})\n\n`

  return `${comment}${require}await octokit.request('${operation.verb.toUpperCase()} ${
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
