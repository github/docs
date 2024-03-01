import { describe, expect } from '@jest/globals'

import { getOpenApiSchemaFiles } from '../scripts/utils/sync.js'
import { allVersions } from '#src/versions/lib/all-versions.js'

const supportedReleases = Object.keys(allVersions).map(
  (version) => allVersions[version].openApiVersionName,
)
describe('rest data files are generated correctly from dereferenced openapi files', () => {
  test('rest schema list should include calendar date versions', async () => {
    const schemas = [
      'fpt-2022-08-09.json',
      'fpt-2022-10-09.json',
      'fpt-2022-11-09.json',
      'ghec-2022-09-09.json',
      ...supportedReleases,
    ]

    const expectedRestSchemas = [
      'fpt-2022-08-09.json',
      'fpt-2022-10-09.json',
      'fpt-2022-11-09.json',
      'ghec-2022-09-09.json',
      ...supportedReleases
        .filter((release) => release !== 'ghec' && release !== 'fpt')
        .map((release) => `${release}.json`),
    ]

    const { restSchemas } = await getOpenApiSchemaFiles(schemas)
    expect(restSchemas.sort()).toEqual(expectedRestSchemas.sort())
  })
})
