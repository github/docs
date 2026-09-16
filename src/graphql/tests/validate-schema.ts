import { describe, expect, test, vi } from 'vitest'

import { getJsonValidator, validateJson } from '@/tests/lib/validate-json-schema'
import readJsonFile from '@/frame/lib/read-json-file'
import { schemaValidator, previewsValidator, upcomingChangesValidator } from '../lib/validator'
import { formatAjvErrors } from '@/tests/helpers/schemas'
import { allVersions } from '@/versions/lib/all-versions'
import { CATEGORIES } from '../lib/categories'
import { GRAPHQL_DATA_DIR } from '../lib/index'

const allVersionValues = Object.values(allVersions)
const graphqlVersions = allVersionValues.map((v) => v.openApiVersionName)
const graphqlTypes = (readJsonFile('./src/graphql/lib/types.json') as Array<{ kind: string }>).map(
  (t) => t.kind,
)

const previewsValidate = getJsonValidator(previewsValidator)
const upcomingChangesValidate = getJsonValidator(upcomingChangesValidator)

describe('graphql json files', () => {
  vi.setConfig({ testTimeout: 3 * 60 * 1000 })

  // The typeObj is repeated thousands of times across the per-category files
  // so cache validated objects to speed this test up significantly.
  const typeObjsTested = new Set<string>()
  for (const version of graphqlVersions) {
    // Merge every per-category schema-*.json into one in-memory shape
    // mirroring the legacy monolithic schema.json so the rest of the test
    // logic stays unchanged.
    const schemaJsonPerVersion: Record<string, Array<{ name: string }>> = {}
    for (const type of graphqlTypes) schemaJsonPerVersion[type] = []
    for (const category of CATEGORIES) {
      const bucket = readJsonFile(
        `${GRAPHQL_DATA_DIR}/${version}/schema-${category}.json`,
      ) as Record<string, Array<{ name: string }> | undefined>
      for (const type of graphqlTypes) {
        const items = bucket[type]
        if (items?.length) schemaJsonPerVersion[type].push(...items)
      }
    }
    for (const type of graphqlTypes) {
      test(`${version} schemas object validation for ${type}`, () => {
        for (const typeObj of schemaJsonPerVersion[type]) {
          const key = JSON.stringify(typeObj) + type
          if (typeObjsTested.has(key)) continue
          typeObjsTested.add(key)

          const { isValid, errors } = validateJson(
            schemaValidator[type as keyof typeof schemaValidator],
            typeObj,
          )

          let formattedErrors: string | undefined
          if (!isValid) {
            formattedErrors = `name: ${typeObj.name}: ${formatAjvErrors(errors || [])}`
          }

          expect(isValid, formattedErrors).toBe(true)
        }
      })
    }
  }

  test('previews object validation', () => {
    for (const version of graphqlVersions) {
      const previews = readJsonFile(`${GRAPHQL_DATA_DIR}/${version}/previews.json`) as unknown[]
      for (const preview of previews) {
        const isValid = previewsValidate(preview)
        let errors: string | undefined

        if (!isValid) {
          errors = formatAjvErrors(previewsValidate.errors || [])
        }

        expect(isValid, errors).toBe(true)
      }
    }
  })

  test('upcoming changes object validation', () => {
    for (const version of graphqlVersions) {
      const upcomingChanges = readJsonFile(
        `${GRAPHQL_DATA_DIR}/${version}/upcoming-changes.json`,
      ) as Record<string, unknown[]>
      for (const changes of Object.values(upcomingChanges)) {
        // each object value is an array of changes
        for (const changeObj of changes) {
          const isValid = upcomingChangesValidate(changeObj)
          let errors: string | undefined

          if (!isValid) {
            errors = formatAjvErrors(upcomingChangesValidate.errors || [])
          }

          expect(isValid, errors).toBe(true)
        }
      }
    }
  })
})
