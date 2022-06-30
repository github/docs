import readJsonFile from '../../lib/read-json-file.js'
import {
  schemaValidator,
  previewsValidator,
  upcomingChangesValidator,
} from '../../lib/graphql/validator.js'
import revalidator from 'revalidator'
import { allVersions } from '../../lib/all-versions.js'
import { jest } from '@jest/globals'

const previewsJson = readJsonFile('./lib/graphql/static/previews.json')
const upcomingChangesJson = readJsonFile('./lib/graphql/static/upcoming-changes.json')
const prerenderedObjectsJson = readJsonFile('./lib/graphql/static/prerendered-objects.json')
const allVersionValues = Object.values(allVersions)
const graphqlVersions = allVersionValues.map((v) => v.miscVersionName)
const graphqlTypes = readJsonFile('./lib/graphql/types.json').map((t) => t.kind)

describe('graphql json files', () => {
  jest.setTimeout(3 * 60 * 1000)

  test('static files have versions as top-level keys', () => {
    graphqlVersions.forEach((version) => {
      expect(version in previewsJson).toBe(true)
      expect(version in upcomingChangesJson).toBe(true)
      expect(version in prerenderedObjectsJson).toBe(true)
    })
  })

  test('schemas object validation', () => {
    // The typeObj is repeated thousands of times in each .json file
    // so use a cache of which we've already validated to speed this
    // test up significantly.
    const typeObjsTested = new Set()
    graphqlVersions.forEach((version) => {
      const schemaJsonPerVersion = readJsonFile(`lib/graphql/static/schema-${version}.json`)
      // all graphql types are arrays except for queries
      graphqlTypes
        .filter((type) => type !== 'queries')
        .forEach((type) => {
          schemaJsonPerVersion[type].forEach((typeObj) => {
            const key = JSON.stringify(typeObj) + type
            if (typeObjsTested.has(key)) return
            typeObjsTested.add(key)

            const { valid, errors } = revalidator.validate(typeObj, schemaValidator[type])
            const errorMessage = JSON.stringify(errors, null, 2)
            expect(valid, errorMessage).toBe(true)
          })
        })

      // check query connections separately
      schemaJsonPerVersion.queries.connections.forEach((connection) => {
        const { valid, errors } = revalidator.validate(connection, schemaValidator.queryConnections)
        const errorMessage = JSON.stringify(errors, null, 2)
        expect(valid, errorMessage).toBe(true)
      })

      // check query fields separately
      schemaJsonPerVersion.queries.fields.forEach((field) => {
        const { valid, errors } = revalidator.validate(field, schemaValidator.queryFields)
        const errorMessage = JSON.stringify(errors, null, 2)
        expect(valid, errorMessage).toBe(true)
      })
    })
  })

  test('previews object validation', () => {
    graphqlVersions.forEach((version) => {
      previewsJson[version].forEach((previewObj) => {
        const { valid, errors } = revalidator.validate(previewObj, previewsValidator)
        const errorMessage = JSON.stringify(errors, null, 2)
        expect(valid, errorMessage).toBe(true)
      })
    })
  })

  test('upcoming changes object validation', () => {
    graphqlVersions.forEach((version) => {
      Object.values(upcomingChangesJson[version]).forEach((changes) => {
        // each object value is an array of changes
        changes.forEach((changeObj) => {
          const { valid, errors } = revalidator.validate(changeObj, upcomingChangesValidator)
          const errorMessage = JSON.stringify(errors, null, 2)
          expect(valid, errorMessage).toBe(true)
        })
      })
    })
  })

  test('prerendered objects validation', () => {
    graphqlVersions.forEach((version) => {
      // TODO: Is this still true?
      //
      // shape of prerenderedObject: {
      //   html: <div>foo</div>,
      //   miniToc: {contents: '<a>bar</a>', headingLevel: N, indentationLevel: N}
      //  }
      const prerenderedHtml = prerenderedObjectsJson[version].html
      expect(typeof prerenderedHtml).toBe('string')
      expect(prerenderedHtml.startsWith('<div>')).toBe(true)
      const prerenderedMiniToc = prerenderedObjectsJson[version].miniToc
      expect(Array.isArray(prerenderedMiniToc)).toBe(true)
      expect(prerenderedMiniToc.length).toBeGreaterThan(0)
      expect(typeof prerenderedMiniToc[0].contents).toBe('object')

      // TODO: Check whether the following should be removed or updated.
      // expect(typeof prerenderedMiniToc[0].headingLevel).toBe('number')
      // expect(typeof prerenderedMiniToc[0].indentationLevel).toBe('number')
    })
  })
})
