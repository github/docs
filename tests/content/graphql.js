import { jest } from '@jest/globals'

import readJsonFile from '../../lib/read-json-file.js'
import {
  schemaValidator,
  previewsValidator,
  upcomingChangesValidator,
} from '../../src/graphql/lib/validator.js'
import revalidator from 'revalidator'
import { allVersions } from '../../lib/all-versions.js'
import { GRAPHQL_DATA_DIR } from '../../src/graphql/lib/index.js'

const allVersionValues = Object.values(allVersions)
const graphqlVersions = allVersionValues.map((v) => v.miscVersionName)
const graphqlTypes = readJsonFile('./src/graphql/lib/types.json').map((t) => t.kind)

describe('graphql json files', () => {
  jest.setTimeout(3 * 60 * 1000)

  test('schemas object validation', () => {
    // The typeObj is repeated thousands of times in each .json file
    // so use a cache of which we've already validated to speed this
    // test up significantly.
    const typeObjsTested = new Set()
    graphqlVersions.forEach((version) => {
      const schemaJsonPerVersion = readJsonFile(`${GRAPHQL_DATA_DIR}/${version}/schema.json`)
      // all graphql types are arrays except for queries
      graphqlTypes.forEach((type) => {
        schemaJsonPerVersion[type].forEach((typeObj) => {
          const key = JSON.stringify(typeObj) + type
          if (typeObjsTested.has(key)) return
          typeObjsTested.add(key)

          const { valid, errors } = revalidator.validate(typeObj, schemaValidator[type])
          const errorMessage = JSON.stringify(errors, null, 2)
          expect(valid, errorMessage).toBe(true)
        })
      })
    })
  })

  test('previews object validation', () => {
    graphqlVersions.forEach((version) => {
      const previews = readJsonFile(`${GRAPHQL_DATA_DIR}/${version}/previews.json`)
      previews.forEach((preview) => {
        const { valid, errors } = revalidator.validate(preview, previewsValidator)
        const errorMessage = JSON.stringify(errors, null, 2)
        expect(valid, errorMessage).toBe(true)
      })
    })
  })

  test('upcoming changes object validation', () => {
    graphqlVersions.forEach((version) => {
      const upcomingChanges = readJsonFile(`${GRAPHQL_DATA_DIR}/${version}/upcoming-changes.json`)
      for (const changes of Object.values(upcomingChanges)) {
        // each object value is an array of changes
        changes.forEach((changeObj) => {
          const { valid, errors } = revalidator.validate(changeObj, upcomingChangesValidator)
          const errorMessage = JSON.stringify(errors, null, 2)
          expect(valid, errorMessage).toBe(true)
        })
      }
    })
  })
})
