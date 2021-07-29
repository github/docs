import { fileURLToPath } from 'url'
import path from 'path'
import walk from 'walk-sync'
import { get, isPlainObject } from 'lodash-es'
import { allVersions } from '../../lib/all-versions.js'
import nonEnterpriseDefaultVersion from '../../lib/non-enterprise-default-version.js'
import { operations } from '../../lib/rest/index.js'
import dedent from 'dedent'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const schemasPath = path.join(__dirname, '../../lib/rest/static/decorated')
const nonEnterpriseDefaultVersionSchema = operations[nonEnterpriseDefaultVersion]

describe('OpenAPI schema validation', () => {
  test('makes an object', () => {
    expect(isPlainObject(operations)).toBe(true)
  })

  // ensure every version defined in allVersions has a correlating static
  // decorated file, while allowing decorated files to exist when a version
  // is not yet defined in allVersions (e.g., a GHEC static file can exist
  // even though the version is not yet supported in the docs)
  test('every OpenAPI version must have a schema file in the docs', () => {
    const decoratedFilenames = walk(schemasPath).map((filename) => path.basename(filename, '.json'))

    Object.values(allVersions)
      .map((version) => version.openApiVersionName)
      .forEach((openApiBaseName) => {
        expect(decoratedFilenames.includes(openApiBaseName)).toBe(true)
      })
  })

  test('every value is an array of operations', () => {
    let checks = 0
    for (const [, operation] of Object.entries(operations)) {
      checks++
      expect(Array.isArray(operation)).toBe(true)
    }
    // there are at least 5 versions available (3 ghes [when a version
    // has been deprecated], api.github.com, and github.ae)
    expect(checks).toBeGreaterThanOrEqual(5)
  })
})

function findOperation(method, path) {
  return nonEnterpriseDefaultVersionSchema.find((operation) => {
    return operation.requestPath === path && operation.verb.toLowerCase() === method.toLowerCase()
  })
}

describe('x-codeSamples for curl', () => {
  test('GET', () => {
    const operation = findOperation('GET', '/repos/{owner}/{repo}')
    expect(isPlainObject(operation)).toBe(true)
    const { source } = operation['x-codeSamples'].find((sample) => sample.lang === 'Shell')
    const expected =
      'curl \\\n  -H "Accept: application/vnd.github.v3+json" \\\n  https://api.github.com/repos/octocat/hello-world'
    expect(source).toEqual(expected)
  })

  test('operations with required preview headers', () => {
    const operationsWithRequiredPreviewHeaders = nonEnterpriseDefaultVersionSchema.filter(
      (operation) => {
        const previews = get(operation, 'x-github.previews', [])
        return previews.some((preview) => preview.required)
      }
    )
    expect(operationsWithRequiredPreviewHeaders.length).toBeGreaterThan(0)
    const operationsWithHeadersInCodeSample = operationsWithRequiredPreviewHeaders.filter(
      (operation) => {
        const { source: codeSample } = operation['x-codeSamples'].find(
          (sample) => sample.lang === 'Shell'
        )
        return (
          codeSample.includes('-H "Accept: application/vnd.github') &&
          !codeSample.includes('application/vnd.github.v3+json')
        )
      }
    )
    expect(operationsWithRequiredPreviewHeaders.length).toEqual(
      operationsWithHeadersInCodeSample.length
    )
  })
})

describe('x-codeSamples for @octokit/core.js', () => {
  test('GET', () => {
    const operation = findOperation('GET', '/repos/{owner}/{repo}')
    expect(isPlainObject(operation)).toBe(true)
    const { source } = operation['x-codeSamples'].find((sample) => sample.lang === 'JavaScript')
    const expected = dedent`await octokit.request('GET /repos/{owner}/{repo}', {
      owner: 'octocat',
      repo: 'hello-world'
    })`
    expect(source).toEqual(expected)
  })

  test('POST', () => {
    const operation = findOperation('POST', '/repos/{owner}/{repo}/git/trees')
    expect(isPlainObject(operation)).toBe(true)
    const { source } = operation['x-codeSamples'].find((sample) => sample.lang === 'JavaScript')
    const expected = dedent`await octokit.request('POST /repos/{owner}/{repo}/git/trees', {
      owner: 'octocat',
      repo: 'hello-world',
      tree: [
        {
          path: 'path',
          mode: 'mode',
          type: 'type',
          sha: 'sha',
          content: 'content'
        }
      ]
    })`
    expect(source).toEqual(expected)
  })

  test('PUT', () => {
    const operation = findOperation('PUT', '/authorizations/clients/{client_id}/{fingerprint}')
    expect(isPlainObject(operation)).toBe(true)
    const { source } = operation['x-codeSamples'].find((sample) => sample.lang === 'JavaScript')
    const expected = dedent`await octokit.request('PUT /authorizations/clients/{client_id}/{fingerprint}', {
      client_id: 'client_id',
      fingerprint: 'fingerprint',
      client_secret: 'client_secret'
    })`
    expect(source).toEqual(expected)
  })

  test('operations with required preview headers', () => {
    const operationsWithRequiredPreviewHeaders = nonEnterpriseDefaultVersionSchema.filter(
      (operation) => {
        const previews = get(operation, 'x-github.previews', [])
        return previews.some((preview) => preview.required)
      }
    )
    expect(operationsWithRequiredPreviewHeaders.length).toBeGreaterThan(0)

    // Find something that looks like the following in each code sample:
    /*
      mediaType: {
        previews: [
          'machine-man'
        ]
      }
    */
    const operationsWithHeadersInCodeSample = operationsWithRequiredPreviewHeaders.filter(
      (operation) => {
        const { source: codeSample } = operation['x-codeSamples'].find(
          (sample) => sample.lang === 'JavaScript'
        )
        return codeSample.match(/mediaType: \{\s+previews: /g)
      }
    )
    expect(operationsWithRequiredPreviewHeaders.length).toEqual(
      operationsWithHeadersInCodeSample.length
    )
  })

  // skipped because the definition is current missing the `content-type` parameter
  // See GitHub issue #155943
  test.skip('operation with content-type parameter', () => {
    const operation = findOperation('POST', '/markdown/raw')
    expect(isPlainObject(operation)).toBe(true)
    const { source } = operation['x-codeSamples'].find((sample) => sample.lang === 'JavaScript')
    const expected = dedent`await octokit.request('POST /markdown/raw', {
      data: 'data',
      headers: {
        'content-type': 'text/plain; charset=utf-8'
      }
    })`
    expect(source).toEqual(expected)
  })
})
