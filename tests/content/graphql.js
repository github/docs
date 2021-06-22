const fs = require('fs')
const path = require('path')
const previewsJson = require('../../lib/graphql/static/previews')
const upcomingChangesJson = require('../../lib/graphql/static/upcoming-changes')
const prerenderedObjectsJson = require('../../lib/graphql/static/prerendered-objects')
const { schemaValidator, previewsValidator, upcomingChangesValidator } = require('../../lib/graphql/validator')
const revalidator = require('revalidator')
const allVersions = Object.values(require('../../lib/all-versions'))
const graphqlVersions = allVersions.map(v => v.miscVersionName)
const graphqlTypes = require('../../lib/graphql/types').map(t => t.kind)

describe('graphql json files', () => {
  jest.setTimeout(3 * 60 * 1000)

  test('static files have versions as top-level keys', () => {
    graphqlVersions.forEach(version => {
      expect(version in previewsJson).toBe(true)
      expect(version in upcomingChangesJson).toBe(true)
      expect(version in prerenderedObjectsJson).toBe(true)
    })
  })

  test('schemas object validation', () => {
    graphqlVersions.forEach(version => {
      const schemaJsonPerVersion = JSON.parse(fs.readFileSync(path.join(process.cwd(), `lib/graphql/static/schema-${version}.json`)))
      // all graphql types are arrays except for queries
      graphqlTypes
        .filter(type => type !== 'queries')
        .forEach(type => {
          schemaJsonPerVersion[type].forEach(typeObj => {
            const { valid, errors } = revalidator.validate(typeObj, schemaValidator[type])
            const errorMessage = JSON.stringify(errors, null, 2)
            expect(valid, errorMessage).toBe(true)
          })
        })

      // check query connections separately
      schemaJsonPerVersion.queries.connections.forEach(connection => {
        const { valid, errors } = revalidator.validate(connection, schemaValidator.queryConnections)
        const errorMessage = JSON.stringify(errors, null, 2)
        expect(valid, errorMessage).toBe(true)
      })

      // check query fields separately
      schemaJsonPerVersion.queries.fields.forEach(field => {
        const { valid, errors } = revalidator.validate(field, schemaValidator.queryFields)
        const errorMessage = JSON.stringify(errors, null, 2)
        expect(valid, errorMessage).toBe(true)
      })
    })
  })

  test('previews object validation', () => {
    graphqlVersions.forEach(version => {
      previewsJson[version].forEach(previewObj => {
        const { valid, errors } = revalidator.validate(previewObj, previewsValidator)
        const errorMessage = JSON.stringify(errors, null, 2)
        expect(valid, errorMessage).toBe(true)
      })
    })
  })

  test('upcoming changes object validation', () => {
    graphqlVersions.forEach(version => {
      Object.values(upcomingChangesJson[version]).forEach(changes => {
        // each object value is an array of changes
        changes.forEach(changeObj => {
          const { valid, errors } = revalidator.validate(changeObj, upcomingChangesValidator)
          const errorMessage = JSON.stringify(errors, null, 2)
          expect(valid, errorMessage).toBe(true)
        })
      })
    })
  })

  test('prerendered objects validation', () => {
    graphqlVersions.forEach(version => {
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
      expect(typeof prerenderedMiniToc[0].contents).toBe('string')
      expect(typeof prerenderedMiniToc[0].headingLevel).toBe('number')
      expect(typeof prerenderedMiniToc[0].indentationLevel).toBe('number')
    })
  })
})
