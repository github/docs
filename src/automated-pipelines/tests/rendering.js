import { jest, test } from '@jest/globals'
import { readdirSync, readFileSync } from 'fs'
import path from 'path'

import { get } from '../../../tests/helpers/e2etest.js'
import { REST_DATA_DIR, REST_SCHEMA_FILENAME } from '../../rest/lib/index.js'

// TODO: Change to test every automated page, not just rest
describe('REST references docs', () => {
  jest.setTimeout(3 * 60 * 1000)

  test('all category and subcategory REST pages render for free-pro-team', async () => {
    // This currently just grabs the 'free-pro-team' schema, but ideally, we'd
    // get a list of all categories across all versions.
    const freeProTeamVersion = readdirSync(REST_DATA_DIR)
      .filter((file) => file.startsWith('fpt'))
      .shift()
    const freeProTeamSchema = JSON.parse(
      readFileSync(path.join(REST_DATA_DIR, freeProTeamVersion, REST_SCHEMA_FILENAME), 'utf8')
    )

    const restCategories = Object.entries(freeProTeamSchema)
      .map(([key, subCategory]) => {
        const subCategoryKeys = Object.keys(subCategory)
        if (subCategoryKeys.length === 1) {
          return key
        } else {
          return subCategoryKeys.map((elem) => `${key}/${elem}`)
        }
      })
      .flat()

    const statusCodes = await Promise.all(
      restCategories.map(async (page) => {
        const url = `/en/rest/${page}`
        const res = await get(url)
        return [url, res.statusCode]
      })
    )
    for (const [url, status] of statusCodes) {
      expect(status, url).toBe(200)
    }
    expect.assertions(restCategories.length)
  })
})
