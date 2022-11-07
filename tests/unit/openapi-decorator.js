import { describe, expect } from '@jest/globals'
import path from 'path'

import { getOpenApiSchemaFiles } from '../../script/rest/utils/decorator.js'
import { getSchemas } from '../../script/rest/utils/get-openapi-schemas.js'
import { allVersions } from '../../lib/all-versions.js'

const supportedReleases = Object.keys(allVersions).map(
  (version) => allVersions[version].openApiVersionName
)
describe('decorated static files are generated correctly from dereferenced openapi files', () => {
  // If there is a request with no request body parameters and all of
  // the responses have no content, then we can create a docs
  // example for just status codes below 300. All other status codes will
  // be listed in the status code table in the docs.
  test('webhook schema list should not include calendar date versions', async () => {
    const schemas = [
      'api.github.com.2022-08-09.deref.json',
      'api.github.com.2022-10-09.deref.json',
      'api.github.com.2022-11-09.deref.json',
      'ghec.2022-09-09.deref.json',
      ...supportedReleases,
    ]

    const expectedRestSchemas = [
      'api.github.com.2022-08-09',
      'api.github.com.2022-10-09',
      'api.github.com.2022-11-09',
      'ghec.2022-09-09',
      ...supportedReleases.filter((release) => release !== 'ghec' && release !== 'api.github.com'),
    ]

    const { restSchemas, webhookSchemas } = await getOpenApiSchemaFiles(schemas)
    expect(restSchemas.sort()).toEqual(expectedRestSchemas.sort())
    expect(webhookSchemas.sort()).toEqual(supportedReleases.sort())
  })

  test('deprecated schemas in docs-internal are not included', async () => {
    const myPath = path.join(process.cwd(), 'tests/fixtures/openapi-release-configs')
    const currentReleaseSchemas = await getSchemas(myPath)
    const expectedSchemas = [
      'api.github.com.deref.json',
      'ghec.deref.json',
      'ghes-3.7.deref.json',
      'github.ae.deref.json',
    ]
    expect(currentReleaseSchemas.sort()).toEqual(expectedSchemas.sort())
  })

  test('deprecated schemas in docs-internal are included when deprecated option is enabled', async () => {
    const myPath = path.join(process.cwd(), 'tests/fixtures/openapi-release-configs')
    const deprecatedSchemas = await getSchemas(myPath, true)
    const expectedSchemas = [
      'api.github.com.deref.json',
      'ghec.deref.json',
      'ghes-3.7.deref.json',
      'github.ae.deref.json',
      'ghes-3.2.deref.json',
    ]
    expect(deprecatedSchemas.sort()).toEqual(expectedSchemas.sort())
  })

  test('unpublished schemas in github/github are included when unpublished option is enabled', async () => {
    const myPath = path.join(process.cwd(), 'tests/fixtures/openapi-release-configs')
    const unpublishedSchemas = await getSchemas(myPath, false, true)
    const expectedSchemas = [
      'api.github.com.deref.json',
      'ghec.deref.json',
      'ghes-3.7.deref.json',
      'github.ae.deref.json',
      'ghes-3.8.deref.json',
    ]
    expect(unpublishedSchemas.sort()).toEqual(expectedSchemas.sort())
  })

  test('specifying specific openapi versions is successful', async () => {
    const myPath = path.join(process.cwd(), 'tests/fixtures/openapi-release-configs')
    const versionSchemas = await getSchemas(myPath, false, false, ['ghec', 'ghes-3.7'])
    const expectedSchemas = ['ghec.deref.json', 'ghes-3.7.deref.json']
    expect(versionSchemas.sort()).toEqual(expectedSchemas.sort())
  })

  test('specifying deprecated or unpublished versions fails', async () => {
    const myPath = path.join(process.cwd(), 'tests/fixtures/openapi-release-configs')
    // const testError = async () => {
    //   await getSchemas(myPath, false, false, ['ghes-3.8', 'ghes-3.2'])
    // }
    // await expect(await testError()).toThrow(Error)
    await expect(getSchemas(myPath, false, false, ['ghes-3.8', 'ghes-3.2'])).rejects.toThrow()
  })
})
