import { jest } from '@jest/globals'
import Ajv from 'ajv'

import readJsonFile from '../../../lib/read-json-file.js'
import { schemaValidator, previewsValidator, upcomingChangesValidator } from '../lib/validator.js'
import { formatAjvErrors } from '../../../tests/helpers/schemas.js'
import { allVersions } from '#src/versions/lib/all-versions.js'
import { GRAPHQL_DATA_DIR } from '../lib/index.js'

const allVersionValues = Object.values(allVersions)
const graphqlVersions = allVersionValues.map((v) => v.openApiVersionName)
const graphqlTypes = readJsonFile('./src/graphql/lib/types.json').map((t) => t.kind)

const ajv = new Ajv({ allErrors: true, allowUnionTypes: true })
const previewsValidate = ajv.compile(previewsValidator)
const upcomingChangesValidate = ajv.compile(upcomingChangesValidator)
// setup ajv validator functions for each graphql type (e.g. queries, mutations,
// etc.)
const schemaValidatorFunctions = {}
graphqlTypes.forEach((type) => {
  schemaValidatorFunctions[type] = ajv.compile(schemaValidator[type])
})

describe('graphql json files', () => {
  jest.setTimeout(3 * 60 * 1000)

  // The typeObj is repeated thousands of times in each .json file
  // so use a cache of which we've already validated to speed this
  // test up significantly.
  const typeObjsTested = new Set()
  graphqlVersions.forEach((version) => {
    const schemaJsonPerVersion = readJsonFile(`${GRAPHQL_DATA_DIR}/${version}/schema.json`)
    // all graphql types are arrays except for queries
    graphqlTypes.forEach((type) => {
      test(`${version} schemas object validation for ${type}`, () => {
        schemaJsonPerVersion[type].forEach((typeObj) => {
          const key = JSON.stringify(typeObj) + type
          if (typeObjsTested.has(key)) return
          typeObjsTested.add(key)

          const valid = schemaValidatorFunctions[type](typeObj)
          let errors

          if (!valid) {
            errors = `kind: ${typeObj.kind}, name: ${typeObj.name}: ${formatAjvErrors(
              schemaValidatorFunctions[type].errors,
            )}`
          }

          expect(valid, errors).toBe(true)
        })
      })
    })
  })

  test('previews object validation', () => {
    graphqlVersions.forEach((version) => {
      const previews = readJsonFile(`${GRAPHQL_DATA_DIR}/${version}/previews.json`)
      previews.forEach((preview) => {
        const valid = previewsValidate(preview)
        let errors

        if (!valid) {
          errors = formatAjvErrors(previewsValidate.errors)
        }

        expect(valid, errors).toBe(true)
      })
    })
  })

  test('upcoming changes object validation', () => {
    graphqlVersions.forEach((version) => {
      const upcomingChanges = readJsonFile(`${GRAPHQL_DATA_DIR}/${version}/upcoming-changes.json`)
      for (const changes of Object.values(upcomingChanges)) {
        // each object value is an array of changes
        changes.forEach((changeObj) => {
          const valid = upcomingChangesValidate(changeObj)
          let errors

          if (!valid) {
            errors = formatAjvErrors(upcomingChangesValidate.errors)
          }

          expect(valid, errors).toBe(true)
        })
      }
    })
  })
})
