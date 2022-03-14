import fs from 'fs/promises'
import { fileURLToPath } from 'url'
import path from 'path'

import dedent from 'dedent'
import { describe } from '@jest/globals'
import walk from 'walk-sync'
import { get, isPlainObject, difference } from 'lodash-es'

import { allVersions } from '../../lib/all-versions.js'
import getRest from '../../lib/rest/index.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const schemasPath = path.join(__dirname, '../../lib/rest/static/decorated')

async function getFlatListOfOperations(version) {
  const flatList = []
  const operations = await getRest(version)

  for (const category of Object.keys(operations)) {
    const subcategories = Object.keys(operations[category])
    for (const subcategory of subcategories) {
      flatList.push(...operations[category][subcategory])
    }
  }
  return flatList
}

describe('markdown for each rest version', () => {
  test('markdown file exists for every operationId prefix in all versions of the OpenAPI schema', async () => {
    // list of REST markdown files that do not correspond to REST API resources
    // TODO could we get this list dynamically, say via page frontmatter?
    const excludeFromResourceNameCheck = [
      'endpoints-available-for-github-apps.md',
      'permissions-required-for-github-apps.md',
      'index.md',
    ]

    // Unique set of all categories across all versions of the OpenAPI schema
    const allCategories = new Set()

    for (const version in allVersions) {
      const restOperations = await getRest(version)
      Object.keys(restOperations).forEach((category) => allCategories.add(category))
    }

    const referenceDir = path.join(__dirname, '../../content/rest/reference')
    const filenames = (await fs.readdir(referenceDir))
      .filter(
        (filename) =>
          !excludeFromResourceNameCheck.find((excludedFile) => filename.endsWith(excludedFile))
      )
      .map((filename) => filename.replace('.md', ''))

    const missingResource =
      'Found a markdown file in content/rest/reference that is not represented by an OpenAPI REST operation category.'
    expect(difference(filenames, [...allCategories]), missingResource).toEqual([])

    const missingFile =
      'Found an OpenAPI REST operation category that is not represented by a markdown file in content/rest/reference.'
    expect(difference([...allCategories], filenames), missingFile).toEqual([])
  })
})

describe('OpenAPI schema validation', () => {
  // ensure every version defined in allVersions has a correlating static
  // decorated file, while allowing decorated files to exist when a version
  // is not yet defined in allVersions (e.g., a GHEC static file can exist
  // even though the version is not yet supported in the docs)
  test('every OpenAPI version must have a schema file in the docs', async () => {
    const decoratedFilenames = walk(schemasPath).map((filename) => path.basename(filename, '.json'))

    Object.values(allVersions)
      .map((version) => version.openApiVersionName)
      .forEach((openApiBaseName) => {
        expect(decoratedFilenames.includes(openApiBaseName)).toBe(true)
      })
  })

  // remove?
  test('operations object structure organized by version, category, and subcategory', async () => {
    for (const version in allVersions) {
      const operations = await getFlatListOfOperations(version)
      expect(operations.every((operation) => operation.verb)).toBe(true)
    }
  })

  test('no wrongly detected AppleScript syntax highlighting in schema data', async () => {
    expect.assertions(Object.keys(allVersions).length)
    await Promise.all(
      Object.keys(allVersions).map(async (version) => {
        const operations = await getRest(version)
        expect(JSON.stringify(operations).includes('hljs language-applescript')).toBe(false)
      })
    )
  })
})

async function findOperation(version, method, path) {
  const allOperations = await getFlatListOfOperations(version)
  return allOperations.find((operation) => {
    return operation.requestPath === path && operation.verb.toLowerCase() === method.toLowerCase()
  })
}

describe('x-codeSamples for curl', () => {
  test('GET', async () => {
    for (const version in allVersions) {
      let domain = 'https://api.github.com'
      if (version.includes('enterprise-server')) {
        domain = 'http(s)://{hostname}/api/v3'
      } else if (version === 'github-ae@latest') {
        domain = 'https://{hostname}/api/v3'
      }
      const operation = await findOperation(version, 'GET', '/repos/{owner}/{repo}')
      expect(isPlainObject(operation)).toBe(true)
      const { source } = operation['x-codeSamples'].find((sample) => sample.lang === 'Shell')
      const expected =
        'curl \\\n' +
        '  -H "Accept: application/vnd.github.v3+json" \\\n' +
        `  ${domain}/repos/octocat/hello-world`
      expect(source).toEqual(expected)
    }
  })

  test('operations with required preview headers match Shell examples', async () => {
    for (const version in allVersions) {
      const allOperations = await getFlatListOfOperations(version)
      const operationsWithRequiredPreviewHeaders = allOperations.filter((operation) => {
        const previews = get(operation, 'x-github.previews', [])
        return previews.some((preview) => preview.required)
      })

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
    }
  })
})

describe('x-codeSamples for @octokit/core.js', () => {
  test('GET', async () => {
    for (const version in allVersions) {
      const operation = await findOperation(version, 'GET', '/repos/{owner}/{repo}')
      expect(isPlainObject(operation)).toBe(true)
      const { source } = operation['x-codeSamples'].find((sample) => sample.lang === 'JavaScript')
      const plainText = source.replace(/<[^>]+>/g, '').trim()
      const expected = dedent`await octokit.request('GET /repos/{owner}/{repo}', {
        owner: 'octocat',
        repo: 'hello-world'
      })`
      expect(plainText).toEqual(expected)
    }
  })

  test('POST', async () => {
    for (const version in allVersions) {
      const operation = await findOperation(version, 'POST', '/repos/{owner}/{repo}/git/trees')
      expect(isPlainObject(operation)).toBe(true)
      const { source } = operation['x-codeSamples'].find((sample) => sample.lang === 'JavaScript')
      const plainText = source.replace(/<[^>]+>/g, '').trim()
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
      expect(plainText).toEqual(expected)
    }
  })

  test('PUT', async () => {
    const operation = await findOperation(
      'free-pro-team@latest',
      'PUT',
      '/authorizations/clients/{client_id}/{fingerprint}'
    )
    expect(isPlainObject(operation)).toBe(true)
    const { source } = operation['x-codeSamples'].find((sample) => sample.lang === 'JavaScript')
    const plainText = source.replace(/<[^>]+>/g, '').trim()
    const expected = dedent`await octokit.request('PUT /authorizations/clients/{client_id}/{fingerprint}', {
      client_id: 'client_id',
      fingerprint: 'fingerprint',
      client_secret: 'client_secret'
    })`
    expect(plainText).toEqual(expected)
  })

  test('operations with required preview headers match JavaScript examples', async () => {
    for (const version in allVersions) {
      const allOperations = await getFlatListOfOperations(version)
      const operationsWithRequiredPreviewHeaders = allOperations.filter((operation) => {
        const previews = get(operation, 'x-github.previews', [])
        return previews.some((preview) => preview.required)
      })

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
    }
  })

  // skipped because the definition is current missing the `content-type` parameter
  // GitHub GitHub issue: 155943
  test.skip('operation with content-type parameter', async () => {
    for (const version in allVersions) {
      const operation = await findOperation(version, 'POST', '/markdown/raw')
      expect(isPlainObject(operation)).toBe(true)
      const { source } = operation['x-codeSamples'].find((sample) => sample.lang === 'JavaScript')
      const expected = dedent`await octokit.request('POST /markdown/raw', {
        data: 'data',
        headers: {
          'content-type': 'text/plain; charset=utf-8'
        }
      })`
      expect(source).toEqual(expected)
    }
  })
})
