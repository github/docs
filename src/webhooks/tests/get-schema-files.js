import { describe, expect, test } from 'vitest'

import { getOpenApiSchemaFiles } from '../../rest/scripts/utils/sync.js'
import { allVersions } from '#src/versions/lib/all-versions.js'

describe('webhook data files are generated correctly from dereferenced openapi files', () => {
  test('webhook schema list should not include calendar date versions', async () => {
    const supportedReleases = Object.keys(allVersions).map(
      (version) => allVersions[version].openApiVersionName,
    )
    const schemas = [
      'fpt-2022-08-09.json',
      'fpt-2022-10-09.json',
      'fpt-2022-11-09.json',
      'ghec-2022-09-09.json',
      ...supportedReleases,
    ]

    const { webhookSchemas } = await getOpenApiSchemaFiles(schemas)
    expect(webhookSchemas.sort()).toEqual(
      supportedReleases.sort().map((release) => `${release}.json`),
    )
  })
})
