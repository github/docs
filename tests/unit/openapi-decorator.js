import { describe, expect } from '@jest/globals'

import { getOpenApiSchemaFiles } from '../../script/rest/utils/decorator.js'
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
})
