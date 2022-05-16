import { parseTemplate } from 'url-template'
import { stringify } from 'javascript-stringify'

import type { CodeSample, Operation } from '../rest/types'

/*
  Generates a curl example

  For example: 
  curl \
  -X POST \
  -H "Accept: application/vnd.github.v3+json" \
  https://{hostname}/api/v3/repos/OWNER/REPO/deployments \
  -d '{"ref":"topic-branch","payload":"{ \"deploy\": \"migrate\" }","description":"Deploy request from hubot"}'
*/
export function getShellExample(operation: Operation, codeSample: CodeSample) {
  // This allows us to display custom media types like application/sarif+json
  const defaultAcceptHeader = codeSample?.response?.contentType?.includes('+json')
    ? codeSample.response.contentType
    : 'application/vnd.github.v3+json'

  const requestPath = codeSample?.request?.parameters
    ? parseTemplate(operation.requestPath).expand(codeSample.request.parameters)
    : operation.requestPath

  let requestBodyParams = ''
  if (codeSample?.request?.bodyParameters) {
    requestBodyParams = `-d '${JSON.stringify(codeSample.request.bodyParameters)}'`

    // If the content type is application/x-www-form-urlencoded the format of
    // the shell example is --data-urlencode param1=value1 --data-urlencode param2=value2
    // For example, this operation:
    // https://docs.github.com/en/enterprise/rest/reference/enterprise-admin#enable-or-disable-maintenance-mode
    if (codeSample.request.contentType === 'application/x-www-form-urlencoded') {
      requestBodyParams = ''
      const paramNames = Object.keys(codeSample.request.bodyParameters)
      paramNames.forEach((elem) => {
        requestBodyParams = `${requestBodyParams} --data-urlencode ${elem}=${codeSample.request.bodyParameters[elem]}`
      })
    }
  }

  const args = [
    operation.verb !== 'get' && `-X ${operation.verb.toUpperCase()}`,
    `-H "Accept: ${defaultAcceptHeader}"`,
    `${operation.serverUrl}${requestPath}`,
    requestBodyParams,
  ].filter(Boolean)
  return `curl \\\n  ${args.join(' \\\n  ')}`
}

/*
  Generates a GitHub CLI example

  For example:
   gh api \
    -X POST \
    -H "Accept: application/vnd.github.v3+json" \
    /repos/OWNER/REPO/deployments \
    -fref,topic-branch=0,payload,{ "deploy": "migrate" }=1,description,Deploy request from hubot=2
*/
export function getGHExample(operation: Operation, codeSample: CodeSample) {
  const defaultAcceptHeader = codeSample?.response?.contentType?.includes('+json')
    ? codeSample.response.contentType
    : 'application/vnd.github.v3+json'
  const hostname = operation.serverUrl !== 'https://api.github.com' ? '--hostname HOSTNAME' : ''

  const requestPath = codeSample?.request?.parameters
    ? parseTemplate(operation.requestPath).expand(codeSample.request.parameters)
    : operation.requestPath

  let requestBodyParams = ''
  if (codeSample?.request?.bodyParameters) {
    const bodyParamValues = Object.values(codeSample.request.bodyParameters)
    // GitHub CLI does not support sending Objects and arrays using the -F or
    // -f flags. That support may be added in the future. It is possible to
    // use gh api --input to take a JSON object from standard input
    // constructed by jq and piped to gh api. However, we'll hold off on adding
    // that complexity for now.
    if (bodyParamValues.some((elem) => typeof elem === 'object')) {
      return undefined
    }
    requestBodyParams = Object.keys(codeSample.request.bodyParameters)
      .map((key) => {
        if (typeof codeSample.request.bodyParameters[key] === 'string') {
          return `-f ${key}='${codeSample.request.bodyParameters[key]}'\n`
        } else {
          return `-F ${key}=${codeSample.request.bodyParameters[key]}\n`
        }
      })
      .join(' ')
  }
  const args = [
    operation.verb !== 'get' && `--method ${operation.verb.toUpperCase()}`,
    `-H "Accept: ${defaultAcceptHeader}"`,
    hostname,
    requestPath,
    requestBodyParams,
  ].filter(Boolean)
  return `# GitHub CLI api\n# https://cli.github.com/manual/gh_api\n\ngh api \\\n  ${args.join(
    ' \\\n  '
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
  const parameters = codeSample.request
    ? { ...codeSample.request.parameters, ...codeSample.request.bodyParameters }
    : {}

  let queryParameters = ''

  // Add query parameters to the request path for POST and PUT operations in
  // URL template format e.g. 'POST /repos/{owner}/{repo}/releases/{release_id}/assets{?name,label}'
  if (operation.verb === 'post' || operation.verb === 'put') {
    const queryParms = operation.parameters
      .filter((param) => {
        return param.in === 'query'
      })
      .map((param) => {
        return param.name
      })

    if (queryParms.length > 0) {
      queryParameters = `{?${queryParms.join(',')}}`
    }
  }
  const comment = `// Octokit.js\n// https://github.com/octokit/core.js#readme\n`
  const require = `const octokit = new Octokit(${stringify(
    { auth: 'personal-access-token123' },
    null,
    2
  )})\n\n`

  return `${comment}${require}await octokit.request('${operation.verb.toUpperCase()} ${
    operation.requestPath
  }${queryParameters}', ${stringify(parameters, null, 2)})`
}
