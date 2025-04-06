import { describe, expect, test, vi } from 'vitest'

import { getJsonValidator, validateJson } from '#src/tests/lib/validate-json-schema.js'
import readJsonFile from '#src/frame/lib/read-json-file.js'
import { schemaValidator, previewsValidator, upcomingChangesValidator } from '../lib/validator.js'
import { formatAjvErrors } from '#src/tests/helpers/schemas.js'
import { allVersions } from '#src/versions/lib/all-versions.js'
import { GRAPHQL_DATA_DIR } from '../lib/index.js'

const allVersionValues = Object.values(allVersions)
const graphqlVersions = allVersionValues.map((v) => v.openApiVersionName)
const graphqlTypes = readJsonFile('./src/graphql/lib/types.json').map((t) => t.kind)

const previewsValidate = getJsonValidator(previewsValidator)
const upcomingChangesValidate = getJsonValidator(upcomingChangesValidator)

describe('graphql json files', () => {
  vi.setConfig({ testTimeout: 3 * 60 * 1000 })

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

          const { isValid, errors } = validateJson(schemaValidator[type], typeObj)

          let formattedErrors = errors
          if (!isValid) {
            formattedErrors = `kind: ${typeObj.kind}, name: ${typeObj.name}: ${formatAjvErrors(
              errors,
            )}`
          }

          expect(isValid, formattedErrors).toBe(true)
        })
      })
    })
  })

  test('previews object validation', () => {
    graphqlVersions.forEach((version) => {
      const previews = readJsonFile(`${GRAPHQL_DATA_DIR}/${version}/previews.json`)
      previews.forEach((preview) => {
        const isValid = previewsValidate(preview)
        let errors

        if (!isValid) {
          errors = formatAjvErrors(previewsValidate.errors)
        }

        expect(isValid, errors).toBe(true)
      })
    })
  })

  test('upcoming changes object validation', () => {
    graphqlVersions.forEach((version) => {
      const upcomingChanges = readJsonFile(`${GRAPHQL_DATA_DIR}/${version}/upcoming-changes.json`)
      for (const changes of Object.values(upcomingChanges)) {
        // each object value is an array of changes
        changes.forEach((changeObj) => {
          const isValid = upcomingChangesValidate(changeObj)
          let errors

          if (!isValid) {
            errors = formatAjvErrors(upcomingChangesValidate.errors)
          }

          expect(isValid, errors).toBe(true)
        })
      }
    })
  })
})
